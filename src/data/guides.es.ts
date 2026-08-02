// Guías reales en español (es) para bricsbrokers.info.
export const labels = {
  "keyFacts": "Datos clave",
  "faq": "Preguntas frecuentes",
  "related": "Guías relacionadas",
  "backHome": "← Volver al inicio",
  "sections": {
    "Stock Exchanges": "Bolsas de Valores",
    "Currencies": "Divisas",
    "BRICS": "BRICS",
    "Investment": "Inversión"
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
    "title": "BSE y NSE: una guía práctica de las dos bolsas de valores de la India",
    "description": "Cómo funcionan la Bolsa de Bombay y la Bolsa Nacional, los índices Sensex y NIFTY 50, y cómo los inversores extranjeros pueden obtener exposición a la India.",
    "section": "Stock Exchanges",
    "publishedDate": "2026-01-12",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "La India cuenta con dos bolsas de valores principales: la Bolsa de Bombay (BSE) y la Bolsa Nacional (NSE). Juntas, cotizan miles de empresas y procesan la gran mayoría de las operaciones de renta variable del país, lo que convierte a la India en uno de los mercados emergentes más activos del mundo.",
      "La BSE es la más antigua de las dos, fundada en 1875 y una de las bolsas más veteranas de Asia. Su índice principal, el Sensex, sigue a 30 empresas grandes y consolidadas, y es el índice de referencia que siguen la mayoría de los inversores internacionales.",
      "La NSE, lanzada en 1992, es la mayor de las dos por volumen de negociación. Su índice principal es el NIFTY 50, que abarca cincuenta de las acciones de gran capitalización más líquidas y es ampliamente considerado como un barómetro más representativo de todo el mercado.",
      "La negociación se realiza en días laborables en rupias indias (INR), y los inversores extranjeros normalmente canalizan sus órdenes a través de un bróker registrado y cumplen con las normas de registro FPI (inversor de cartera extranjero) aplicadas por SEBI, el regulador de valores de la India."
    ],
    "bullets": [
      {
        "label": "Sensex",
        "text": "El índice de referencia de la BSE: 30 de las mayores empresas indias."
      },
      {
        "label": "NIFTY 50",
        "text": "El índice de la NSE de las 50 acciones de gran capitalización más líquidas, mejor equilibrado por sectores."
      },
      {
        "label": "Regulador",
        "text": "SEBI supervisa ambas bolsas, con normas de divulgación obligatorias."
      },
      {
        "label": "Divisa",
        "text": "La negociación se liquida en rupias indias, por lo que el tipo de cambio es importante para los inversores extranjeros."
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre la BSE y la NSE?",
        "a": "Ambas son bolsas indias. La BSE es más antigua y conocida por el Sensex; la NSE es mayor por volumen de negociación y conocida por el NIFTY 50."
      },
      {
        "q": "¿Puede un inversor extranjero comprar acciones en la NSE?",
        "a": "Sí, generalmente a través de una cuenta FPI registrada en SEBI y un bróker local, con normas que pueden cambiar con el tiempo."
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
    "title": "Shanghai Composite y Shenzhen: los dos pilares del mercado de acciones A de China",
    "description": "Una introducción al mercado de renta variable nacional de China: las bolsas de Shanghái y Shenzhen, el índice CSI 300 y cómo Stock Connect abre el acceso a las acciones A.",
    "section": "Stock Exchanges",
    "publishedDate": "2026-01-20",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "El mercado de renta variable nacional de China es uno de los más grandes del mundo por capital captado y opera en dos bolsas: la Bolsa de Shanghái y la Bolsa de Shenzhen. Entender la diferencia es esencial al leer los titulares del mercado chino.",
      "La bolsa de Shanghái alberga principalmente grandes empresas vinculadas al Estado, bancos e industria pesada. Su índice principal, el Shanghai Composite, es la cifra que se cita con más frecuencia y se mueve en estrecha relación con los valores financieros y los grandes líderes industriales.",
      "La bolsa de Shenzhen se inclina hacia empresas de crecimiento más pequeñas, incluidas muchas de los sectores tecnológico y de consumo. El índice de referencia más seguido, el CSI 300, abarca las 300 acciones A más grandes de ambas sedes y compensa el sesgo de cualquier bolsa individual.",
      "Los inversores extranjeros pueden acceder a las acciones A a través del canal Stock Connect o de cuotas para inversores cualificados (QFII/RQFII). La liquidación se realiza en yuanes chinos (CNY), por lo que el movimiento de la divisa es parte del panorama general de rentabilidad extranjera."
    ],
    "bullets": [
      {
        "label": "Acciones A vs. Acciones H",
        "text": "Las acciones nacionales de China continental (A) cotizan por separado de las acciones H de Hong Kong."
      },
      {
        "label": "CSI 300",
        "text": "El índice de referencia internacional habitual en ambas bolsas continentales."
      },
      {
        "label": "Stock Connect",
        "text": "El canal que permite a los inversores negociar acciones A y acciones de Hong Kong en ambas direcciones."
      },
      {
        "label": "Volatilidad",
        "text": "Los índices continentales pueden moverse bruscamente debido a la política y a los flujos impulsados por inversores minoristas."
      }
    ],
    "faq": [
      {
        "q": "¿Shanghái o Shenzhen: qué índice debería seguir?",
        "a": "Para una exposición amplia, siga el CSI 300. El Shanghai Composite es el más citado, pero está ponderado hacia grandes entidades financieras."
      },
      {
        "q": "¿Cómo compran acciones A los inversores extranjeros?",
        "a": "Generalmente a través de Stock Connect o una licencia QFII, ambos regulados y sujetos a cambios con el tiempo."
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
    "title": "B3 de Brasil: explicación de la bolsa de valores de São Paulo",
    "description": "Cómo funciona la bolsa B3, el índice Ibovespa, el peso de Petrobras y Vale, y lo que los inversores deben saber sobre Brasil y el real.",
    "section": "Stock Exchanges",
    "publishedDate": "2026-02-01",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "B3 se creó en 2017 a partir de la fusión de la antigua bolsa de valores BM&FBOVESPA y CETIP, la cámara de compensación de renta fija. Es una de las bolsas de valores más grandes de América por número de empresas cotizadas y es fundamental para los mercados de capitales brasileños.",
      "El índice principal es el Ibovespa. Está ponderado por volumen de negociación en lugar de solo por capitalización de mercado, por lo que está fuertemente concentrado en bancos y materias primas. Petrobras y Vale son dos de sus componentes más destacados.",
      "Debido a que Brasil alberga gigantes productores de recursos —Vale en mineral de hierro y níquel, Petrobras en petróleo y gas—, el Ibovespa tiende a comportarse como un indicador del ciclo global de materias primas. Ese vínculo ayuda a interpretar el índice desde fuera del país.",
      "La negociación se liquida en reales brasileños (BRL). Los inversores internacionales a menudo acceden al mercado a través de fondos brasileños o mediante BDRs, recibos de depósito brasileños que permiten el acceso a acciones extranjeras cotizadas en el mercado nacional."
    ],
    "bullets": [
      {
        "label": "Ibovespa",
        "text": "El índice principal, ponderado por volumen hacia bancos y materias primas."
      },
      {
        "label": "Petrobras y Vale",
        "text": "Dos mega-capitalizaciones que vinculan el mercado al petróleo y al mineral de hierro."
      },
      {
        "label": "BDRs",
        "text": "Recibos que amplían el universo invertible al listar empresas extranjeras en Brasil."
      },
      {
        "label": "Liquidez",
        "text": "Profunda para los estándares regionales, pero concentrada en los nombres más grandes."
      }
    ],
    "faq": [
      {
        "q": "¿Qué significa B3?",
        "a": "Es la marca de Brasil, Bolsa, Balcão, el grupo bursátil que gestiona acciones, renta fija y derivados en Brasil."
      },
      {
        "q": "¿Es el Ibovespa bueno para la diversificación?",
        "a": "En parte. Debido a que está dominado por bancos y materias primas, refuerza el ciclo de materias primas y riesgo en lugar de compensarlo."
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
    "title": "MOEX: una mirada medida a la Bolsa de Moscú y su índice",
    "description": "Cómo funciona la Bolsa de Moscú, el índice MOEX Russia (IMOEX), su concentración en energía y bancos, y las restricciones del rublo que lo condicionan.",
    "section": "Stock Exchanges",
    "publishedDate": "2026-02-15",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "La Bolsa de Moscú (MOEX) es el principal centro de negociación de acciones, bonos, divisas y derivados en Rusia. Se formó en 2011 a partir de la fusión de las antiguas bolsas y ha crecido hasta convertirse en un mercado integrado verticalmente.",
      "El índice de referencia bursátil es el MOEX Russia Index (IMOEX), calculado en rublos. En años anteriores, el índice RTS, denominado en dólares estadounidenses, se cotizaba con mayor frecuencia; ambos difieren en que el RTS también incorpora el tipo de cambio rublo-dólar en una sola cifra.",
      "El índice está ponderado hacia la energía —el gas, el petróleo y los bancos son sus mayores componentes— y, por lo tanto, sigue muy de cerca los precios internacionales de la energía.",
      "El acceso está fuertemente restringido hoy en día. Las sanciones, la disponibilidad de recibos de depósito y los controles de capital determinan cómo los no residentes pueden, o no, participar. A cualquiera que analice la MOEX se le recomienda separar la dinámica del mercado local de las restricciones que rigen la entrada extranjera."
    ],
    "bullets": [
      {
        "label": "IMOEX",
        "text": "El índice de referencia basado en el rublo para el mercado bursátil ruso."
      },
      {
        "label": "Peso energético",
        "text": "El petróleo, el gas y los bancos dominan e impulsan la mayor parte del movimiento."
      },
      {
        "label": "Concentración",
        "text": "Un pequeño grupo de nombres grandes, a menudo vinculados al Estado, lidera el índice."
      },
      {
        "label": "Riesgo de acceso",
        "text": "Las sanciones y los controles limitan materialmente la participación extranjera."
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la diferencia entre los índices MOEX y RTS?",
        "a": "El índice MOEX se calcula en rublos; el RTS está denominado en dólares estadounidenses y, por tanto, también refleja el tipo de cambio rublo/dólar."
      },
      {
        "q": "¿Pueden los extranjeros comprar acciones que cotizan en la MOEX?",
        "a": "En la práctica, existen grandes restricciones derivadas de las sanciones, los recibos de depósito y los controles de capital, por lo que no es sencillo."
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
    "title": "JSE Sudáfrica: la bolsa de Johannesburgo y el All Share",
    "description": "Entender el índice JSE All Share, un mercado anclado en la minería y los bancos, y cómo los inversores internacionales acceden a Johannesburgo.",
    "section": "Stock Exchanges",
    "publishedDate": "2026-02-22",
    "modifiedDate": "2026-07-20",
    "paragraphs": [
      "La Bolsa de Johannesburgo (JSE) es la bolsa más antigua de África y la mayor por valor de mercado combinado. Opera desde 1887 y es actualmente un mercado totalmente electrónico.",
      "Su indicador principal es el JSE All Share Index, que abarca prácticamente todo el mercado cotizado. El índice está históricamente ponderado hacia las minas, el platino, el oro y los recursos diversificados, además de un puñado de grandes bancos y minoristas, y se mueve al ritmo del ciclo global de las materias primas y el rand (ZAR).",
      "Debido a que es grande, líquida y reconocida internacionalmente, la JSE es la ruta práctica para obtener una exposición diversificada a las acciones cotizadas en el África subsahariana. La concentración en recursos y unos pocos valores financieros sigue siendo su característica definitoria.",
      "Además de las cotizaciones ordinarias, la JSE mantiene listados especializados en oro, platino y recursos diseñados para una economía impulsada por las materias primas. Las cotizaciones duales y las nuevas emisiones siguen añadiendo amplitud."
    ],
    "bullets": [
      {
        "label": "All Share",
        "text": "El índice JSE que abarca la mayor parte del universo cotizado."
      },
      {
        "label": "Minería y bancos",
        "text": "El índice está dominado por empresas mineras junto a unos pocos grandes valores financieros."
      },
      {
        "label": "Tamaño",
        "text": "El mercado más grande de África y una puerta de entrada a la región."
      },
      {
        "label": "Rand (ZAR)",
        "text": "Una moneda volátil que afecta materialmente a los rendimientos externos."
      }
    ],
    "faq": [
      {
        "q": "¿Qué tan concentrada está la JSE?",
        "a": "Bastante concentrada. Unas pocas empresas de recursos y financieras representan una gran parte del mercado, por lo que no está diversificado de forma natural."
      },
      {
        "q": "¿Por qué se considera a la JSE como una ruta hacia África?",
        "a": "Su tamaño, transparencia y cotizaciones internacionales la convierten en el punto de acceso bursátil más común para las acciones africanas."
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
    "title": "El renminbi: cómo gestiona China su yuan",
    "description": "Qué mueve al yuan chino, cómo el banco central establece una fijación diaria, la diferencia entre CNY y CNH, y su papel en la desdolarización de los BRICS.",
    "section": "Currencies",
    "publishedDate": "2026-03-01",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "El renminbi (conocido en inglés como yuan) es la moneda de China y una de las más observadas en el mundo emergente. En lugar de una flotación libre, su valor es gestionado por el Banco Popular de China (PBOC) dentro de una banda alrededor de un \"punto medio\" diario.",
      "Cada mañana, el PBOC anuncia una paridad central. El tipo de cambio al contado en tierra (onshore) puede moverse entonces dentro de una banda alrededor de ella. Debido a esta gestión, el yuan no es una moneda de libre flotación; sus movimientos diarios revelan tanto la política del banco central como la oferta y la demanda.",
      "En la historia de los BRICS, el yuan se ha convertido en el principal instrumento del discurso de \"desdolarización\", ya que la liquidación comercial y la actividad de reservas giran cada vez más en torno a él. Eso le da al yuan un papel distintivo en cualquier estudio sobre la tendencia frente al dólar estadounidense.",
      "Un detalle importa: la moneda se negocia en tierra (CNY) y en el extranjero (CNH), y ambas pueden diferir. La brecha entre ellas es una de las señales de mercado más claras de presión sobre el yuan."
    ],
    "bullets": [
      {
        "label": "Fijación diaria",
        "text": "El PBOC establece un punto medio diario alrededor del cual se mueve el tipo de cambio al contado."
      },
      {
        "label": "CNY vs CNH",
        "text": "El yuan onshore y offshore pueden cotizar por separado; la brecha señala presión."
      },
      {
        "label": "Papel en los BRICS",
        "text": "El yuan es fundamental para el discurso sobre liquidación comercial y reservas."
      },
      {
        "label": "Política del PBOC",
        "text": "El banco interviene para mantener los movimientos dentro de bandas aceptables."
      }
    ],
    "faq": [
      {
        "q": "¿Por qué existen el CNY y el CNH?",
        "a": "El CNY es la tasa onshore que gestionan las autoridades; el CNH es la tasa del mercado offshore. Ambas pueden divergir entre sí."
      },
      {
        "q": "¿China fija el yuan?",
        "a": "No es un tipo de cambio fijo. El PBOC gestiona la tasa dentro de una banda, permitiendo el movimiento mientras mantiene el control."
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
    "title": "El real brasileño: beta de materias primas y el tipo Selic",
    "description": "Cómo la soja, el mineral de hierro y el petróleo vinculan al real brasileño con los precios mundiales de las materias primas, y cómo el tipo Selic moldea la divisa.",
    "section": "Divisas",
    "publishedDate": "2026-03-05",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "El real brasileño (BRL) es la moneda oficial de Brasil y una de las más líquidas de América Latina. Flota libremente, pero su valor está fuertemente vinculado al perfil exportador del país: soja, mineral de hierro, petróleo y café.",
      "Cuando los precios de las materias primas suben, los dólares fluyen hacia Brasil y el real tiende a fortalecerse; cuando los términos de intercambio empeoran, suele debilitarse más rápido que sus pares. Esta \"beta de materias primas\" es la primera característica que comprueban la mayoría de los analistas.",
      "El Banco Central de Brasil aplica una política de objetivos de inflación que establece el tipo de referencia Selic. Los tipos más altos han tendido a apuntalar la moneda, mientras que los recortes de tipos y los mayores déficits fiscales tienden a lastrarla.",
      "Para los inversores extranjeros, el valor del real puede compensar o magnificar la ganancia de los activos brasileños, razón por la cual la divisa importa al menos tanto como el mercado subyacente."
    ],
    "bullets": [
      {
        "label": "Vínculo con las materias primas",
        "text": "La soja, el mineral de hierro y el petróleo vinculan al real con los ciclos de las materias primas."
      },
      {
        "label": "Política Selic",
        "text": "Los tipos del banco central son un motor clave de la divisa."
      },
      {
        "label": "Volatilidad",
        "text": "El real se encuentra entre las más variables de las divisas de los BRICS."
      },
      {
        "label": "Carry trade",
        "text": "Los amplios diferenciales de tipos lo convierten en una divisa común para el carry trade."
      }
    ],
    "faq": [
      {
        "q": "¿Está el real brasileño vinculado a otra moneda?",
        "a": "No, flota libremente, aunque el banco central puede suavizar episodios de movimientos extremos."
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
    "title": "La rupia india: importaciones de petróleo, crecimiento y el RBI",
    "description": "Cómo se gestiona la rupia india en una economía que importa energía y exporta servicios, y por qué se sitúa entre las divisas más estables de los BRICS.",
    "section": "Divisas",
    "publishedDate": "2026-03-20",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "La rupia india (INR) es la moneda de una de las economías más grandes del mundo. Su comportamiento refleja una tensión: India es un gran importador neto de energía, especialmente petróleo, mientras que exporta software y servicios.",
      "Debido a que gran parte de la factura de importación es energía, la rupia tiende a moverse de forma inversa al crudo. Cuando los precios del petróleo suben, la cuenta corriente se amplía y la rupia se debilita; las fuertes entradas en acciones y deuda indias proporcionan apoyo.",
      "El Reserve Bank of India (RBI) no vincula la rupia, pero interviene para limitar la volatilidad y crear reservas. El resultado es una moneda que suele cambiar gradualmente, en lugar de sufrir subidas desordenadas.",
      "Frente al dólar estadounidense, el equilibrio a largo plazo se sitúa entre la presión de los déficits gemelos de la India (cuenta corriente y fiscal) y la fortaleza de su crecimiento y sus entradas de capital."
    ],
    "bullets": [
      {
        "label": "Sensibilidad al petróleo",
        "text": "Es un gran importador de petróleo, por lo que la rupia suele debilitarse cuando el crudo sube."
      },
      {
        "label": "Suavización del RBI",
        "text": "La intervención del banco central limita la volatilidad y crea reservas."
      },
      {
        "label": "Flujos",
        "text": "El capital extranjero en los mercados indios tiende a apoyar la divisa."
      },
      {
        "label": "Déficits gemelos",
        "text": "Las presiones de la cuenta corriente y fiscal son los motores crónicos."
      }
    ],
    "faq": [
      {
        "q": "¿Por qué cae la rupia cuando sube el petróleo?",
        "a": "India importa la mayor parte de su petróleo, por lo que una subida aumenta la factura de importación y amplía el déficit corriente, lo que presiona a la baja a la rupia."
      },
      {
        "q": "¿Controla el RBI la rupia?",
        "a": "No es un tipo fijo, pero interviene y gestiona el tipo de cambio dentro de un rango aceptable."
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
    "title": "El rand: Sudáfrica, metales y apetito por el riesgo",
    "description": "Por qué el rand es una divisa de \"beta alta\", sus vínculos con el oro y el platino, y cómo los operadores lo utilizan para leer el apetito por el riesgo global.",
    "section": "Divisas",
    "publishedDate": "2026-04-01",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "El rand sudafricano (ZAR) es una de las divisas de \"beta alta\" que más se negocian en el mundo, lo que significa que amplifica cómo se mueve el riesgo global. El país es un productor líder de oro, platino y otros metales y materias primas.",
      "Cuando el apetito por el riesgo global es fuerte y los precios de las materias primas se mantienen, el rand y sus pares tienden a subir. Cuando los mercados buscan seguridad, el rand se suaviza rápidamente; los operadores observan el USDZAR como un indicador del sentimiento.",
      "Los factores internos también importan: la posición fiscal, el suministro eléctrico y cómo el Reserve Bank (SARB) establece su tipo de interés interactúan con el ciclo de los metales para fijar el nivel.",
      "El marco analítico estándar es el de una divisa de \"beta alta de materias primas\": el rand recompensa la paciencia en las fases de riesgo y la castiga en los giros en sentido contrario."
    ],
    "bullets": [
      {
        "label": "Beta alta",
        "text": "El rand amplifica los movimientos globales de riesgo (risk-on y risk-off)."
      },
      {
        "label": "Metales preciosos",
        "text": "El oro y el platino están estrechamente vinculados a la economía minera."
      },
      {
        "label": "Política interna",
        "text": "Las decisiones fiscales, eléctricas y de tipos influyen en el nivel."
      },
      {
        "label": "Carry trade",
        "text": "Los flujos de rendimiento hacia el rand pueden revertirse bruscamente cuando el riesgo cambia."
      }
    ],
    "faq": [
      {
        "q": "¿Por qué se llama al rand una divisa de beta alta?",
        "a": "Porque exagera los movimientos globales, fortaleciéndose y debilitándose más que una divisa típica."
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
    "title": "El rublo ruso: entre las exportaciones de energía y los controles",
    "description": "Una visión pragmática del rublo que abarca las exportaciones de energía, los controles de capital y el riesgo de convertibilidad, y por qué difiere de una moneda típica.",
    "section": "Divisas",
    "publishedDate": "2026-04-01",
    "modifiedDate": "2026-07-21",
    "paragraphs": [
      "El rublo ruso (RUB) es la más distintiva de las divisas de los BRICS porque combina un papel de exportador de energía con una fuerte carga de controles de capital y restricciones legales.",
      "Como exportador neto de petróleo y gas, el rublo tiende a fortalecerse cuando el crudo sube. Sin embargo, una serie de restricciones sobre la negociación, la conversión y el movimiento transfronterizo ha condicionado la moneda mucho más que el mercado por sí solo.",
      "Estos controles son el rasgo definitorio de la operativa. Convierten al rublo en una moneda cuyo valor está fijado en parte por la política estatal y cuya participación por parte de inversores externos es limitada.",
      "La conclusión práctica es analizar el rublo por separado de la historia más amplia de las \"divisas BRICS\": sus rondas y su libre flujo dependen del gobierno de una manera que las otras divisas no lo hacen."
    ],
    "bullets": [
      {
        "label": "Impulsado por la energía",
        "text": "Las exportaciones de petróleo y gas impulsan o lastran la moneda."
      },
      {
        "label": "Controles de capital",
        "text": "Los límites a las divisas y a la negociación afectan tanto al valor como a la liquidez."
      },
      {
        "label": "Sanciones",
        "text": "Las restricciones legales determinan tanto el precio como el derecho a operar."
      },
      {
        "label": "Convertibilidad",
        "text": "Existe un riesgo real de que el dinero no pueda moverse libremente a través de las fronteras."
      }
    ],
    "faq": [
      {
        "q": "¿Por qué el rublo es tan diferente de otras divisas?",
        "a": "Los fuertes controles de capital y las sanciones significan que su valor y convertibilidad están determinados tanto por la política como por el mercado."
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
    "title": "¿Existe una moneda BRICS? Hechos, planes y realidad",
    "description": "Una respuesta medida a la pregunta sobre la \"moneda BRICS\": qué se ha acordado realmente, qué no, y la diferencia entre una moneda única y una cesta.",
    "section": "BRICS",
    "publishedDate": "2026-05-10",
    "modifiedDate": "2026-07-22",
    "paragraphs": [
      "Hablar de una \"moneda BRICS\" suele ir por delante de los hechos. No existe hoy ninguna moneda común BRICS, y aún no se ha adoptado ninguna. Lo que sí ha avanzado es el plan para la liquidación en monedas nacionales y para los acuerdos de reserva.",
      "Es esencial hacer una distinción útil: una moneda común única es algo muy diferente al movimiento más amplio hacia el comercio en monedas nacionales, y diferente a su vez de un índice de valor. Gran parte de la cobertura visible sobre la \"desdolarización\" describe esa segunda tendencia, más modesta.",
      "Existen instrumentos concretos: el Acuerdo de Reservas Contingentes (CRA), un fondo común de reservas que puede apoyar a los miembros bajo presión en la balanza de pagos, y un número creciente de acuerdos bilaterales en moneda local.",
      "Para el inversor, la lección práctica es separar los titulares sobre una \"moneda BRICS\" de los pasos, medibles pero más lentos, en la diversificación de reservas y la liquidación en moneda nacional."
    ],
    "bullets": [
      {
        "label": "Aún no hay moneda",
        "text": "No se ha emitido ninguna moneda BRICS única ni común."
      },
      {
        "label": "Liquidación local",
        "text": "El progreso real se encuentra en los swaps de monedas nacionales y el comercio."
      },
      {
        "label": "CRA",
        "text": "Un acuerdo de reserva puede apoyar a los miembros bajo presión."
      },
      {
        "label": "Cesta frente a moneda",
        "text": "Una cesta o índice no es una moneda única; los informes a menudo los confunden."
      }
    ],
    "faq": [
      {
        "q": "¿Ha creado BRICS su propia moneda?",
        "a": "No. No hay ninguna \"moneda BRICS\" en circulación. Los pasos reales se refieren a la liquidación de divisas y a los acuerdos de reserva."
      },
      {
        "q": "¿Qué significa realmente la desdolarización?",
        "a": "Significa reducir el papel del dólar en el comercio y las reservas, principalmente a través de la liquidación nacional y nuevos canales de bancos centrales."
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
    "title": "Cómo invertir en los mercados BRICS: una guía tranquila",
    "description": "Una guía práctica sobre ADR, ETF, entrada directa y los riesgos cambiarios de invertir en India, China, Brasil, Sudáfrica y Rusia.",
    "section": "Inversión",
    "publishedDate": "2026-06-02",
    "modifiedDate": "2026-07-22",
    "paragraphs": [
      "Invertir en las economías BRICS es mucho más accesible de lo que parece, gracias a una gama de vehículos cotizados. El punto de partida es la diferencia entre las economías más grandes, que se basan en la demanda interna y la escala, y el resto.",
      "Las principales vías para un inversor extranjero son los ADR y GDR (recibos que permiten poseer una acción extranjera), los ETF que contienen cestas completas, el acceso directo para quienes realizan los trámites y un conjunto de fondos regionales cotizados.",
      "Para la mayoría de las personas, un ETF es el primer paso realista: reparte el dinero entre muchos nombres y reduce el riesgo de acciones individuales de un mercado que atrae a unos pocos gigantes. Un ETF de un solo país es más fácil de digerir que un \"ETF BRICS\" a medida.",
      "De todos los riesgos, el cambiario es el que hay que tener en cuenta: comprar esos activos puede añadir el real brasileño o el rand sudafricano a su rentabilidad, además del movimiento del propio mercado."
    ],
    "bullets": [
      {
        "label": "ADR / GDR",
        "text": "Recibos que le permiten poseer blue-chips extranjeros específicos."
      },
      {
        "label": "ETF",
        "text": "El acceso más sencillo, barato y diversificado para la mayoría de los inversores."
      },
      {
        "label": "Entrada directa",
        "text": "A través de FPI, Stock Connect, QFII o brokers locales, con reglas variables."
      },
      {
        "label": "Riesgo cambiario",
        "text": "El real, el rand, el rublo y la rupia pueden hacer oscilar la rentabilidad."
      }
    ],
    "faq": [
      {
        "q": "¿Cuál es la forma más fácil de invertir en BRICS?",
        "a": "Para la mayoría, un ETF regional o de un solo país es lo más sencillo. Los ADR le permiten comprar una empresa específica sin abrir una cuenta en el extranjero."
      },
      {
        "q": "¿Debo vigilar el tipo de cambio?",
        "a": "Sí, especialmente para el BRL, ZAR y RUB, donde la divisa conlleva una gran parte de la rentabilidad."
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
    "title": "El crecimiento de los BRICS y análisis de la última cumbre",
    "description": "Quién se ha unido al grupo BRICS, qué decidió la última cumbre sobre afiliación, moneda y comercio, y qué significa para los mercados.",
    "section": "BRICS",
    "publishedDate": "2026-06-18",
    "modifiedDate": "2026-07-23",
    "paragraphs": [
      "El grupo BRICS ha crecido más allá de sus miembros iniciales y ahora incluye a un conjunto más amplio de economías con interés en la liquidación comercial y en la reforma del sistema de reservas global. Dicha expansión ha alejado la conversación de la idea de un club pequeño.",
      "En cada cumbre, dos preguntas vuelven a surgir: la forma de cualquier futuro proyecto de moneda y el papel que desempeña el grupo en la arquitectura financiera global. La cobertura mediática a menudo informa de más cosas de las que la cumbre acordó, por lo que separar los pasos decididos de las propuestas es la principal disciplina del analista.",
      "Las tendencias observables de los últimos años son concretas: más liquidación en monedas nacionales, mayor diversificación de las reservas de los bancos centrales y un mayor apoyo conjunto a las reservas. Estos elementos «reales» sobreviven a la narrativa y son acciones que los mercados pueden seguir.",
      "Para los inversores, el significado de los BRICS no es una nueva moneda, sino un cambio lento en el marco de las reservas y la liquidación comercial, así como su silencio en el mundo de la banca central."
    ],
    "bullets": [
      {
        "label": "Expansión",
        "text": "El grupo ha crecido mucho más allá de los miembros originales."
      },
      {
        "label": "Liquidación",
        "text": "Un movimiento hacia el comercio en moneda local y nuevas líneas de crédito."
      },
      {
        "label": "Reservas",
        "text": "Los bancos centrales están diversificando lentamente sus reservas."
      },
      {
        "label": "Realidad",
        "text": "Separar las acciones decididas de las propuestas es importante para los mercados."
      }
    ],
    "faq": [
      {
        "q": "¿Quién se ha unido a los BRICS recientemente?",
        "a": "La expansión ha incorporado a varios nuevos miembros y socios en eventos recientes; la lista exacta refleja los acuerdos de cada cumbre."
      },
      {
        "q": "¿Creó la cumbre una moneda BRICS?",
        "a": "No se creó ninguna moneda única. El enfoque sigue centrado en los acuerdos de liquidación y reservas."
      }
    ],
    "related": [
      "brics-currency",
      "renminbi-cny",
      "invest-in-brics"
    ]
  }
];
