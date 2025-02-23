import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
  title: "2010 Tissot PRS 200 T362/462K Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2368.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2369.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2370.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2371.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2372.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2373.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2374.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2375.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2376.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2377.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2378.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2379.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2380.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2381.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2382.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2383.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2384.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2385.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2386.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2387.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2388.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2389.JPG",
    "public/assets/Images/Tissot/2010_Tissot_PRS_200/IMG_2390.JPG",
  ],
  saleReport: {
    price: 130,
    date: "17/05/2019",
    url: "https://www.catawiki.com/l/26885215-tissot-prs-200-t362-462k-men-2011-present",
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
      catalogueReference: "T362/462K",
      productionYear: "2010",
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
      color: "Black",
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
