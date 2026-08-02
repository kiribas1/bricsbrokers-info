#!/usr/bin/env node
// gen-ar.mjs — one-off: translate EN guides to Arabic batches and write guides.ar.ts.
import { build } from 'esbuild';
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'data');
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = process.env.OPENROUTER_API_KEY; 
const MODEL = process.env.TRANSLATE_MODEL || 'google/gemini-3.1-flash-lite';

const HEADER = '// أدلة عربية حقيقية (ar) لموقع bricsbrokers.info.';
const LABELS = { keyFacts: 'معلومات أساسية', faq: 'الأسئلة الشائعة', related: 'أدلة ذات صلة', backHome: '← العودة إلى الرئيسية', sections: { 'Stock Exchanges': 'البورصات', 'Currencies': 'العملات', 'BRICS': 'بريكس', 'Investment': 'الاستثمار' } };
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
console.log('ar: loaded', guides.length);
const out = [];
for (let i = 0; i < guides.length; i += 3) {
  const slice = guides.slice(i, i + 3);
  const p = `Translate to Modern Standard Arabic. Keep slugs, related[], and dates identical to English; keep tickers/proper nouns as-is (BSE, NSE, SENSEX, NIFTY 50, Ibovespa, B3, CSI 300, Stock Connect, MOEX, IMOEX, RTS, JSE, CNY, CNH, QFII, RQFII, RBI, SEBI, Petrobras, Vale, Selic, BRICS). Write title/description/paragraphs/bullets/faq in fluent Arabic. Preserve exact JSON keys. Return ONLY a valid JSON array, no fences. Input:\n${JSON.stringify(slice)}`;
  const a = extract(await llm(p));
  out.push(...a);
  console.log('  batch', Math.floor(i / 3), '->', a.length);
}
const order = guides.map((g) => g.slug);
out.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
const body = `${HEADER}\nexport const labels = ${JSON.stringify(LABELS, null, 2)};\n\n${INTERFACE_BLOCK}\n\nexport const guides: Guide[] = ${JSON.stringify(out, null, 2)};\n`;
writeFileSync(join(SRC, 'guides.ar.ts'), body);
console.log('✅ wrote guides.ar.ts', out.length);