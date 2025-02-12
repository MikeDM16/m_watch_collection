import { BrandsEnum } from "../enums/brands_enum";

export interface Brand {
  name: string;
  logo_img: string;
  display_order?: number | undefined;
}

export const brandsDB: Brand[] = [
  {
    name: BrandsEnum.ZENITH,
    logo_img: "public/assets/Images/Brands_Logos/zenith_logo.PNG",
    display_order: 20,
  },
  {
    name: BrandsEnum.EBERHARD,
    logo_img: "public/assets/Images/Brands_Logos/eberhard_logo.PNG",
    display_order: 21,
  },
  {
    name: BrandsEnum.BREITLING,
    logo_img: "public/assets/Images/Brands_Logos/breitling_logo.PNG",
    display_order: 22,
  },
  {
    name: BrandsEnum.OMEGA,
    logo_img: "public/assets/Images/Brands_Logos/omega_logo.PNG",
    display_order: 23,
  },
  {
    name: BrandsEnum.CHOPARD,
    logo_img: "public/assets/Images/Brands_Logos/chopard_logo.PNG",
    display_order: 24,
  },
  {
    name: BrandsEnum.TAG_HEUER,
    logo_img: "public/assets/Images/Brands_Logos/tag_heuer_logo.PNG",
    display_order: 25,
  },
  {
    name: BrandsEnum.PORSCHE_DESIGN,
    logo_img: "public/assets/Images/Brands_Logos/porsche_design_logo.PNG",
    display_order: 26,
  },
  {
    name: BrandsEnum.MAURICE_LACROIX,
    logo_img: "public/assets/Images/Brands_Logos/maurice_lacroix_logo.PNG",
    display_order: 27,
  },
  {
    name: BrandsEnum.RAYMOND_WEIL,
    logo_img: "public/assets/Images/Brands_Logos/Raymond_weil_logo.PNG",
    display_order: 28,
  },
  {
    name: BrandsEnum.TISSOT,
    logo_img: "public/assets/Images/Brands_Logos/tissot_logo.PNG",
    display_order: 29,
  },
  {
    name: BrandsEnum.SEIKO,
    logo_img: "public/assets/Images/Brands_Logos/seiko_logo.PNG",
    display_order: 30,
  },
  {
    name: BrandsEnum.PRYNGEPS,
    logo_img: "public/assets/Images/Brands_Logos/pryngeps_logo.PNG",
    display_order: 31,
  },

  {
    name: BrandsEnum.SOLVIL_ET_TITUS,
    logo_img: "public/assets/Images/Brands_Logos/titus_logo.PNG",
    display_order: 32,
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
  },
  {
    name: BrandsEnum.FERRARI,
    logo_img: "public/assets/Images/Brands_Logos/Ferrari_Watches_logo.PNG",
    display_order: undefined,
  },
  {
    name: BrandsEnum.FESTINA,
    logo_img: "public/assets/Images/Brands_Logos/Festina_Watches_logo.PNG",
    display_order: undefined,
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
