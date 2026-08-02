// Guias reais em português (pt) para bricsbrokers.info.
export const labels = {
  "keyFacts": "Factos-chave",
  "faq": "Perguntas frequentes",
  "related": "Guias relacionados",
  "backHome": "← Voltar ao início",
  "sections": {
    "Stock Exchanges": "Bolsas de Valores",
    "Currencies": "Moedas",
    "BRICS": "BRICS",
    "Investment": "Investimento"
  }
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
    "slug": "bse-and-nse-india",
    "title": "BSE e NSE: um guia prático sobre as duas bolsas de valores da Índia",
    "description": "Como funcionam a Bombay Stock Exchange e a National Stock Exchange, os índices Sensex e NIFTY 50, e como os investidores estrangeiros podem obter exposição à Índia.",
    "section": "Bolsas de Valores",
    "publishedDate": "2026-01-12",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "A Índia opera duas bolsas de valores principais: a Bombay Stock Exchange (BSE) e a National Stock Exchange (NSE). Juntas, listam milhares de empresas e processam a grande maioria das transações de ações no país, tornando a Índia um dos mercados emergentes de ações mais ativos do mundo.",
      "A BSE é a mais antiga das duas, fundada em 1875 e uma das bolsas mais antigas da Ásia. O seu principal índice, o Sensex, acompanha 30 grandes empresas estabelecidas e é a referência que a maioria dos investidores internacionais segue.",
      "A NSE, lançada em 1992, é a maior das duas em volume de negociação. O seu índice principal é o NIFTY 50, que engloba cinquenta das ações de grande capitalização mais líquidas e é amplamente visto como um barómetro mais representativo de todo o mercado.",
      "A negociação ocorre durante os dias úteis em rupias indianas (INR), e os investidores estrangeiros normalmente encaminham as ordens através de um corretor registado e cumprem as regras de registo FPI (investidor de carteira estrangeiro) impostas pela SEBI, o regulador de valores mobiliários da Índia."
    ],
    "bullets": [
      {
        "label": "Sensex",
        "text": "A referência da BSE: 30 das maiores empresas indianas."
      },
      {
        "label": "NIFTY 50",
        "text": "O índice da NSE das 50 ações de grande capitalização mais líquidas, melhor equilibrado por setor."
      },
      {
        "label": "Regulador",
        "text": "A SEBI supervisiona ambas as bolsas, com regras de divulgação obrigatórias."
      },
      {
        "label": "Moeda",
        "text": "A negociação é liquidada em rupias indianas, pelo que o câmbio é relevante para investidores estrangeiros."
      }
    ],
    "faq": [
      {
        "q": "Qual é a diferença entre a BSE e a NSE?",
        "a": "Ambas são bolsas indianas. A BSE é mais antiga e mais conhecida pelo Sensex; a NSE é maior em volume de negociação e mais conhecida pelo NIFTY 50."
      },
      {
        "q": "Um investidor estrangeiro pode comprar ações na NSE?",
        "a": "Sim, geralmente através de uma conta FPI registada na SEBI e de um corretor local, com regras que podem mudar ao longo do tempo."
      }
    ],
    "related": [
      "shanghai-and-shenzhen-china",
      "b3-brazil",
      "moex-russia-index"
    ]
  },
  {
    "slug": "shanghai-and-shenzhen-china",
    "title": "Shanghai Composite e Shenzhen: os dois pilares do mercado de ações A da China",
    "description": "Uma introdução ao mercado de ações doméstico da China: as bolsas de Xangai e Shenzhen, o índice CSI 300 e como o Stock Connect abre o acesso às ações A.",
    "section": "Bolsas de Valores",
    "publishedDate": "2026-01-20",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "O mercado de ações doméstico da China é um dos maiores do mundo em capital angariado e opera em duas bolsas: a Shanghai Stock Exchange e a Shenzhen Stock Exchange. Compreender a diferença é essencial ao ler as manchetes do mercado chinês.",
      "A bolsa de Xangai alberga principalmente grandes empresas ligadas ao Estado, bancos e indústria pesada. O seu índice principal, o Shanghai Composite, é o valor mais frequentemente citado e move-se em estreita sintonia com o setor financeiro e grandes líderes industriais.",
      "A bolsa de Shenzhen inclina-se para empresas de crescimento mais pequenas, incluindo muitas nos setores de tecnologia e consumo. O índice de referência mais amplamente seguido, o CSI 300, abrange as 300 maiores ações A em ambos os locais e compensa o viés de qualquer bolsa individual.",
      "Os investidores estrangeiros podem aceder às ações A através do canal Stock Connect ou de quotas para investidores qualificados (QFII/RQFII). A liquidação é feita em Yuan chinês (CNY), pelo que a variação cambial faz parte do panorama total do retorno estrangeiro."
    ],
    "bullets": [
      {
        "label": "Ações A vs Ações H",
        "text": "As ações domésticas do continente (A) são negociadas separadamente das ações H de Hong Kong."
      },
      {
        "label": "CSI 300",
        "text": "A referência internacional habitual nas duas bolsas do continente."
      },
      {
        "label": "Stock Connect",
        "text": "O canal que permite aos investidores negociar ações A e ações de HK em ambas as direções."
      },
      {
        "label": "Volatilidade",
        "text": "Os índices do continente podem oscilar bruscamente devido a políticas e fluxos impulsionados pelo retalho."
      }
    ],
    "faq": [
      {
        "q": "Xangai ou Shenzhen — que índice devo seguir?",
        "a": "Para uma exposição ampla, acompanhe o CSI 300. O Shanghai Composite é o mais citado, mas está ponderado para grandes instituições financeiras."
      },
      {
        "q": "Como é que os investidores estrangeiros compram ações A?",
        "a": "Geralmente via Stock Connect ou uma licença QFII, ambos regulamentados e sujeitos a alterações ao longo do tempo."
      }
    ],
    "related": [
      "bse-and-nse-india",
      "b3-brazil",
      "moex-russia-index"
    ]
  },
  {
    "slug": "b3-brazil",
    "title": "B3 do Brasil: a bolsa de valores de São Paulo explicada",
    "description": "Como funciona a bolsa B3, o índice Ibovespa, o peso da Petrobras e da Vale, e o que os investidores devem saber sobre o Brasil e o real.",
    "section": "Bolsas de Valores",
    "publishedDate": "2026-02-01",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "A B3 foi criada em 2017 a partir da fusão da antiga bolsa de valores BM&FBOVESPA e da CETIP, a câmara de compensação de rendimento fixo. É uma das maiores bolsas de valores das Américas em número de empresas cotadas e é central para os mercados de capitais brasileiros.",
      "O principal índice é o Ibovespa. É ponderado pelo volume de negociação e não apenas pela capitalização bolsista, pelo que está fortemente concentrado em bancos e matérias-primas. A Petrobras e a Vale são dois dos constituintes mais proeminentes.",
      "Como o Brasil é o lar de gigantes produtores de recursos — a Vale no minério de ferro e níquel, a Petrobras no petróleo e gás — o Ibovespa tende a comportar-se como um indicador do ciclo global de matérias-primas. Essa ligação ajuda a interpretar o índice fora do país.",
      "A negociação é liquidada em Reais brasileiros (BRL). Os investidores internacionais chegam frequentemente ao mercado através de fundos brasileiros ou através de BDRs, recibos de depósito brasileiros que permitem o acesso a ações estrangeiras cotadas internamente."
    ],
    "bullets": [
      {
        "label": "Ibovespa",
        "text": "O principal índice, ponderado por volume em direção a bancos e matérias-primas."
      },
      {
        "label": "Petrobras & Vale",
        "text": "Duas mega-capitalizações que ligam o mercado ao petróleo e ao minério de ferro."
      },
      {
        "label": "BDRs",
        "text": "Recibos que alargam o universo investível ao listar empresas estrangeiras no Brasil."
      },
      {
        "label": "Liquidez",
        "text": "Profunda para os padrões regionais, mas concentrada nos nomes maiores."
      }
    ],
    "faq": [
      {
        "q": "O que significa B3?",
        "a": "É a marca da Brasil, Bolsa, Balcão, o grupo bolsista que gere ações, rendimento fixo e derivados no Brasil."
      },
      {
        "q": "O Ibovespa é bom para diversificação?",
        "a": "Parcialmente. Como é dominado por bancos e matérias-primas, reforça o ciclo de matérias-primas e de risco em vez de o compensar."
      }
    ],
    "related": [
      "bse-and-nse-india",
      "jse-south-africa",
      "brazilian-real"
    ]
  },
  {
    "slug": "moex-russia-index",
    "title": "MOEX: uma análise ponderada da Bolsa de Moscovo e do seu índice",
    "description": "Como funciona a Bolsa de Moscovo, o MOEX Russia Index (IMOEX), a sua concentração em energia e banca, e as restrições ao rublo que o condicionam.",
    "section": "Bolsas de Valores",
    "publishedDate": "2026-02-15",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "A Bolsa de Moscovo (MOEX) é o principal local de negociação de ações, obrigações, divisas e derivados na Rússia. Foi formada em 2011 a partir da fusão de bolsas mais antigas e cresceu até se tornar um mercado verticalmente integrado.",
      "O índice de referência de ações é o MOEX Russia Index (IMOEX), calculado em rublos. Em anos anteriores, o índice RTS, cotado em dólares americanos, era mais frequentemente citado; a diferença entre ambos reside no facto de o RTS incluir também a taxa de câmbio rublo-dólar num único número.",
      "O índice está fortemente exposto ao setor energético — o gás, o petróleo e os bancos são os maiores constituintes — e, por isso, acompanha de perto os preços internacionais da energia.",
      "O acesso está hoje fortemente condicionado. As sanções, a disponibilidade de recibos de depósito e os controlos de capitais determinam como os não residentes podem, ou não, participar. Qualquer pessoa que analise a MOEX deve separar a dinâmica do mercado local das restrições que regem a entrada de estrangeiros."
    ],
    "bullets": [
      {
        "label": "IMOEX",
        "text": "O índice de referência baseado no rublo para o mercado acionista russo."
      },
      {
        "label": "Peso da energia",
        "text": "O petróleo, o gás e os bancos dominam e impulsionam a maior parte do movimento."
      },
      {
        "label": "Concentração",
        "text": "Um pequeno grupo de grandes empresas, frequentemente ligadas ao Estado, lidera o índice."
      },
      {
        "label": "Risco de acesso",
        "text": "As sanções e os controlos limitam materialmente a participação estrangeira."
      }
    ],
    "faq": [
      {
        "q": "Qual é a diferença entre os índices MOEX e RTS?",
        "a": "O índice MOEX é calculado em rublos; o RTS é cotado em dólares americanos e, portanto, reflete também a taxa de câmbio rublo/dólar."
      },
      {
        "q": "Os estrangeiros podem comprar ações cotadas na MOEX?",
        "a": "Na prática, existem grandes restrições devido a sanções, recibos de depósito e controlos de capitais, pelo que não é um processo simples."
      }
    ],
    "related": [
      "b3-brazil",
      "jse-south-africa",
      "russian-ruble"
    ]
  },
  {
    "slug": "jse-south-africa",
    "title": "JSE África do Sul: a bolsa de Joanesburgo e o All Share",
    "description": "Compreender o índice JSE All Share, um mercado ancorado na mineração e na banca, e como os investidores internacionais chegam a Joanesburgo.",
    "section": "Bolsas de Valores",
    "publishedDate": "2026-02-22",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "A Bolsa de Valores de Joanesburgo (JSE) é a bolsa mais antiga de África e a maior em valor de mercado combinado. Opera desde 1887 e é hoje um mercado totalmente eletrónico.",
      "O seu principal indicador é o JSE All Share Index, que abrange praticamente todo o mercado cotado. O índice é historicamente ponderado em minas, platina, ouro e recursos diversificados, além de um punhado de grandes bancos e retalhistas, movendo-se ao ritmo do ciclo global das matérias-primas e do rand (ZAR).",
      "Por ser grande, líquida e reconhecida internacionalmente, a JSE é a via prática para uma exposição diversificada a ações cotadas na África subsariana. A concentração em recursos e em algumas empresas financeiras continua a ser a sua característica definidora.",
      "Para além das cotações ordinárias, a JSE mantém cotações especializadas em ouro, platina e recursos, concebidas para uma economia impulsionada por matérias-primas. As cotacões duplas e as novas emissões continuam a aumentar a abrangência do mercado."
    ],
    "bullets": [
      {
        "label": "All Share",
        "text": "O índice da JSE que abrange a maior parte do universo cotado."
      },
      {
        "label": "Mineração e bancos",
        "text": "O índice é dominado por empresas mineiras juntamente com algumas grandes instituições financeiras."
      },
      {
        "label": "Dimensão",
        "text": "O maior mercado de África e uma porta de entrada para a região."
      },
      {
        "label": "Rand (ZAR)",
        "text": "Uma moeda volátil que afeta materialmente os retornos externos."
      }
    ],
    "faq": [
      {
        "q": "Quão concentrada é a JSE?",
        "a": "Bastante concentrada. Algumas empresas de recursos e financeiras representam uma grande fatia do mercado, pelo que não é naturalmente diversificada."
      },
      {
        "q": "Por que é que a JSE é vista como uma rota para África?",
        "a": "A sua dimensão, transparência e cotações internacionais tornam-na no ponto de acesso bolsista mais comum para ações africanas."
      }
    ],
    "related": [
      "b3-brazil",
      "south-african-rand",
      "brics-summit"
    ]
  },
  {
    "slug": "renminbi-cny",
    "title": "O renminbi: como a China gere o seu yuan",
    "description": "O que move o yuan chinês, como o banco central define uma taxa diária, a diferença entre CNY e CNH, e o seu papel na desdolarização dos BRICS.",
    "section": "Moedas",
    "publishedDate": "2026-03-01",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "O renminbi (referido em português como yuan) é a moeda da China e uma das mais observadas no mundo emergente. Em vez de uma flutuação livre, o seu valor é gerido pelo Banco Popular da China (PBOC) dentro de uma banda em torno de um \"ponto médio\" diário.",
      "Todas as manhãs, o PBOC anuncia uma paridade central. A taxa spot onshore pode então mover-se dentro de uma banda em torno desse valor. Devido a esta gestão, o yuan não é uma moeda totalmente flutuante; os seus movimentos diários revelam tanto a política do banco central como a oferta e a procura.",
      "Na narrativa dos BRICS, o yuan tornou-se o principal instrumento da conversa sobre a \"desdolarização\", à medida que a liquidação de trocas comerciais e a atividade de reservas giram cada vez mais em torno dele. Isso confere ao yuan um papel distinto em qualquer estudo sobre a tendência face ao dólar americano.",
      "Um detalhe é importante: a moeda é negociada onshore (CNY) e offshore (CNH), e as duas podem diferir. O fosso entre elas é um dos sinais de mercado mais claros de pressão sobre o yuan."
    ],
    "bullets": [
      {
        "label": "Fixação diária",
        "text": "O PBOC define um ponto médio diário em torno do qual a taxa spot se move."
      },
      {
        "label": "CNY vs CNH",
        "text": "O yuan onshore e offshore podem negociar separadamente; o fosso sinaliza pressão."
      },
      {
        "label": "Papel nos BRICS",
        "text": "O yuan é central para as discussões sobre liquidação comercial e reservas."
      },
      {
        "label": "Política do PBOC",
        "text": "O banco intervém para manter os movimentos dentro de bandas aceitáveis."
      }
    ],
    "faq": [
      {
        "q": "Por que existem o CNY e o CNH?",
        "a": "O CNY é a taxa onshore que as autoridades gerem; o CNH é a taxa de mercado offshore. As duas podem divergir uma da outra."
      },
      {
        "q": "A China fixa o yuan?",
        "a": "Não é uma paridade fixa. O PBOC gere a taxa dentro de uma banda, permitindo o movimento enquanto mantém o controlo."
      }
    ],
    "related": [
      "brics-currency",
      "brazilian-real",
      "south-african-rand"
    ]
  },
  {
    "slug": "brazilian-real",
    "title": "O real brasileiro: beta das matérias-primas e a taxa Selic",
    "description": "Como a soja, o minério de ferro e o petróleo ligam o real brasileiro aos preços globais das matérias-primas e como a taxa Selic molda a moeda.",
    "section": "Moedas",
    "publishedDate": "2026-03-05",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "O real brasileiro (BRL) é a moeda oficial do Brasil e uma das mais líquidas da América Latina. Flutua livremente, mas o seu valor está fortemente ligado ao perfil de exportação do país: soja, minério de ferro, petróleo e café.",
      "Quando os preços das matérias-primas sobem, os dólares fluem para o Brasil e o real tende a valorizar-se; quando os termos de troca pioram, a moeda tende a desvalorizar-se mais rapidamente do que os seus pares. Este \"beta das matérias-primas\" é a primeira característica que a maioria dos analistas verifica.",
      "O Banco Central do Brasil segue uma política de metas de inflação que define a taxa de referência Selic. Taxas mais elevadas tendem a sustentar a moeda, enquanto cortes nas taxas e défices fiscais mais amplos tendem a pressioná-la.",
      "Para os investidores estrangeiros, o valor do real pode compensar ou ampliar o ganho dos ativos brasileiros, razão pela qual a moeda é tão importante quanto o mercado subjacente."
    ],
    "bullets": [
      {
        "label": "Ligação às matérias-primas",
        "text": "A soja, o minério de ferro e o petróleo ligam o real aos ciclos das matérias-primas."
      },
      {
        "label": "Política da Selic",
        "text": "As taxas do banco central são um fator determinante da moeda."
      },
      {
        "label": "Volatilidade",
        "text": "O real está entre as moedas mais variáveis dos BRICS."
      },
      {
        "label": "Carry trade",
        "text": "Os diferenciais de taxas elevados tornam-na uma moeda comum para operações de carry trade."
      }
    ],
    "faq": [
      {
        "q": "O real brasileiro tem uma taxa de câmbio fixa?",
        "a": "Não, flutua livremente, embora o banco central possa suavizar episódios de movimento extremo."
      }
    ],
    "related": [
      "b3-brazil",
      "indian-rupee",
      "south-african-rand"
    ]
  },
  {
    "slug": "indian-rupee",
    "title": "A rupia indiana: importações de petróleo, crescimento e o RBI",
    "description": "Como a rupia indiana é gerida numa economia que importa energia e exporta serviços, e porque se situa entre as moedas mais estáveis dos BRICS.",
    "section": "Moedas",
    "publishedDate": "2026-03-20",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "A rupia indiana (INR) é a moeda de uma das maiores economias do mundo. O seu comportamento reflete uma tensão: a Índia é um grande importador líquido de energia, especialmente petróleo, enquanto exporta software e serviços.",
      "Como grande parte da fatura de importação é energia, a rupia tende a mover-se inversamente ao crude. Quando os preços do petróleo sobem, a conta corrente alarga-se e a rupia enfraquece; fluxos fortes para ações e dívida indianas fornecem suporte.",
      "O Reserve Bank of India (RBI) não fixa a rupia, mas intervém para limitar a volatilidade e aumentar as reservas. O resultado é uma moeda que geralmente muda gradualmente, em vez de sofrer oscilações desordenadas.",
      "Face ao dólar americano, o equilíbrio a longo prazo situa-se entre a pressão dos défices gémeos da Índia — conta corrente e fiscal — e a força do seu crescimento e fluxos de capital."
    ],
    "bullets": [
      {
        "label": "Sensibilidade ao petróleo",
        "text": "Sendo um grande importador de petróleo, a rupia enfraquece frequentemente quando o crude sobe."
      },
      {
        "label": "Suavização pelo RBI",
        "text": "A intervenção do banco central limita a volatilidade e aumenta as reservas."
      },
      {
        "label": "Fluxos",
        "text": "O capital estrangeiro nos mercados indianos tende a apoiar a moeda."
      },
      {
        "label": "Défices gémeos",
        "text": "As pressões da conta corrente e fiscais são os fatores crónicos."
      }
    ],
    "faq": [
      {
        "q": "Porque é que a rupia cai quando o petróleo sobe?",
        "a": "A Índia importa a maior parte do seu petróleo, pelo que uma subida aumenta a fatura de importação e alarga o défice corrente, pressionando a rupia."
      },
      {
        "q": "O RBI controla a rupia?",
        "a": "Não é uma taxa fixa, mas intervém e gere a taxa de câmbio dentro de um intervalo aceitável."
      }
    ],
    "related": [
      "brazilian-real",
      "renminbi-cny",
      "south-african-rand"
    ]
  },
  {
    "slug": "south-african-rand",
    "title": "O rand: África do Sul, metais e apetite pelo risco",
    "description": "Porque é que o rand é uma moeda de \"beta elevado\", as suas ligações ao ouro e à platina, e como os traders a utilizam para ler o apetite global pelo risco.",
    "section": "Moedas",
    "publishedDate": "2026-04-01",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "O rand sul-africano (ZAR) é uma das moedas de \"beta elevado\" mais negociadas no mundo, o que significa que amplifica a forma como o risco global se move. O país é um dos principais produtores de ouro, platina e outros metais e matérias-primas.",
      "Quando o apetite global pelo risco é forte e os preços das matérias-primas se mantêm, o rand e os seus pares tendem a valorizar. Quando os mercados procuram segurança, o rand enfraquece rapidamente; os traders observam o USDZAR como um indicador de sentimento.",
      "Os fatores internos também contam: a posição fiscal, o fornecimento de eletricidade e a forma como o Reserve Bank (SARB) define a sua taxa interagem com o ciclo dos metais para definir o nível da moeda.",
      "O quadro analítico padrão é o de uma moeda de \"beta elevado de matérias-primas\": o rand recompensa a paciência em fases de apetite pelo risco e pune-a quando a tendência se inverte."
    ],
    "bullets": [
      {
        "label": "Beta elevado",
        "text": "O rand amplifica os movimentos globais de apetite e aversão ao risco."
      },
      {
        "label": "Metais preciosos",
        "text": "O ouro e a platina estão estreitamente ligados à economia mineira."
      },
      {
        "label": "Política interna",
        "text": "As decisões fiscais, de eletricidade e de taxas influenciam o nível da moeda."
      },
      {
        "label": "Carry trade",
        "text": "Os fluxos de rendimento para o rand podem inverter-se bruscamente quando o risco muda."
      }
    ],
    "faq": [
      {
        "q": "Porque é que o rand é chamado de moeda de beta elevado?",
        "a": "Porque exagera os movimentos globais, valorizando e desvalorizando mais do que uma moeda típica."
      }
    ],
    "related": [
      "jse-south-africa",
      "brazilian-real",
      "indian-rupee"
    ]
  },
  {
    "slug": "russian-ruble",
    "title": "O rublo russo: entre as exportações de energia e os controlos",
    "description": "Uma visão pragmática sobre o rublo, abrangendo as exportações de energia, os controlos de capitais e o risco de convertibilidade, e por que razão difere de uma moeda típica.",
    "section": "Moedas",
    "publishedDate": "2026-04-01",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "O rublo russo (RUB) é a mais distinta das moedas dos BRICS, pois combina um papel de exportação de energia com uma forte camada de controlos de capitais e restrições legais.",
      "Como exportador líquido de petróleo e gás, o rublo tende a valorizar-se quando o crude sobe. Contudo, uma série de restrições ao comércio, à conversão e à circulação transfronteiriça condicionou a moeda muito mais do que o mercado por si só.",
      "Estes controlos são a característica definidora da negociação. Tornam o rublo uma moeda cujo valor é parcialmente definido pela política estatal e cuja participação por investidores externos é limitada.",
      "A conclusão prática é analisar o rublo separadamente da narrativa mais ampla das \"moedas dos BRICS\": as suas rondas e o seu fluxo livre dependem do governo de uma forma que as outras moedas não dependem."
    ],
    "bullets": [
      {
        "label": "Impulsionado pela energia",
        "text": "As exportações de petróleo e gás impulsionam ou travam a moeda."
      },
      {
        "label": "Controlos de capitais",
        "text": "Os limites ao câmbio e à negociação afetam tanto o valor como a liquidez."
      },
      {
        "label": "Sanções",
        "text": "As restrições legais moldam tanto o preço como o direito de negociar."
      },
      {
        "label": "Convertibilidade",
        "text": "Existe um risco real de o dinheiro não poder circular livremente entre fronteiras."
      }
    ],
    "faq": [
      {
        "q": "Por que razão o rublo é tão diferente de outras moedas?",
        "a": "Os pesados controlos de capitais e as sanções significam que o seu valor e convertibilidade são definidos tanto pela política como pelo mercado."
      }
    ],
    "related": [
      "moex-russia-index",
      "brics-currency",
      "brics-summit"
    ]
  },
  {
    "slug": "brics-currency",
    "title": "Existe uma moeda dos BRICS? Factos, planos e realidade",
    "description": "Uma resposta ponderada à questão da \"moeda dos BRICS\": o que foi realmente acordado, o que não foi, e a diferença entre uma moeda única e um cabaz.",
    "section": "BRICS",
    "publishedDate": "2026-05-10",
    "modifiedDate": "2026-07-22",
    "paragraphs": [
      "A conversa sobre uma \"moeda dos BRICS\" tende a antecipar-se aos factos. Não existe hoje nenhuma moeda comum dos BRICS e nenhuma foi ainda adotada. O que avançou mais foi o plano para a liquidação em moedas nacionais e para os acordos de reserva.",
      "É essencial fazer uma distinção útil: uma moeda única comum é algo muito diferente do movimento mais amplo em direção à negociação em moedas nacionais, e diferente, ainda, de um índice de valor. Grande parte da cobertura visível sobre a \"desdolarização\" descreve essa segunda tendência, mais modesta.",
      "Existem instrumentos concretos: o Contingent Reserve Arrangement (CRA), um fundo comum de reservas que pode apoiar os membros sob pressão na balança de pagamentos, e um número crescente de acordos bilaterais em moeda local.",
      "Para o investidor, a lição prática é separar as manchetes sobre uma \"moeda BRICS\" dos passos mensuráveis, embora mais lentos, na diversificação de reservas e na liquidação em moedas nacionais."
    ],
    "bullets": [
      {
        "label": "Ainda sem moeda",
        "text": "Não foi emitida nenhuma moeda única ou comum dos BRICS."
      },
      {
        "label": "Liquidação local",
        "text": "O progresso real reside nos swaps de moedas nacionais e no comércio."
      },
      {
        "label": "CRA",
        "text": "Um acordo de reserva pode apoiar os membros sob pressão."
      },
      {
        "label": "Cabaz vs moeda",
        "text": "Um cabaz ou índice não é uma moeda única; as notícias frequentemente confundem ambos."
      }
    ],
    "faq": [
      {
        "q": "Os BRICS criaram a sua própria moeda?",
        "a": "Não. Não existe nenhuma \"moeda BRICS\" em circulação. Os passos reais dizem respeito à liquidação cambial e aos acordos de reserva."
      },
      {
        "q": "O que significa realmente a desdolarização?",
        "a": "Significa reduzir o papel do dólar no comércio e nas reservas, principalmente através da liquidação nacional e de novos canais de bancos centrais."
      }
    ],
    "related": [
      "renminbi-cny",
      "brics-summit",
      "indian-rupee"
    ]
  },
  {
    "slug": "invest-in-brics",
    "title": "Como investir nos mercados BRICS: um guia prático",
    "description": "Um guia prático sobre ADRs, ETFs, entrada direta e os riscos cambiais de investir na Índia, China, Brasil, África do Sul e Rússia.",
    "section": "Investimento",
    "publishedDate": "2026-06-02",
    "modifiedDate": "2026-07-22",
    "paragraphs": [
      "Investir nas economias dos BRICS é muito mais acessível do que parece, graças a uma gama de veículos cotados. O ponto de partida é a diferença entre as maiores economias, que assentam na procura interna e na escala, e as restantes.",
      "As principais vias para um investidor estrangeiro são os ADRs e GDRs (recibos que permitem deter uma ação estrangeira), ETFs que detêm cabazes completos, acesso direto para quem trata da documentação, e um conjunto de fundos regionais cotados.",
      "Para a maioria das pessoas, um ETF é o primeiro passo realista: distribui o dinheiro por muitos nomes e reduz o risco de ações individuais de um mercado que atrai alguns gigantes. Um ETF de um único país é mais fácil de digerir do que um \"ETF BRICS\" personalizado.",
      "De todos os riscos, o cambial é aquele a considerar: comprar esses ativos pode adicionar o real brasileiro ou o rand sul-africano ao seu retorno, além do próprio movimento do mercado."
    ],
    "bullets": [
      {
        "label": "ADRs / GDRs",
        "text": "Recibos que permitem deter blue-chips estrangeiras específicas."
      },
      {
        "label": "ETFs",
        "text": "O acesso mais simples, barato e diversificado para a maioria dos investidores."
      },
      {
        "label": "Entrada direta",
        "text": "Via FPI, Stock Connect, QFII ou corretores locais, com regras variáveis."
      },
      {
        "label": "Risco cambial",
        "text": "O real, o rand, o rublo e a rupia podem influenciar o retorno."
      }
    ],
    "faq": [
      {
        "q": "Qual é a forma mais fácil de investir nos BRICS?",
        "a": "Para a maioria, um ETF regional ou de um único país é o mais simples. Os ADRs permitem comprar uma empresa específica sem abrir uma conta estrangeira."
      },
      {
        "q": "Preciso de estar atento ao câmbio?",
        "a": "Sim, especialmente para o BRL, ZAR e RUB, onde a moeda representa uma grande parte do retorno."
      }
    ],
    "related": [
      "bse-and-nse-india",
      "brics-currency",
      "b3-brazil"
    ]
  },
  {
    "slug": "brics-summit",
    "title": "Crescimento dos BRICS e análise da última cimeira",
    "description": "Quem aderiu ao grupo BRICS, o que a última cimeira decidiu sobre adesão, moeda e comércio, e o que isso significa para os mercados.",
    "section": "BRICS",
    "publishedDate": "2026-06-18",
    "modifiedDate": "2026-07-23",
    "paragraphs": [
      "O grupo BRICS cresceu para além dos seus membros iniciais e inclui agora um conjunto mais vasto de economias com interesse na liquidação comercial e na reforma do sistema de reservas global. Essa expansão afastou a conversa da ideia de um pequeno clube.",
      "Em cada cimeira, duas questões regressam: a forma de qualquer futuro projeto de moeda e o papel que o grupo desempenha na arquitetura financeira global. As notícias reportam frequentemente mais do que aquilo que foi acordado na cimeira, pelo que separar os passos decididos das propostas é a principal disciplina do analista.",
      "As tendências observáveis dos últimos anos são concretas: mais liquidação em moedas nacionais, maior diversificação das reservas dos bancos centrais e mais apoio conjunto às reservas. Estes elementos 'reais' sobrevivem à narrativa e são ações que os mercados podem acompanhar.",
      "Para os investidores, o significado dos BRICS não é uma nova moeda, mas sim uma mudança lenta no enquadramento das reservas e da liquidação comercial, e o seu silêncio no mundo da banca central."
    ],
    "bullets": [
      {
        "label": "Expansão",
        "text": "O grupo cresceu muito para além dos membros originais."
      },
      {
        "label": "Liquidação",
        "text": "Um movimento em direção ao comércio em moeda local e novas linhas de crédito."
      },
      {
        "label": "Reservas",
        "text": "Os bancos centrais estão a diversificar lentamente as suas reservas."
      },
      {
        "label": "Realidade",
        "text": "Separar as ações decididas das propostas é importante para os mercados."
      }
    ],
    "faq": [
      {
        "q": "Quem aderiu aos BRICS recentemente?",
        "a": "A expansão trouxe vários novos membros e parceiros em eventos recentes; a lista exata reflete os acordos de cada cimeira."
      },
      {
        "q": "A cimeira criou uma moeda BRICS?",
        "a": "Não foi criada nenhuma moeda única. O foco permanece nos acordos de liquidação e de reservas."
      }
    ],
    "related": [
      "brics-currency",
      "renminbi-cny",
      "invest-in-brics"
    ]
  }
];
