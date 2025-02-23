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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2005 Tissot PRS 516 J562/662 Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4799.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4800.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4801.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4802.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4803.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4825.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4826.JPG",

    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4804.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4805.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4806.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4807.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4808.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4809.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4810.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4811.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4812.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4813.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4814.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4815.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4816.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4817.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4819.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4820.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4822.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4823.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4824.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4827.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4828.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4829.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4830.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4831.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4832.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4833.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4834.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4835.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4836.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PRS_516_Chrono/IMG_4837.JPG",
  ],
  sellReport: {
    price: 340,
    date: "13/07/2024",
    url: "https://www.catawiki.com/en/l/85967589-tissot-prs-516-limited-edition-pulsometer-chronograph-men-2005",
  },

  technicalData: {
    features: ["Date", "Chronograph", "Tachymeter", "Pulsometer", "50 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRS_516,
      catalogueReference: "J562/662",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Vertical Brushing",
      bezel: "Pulsometer / Tachymeter",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Racing style bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "21 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
