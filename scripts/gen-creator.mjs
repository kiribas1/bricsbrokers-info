#!/usr/bin/env node
// translate-creator-news.mjs — translate the one-off creator-economy article into 5 locales.
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, '..', 'src', 'data');
const API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const API_KEY = process.env.OPENROUTER_API_KEY;
const MODEL = process.env.TRANSLATE_MODEL || 'google/gemini-3.1-flash-lite';

const META = {
  es: { name: 'European Spanish', header: '// Artículo fijo (es): pagos con stablecoin y la economía del creador.' },
  zh: { name: 'Simplified Chinese', header: '// 特色文章（zh）：稳定币支付与创作者经济' },
  ru: { name: 'Russian', header: '// Фичер-статья (ru): стейблкоины и экономика создателей.' },
  pt: { name: 'Portuguese (European)', header: '// Artigo destacado (pt): pagamentos com stablecoin e a economia do criador.' },
  ar: { name: 'Modern Standard Arabic', header: '// مقالة مميزة (ar): العملات المستقرة واقتصاد صناع المحتوى' },
};

async function loadEn() {
  const r = await build({ entryPoints: ['src/data/creator-news.en.ts'], bundle: true, format: 'esm', write: false, platform: 'node' });
  const mod = await import('data:text/javascript,' + encodeURIComponent(r.outputFiles[0].text));
  return mod.article;
}
async function llm(prompt) {
  const rp = await fetch(API_URL, { method: 'POST', headers: { Authorization: `Bearer ${API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ model: MODEL, messages: [{ role: 'user', content: prompt }], temperature: 0.2, max_tokens: 6000 }) });
  if (!rp.ok) { const t = await rp.text(); throw new Error(`${rp.status}: ${t.slice(0, 200)}`); }
  return (await rp.json()).choices?.[0]?.message?.content || '';
}
function extract(s) { return JSON.parse(String(s).slice(String(s).indexOf('{'), String(s).lastIndexOf('}') + 1)); }

const loc = process.argv[2];
if (!META[loc]) { console.error('Need es|zh|ru|pt|ar'); process.exit(1); }
const m = META[loc];
const en = await loadEn();

const p = `Translate the following finance news article metadata fully into ${m.name}. Keep these brand names unspun and romanised exactly: fanshap, radaruni, USDC, Solana, BRICS, All exact keys and structure, keep dates. Write title, description, kicker, lead, paragraphs, takeaways, faq all in natural ${m.name}. Return ONLY one valid JSON object, no fences. Input:\n${JSON.stringify(en)}`;

const out = extract(await llm(p));
const keys = ['title', 'description', 'publishedDate', 'modifiedDate', 'kicker', 'lead', 'paragraphs', 'takeaways', 'faq'];
const clean = {};
for (const k of keys) clean[k] = out[k];
const body = `${m.header}\nexport interface CreatorNews {\n  title: string; description: string; publishedDate: string; modifiedDate: string; kicker: string; lead: string[]; paragraphs: string[]; takeaways: { label: string; text: string }[]; faq: { q: string; a: string }[];\n}\n\nexport const article: CreatorNews = ${JSON.stringify(clean, null, 2)};\n`;
writeFileSync(join(SRC, `creator-news.${loc}.ts`), body);
console.log(`✅ wrote creator-news.${loc}.ts`);