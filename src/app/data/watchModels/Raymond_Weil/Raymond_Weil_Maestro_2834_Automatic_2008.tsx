import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "2008 Raymond Weil Maestro Automatic",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5299.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5300.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5325.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5301.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5302.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5303.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5304.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5305.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5306.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5307.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5308.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5292.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5293.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5295.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5296.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5297.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5309.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5310.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5311.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5312.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5313.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5314.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5315.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5316.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5323.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5324.JPG",

    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5317.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5318.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5319.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5320.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5321.JPG",
    "public/assets/Images/Raymond_Weil/2008_Raymond_Weil_Maestro_2834/IMG_5322.JPG",
  ],

  saleReport: {
    price: 430,
    date: "13/10/2025",
    url: "https://www.catawiki.com/en/l/98307799",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.MAESTRO,
      catalogueReference: "2834 (X485010)",
      productionYear: "2008",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold Plated 10 \u339B",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Coin detailed bezel edge",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "19 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_2834,
  },
};

export default details;
