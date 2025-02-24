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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2011 Tissot PRS 200 T362/462 Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0598.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0599.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0600.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0601.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0602.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0603.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0604.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0605.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0608.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0609.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0610.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0611.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0612.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0613.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0614.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0615.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0616.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0617.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0618.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0619.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0620.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0621.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0622.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0623.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0624.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0625.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0627.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0628.JPG",
    "public/assets/Images/Tissot/2011_Tissot_PRS_200_T362246/IMG_0629.JPG",
  ],
  saleReport: {
    price: 190,
    date: "23/11/2020",
    url: "https://www.catawiki.com/l/42743199",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_200_METERS,
      featuresEnum.SCREWED_IN_CROWN,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRS_200,
      catalogueReference: "T362/462",
      productionYear: "2011",
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
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Gray",
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
