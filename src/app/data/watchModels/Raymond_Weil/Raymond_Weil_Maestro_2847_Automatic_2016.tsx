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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2016 Raymond Weil Jazzmaster Maestro Automatic",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7039.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7040.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7041.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7043.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7044.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7047.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7048.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7051.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7052.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7053.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7064.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7065.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7066.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7067.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7068.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7069.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7070.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7071.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7072.JPG",

    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7054.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7055.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7056.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7057.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7058.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7059.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7060.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7061.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7062.JPG",

    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7073.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7074.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7075.JPG",
    "public/assets/Images/Raymond_Weil/2016_Raymond_Weil_Maestro_Automatic/IMG_7076.JPG",
  ],

  saleReport: {
    price: 390,
    date: "24/07/2024",
    url: "https://www.catawiki.com/en/l/86336237-raymond-weil-jazzmaster-maestro-rw-4200-26-jewels-men-2016",
  },

  technicalData: {
    features: ["Date", "Automatic"],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: "Maestro",
      catalogueReference: "2837",
      productionYear: "2016",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Coin detailed bezel edge",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.RAYMON_WEIL_4200,
  },
};

export default details;
