import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2014 Zodiac Sea Dragon ZO2237",
  sliderImages: [
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1283.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1284.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1285.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1286.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1287.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1288.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1289.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1290.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1291.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1292.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1293.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1294.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1295.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1296.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1297.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1298.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1299.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1300.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1301.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1302.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1303.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1304.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1281.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1282.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1287.JPG",
    "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/IMG_1277.JPG",
  ],
  sellReport: {
    price: 100,
    date: "29/01/2019",
    url: "https://www.catawiki.pt/l/23906989-zodiac-sea-dragon-zo2237-homem-2014",
  },
  technicalData: {
    features: ["Date", "100 meters"],

    information: {
      brand: BrandsEnum.ZODIAC,
      series: "Sea Dragon",
      catalogueReference: "ZO2237 - 01311",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "38 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Radial Brushed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.HARDLEX,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Dark Brown",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Rubber Tropic Strap",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Light turquoise",
    },

    movement: {
      title: "Ronda 715",
      description: "Very basic Quartz movement from Ronda normtech series. \n",

      usefullLinks: {
        "Technical Information from Ronda":
          "https://www.ronda.ch/en/movements/quartz-essentials/ronda-normtech-700-6000/caliber/715/",
      },
      sliderImages: [
        "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/715_M_front.PNG",
        "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/712_M_back.PNG",
        "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/mov (1).JPG",
        "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/mov (2).JPG",
        "public/assets/Images/Zodiac/2004_Zodiac_SeaDragon/mov (3).JPG",
      ],

      details: {
        manufacturer: "Ronda",
        modelReference: "715",
        type: "Quartz",
        battery: "371",
        jewels: "5 (Five) Jewels",
        functions:
          "Date, Hours, Minutes, Seconds, Power saving mechanism, up to 60 months battery life",
      },
    },
  },
};

export default details;
