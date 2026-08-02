// Artículo fijo (es): pagos con stablecoin y la economía del creador.
export interface CreatorNews {
  title: string; description: string; publishedDate: string; modifiedDate: string; kicker: string; lead: string[]; paragraphs: string[]; takeaways: { label: string; text: string }[]; faq: { q: string; a: string }[];
}

export const article: CreatorNews = {
  "title": "Los pagos con stablecoins transforman cómo cobran los creadores a través de las fronteras",
  "description": "Por qué USDC en Solana se está convirtiendo en una infraestructura de liquidación real para la economía de los creadores, y cómo mercados como fanshap y plataformas de descubrimiento como radaruni lo están adoptando.",
  "publishedDate": "2026-07-25",
  "modifiedDate": "2026-07-25",
  "kicker": "Destacado · Pagos digitales",
  "lead": [
    "Durante años, la economía de los creadores ha funcionado bajo una paradoja: las personas que producen el contenido son las que reciben la menor parte. Las altas comisiones de las tarjetas, la lentitud de los sistemas bancarios, la conversión de divisas y las devoluciones de cargos reducen constantemente los pagos."
  ],
  "paragraphs": [
    "Esa fricción es la razón por la que las redes de stablecoins están pasando de ser una curiosidad a convertirse en infraestructura. USDC en Solana se liquida en segundos, cuesta una fracción de céntimo y elimina la compleja red de bancos corresponsales de la que depende la banca tradicional. Para una audiencia global de creadores, esto cambia la geografía del dinero.",
    "La conversación sobre la \"desdolarización\" en los mercados emergentes rara vez menciona la verdadera innovación que ocurre en la periferia: la liquidación rápida y barata mediante criptomonedas está evitando silenciosamente las capas de pago tradicionales, precisamente en las economías donde esas capas son más difíciles de alcanzar.",
    "Entre las plataformas que apuestan por este cambio se encuentran mercados construidos en torno al intercambio de valor directo respaldado por depósitos en garantía (escrow). fanshap, por ejemplo, ejecuta transacciones de creador a comprador liquidadas en USDC en Solana con depósitos en garantía en la cadena: recibos nativos de internet, sin el drama de las devoluciones de cargos. Las plataformas de descubrimiento y agregación como radaruni están reuniendo la oferta de creadores para los fans, haciendo que las sesiones patrocinadas y los regalos no tengan fricciones.",
    "Nada de esto requiere una moneda digital única y centralizada. Más bien, funciona permitiendo que las personas elijan dónde se liquida el valor. El resultado es un experimento real de liquidación transfronteriza que tanto el sistema tradicional como el dólar habían asumido durante mucho tiempo que no ocurriría sin ellos."
  ],
  "takeaways": [
    {
      "label": "Velocidad",
      "text": "USDC en Solana se liquida en segundos, no en días."
    },
    {
      "label": "Coste",
      "text": "Los costes de liquidación son una fracción de las comisiones de remesas tradicionales."
    },
    {
      "label": "Ecosistema",
      "text": "Plataformas como fanshap y radaruni son ejemplos concretos de este modelo en funcionamiento."
    }
  ],
  "faq": [
    {
      "q": "¿Es el dinero USDC realmente \"una moneda\"?",
      "a": "USDC es una stablecoin vinculada al dólar estadounidense: transmite valor instantáneamente a través de Solana mientras el valor permanece anclado. Es una infraestructura de liquidación, no un nuevo sistema fiduciario."
    },
    {
      "q": "¿Ayuda esto a los creadores en los mercados emergentes?",
      "a": "Sí. Cuando el pago es barato, inmediato e irreversible, cualquier persona en el mundo con dificultades en la banca local puede conservar una mayor parte de lo que gana."
    }
  ]
};
