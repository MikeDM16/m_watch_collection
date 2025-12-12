import { BrandsEnum } from "../enums/brandsEnum";

export interface ReleaseDetails {
  year: number;
  details?: string;
}
export interface Brand {
  name: string;
  logoImg: string;
  displayOrder?: number | undefined;
  website?: string;
  description?: string;
  foundedInformation?: ReleaseDetails;
  displayBySeries?: boolean;
  backgrounImages?: string[];
}

export const brandsDB: Brand[] = [
  {
    name: BrandsEnum.ZENITH,
    logoImg: "public/assets/Images/Brands_Logos/zenith_logo.PNG",
    displayOrder: 20,
    website: "https://www.zenith-watches.com",
    description:
      " Zenith is renowned for its precision and innovation, especially the El Primero series, the world's first high-frequency automatic chronograph.",
    foundedInformation: {
      year: 1865,
      details: "Founded in Le Locle, Neuchâtel, Switzerland",
    },
    displayBySeries: true,
    backgrounImages: ["public/assets/Images/Brands_Backgrounds/Zenith_1_Background.JPG"],
  },
  {
    name: BrandsEnum.EBERHARD,
    logoImg: "public/assets/Images/Brands_Logos/eberhard_logo.PNG",
    displayOrder: 21,
    website: "https://www.eberhard-co-watches.ch",
    description:
      "Eberhard & Co. is a Swiss watchmaking company known for its chronographs and precision timepieces.",
    foundedInformation: {
      year: 1887,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
    displayBySeries: false,
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Eberhard_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Eberhard_2_Background.JPG",
    ],
  },
  {
    name: BrandsEnum.BREITLING,
    logoImg: "public/assets/Images/Brands_Logos/breitling_logo.PNG",
    displayOrder: 22,
    website: "https://www.breitling.com",
    description:
      "Breitling is a Swiss luxury watchmaker specializing in technical watches, particularly chronographs.",
    foundedInformation: {
      year: 1884,
      details: "Founded in Saint-Imier, Switzerland",
    },
    displayBySeries: true,
    backgrounImages: ["public/assets/Images/Brands_Backgrounds/Breitling_1_Background.JPG"],
  },
  {
    name: BrandsEnum.OMEGA,
    logoImg: "public/assets/Images/Brands_Logos/omega_logo.PNG",
    displayOrder: 23,
    website: "https://www.omegawatches.com",
    description: "Omega SA is a Swiss luxury watchmaker famed for its innovative watchmaking.",
    foundedInformation: {
      year: 1848,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Omega_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Omega_2_Background.JPG",
    ],
    displayBySeries: true,
  },
  {
    name: BrandsEnum.CHOPARD,
    logoImg: "public/assets/Images/Brands_Logos/chopard_logo.PNG",
    displayOrder: 24,
    website: "https://www.chopard.com",
    description:
      "Chopard is a Swiss manufacturer and retailer of luxury watches, jewelry, and accessories.",
    foundedInformation: {
      year: 1860,
      details: "Founded in Sonvilier, Switzerland",
    },
    displayBySeries: true,
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Chopard_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Chopard_2_Background.JPG",
    ],
  },
  {
    name: BrandsEnum.TAG_HEUER,
    logoImg: "public/assets/Images/Brands_Logos/tag_heuer_logo.PNG",
    displayOrder: 25,
    website: "https://www.tagheuer.com",
    description:
      "TAG Heuer is a Swiss luxury watchmaker known for its sports watches and chronographs.",
    foundedInformation: {
      year: 1860,
      details: "Founded in Saint-Imier, Switzerland",
    },
    displayBySeries: true,
    backgrounImages: ["public/assets/Images/Brands_Backgrounds/Tag_Heuer_1_Background.JPG"],
  },
  {
    name: BrandsEnum.PORSCHE_DESIGN,
    logoImg: "public/assets/Images/Brands_Logos/porsche_design_logo.PNG",
    displayOrder: 26,
    website: "https://www.porsche-design.com",
    description:
      "Porsche Design is a German company known for its high-end accessories, including watches.",
    foundedInformation: {
      year: 1972,
      details: "Founded in Stuttgart, Germany",
    },
    displayBySeries: false,
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Porsche_Design_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Porsche_Design_2_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Porsche_Design_3_Background.JPG",
    ],
  },
  {
    name: BrandsEnum.MAURICE_LACROIX,
    logoImg: "public/assets/Images/Brands_Logos/maurice_lacroix_logo.PNG",
    displayOrder: 27,
    website: "https://www.mauricelacroix.com",
    description:
      "Maurice Lacroix is a Swiss luxury watchmaker recognized for its commitment to traditional watchmaking craftsmanship combined with modern design.",
    foundedInformation: {
      year: 1975,
      details: "Founded in Saignelégier, Switzerland",
    },
    displayBySeries: false,
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Maurice_Lacroix_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Maurice_Lacroix_2_Background.JPG",
    ],
  },
  {
    name: BrandsEnum.RAYMOND_WEIL,
    logoImg: "public/assets/Images/Brands_Logos/Raymond_weil_logo.PNG",
    displayOrder: 28,
    website: "https://www.raymond-weil.com",
    description:
      "Raymond Weil is a Swiss luxury watchmaker known for its elegant and refined timepieces.",
    foundedInformation: {
      year: 1976,
      details: "Founded in Geneva, Switzerland",
    },
    displayBySeries: false,
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Raymond_Weil_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Raymond_Weil_2_Background.JPG",
    ],
  },
  {
    name: BrandsEnum.TISSOT,
    logoImg: "public/assets/Images/Brands_Logos/tissot_logo.PNG",
    displayOrder: 29,
    website: "https://www.tissotwatches.com",
    description:
      "Tissot is a Swiss watchmaker offering a wide range of timepieces that combine precision and style.",
    foundedInformation: {
      year: 1853,
      details: "Founded in Le Locle, Switzerland",
    },
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Tissot_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Tissot_2_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Tissot_3_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Tissot_4_Background.JPG",
    ],
    displayBySeries: true,
  },
  {
    name: BrandsEnum.SEIKO,
    logoImg: "public/assets/Images/Brands_Logos/seiko_logo.PNG",
    displayOrder: 30,
    website: "https://www.seikowatches.com",
    description:
      "Seiko is a Japanese watchmaker renowned for its technological advancements and wide range of timepieces.",
    foundedInformation: {
      year: 1881,
      details: "Founded in Tokyo, Japan",
    },
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Seiko_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Seiko_2_Background.JPG",
    ],
    displayBySeries: true,
  },
  {
    name: BrandsEnum.PRYNGEPS,
    logoImg: "public/assets/Images/Brands_Logos/pryngeps_logo.PNG",
    displayOrder: 31,
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
    logoImg: "public/assets/Images/Brands_Logos/titus_logo.PNG",
    displayOrder: 32,
    website: "https://www.solvil-et-titus.com",
    description:
      "Solvil et Titus is a Swiss luxury watch brand known for its heritage and craftsmanship.",
    foundedInformation: {
      year: 1887,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
  },
  /*{
    name: BrandsEnum.HEUER,
    logoImg: "public/assets/Images/Brands_Logos/heuer_logo.PNG",
    displayOrder: undefined,
  },*/

  {
    name: BrandsEnum.UNIVERSAL_GENEVE,
    logoImg: "public/assets/Images/Brands_Logos/universal_geneve_logo.PNG",
    displayOrder: 34,
    website: "https://www.universalgeneve.com/",
    description:
      "Universal Genéve is a Swiss luxury watch brand known for its heritage, in-house movements and craftsmanship.",
    foundedInformation: {
      year: 1894,
      details: "Founded in Le Locle, Switzerland",
    },
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Universal_Geneve_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Universal_Geneve_3_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Universal_Geneve_2_Background.JPG",
    ],
  },
  {
    name: BrandsEnum.NOVART,
    logoImg: "public/assets/Images/Brands_Logos/novart_logo.PNG",
    displayOrder: 37,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
    displayBySeries: true,
  },

  {
    name: BrandsEnum.TIMEX,
    logoImg: "public/assets/Images/Brands_Logos/timex_logo.PNG",
    displayOrder: undefined,
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
    logoImg: "public/assets/Images/Brands_Logos/Lucerne_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.LORUS,
    logoImg: "public/assets/Images/Brands_Logos/lorus_logo.PNG",
    displayOrder: undefined,
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
    logoImg: "public/assets/Images/Brands_Logos/celsus_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.CAUNY,
    logoImg: "public/assets/Images/Brands_Logos/cauny_logo.PNG",
    displayOrder: 39,
    website: "https://www.cauny.com",
    description:
      "Cauny is a historic watch brand known for its elegant designs and quality craftsmanship.",
    foundedInformation: {
      year: 1927,
      details: "Founded in La Chaux-de-Fonds, Switzerland",
    },
    displayBySeries: true,
  },
  {
    name: BrandsEnum.CUERVO_Y_SOBRINOS,
    logoImg: "public/assets/Images/Brands_Logos/cuervo_y_sobrinos_logo.PNG",
    displayOrder: 35,
    website: "https://www.cuervoysobrinos.com/en/",
    description:
      "Cuervo y Sobrinos is a historic watch brand known for its elegant designs and quality craftsmanship. \n\
      The company began as a jewelry store and later became known for its luxury watches",
    foundedInformation: {
      year: 1882,
      details: "Founded in Habana, Cuba",
    },
    backgrounImages: [
      "public/assets/Images/Brands_Backgrounds/Cuervo_y_Sobrinos_1_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Cuervo_y_Sobrinos_2_Background.JPG",
      "public/assets/Images/Brands_Backgrounds/Cuervo_y_Sobrinos_3_Background.JPG",
    ],
    displayBySeries: true,
  },

  {
    name: BrandsEnum.CERTINA,
    logoImg: "public/assets/Images/Brands_Logos/certina_logo.PNG",
    displayOrder: undefined,
    website: "https://www.certina.com/en",
    description:
      "Certina is a historic watch brand known for its elegant designs and quality craftsmanship.",
    foundedInformation: {
      year: 1988,
      details: "Founded in Grenchen, Switzerland",
    },
    displayBySeries: false,
  },
  {
    name: BrandsEnum.CAMEL_TROPHY,
    logoImg: "public/assets/Images/Brands_Logos/camel_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.CORTICIMA,
    logoImg: "public/assets/Images/Brands_Logos/corticima_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },

  {
    name: BrandsEnum.ZODIAC,
    logoImg: "public/assets/Images/Brands_Logos/zodiac_logo.PNG",
    displayOrder: undefined,
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
    logoImg: "public/assets/Images/Brands_Logos/admes_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.ARGUS,
    logoImg: "public/assets/Images/Brands_Logos/argus_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.DOXA,
    logoImg: "public/assets/Images/Brands_Logos/doxa_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.AMER,
    logoImg: "public/assets/Images/Brands_Logos/amer_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.AMYRIA,
    logoImg: "public/assets/Images/Brands_Logos/amyria_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.BELEX,
    logoImg: "public/assets/Images/Brands_Logos/belex_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.BERGEON,
    logoImg: "public/assets/Images/Brands_Logos/bergeon_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.BARRETT,
    logoImg: "public/assets/Images/Brands_Logos/barrett_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.CRISTAL_WATCH,
    logoImg: "public/assets/Images/Brands_Logos/cristal_watch_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.CALYPSO,
    logoImg: "public/assets/Images/Brands_Logos/calypso_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.ROYAL_GEOGRAPHICAL_SOCIETY,
    logoImg: "public/assets/Images/Brands_Logos/delma_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.EMES,
    logoImg: "public/assets/Images/Brands_Logos/Emes_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.ELETTA,
    logoImg: "public/assets/Images/Brands_Logos/eletta_logo.PNG",
    displayOrder: undefined,
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
    logoImg: "public/assets/Images/Brands_Logos/Ferrari_Watches_logo.PNG",
    displayOrder: undefined,
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
    logoImg: "public/assets/Images/Brands_Logos/Festina_Watches_logo.PNG",
    displayOrder: undefined,
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
    logoImg: "public/assets/Images/Brands_Logos/fontaine_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.FORTIS,
    logoImg: "public/assets/Images/Brands_Logos/fortis_logo.PNG",
    displayOrder: 40,
  },
  {
    name: BrandsEnum.GREENWICH,
    logoImg: "public/assets/Images/Brands_Logos/greenwich logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.HELMA,
    logoImg: "public/assets/Images/Brands_Logos/helma_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.HERMES,
    logoImg: "public/assets/Images/Brands_Logos/hermes_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.HIPCO,
    logoImg: "public/assets/Images/Brands_Logos/hipco_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.JAGUAR_FRAGRANCES,
    logoImg: "public/assets/Images/Brands_Logos/jaguar_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.KELTON,
    logoImg: "public/assets/Images/Brands_Logos/kelton_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.LANCO,
    logoImg: "public/assets/Images/Brands_Logos/lanco_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.LATINO,
    logoImg: "public/assets/Images/Brands_Logos/latino_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.LORENZ,
    logoImg: "public/assets/Images/Brands_Logos/lorenz_logo.PNG",
    displayOrder: undefined,
    website: "https://www.lorenz.it",
    description:
      "Lorenz is an Italian watch brand known for its blend of traditional craftsmanship and modern design.",
    foundedInformation: {
      year: 1934,
      details: "Founded in Milan, Italy",
    },
  },
  {
    name: BrandsEnum.MASERATI,
    logoImg: "public/assets/Images/Brands_Logos/maserati_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.MARTINI,
    logoImg: "public/assets/Images/Brands_Logos/martini_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.MERCEDES_BENZ,
    logoImg: "public/assets/Images/Brands_Logos/mercedes_benz_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.MIURA,
    logoImg: "public/assets/Images/Brands_Logos/miura_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.MONUMENTAL,
    logoImg: "public/assets/Images/Brands_Logos/monumental_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.NATALIS,
    logoImg: "public/assets/Images/Brands_Logos/natalis_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.NOBREZA,
    logoImg: "public/assets/Images/Brands_Logos/nobreza_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },

  {
    name: BrandsEnum.ONE,
    logoImg: "public/assets/Images/Brands_Logos/One_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.OMODOX,
    logoImg: "public/assets/Images/Brands_Logos/omodox_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.OLMA,
    logoImg: "public/assets/Images/Brands_Logos/olma_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.ORFINA,
    logoImg: "public/assets/Images/Brands_Logos/orfina_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.ORIENT,
    logoImg: "public/assets/Images/Brands_Logos/orient_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.PROVITA,
    logoImg: "public/assets/Images/Brands_Logos/Provita_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.POLJOT,
    logoImg: "public/assets/Images/Brands_Logos/poljot_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.PHILIP_WATCH,
    logoImg: "public/assets/Images/Brands_Logos/philipe_watch_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.RELIDE,
    logoImg: "public/assets/Images/Brands_Logos/relide_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.RONE,
    logoImg: "public/assets/Images/Brands_Logos/rone_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.ROMAR,
    logoImg: "public/assets/Images/Brands_Logos/romar_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.UTINA,
    logoImg: "public/assets/Images/Brands_Logos/utina_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.SIGNO,
    logoImg: "public/assets/Images/Brands_Logos/signo_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.SECTOR,
    logoImg: "public/assets/Images/Brands_Logos/sector_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.TONINO_LAMBORGHINI,
    logoImg: "public/assets/Images/Brands_Logos/tonino_lamborghini_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.TOURIST,
    logoImg: "public/assets/Images/Brands_Logos/tourist_logo.PNG",
    displayOrder: undefined,
  },
  {
    name: BrandsEnum.TISSOURE,
    logoImg: "public/assets/Images/Brands_Logos/tissoure_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
  {
    name: BrandsEnum.TAUNUS,
    logoImg: "public/assets/Images/Brands_Logos/taunus_logo.PNG",
    displayOrder: undefined,
    description: "Vintage Portuguese brand with Swiss Made parts and assembly.",
  },
];
