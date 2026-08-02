# SITE-NOTES — bricsbrokers.info

Note specifiche per interventi su questo sito. Per il quadro generale di tutti i siti
Astro vedi `/srv/github-sites/PROJECT-NOTES.md`.

## Identità
- Sito: **BRICS Markets & Currencies** (`https://bricsbrokers.info`)
- Tipo: **Astro**, multilingua (en, es, zh, ru, pt, ar), pre-prefisso lingua (`prefixDefaultLocale: true`)
- Repo: `git@github.com:kiribas1/bricsbrokers-info.git` (branch `main`, path minuscolo)
- Deploy: Netlify (build `npm run build`, publish `dist/`, root → `/en/` 302)

## Stack
- Node >= 22.12, npm, Astro 7, `@astrojs/sitemap`.
- Multi-lingua: **13 guide** × **6 lingue** = **84 pagine** postative.

## Struttura `src/`
- `layouts/BaseLayout.astro` — tutto il `<head>`: meta, og:*, twitter:*, canonical
  per lingua, **hreflang** (link alternato per tutte le 6 lingue), JSON-LD
  (WebSite + BreadcrumbList + NewsArticle con date/author).
- `layouts/GuideLayout.astro` — renderizzazione del singolo articolo (metadati,
  paragrafi, bullets, FAQ, guida correlata, breadcrumb).
- `pages/[lang]/[slug].astro` — `getStaticPaths()`: genera 84 rotte da `LANG_PACKS`.
  Se aggiungi una guida/lingua ricordati di aggiornarla.
- `pages/{en,es,zh,ru,pt,ar}/index.astro` — homepage per lingua, con card (collegamenti
  alle guide) e sezione `guide-index`.
- `data/guides.<lang>.ts` — i dati delle 13 guide tradotte. IMPORTANTE: slugs,
  `related[]` e date devono rimanere IDENTICI in tutte le lingue (hreflang/canonical
  li usano); i ticker (BSE, NSE, Sensex, NIFTY 50, Ibovespa, B3, CSI 300, CNY, CNH,
  QFII, Selic…) restano in originale.
- `data/weekly-news.json` — notizie generate dal news updater.

## Come avviare/verificare
```bash
cd /srv/github-sites/bricsbrokers.info
npm run build          # attesi: "84 page(s) built" + sitemap
npm run preview        # verifica a occhio il risultato
```

## Traduzioni (toMaintenance)
La rigenerazione automatica è in `scripts/`. SBAGA:
- `node scripts/gen-lang.mjs es` (o `zh`/`ru`/`pt`)
- `node scripts/gen-ar.mjs` (arabo)
- `OPENROUTER_API_KEY=<key> node scripts/gen-lang.mjs es`

**MAI scrivere la key nel codice** — la metti solo come variabile d'ambiente
(`OPENROUTER_API_KEY`), altrimenti la push viene bloccata da GitHub.

Rischio noto: senza lingua esplicita nel prompt il modello può uscire in olandese;
se una pagina esce nella lingua sbagliata, rigenera quella lingua con `gen-lang.mjs`.

## Deploy
```bash
git add -A && git commit -m "msg" && git push origin main
```
Netlify ri-deploys automaticamente. Verifica poi l'URL live e `sitemap-0.xml`.

## Convenzioni / fatti
- La frase per fanshap "Il 90% dei ricavi resta a te…" vive in `/srv/fanshap.com/PROJECT_STATUS.md`
  (questo sito non la concerne).
- Tema: borse dei paesi BRICS, valute (CNY, INR, BRL, RUB, ZAR), investimenti emergenti,
  de-dollarizzazione. Nessun tema adulto qui.