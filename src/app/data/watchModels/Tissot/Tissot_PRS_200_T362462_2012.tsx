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
  title: "2012 Tissot PRS 200 T362/462 Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4788.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4789.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4791.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4792.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4795.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4796.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4797.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4798.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4799.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4800.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4801.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4802.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4803.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4804.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4805.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4806.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4807.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4808.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4809.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4810.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4811.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4812.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4813.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4814.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4815.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4816.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4817.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4818.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4819.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4820.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4821.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4823.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4824.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4825.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4827.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4830.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4831.JPG",
    "public/assets/Images/Tissot/2012_Tissot_PRS_200_T362462/IMG_4832.JPG",
  ],
  sellReport: {
    price: 240,
    date: "28/05/2024",
    url: "https://www.catawiki.com/en/l/84216155",
  },

  technicalData: {
    features: ["Date", "Chronograph", "Tachymeter", "200 meters", "Screw-in crown"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: "PRS 200",
      catalogueReference: "T362/462",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DIVE,
    },

    case: {
      diameter: "41 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Polished",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
