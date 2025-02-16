import { BrandsEnum } from "../enums/brandsEnum";

export interface ReleaseDetails {
  year: number;
  details?: string;
}
export interface Brand {
  name: string;
  logo_img: string;
  display_order?: number | undefined;
  website?: string;
  description?: string;
  foundedInformation?: ReleaseDetails;
  displayBySeries?: boolean;
}

export const brandsDB: Brand[] = [
  {
    name: BrandsEnum.ZENITH,
    logo_img: "public/assets/Images/Brands_Logos/zenith_logo.PNG",
    display_order: 20,
    website: "https://www.zenith-watches.com",
    description: "Zenith is a Swiss luxury watchmaker renowned for its precision and innovation.",
    foundedInformation: {
      year: 1865,
      details: "Founded in Le Locle, Neuchâtel, Switzerland",
    },
  },
  {
    name: BrandsEnum.EBERHARD,
    logo_img: "public/assets/Images/Brands_Logos/eberhard_logo.PNG",
    display_order: 21,
    website: "https://www.eberhard-co-watches.ch",
    description:
      "Eberhard & Co. is a Swiss watchmaking company known for its chronographs and precision timepieces.",
    foundedInformation: {
      year: 1887,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
  },
  {
    name: BrandsEnum.BREITLING,
    logo_img: "public/assets/Images/Brands_Logos/breitling_logo.PNG",
    display_order: 22,
    website: "https://www.breitling.com",
    description:
      "Breitling is a Swiss luxury watchmaker specializing in technical watches, particularly chronographs.",
    foundedInformation: {
      year: 1884,
      details: "Founded in Saint-Imier, Switzerland",
    },
    displayBySeries: true,
  },
  {
    name: BrandsEnum.OMEGA,
    logo_img: "public/assets/Images/Brands_Logos/omega_logo.PNG",
    display_order: 23,
    website: "https://www.omegawatches.com",
    description: "Omega SA is a Swiss luxury watchmaker famed for its innovative watchmaking.",
    foundedInformation: {
      year: 1848,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
  },
  {
    name: BrandsEnum.CHOPARD,
    logo_img: "public/assets/Images/Brands_Logos/chopard_logo.PNG",
    display_order: 24,
    website: "https://www.chopard.com",
    description:
      "Chopard is a Swiss manufacturer and retailer of luxury watches, jewelry, and accessories.",
    foundedInformation: {
      year: 1860,
      details: "Founded in Sonvilier, Switzerland",
    },
  },
  {
    name: BrandsEnum.TAG_HEUER,
    logo_img: "public/assets/Images/Brands_Logos/tag_heuer_logo.PNG",
    display_order: 25,
    website: "https://www.tagheuer.com",
    description:
      "TAG Heuer is a Swiss luxury watchmaker known for its sports watches and chronographs.",
    foundedInformation: {
      year: 1860,
      details: "Founded in Saint-Imier, Switzerland",
    },
  },
  {
    name: BrandsEnum.PORSCHE_DESIGN,
    logo_img: "public/assets/Images/Brands_Logos/porsche_design_logo.PNG",
    display_order: 26,
    website: "https://www.porsche-design.com",
    description:
      "Porsche Design is a German company known for its high-end accessories, including watches.",
    foundedInformation: {
      year: 1972,
      details: "Founded in Stuttgart, Germany",
    },
  },
  {
    name: BrandsEnum.MAURICE_LACROIX,
    logo_img: "public/assets/Images/Brands_Logos/maurice_lacroix_logo.PNG",
    display_order: 27,
    website: "https://www.mauricelacroix.com",
    description:
      "Maurice Lacroix is a Swiss luxury watchmaker recognized for its commitment to traditional watchmaking craftsmanship combined with modern design.",
    foundedInformation: {
      year: 1975,
      details: "Founded in Saignelégier, Switzerland",
    },
  },
  {
    name: BrandsEnum.RAYMOND_WEIL,
    logo_img: "public/assets/Images/Brands_Logos/Raymond_weil_logo.PNG",
    display_order: 28,
    website: "https://www.raymond-weil.com",
    description:
      "Raymond Weil is a Swiss luxury watchmaker known for its elegant and refined timepieces.",
    foundedInformation: {
      year: 1976,
      details: "Founded in Geneva, Switzerland",
    },
  },
  {
    name: BrandsEnum.TISSOT,
    logo_img: "public/assets/Images/Brands_Logos/tissot_logo.PNG",
    display_order: 29,
    website: "https://www.tissotwatches.com",
    description:
      "Tissot is a Swiss watchmaker offering a wide range of timepieces that combine precision and style.",
    foundedInformation: {
      year: 1853,
      details: "Founded in Le Locle, Switzerland",
    },
  },
  {
    name: BrandsEnum.SEIKO,
    logo_img: "public/assets/Images/Brands_Logos/seiko_logo.PNG",
    display_order: 30,
    website: "https://www.seikowatches.com",
    description:
      "Seiko is a Japanese watchmaker renowned for its technological advancements and wide range of timepieces.",
    foundedInformation: {
      year: 1881,
      details: "Founded in Tokyo, Japan",
    },
  },
  {
    name: BrandsEnum.PRYNGEPS,
    logo_img: "public/assets/Images/Brands_Logos/pryngeps_logo.PNG",
    display_order: 31,
    website: "https://www.pryngeps.it",
    description:
      "Pryngeps is an Italian watch brand known for its stylish and affordable timepieces.",
    foundedInformation: {
      year: 1956,
      details: "Founded in Milan, Italy",
    },
  },

  {
    name: BrandsEnum.SOLVIL_ET_TITUS,
    logo_img: "public/assets/Images/Brands_Logos/titus_logo.PNG",
    display_order: 32,
    website: "https://www.solvil-et-titus.com",
    description:
      "Solvil et Titus is a Swiss luxury watch brand known for its heritage and craftsmanship.",
    foundedInformation: {
      year: 1887,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
  },
  {
    name: BrandsEnum.FESTINA_GROUP,
    logo_img: "public/assets/Images/Brands_Logos/Festina_Watches_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.HEUER,
    logo_img: "public/assets/Images/Brands_Logos/heuer_logo.PNG",
    display_order: undefined,
  },

  {
    name: BrandsEnum.MOTORSPORT_BRANDS,
    logo_img: "public/assets/Images/Brands_Logos/MotorSport.PNG",
    display_order: 33,
  },

  {
    name: BrandsEnum.NOVART,
    logo_img: "public/assets/Images/Brands_Logos/novart_logo.PNG",
    display_order: 34,
  },

  {
    name: BrandsEnum.TIMEX,
    logo_img: "public/assets/Images/Brands_Logos/timex_logo.PNG",
    display_order: undefined,
    website: "https://www.timex.com",
    description:
      "Timex is an American watchmaker known for its wide range of affordable and durable timepieces.",
    foundedInformation: {
      year: 1854,
      details: "Founded in Waterbury, Connecticut, USA",
    },
  },
  {
    name: BrandsEnum.LUCERNE,
    logo_img: "public/assets/Images/Brands_Logos/Lucerne_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.LORUS,
    logo_img: "public/assets/Images/Brands_Logos/lorus_logo.PNG",
    display_order: undefined,
    website: "https://www.loruswatches.com",
    description:
      "Lorus is a watch brand offering a variety of stylish and affordable timepieces, known for their reliability and value.",
    foundedInformation: {
      year: 1982,
      details: "Introduced by Seiko Watch Corporation, Japan",
    },
  },
  {
    name: BrandsEnum.CELSUS,
    logo_img: "public/assets/Images/Brands_Logos/celsus_logo.PNG",
    display_order: 38,
  },
  {
    name: BrandsEnum.CAUNY,
    logo_img: "public/assets/Images/Brands_Logos/cauny_logo.PNG",
    display_order: 39,
    website: "https://www.cauny.com",
    description:
      "Cauny is a historic watch brand known for its elegant designs and quality craftsmanship.",
    foundedInformation: {
      year: 1927,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
  },

  {
    name: BrandsEnum.PORTUGUESE_BRANDS,
    logo_img: "public/assets/Images/Brands_Logos/portuguese_brands_logo.PNG",
    display_order: 50,
  },

  {
    name: BrandsEnum.CAMEL_TROPHY,
    logo_img: "public/assets/Images/Brands_Logos/camel_logo.PNG",
    display_order: undefined,
  },

  {
    name: BrandsEnum.ZODIAC,
    logo_img: "public/assets/Images/Brands_Logos/zodiac_logo.PNG",
    display_order: undefined,
    website: "https://www.zodiacwatches.com",
    description:
      "Zodiac is a Swiss watch brand recognized for its adventurous spirit and innovative designs, particularly in dive watches.",
    foundedInformation: {
      year: 1882,
      details: "Founded in Le Locle, Switzerland",
    },
  },
  {
    name: BrandsEnum.ADMES,
    logo_img: "public/assets/Images/Brands_Logos/admes_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.BELEX,
    logo_img: "public/assets/Images/Brands_Logos/belex_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.BERGEON,
    logo_img: "public/assets/Images/Brands_Logos/bergeon_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.CALYPSO,
    logo_img: "public/assets/Images/Brands_Logos/calypso_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.ROYAL_GEOGRAPHICAL_SOCIETY,
    logo_img: "public/assets/Images/Brands_Logos/delma_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.EMES,
    logo_img: "public/assets/Images/Brands_Logos/Emes_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.ELETTA,
    logo_img: "public/assets/Images/Brands_Logos/eletta_logo.PNG",
    display_order: undefined,
    description:
      "Eletta was created in 1950, being registered simultaneously in Portugal and Switzerland.",
    foundedInformation: {
      year: 1950,
      details: "Portugal and Switzerland",
    },
    website: "https://eletta.pt/",
  },
  {
    name: BrandsEnum.FERRARI,
    logo_img: "public/assets/Images/Brands_Logos/Ferrari_Watches_logo.PNG",
    display_order: undefined,
    website: "https://store.ferrari.com/en-us/men/watches",
    description:
      "Ferrari offers a collection of watches that embody the brand's passion for speed and excellence, featuring designs inspired by their iconic cars.",
    foundedInformation: {
      year: 1947,
      details: "Founded in Maranello, Italy",
    },
  },
  {
    name: BrandsEnum.FESTINA,
    logo_img: "public/assets/Images/Brands_Logos/Festina_Watches_logo.PNG",
    display_order: undefined,
    website: "https://www.festina.com",
    description:
      "Festina is a Spanish watch brand offering a range of stylish and reliable timepieces, known for their quality and design.",
    foundedInformation: {
      year: 1902,
      details: "Founded in La Chaux-de-Fonds, Switzerland; now based in Barcelona, Spain",
    },
  },
  {
    name: BrandsEnum.FONTAINE,
    logo_img: "public/assets/Images/Brands_Logos/fontaine_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.GREENWICH,
    logo_img: "public/assets/Images/Brands_Logos/greenwich logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.HELMA,
    logo_img: "public/assets/Images/Brands_Logos/helma_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.HERMES,
    logo_img: "public/assets/Images/Brands_Logos/hermes_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.HIPCO,
    logo_img: "public/assets/Images/Brands_Logos/hipco_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.JAGUAR_FRAGRANCES,
    logo_img: "public/assets/Images/Brands_Logos/jaguar_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.KELTON,
    logo_img: "public/assets/Images/Brands_Logos/kelton_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.LANCO,
    logo_img: "public/assets/Images/Brands_Logos/lanco_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.LATINO,
    logo_img: "public/assets/Images/Brands_Logos/latino_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.LORENZ,
    logo_img: "public/assets/Images/Brands_Logos/lorenz_logo.PNG",
    display_order: undefined,
    website: "https://www.lorenz.it",
    description:
      "Lorenz is an Italian watch brand known for its blend of traditional craftsmanship and modern design.",
    foundedInformation: {
      year: 1934,
      details: "Founded in Milan, Italy",
    },
  },
  {
    name: BrandsEnum.MARTINI,
    logo_img: "public/assets/Images/Brands_Logos/martini_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.MERCEDES_BENZ,
    logo_img: "public/assets/Images/Brands_Logos/mercedes_benz_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.MIURA,
    logo_img: "public/assets/Images/Brands_Logos/miura_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.MONUMENTAL,
    logo_img: "public/assets/Images/Brands_Logos/monumental_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.NATALIS,
    logo_img: "public/assets/Images/Brands_Logos/natalis_logo.PNG",
    display_order: undefined,
  },

  {
    name: BrandsEnum.ONE,
    logo_img: "public/assets/Images/Brands_Logos/One_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.OMODOX,
    logo_img: "public/assets/Images/Brands_Logos/omodox_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.ORIENT,
    logo_img: "public/assets/Images/Brands_Logos/orient_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.PROVITA,
    logo_img: "public/assets/Images/Brands_Logos/Provita_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.PHILIP_WATCH,
    logo_img: "public/assets/Images/Brands_Logos/philipe_watch_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.RONE,
    logo_img: "public/assets/Images/Brands_Logos/rone_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.ROMAR,
    logo_img: "public/assets/Images/Brands_Logos/romar_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.SIGNO,
    logo_img: "public/assets/Images/Brands_Logos/signo_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.SECTOR,
    logo_img: "public/assets/Images/Brands_Logos/sector_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.TONINO_LAMBORGHINI,
    logo_img: "public/assets/Images/Brands_Logos/tonino_lamborghini_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.TOURIST,
    logo_img: "public/assets/Images/Brands_Logos/tourist_logo.PNG",
    display_order: undefined,
  },
];
