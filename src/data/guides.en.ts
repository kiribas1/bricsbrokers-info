// Real, structured article content for bricsbrokers.info (English = source locale).
// Keys ("slug") mirror the same slugs across all language variants.

export const labels = {
  keyFacts: 'Key facts',
  faq: 'Frequently asked questions',
  related: 'Related guides',
  backHome: '← Back to home',
  sections: {
    'Stock Exchanges': 'Stock Exchanges',
    'Currencies': 'Currencies',
    'BRICS': 'BRICS',
    'Investment': 'Investment',
  },
};

export interface Guide {
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
}

export const guides: Guide[] = [
  {
    slug: 'bse-and-nse-india',
    title: 'BSE and NSE: a practical guide to India’s two stock exchanges',
    description: 'How the Bombay Stock Exchange and National Stock Exchange work, the Sensex and NIFTY 50 indices, and how foreign investors can gain exposure to India.',
    section: 'Stock Exchanges',
    publishedDate: '2026-01-12',
    modifiedDate: '2026-07-20',
    paragraphs: [
      'India runs two principal stock exchanges: the Bombay Stock Exchange (BSE) and the National Stock Exchange (NSE). Together they list thousands of companies and process the great majority of equity trades in the country, making India one of the most active emerging equity markets in the world.',
      'The BSE is the older of the two, founded in 1875 and among the oldest exchanges in Asia. Its flagship index, the Sensex, tracks 30 large, established companies and is the benchmark most international investors follow.',
      'The NSE, launched in 1992, is the larger of the two by trading volume. Its headline index is the NIFTY 50, which captures fifty of the most liquid large-cap stocks and is widely seen as a more representative barometer of the whole market.',
      'Trading takes place on weekdays in Indian rupees (INR), and foreign investors normally route orders through a registered broker and comply with the FPI (foreign portfolio investor) registration rules enforced by SEBI, India’s securities regulator.',
    ],
    bullets: [
      { label: 'Sensex', text: 'The BSE benchmark: 30 of the largest Indian companies.' },
      { label: 'NIFTY 50', text: 'The NSE index of the 50 most liquid large-caps, better balanced by sector.' },
      { label: 'Regulator', text: 'SEBI supervises both exchanges, with mandatory disclosure rules.' },
      { label: 'Currency', text: 'Trading settles in Indian Rupees, so FX matters for foreign investors.' },
    ],
    faq: [
      { q: 'What is the difference between BSE and NSE?', a: 'Both are Indian exchanges. The BSE is older and best known for the Sensex; the NSE is larger by trading volume and best known for the NIFTY 50.' },
      { q: 'Can a foreign investor buy NSE shares?', a: 'Yes, usually through a SEBI-registered FPI account and a local broker, with rules that can change over time.' },
    ],
    related: ['shanghai-and-shenzhen-china', 'b3-brazil', 'moex-russia-index'],
  },
  {
    slug: 'shanghai-and-shenzhen-china',
    title: 'Shanghai Composite and Shenzhen: the two pillars of China’s A-share market',
    description: 'An introduction to China’s domestic equity market: the Shanghai and Shenzhen exchanges, the CSI 300 index, and how Stock Connect opens access to A-shares.',
    section: 'Stock Exchanges',
    publishedDate: '2026-01-20',
    modifiedDate: '2026-07-20',
    paragraphs: [
      'China’s domestic equity market is one of the largest in the world by capital raised, and it runs on two exchanges: the Shanghai Stock Exchange and the Shenzhen Stock Exchange. Understanding the difference is essential when reading Chinese market headlines.',
      'The Shanghai exchange hosts mostly large, state-linked companies, banks and heavy industry. Its headline index, the Shanghai Composite, is the figure most often quoted, and it moves closely with financials and large industrial leaders.',
      'The Shenzhen exchange skews towards smaller growth companies, including many in technology and consumer sectors. The most broadly followed benchmark, the CSI 300, spans the largest 300 A-shares across both venues and offsets the bias of any single exchange.',
      'Overseas investors can access A-shares through the Stock Connect channel or qualified-investor quotas (QFII/RQFII). Settlement is in Chinese Yuan (CNY), so currency movement is part of the total foreign-return picture.',
    ],
    bullets: [
      { label: 'A-shares vs H-shares', text: 'Domestic mainland shares (A) trade separately from Hong Kong H-shares.' },
      { label: 'CSI 300', text: 'The usual international benchmark across the two mainland exchanges.' },
      { label: 'Stock Connect', text: 'The channel that lets investors trade A-shares and HK shares in both directions.' },
      { label: 'Volatility', text: 'Mainland indices can move sharply on policy and retail-driven flows.' },
    ],
    faq: [
      { q: 'Shanghai or Shenzhen — which index should I follow?', a: 'For broad exposure track the CSI 300. The Shanghai Composite is the most quoted, but it is weighted toward large financials.' },
      { q: 'How do foreign investors buy A-shares?', a: 'Usually via Stock Connect or a QFII licence, both of which are regulated and can change over time.' },
    ],
    related: ['bse-and-nse-india', 'b3-brazil', 'moex-russia-index'],
  },
  {
    slug: 'b3-brazil',
    title: 'Brazil’s B3: the São Paulo stock exchange explained',
    description: 'How the B3 exchange works, the Ibovespa index, the weight of Petrobras and Vale, and what investors should know about Brazil and the real.',
    section: 'Stock Exchanges',
    publishedDate: '2026-02-01',
    modifiedDate: '2026-07-20',
    paragraphs: [
      'B3 was created in 2017 from the merger of the former BM&FBOVESPA securities exchange and CETIP, the fixed-income clearing house. It is one of the largest stock exchanges in the Americas by number of listed companies and is central to Brazilian capital markets.',
      'The main index is the Ibovespa. It is weighted by trading volume rather than by market capitalisation alone, so it is heavily concentrated in banks and commodities. Petrobras and Vale are two of the most prominent constituents.',
      'Because Brazil is home to giant resource producers — Vale in iron ore and nickel, Petrobras in oil and gas — the Ibovespa tends to behave like a proxy for the global commodity cycle. That link helps when interpreting the index from outside the country.',
      'Trading settles in Brazilian Reais (BRL). International investors often reach the market through Brazilian funds or through BDRs, Brazilian depository receipts that allow access to domestically listed foreign shares.',
    ],
    bullets: [
      { label: 'Ibovespa', text: 'The main index, weighted by volume towards banks and commodities.' },
      { label: 'Petrobras & Vale', text: 'Two mega-caps that tie the market to oil and iron ore.' },
      { label: 'BDRs', text: 'Receipts that widen the investable universe by listing foreign companies in Brazil.' },
      { label: 'Liquidity', text: 'Deep by regional standards, but concentrated in the largest names.' },
    ],
    faq: [
      { q: 'What does B3 stand for?', a: 'It is the brand of Brasil, Bolsa, Balcão, the exchange group running equities, fixed income and derivatives in Brazil.' },
      { q: 'Is the Ibovespa good for diversification?', a: 'Partly. Because it is dominated by banks and commodities, it strengthens the commodity and risk cycle rather than offsetting it.' },
    ],
    related: ['bse-and-nse-india', 'jse-south-africa', 'brazilian-real'],
  },
  {
    slug: 'moex-russia-index',
    title: 'MOEX: a measured look at the Moscow Exchange and its index',
    description: 'How the Moscow Exchange works, the MOEX Russia Index (IMOEX), its energy and bank concentration, and the rouble constraints that condition it.',
    section: 'Stock Exchanges',
    publishedDate: '2026-02-15',
    modifiedDate: '2026-07-20',
    paragraphs: [
      'The Moscow Exchange (MOEX) is the main venue for equities, bonds, foreign exchange and derivatives in Russia. It was formed in 2011 from the merger of the older moio exchanges and has grown into a vertically integrated marketplace.',
      'The reference equity benchmark is the MOEX Russia Index (IMOEX), computed in roubles. In earlier years the RTS index, priced in US dollars, was more often quoted; the two differ in that the RTS also carries the rouble-dollar rate in a single number.',
      'The index is weighted towards energy — gas, oil and banks are the largest constituents — and it therefore follows international energy prices very closely.',
      'Access is heavily constrained today. Sanctions, the availability of depositary receipts and capital controls all set how non-residents can, or cannot, participate. Anyone analysing MOEX is well advised to separate the local market dynamic from the restrictions that govern foreign entry.',
    ],
    bullets: [
      { label: 'IMOEX', text: 'The rouble-based benchmark index for the Russian equity market.' },
      { label: 'Energy weight', text: 'Oil, gas and banks dominate and drive most of the move.' },
      { label: 'Concentration', text: 'A small set of large, often state-linked, names leads the index.' },
      { label: 'Access risk', text: 'Sanctions and controls materially limit foreign participation.' },
    ],
    faq: [
      { q: 'What is the difference between the MOEX and RTS indices?', a: 'The MOEX index is computed in roubles; the RTS is priced in US dollars and thus also reflects the rouble/dollar exchange rate.' },
      { q: 'Can foreigners buy MOEX-listed stocks?', a: 'In practice there are large constraints from sanctions, deposit receipts and capital controls, so it is not simple.' },
    ],
    related: ['b3-brazil', 'jse-south-africa', 'russian-ruble'],
  },
  {
    slug: 'jse-south-africa',
    title: 'JSE South Africa: the Johannesburg exchange and the All Share',
    description: 'Understanding the JSE All Share index, a market anchored in mining and banks, and how international investors reach Johannesburg.',
    section: 'Stock Exchanges',
    publishedDate: '2026-02-22',
    modifiedDate: '2026-07-20',
    paragraphs: [
      'The Johannesburg Stock Exchange (JSE) is the oldest exchange in Africa and the largest by combined market value. It has traded since 1887 and is now a fully electronic market.',
      'Its headline gauge is the JSE All Share Index, which spans virtually the whole listed market. The index is historically weighted towards mines, platinum, gold and diversified resources, plus a handful of large banks and retailers, and it moves with the global commodity cycle and the rand (ZAR).',
      'Because it is large, liquid and internationally recognised, the JSE is the practical route to diversified exposure to sub-Saharan listed equities. The concentration in resources and a few financials remains its defining feature.',
      'In addition to ordinary listings, the JSE keeps specialist gold, platinum and resource listings designed for a resource-driven economy. Dual-listing and new issuances continue to add breadth.',
    ],
    bullets: [
      { label: 'All Share', text: 'The JSE index spanning most of the listed universe.' },
      { label: 'Mining & banks', text: 'The index is dominated by miners alongside a few large financials.' },
      { label: 'Size', text: 'The largest market in Africa and a gateway to the region.' },
      { label: 'Rand (ZAR)', text: 'A volatile currency that materially affects external returns.' },
    ],
    faq: [
      { q: 'How concentrated is the JSE?', a: 'Quite concentrated. A few resource and financial companies account for a large share of the market, so it is not naturally diversified.' },
      { q: 'Why is the JSE seen as a route to Africa?', a: 'Its size, transparency and international listings make it the most common exchange access point for African equities.' },
    ],
    related: ['b3-brazil', 'south-african-rand', 'brics-summit'],
  },
  {
    slug: 'renminbi-cny',
    title: 'The renminbi: how China manages its yuan',
    description: 'What moves the Chinese yuan, how the central bank sets a daily fixing, the difference between CNY and CNH, and its role in BRICS de-dollarisation.',
    section: 'Currencies',
    publishedDate: '2026-03-01',
    modifiedDate: '2026-07-21',
    paragraphs: [
      'The renminbi (referred to in English as the yuan) is the currency of China and one of the most watched in the emerging world. Instead of a free float, its value is managed by the People’s Bank of China (PBOC) within a band around a daily "midpoint".',
      'Each morning the PBOC announces a central parity. The onshore spot rate may then move within a band around it. Because of this management the yuan is not a fully floating currency; its daily movements reveal central-bank policy as much as supply and demand.',
      'In the BRICS story the yuan has become the main instrument of "de-dollarisation" talk, as trade settlement and reserve activity increasingly revolve around it. That gives the yuan a distinctive role in any study of the trend against the US dollar.',
      'One detail matters: the currency trades onshore (CNY) and offshore (CNH), and the two can differ. The gap between them is one of the clearest market signs of pressure on the yuan.',
    ],
    bullets: [
      { label: 'Daily fix', text: 'The PBOC sets a daily midpoint around which the spot rate moves.' },
      { label: 'CNY vs CNH', text: 'Onshore and offshore yuan can trade apart; the gap signals pressure.' },
      { label: 'BRICS role', text: 'The yuan is central to trade-settlement and reserve talk.' },
      { label: 'PBOC policy', text: 'The bank intervenes to keep moves within acceptable bands.' },
    ],
    faq: [
      { q: 'Why do CNY and CNH exist?', a: 'CNY is the onshore rate that the authorities manage; CNH is the offshore market rate. The two can diverge from each other.' },
      { q: 'Does China fix the yuan?', a: 'It is not a fixed peg. The PBOC manages the rate within a band, allowing movement while keeping control.' },
    ],
    related: ['brics-currency', 'brazilian-real', 'south-african-rand'],
  },
  {
    slug: 'brazilian-real',
    title: 'The Brazilian real: commodity beta and the Selic rate',
    description: 'How soy, iron ore and oil tie the Brazilian real to global commodity prices, and how the Selic rate shapes the currency.',
    section: 'Currencies',
    publishedDate: '2026-03-05',
    modifiedDate: '2026-07-21',
    paragraphs: [
      'The Brazilian real (BRL) is the official currency of Brazil and one of the most liquid in Latin America. It floats freely, but its value is strongly linked to the country’s export profile: soybeans, iron ore, oil and coffee.',
      'When commodity prices rise, dollars flow into Brazil and the real tends to strengthen; when the terms of trade worsen, it usually weakens faster than quoted peers. This "commodity beta" is the first feature most analysts check.',
      'The Central Bank of Brazil runs an inflation-targeting policy that sets the Selic benchmark rate. Higher rates have tended to shore the currency up, while rate cuts and wider fiscal deficits tend to weigh on it.',
      'For foreign investors, the value of the real can offset or magnify the gain from Brazilian assets, which is why the currency matters at least as much as the underlying market.',
    ],
    bullets: [
      { label: 'Commodity link', text: 'Soy, iron ore and oil tie the real to raw-material cycles.' },
      { label: 'Selic policy', text: 'Central bank rates are a key driver of the currency.' },
      { label: 'Volatility', text: 'The real is among the more variable of the BRICS currencies.' },
      { label: 'Carry', text: 'Wide rate differentials make it a common carry-trade currency.' },
    ],
    faq: [
      { q: 'Is the Brazilian real pegged?', a: 'No, it floats freely, although the central bank may smooth episodes of extreme movement.' },
    ],
    related: ['b3-brazil', 'indian-rupee', 'south-african-rand'],
  },
  {
    slug: 'indian-rupee',
    title: 'The Indian rupee: oil imports, growth and the RBI',
    description: 'How the Indian rupee is managed with an economy that imports energy and exports services, and why it sits among the steadier BRICS currencies.',
    section: 'Currencies',
    publishedDate: '2026-03-20',
    modifiedDate: '2026-07-21',
    paragraphs: [
      'The Indian rupee (INR) is the currency of one of the world’s largest economies. Its behaviour reflects a tension: India is a large net importer of energy, especially oil, while it exports software and services.',
      'Because much of the import bill is energy, the rupee tends to move inversely with crude. When oil prices climb, the current account widens and the rupee weakens; strong inflows into Indian equities and debt provide support.',
      'The Reserve Bank of India (RBI) does not peg the rupee but intervenes to limit volatility and build reserves. The result is a currency that usually changes gradually, rather than in disorder surges.',
      'Against the US dollar, the long-term balance sits between the pressure of India’s twin deficits — current account and fiscal — and the strength of its growth and capital inflows.',
    ],
    bullets: [
      { label: 'Oil sensitivity', text: 'A large oil importer, so the rupee often weakens when crude rises.' },
      { label: 'RBI smoothing', text: 'Central bank intervention limits volatility and builds reserves.' },
      { label: 'Flows', text: 'Foreign capital into Indian markets tends to support the currency.' },
      { label: 'Twin deficits', text: 'Current-account and fiscal pressures are the chronic drivers.' },
    ],
    faq: [
      { q: 'Why does the rupee fall when oil rises?', a: 'India imports most of its oil, so a rise increases the import bill and widens the current deficit, weighing on the rupee.' },
      { q: 'Does the RBI control the rupee?', a: 'Not a fixed peg, but it intervenes and manages the exchange rate within an acceptable range.' },
    ],
    related: ['brazilian-real', 'renminbi-cny', 'south-african-rand'],
  },
  {
    slug: 'south-african-rand',
    title: 'The rand: South Africa, metals and risk appetite',
    description: 'Why the rand is a "high-beta" currency, its links to gold and platinum, and how traders use it to read global risk appetite.',
    section: 'Currencies',
    publishedDate: '2026-04-01',
    modifiedDate: '2026-07-21',
    paragraphs: [
      'The South African rand (ZAR) is one of the most actively traded "high beta" currencies in the world, meaning it amplifies how global risk moves. The country is a leading producer of gold, platinum and other metals and commodities.',
      'When global risk appetite is strong and commodity prices hold, the rand and its peers tend to run. When markets turn to safety, the rand softens quickly; traders watch USDZAR as a gauge of sentiment.',
      'Domestic factors matter, too: the fiscal position, electricity supply and how the Reserve Bank (SARB) sets its rate all interact with the metal cycle to set the level.',
      'The standard analytical frame is a "commodity high-beta" currency: the rand rewards patience in risk-on phases and punishes it in upturns the other way.',
    ],
    bullets: [
      { label: 'High beta', text: 'The rand amplifies global risk-on and risk-off moves.' },
      { label: 'Precious metals', text: 'Gold and platinum are closely tied to the mining economy.' },
      { label: 'Domestic policy', text: 'Fiscal, electricity and rate decisions all feed the level.' },
      { label: 'Carry', text: 'Yield flows into the rand can reverse sharply when risk turns.' },
    ],
    faq: [
      { q: 'Why is the rand called a high-beta currency?', a: 'Because it exaggerates global moves, strengthening and weakening more than a typical currency.' },
    ],
    related: ['jse-south-africa', 'brazilian-real', 'indian-rupee'],
  },
  {
    slug: 'russian-ruble',
    title: 'The Russian ruble: between energy exports and controls',
    description: 'A pragmatic overview of the ruble covering energy exports, capital controls and convertibility risk, and why it differs from a typical currency.',
    section: 'Currencies',
    publishedDate: '2026-04-01',
    modifiedDate: '2026-07-21',
    paragraphs: [
      'The Russian ruble (RUB) is the most distinctive of the BRICS currencies because it combines an energy-export role with a heavy overlay of capital controls and legal restrictions.',
      'As a net exporter of oil and gas, the ruble tends to strengthen when crude climbs. But a series of restrictions on trading, conversion and cross-border movement has since conditioned the currency far more than the market alone.',
      'These controls are the defining feature of the trade. They make the ruble a currency whose value is partly set by state policy and whose participation by outside investors is limited.',
      'The practical takeaway is to read the ruble separately from the broader "BRICS currency" story: its rounds and free flow are government-dependent in a way the other currencies are not.',
    ],
    bullets: [
      { label: 'Energy-driven', text: 'Oil and gas exports lift or drag the currency.' },
      { label: 'Capital controls', text: 'Limits on FX and trading affect both value and liquidity.' },
      { label: 'Sanctions', text: 'Legal constraints shape both the price and the right to trade.' },
      { label: 'Convertibility', text: 'Real risk exists that money cannot move freely across borders.' },
    ],
    faq: [
      { q: 'Why is the ruble so different from other currencies?', a: 'Heavy capital controls and sanctions mean its value and convertibility are set as much by policy as by the market.' },
    ],
    related: ['moex-russia-index', 'brics-currency', 'brics-summit'],
  },
  {
    slug: 'brics-currency',
    title: 'Is there a BRICS currency? Facts, plans and reality',
    description: 'A measured answer to the "BRICS currency" question: what has actually been agreed, what has not, and the difference between a single currency and a basket.',
    section: 'BRICS',
    publishedDate: '2026-05-10',
    modifiedDate: '2026-07-22',
    paragraphs: [
      'Talk of a "BRICS currency" tends to run ahead of the facts. No single common BRICS currency exists today, and none has yet been adopted. What has moved further is the plan for settlement in national currencies and for reserve arrangements.',
      'A useful distinction is essential: a single common currency is a very different thing from the wider move towards trading in national currencies, and different again from a value index. Much of the visible "de-dollarisation" coverage describes that second, more modest, trend.',
      'Concrete instruments do exist: the Contingent Reserve Arrangement (CRA), a common pool of reserves that can support members under balance-of-payments pressure, and a growing number of bilateral local-currency agreements.',
      'For the investor the practical lesson is to separate headlines about a "BRICS coin" from the measurable, but slower, steps in reserve diversification and national-currency settlement.',
    ],
    bullets: [
      { label: 'No currency yet', text: 'No single BRICS currency or common has been issued.' },
      { label: 'Local settlement', text: 'The real progress is in national-currency swaps and trade.' },
      { label: 'CRA', text: 'A reserve arrangement can support members under pressure.' },
      { label: 'Basket vs currency', text: 'A basket or index is not a single currency; reports often merge them.' },
    ],
    faq: [
      { q: 'Has BRICS created its own currency?', a: 'No. A "BRICS coin" is not in circulation. The actual steps concern currency settlement and reserve arrangements.' },
      { q: 'What does de-dollarisation really mean?', a: 'It means reducing the role of the dollar in trade and reserves, chiefly via national settlement and new central-bank channels.' },
    ],
    related: ['renminbi-cny', 'brics-summit', 'indian-rupee'],
  },
  {
    slug: 'invest-in-brics',
    title: 'How to invest in BRICS markets: a calm trail guide',
    description: 'A practical guide to ADRs, ETFs, direct entry and the FX risks of investing in India, China, Brazil, South Africa and Russia.',
    section: 'Investment',
    publishedDate: '2026-06-02',
    modifiedDate: '2026-07-22',
    paragraphs: [
      'Investing in the BRICS economies is far more accessible than it seems, thanks to a range of listed vehicles. The starting point is the difference between the largest economies, which rest on domestic demand and scale, and the rest.',
      'The main routes for a foreign investor are ADRs and GDRs (receipts that let you hold a foreign share), ETFs that hold whole baskets, direct access for those who do the paperwork, and a set of regional listed funds.',
      'For most people an ETF is the realistic first step: it spreads money across many names and lowers the single-stock risk of a market the draws a few giants. A single country ETF is simpler to digest than a bespoke "BRICS ETF".',
      'Of all the risks, currency is the one to consider: buying those assets can add the Brazilian real or the South African rand to your return, on top of the market move itself.',
    ],
    bullets: [
      { label: 'ADRs / GDRs', text: 'Receipts that let you own specific overseas blue-chips.' },
      { label: 'ETFs', text: 'The simplest, cheap, diversified access for most investors.' },
      { label: 'Direct entry', text: 'Via FPI, Stock Connect, QFII or local brokers, with rules varying.' },
      { label: 'Currency risk', text: 'The real, rand, rouble and rupee can swing the return.' },
    ],
    faq: [
      { q: 'What is the easiest way to invest in BRICS?', a: 'For most, a regional or single-country ETF is simplest. ADRs let you buy a specific company without opening a foreign account.' },
      { q: 'Do I need to watch the FX?', a: 'Yes, especially for BRL, ZAR and RUB, where the currency carries a large share of the return.' },
    ],
    related: ['bse-and-nse-india', 'brics-currency', 'b3-brazil'],
  },
  {
    slug: 'brics-summit',
    title: 'BRICS growth and the latest summit in review',
    description: 'Who has joined the BRICS group, what the latest summit decided about membership, currency and trade, and what it means for markets.',
    section: 'BRICS',
    publishedDate: '2026-06-18',
    modifiedDate: '2026-07-23',
    paragraphs: [
      'The BRICS grouping has grown beyond its early members and now includes a wider set of economies with an interest in trade settlement and in reform of the global reserve system. That expansion has shifted the conversation further away from a small club.',
      'At each summit, two questions return: the shape of any future currency project and the role the group plays in the global financial architecture. Coverage often reports more than the summit agreed, so separating decided steps from proposals is the analyst’s main discipline.',
      'The observable trends of recent years are concrete: more settlement in national currencies, more central-bank reserve diversification and more of each joint reserve support. These ‘real’ elements survive the narrative and are actions markets can track.',
      'For investors, the significance of BRICS is not one new currency but a slow change in the frame around reserves and trade settlement, and its silence in the central-banking world.',
    ],
    bullets: [
      { label: 'Expansion', text: 'The group has grown well beyond the original members.' },
      { label: 'Settlement', text: 'A move towards local-currency trade and new credit lines.' },
      { label: 'Reserves', text: 'Central banks are slowly diversifying their reserves.' },
      { label: 'Reality', text: 'Separating decided action from proposals matters for markets.' },
    ],
    faq: [
      { q: 'Who joined BRICS recently?', a: 'Expansion has brought in several new members and partners at recent events; the exact list reflects each summit’s agreements.' },
      { q: 'Did the summit create a BRICS currency?', a: 'No single currency was created. The focus remains on settlement and reserve arrangements.' },
    ],
    related: ['brics-currency', 'renminbi-cny', 'invest-in-brics'],
  },
];