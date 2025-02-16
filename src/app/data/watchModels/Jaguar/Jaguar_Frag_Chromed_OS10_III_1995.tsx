import { MovementsDataDB } from "../../movementsData";
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
  title: "1995 Jaguar Fragrances Chronograph - Limited Edition",

  sliderImages: [
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6382.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6383.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6384.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6385.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6386.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6387.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6389.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6390.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6393.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6394.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6395.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6397.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6398.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6399.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6400.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6401.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6402.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6403.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6404.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6405.JPG",

    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6300.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6301.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6302.JPG",

    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6363.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6364.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6365.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6366.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6367.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6368.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6370.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6371.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6372.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6373.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6374.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6375.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6376.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6377.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6378.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6379.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6380.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_III/IMG_6381.JPG",
  ],
  sellReport: {
    price: 650,
    date: "17/06/2024",
    url: "https://www.catawiki.com/en/l/85116169",
  },
  technicalData: {
    features: ["Date", "Chronograph", "30 meters"],

    information: {
      brand: BrandsEnum.JAGUAR_FRAGRANCES,
      series: "Fragrances Collection - Limited Edition",
      catalogueReference: "-",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Chromed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Shark Skin Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.MIYOTA_OS10,
  },
};

export default details;
