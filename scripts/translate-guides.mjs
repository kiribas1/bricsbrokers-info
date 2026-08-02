#!/usr/bin/env node
// translate-guides.mjs
// Loads the authored English guides (guides.en.ts) via esbuild, translates
// them into 5 locales with an inexpensive OpenRouter model, then writes clean
// guides.{lang}.ts files in the same shape as the source.
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'data');

const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = process.env.OPENROUTER_API_KEY; 
const MODEL = process.env.TRANSLATE_MODEL || 'google/gemini-3.1-flash-lite';

const LOCALES = [
  { code: 'es', header: '// Guías reales en español (es) para bricsbrokers.info.' },
  { code: 'zh', header: '// 面向 bricsbrokers.info 的简体中文指南' },
  { code: 'ru', header: '// Реальные руководства на русском (ru) для bricsbrokers.info.' },
  { code: 'pt', header: '// Guias reais em português (pt) para bricsbrokers.info.' },
  { code: 'ar', header: '// أدلة عربية حقيقية (ar) لموقع bricsbrokers.info.' },
];

const LANGUAGE = { es: 'European Spanish', zh: 'Simplified Chinese', ru: 'Russian', pt: 'Portuguese (as used in Portugal)', ar: 'Modern Standard Arabic' };

const LABELS = {
  es: { keyFacts: 'Datos clave', faq: 'Preguntas frecuentes', related: 'Guías relacionadas', backHome: '← Volver al inicio', sections: { 'Stock Exchanges': 'Bolsas de Valores', Currencies: 'Divisas', BRICS: 'BRICS', Investment: 'Inversión' } },
  zh: { keyFacts: '关键信息', faq: '常见问题', related: '更多指南', backHome: '← 返回首页', sections: { 'Stock Exchanges': '证券交易所', Currencies: '货币市场', BRICS: '金砖国家', Investment: '投资入门' } },
  ru: { keyFacts: 'Ключевые факты', faq: 'Частые вопросы', related: 'Похожие гайды', backHome: '← На главную', sections: { 'Stock Exchanges': 'Фондовые биржи', Currencies: 'Валюты', BRICS: 'БРИКС', Investment: 'Инвестиции' } },
  pt: { keyFacts: 'Factos-chave', faq: 'Perguntas frequentes', related: 'Guias relacionados', backHome: '← Voltar ao início', sections: { 'Stock Exchanges': 'Bolsas de Valores', Currencies: 'Moedas', BRICS: 'BRICS', Investment: 'Investimento' } },
  ar: { keyFacts: 'معلومات أساسية', faq: 'الأسئلة الشائعة', related: 'أدلة ذات صلة', backHome: '← العودة إلى الرئيسية', sections: { 'Stock Exchanges': 'البورصات', Currencies: 'العملات', BRICS: 'بريكس', Investment: 'الاستثمار' } },
};

const INTERFACE_BLOCK = `export interface Guide {
  slug: string;
  title: string;
  description: string;
  section: string;
  publishedDate: string;
  modifiedDate: string;
  paragraphs: string[];
  bullets: { label: string; text: string }[];
  faq: { q: string; a: string }[];
  related: string[];
}`;

const INTERFACE = INTERFACE_BLOCK.slice('export '.length);

async function loadEn() {
  const r = await build({ entryPoints: ['src/data/guides.en.ts'], bundle: true, format: 'esm', write: false, platform: 'node' });
  const dataUrl = 'data:text/javascript,' + encodeURIComponent(r.outputFiles[0].text);
  const mod = await import(dataUrl);
  return { guides: mod.guides, labels: mod.labels };
}

async function callLLM(prompt) {
  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: MODEL, messages: [{ role: 'user', content: prompt }], temperature: 0.2, max_tokens: 9000 }),
  });
  if (!resp.ok) {
    const t = await resp.text();
    throw new Error(`API ${resp.status}: ${t.slice(0, 300)}`);
  }
  const j = await resp.json();
  return j?.choices?.[0]?.message?.content || '';
}

function extractArray(text) {
  let t = String(text).replace(/```[a-zA-Z]*/g, '');
  const s = t.indexOf('[');
  const e = t.lastIndexOf(']');
  if (s === -1 || e === -1) throw new Error('No JSON array in response');
  return JSON.parse(t.slice(s, e + 1));
}

async function translate(locale, guides) {
const prompt = `You are a professional SEO content translator. Translate the following JSON array of guide metadata into ${LANGUAGE[locale.code]}.

Rules:
- Keep these terms verbatim (do NOT translate or transliterate into new names): BSE, NSE, SENSEX, NIFTY 50, Ibovespa, B3, Shanghai Composite, Shenzhen, CSI 300, Stock Connect, MOEX, IMOEX, RTS, JSE, All Share, CNY, CNH, QFII, RQFII, RBI, SEBI, Petrobras, Vale, Selic, BRICS. (Translate the English descriptors around them, but keep the proper nouns/tickers as-is.)
- Preserve the EXACT JSON structure with ALL keys: slug, title, description, section, publishedDate, modifiedDate, paragraphs, bullets, faq, related.
- Do NOT translate, rename, or reorder slugs and related[] values — they must remain identical to English.
- Do NOT change dates.
- Write title/description/paragraphs/bullets/faq fully in ${LANGUAGE[locale.code]}, natural and fluent.
- Return ONLY a valid JSON array, no markdown fences, no commentary.

English input:
${JSON.stringify(guides, null, 1)}`;
  const raw = await callLLM(prompt);
  const arr = extractArray(raw);
  if (!Array.isArray(arr)) throw new Error('Non-array result');
  // Normalize: drop any unexpected keys the model added, keep canonical order.
  const keys = ['slug', 'title', 'description', 'section', 'publishedDate', 'modifiedDate', 'paragraphs', 'bullets', 'faq', 'related'];
  return arr.map((g) => {
    const clean = {};
    for (const k of keys) clean[k] = g[k];
    return clean;
  });
}

const { guides } = await loadEn();
console.log(`Loaded ${guides.length} EN guides.`);

// Translate in batches to keep each LLM response under the output limit.
const BATCH = 3;

for (const loc of LOCALES) {
  try {
    const out = [];
    for (let i = 0; i < guides.length; i += BATCH) {
      const slice = guides.slice(i, i + BATCH);
      const translated = await translate(loc.code, slice);
      out.push(...translated);
    }
    if (out.length !== guides.length) throw new Error(`Expected ${guides.length}, got ${out.length}`);
    // Keep canonical slug order from English source.
    const order = guides.map((g) => g.slug);
    out.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
    const body = `${loc.header}\nexport const labels = ${JSON.stringify(LABELS[loc.code], null, 2)};\n\n${INTERFACE_BLOCK}\n\nexport const guides: Guide[] = ${JSON.stringify(out, null, 2)};\n`;
    writeFileSync(join(SRC, `guides.${loc.code}.ts`), body);
    console.log(`  ✅ ${loc.code}: wrote guides.${loc.code}.ts (${out.length} guides)`);
  } catch (e) {
    console.error(`  ❌ ${loc.code}: ${e.message}`);
  }
}
console.log('Done.');