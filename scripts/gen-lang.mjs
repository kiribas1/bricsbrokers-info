#!/usr/bin/env node
// gen-lang.mjs — regenerate one locale's guides with an explicit language name.
// Usage: node scripts/gen-lang.mjs <es|zh|ru|pt>
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'data');
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = process.env.OPENROUTER_API_KEY; 
const MODEL = process.env.TRANSLATE_MODEL || 'google/gemini-3.1-flash-lite';

const META = {
  es: { name: 'European Spanish', header: '// Guías reales en español (es) para bricsbrokers.info.', labels: { keyFacts: 'Datos clave', faq: 'Preguntas frecuentes', related: 'Guías relacionadas', backHome: '← Volver al inicio', sections: { 'Stock Exchanges': 'Bolsas de Valores', Currencies: 'Divisas', BRICS: 'BRICS', Investment: 'Inversión' } } },
  zh: { name: 'Simplified Chinese', header: '// 面向 bricsbrokers.info 的简体中文指南', labels: { keyFacts: '关键信息', faq: '常见问题', related: '更多指南', backHome: '← 返回首页', sections: { 'Stock Exchanges': '证券交易所', Currencies: '货币市场', BRICS: '金砖国家', Investment: '投资入门' } } },
  ru: { name: 'Russian', header: '// Реальные руководства на русском (ru) для bricsbrokers.info.', labels: { keyFacts: 'Ключевые факты', faq: 'Частые вопросы', related: 'Похожие гайды', backHome: '← На главную', sections: { 'Stock Exchanges': 'Фондовые биржи', Currencies: 'Валюты', BRICS: 'БРИКС', Investment: 'Инвестиции' } } },
  pt: { name: 'Portuguese (European)', header: '// Guias reais em português (pt) para bricsbrokers.info.', labels: { keyFacts: 'Factos-chave', faq: 'Perguntas frequentes', related: 'Guias relacionados', backHome: '← Voltar ao início', sections: { 'Stock Exchanges': 'Bolsas de Valores', Currencies: 'Moedas', BRICS: 'BRICS', Investment: 'Investimento' } } },
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

const loc = process.argv[2];
if (!META[loc]) { console.error('Need es|zh|ru|pt'); process.exit(1); }
const m = META[loc];

async function loadEn() {
  const r = await build({ entryPoints: ['src/data/guides.en.ts'], bundle: true, format: 'esm', write: false, platform: 'node' });
  const mod = await import('data:text/javascript,' + encodeURIComponent(r.outputFiles[0].text));
  return mod.guides;
}
async function llm(prompt) {
  const rp = await fetch(API_URL, { method: 'POST', headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ model: MODEL, messages: [{ role: 'user', content: prompt }], temperature: 0.2, max_tokens: 9000 }) });
  if (!rp.ok) { const t = await rp.text(); throw new Error(`${rp.status}: ${t.slice(0, 200)}`); }
  return (await rp.json()).choices?.[0]?.message?.content || '';
}
function extract(s) { return JSON.parse(String(s).slice(String(s).indexOf('['), String(s).lastIndexOf(']') + 1)); }

const guides = await loadEn();
console.log(loc, ':', m.name, 'loaded', guides.length);
const out = [];
for (let i = 0; i < guides.length; i += 3) {
  const slice = guides.slice(i, i + 3);
  const p = `Write these finance guide articles fully in ${m.name}. Translate every title, description, paragraph, bullet and FAQ into natural ${m.name}. Keep slugs, related[], and dates identical to English; keep tickers/proper nouns as-is (BSE, NSE, SENSEX, NIFTY 50, Ibovespa, B3, CSI 300, Stock Connect, MOEX, IMOEX, RTS, JSE, CNY, CNH, QFII, RQFII, RBI, SEBI, Petrobras, Vale, Selic, BRICS). Preserve exact JSON keys. Return ONLY a valid JSON array, no fences, no commentary. Input:\n${JSON.stringify(slice)}`;
  const a = extract(await llm(p));
  out.push(...a);
  console.log('  batch', Math.floor(i / 3), '->', a.length);
}
const order = guides.map((g) => g.slug);
out.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
const body = `${m.header}\nexport const labels = ${JSON.stringify(m.labels, null, 2)};\n\n${INTERFACE_BLOCK}\n\nexport const guides: Guide[] = ${JSON.stringify(out, null, 2)};\n`;
writeFileSync(join(SRC, `guides.${loc}.ts`), body);
console.log('✅ wrote', `guides.${loc}.ts`, out.length);