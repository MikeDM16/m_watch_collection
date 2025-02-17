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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1995 Tag Heuer Professional Formula-1 WA1218",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2552.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2553.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2554.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2555.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2556.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2557.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2558.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2559.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2560.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2561.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2562.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2563.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2564.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2565.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2566.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2568.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2569.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2605.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2570.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2571.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2572.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2573.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2574.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2575.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2576.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2578.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2579.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2580.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2581.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2584.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2585.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2627.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2628.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2629.JPG",
  ],
  sellReport: {
    price: 329,
    date: "12/11/2023",
    url: "https://www.catawiki.com/en/l/76479139",
  },
  technicalData: {
    features: ["Date", "Push-in crown", "200 meters", "Uni-directional rotating bezel"],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.FORMULA_1_2RD_GEN,
      catalogueReference: "WA1218",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Matte",
      bezel: "Uni-directional, 5-minute graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.HEUER_4_96,
  },
};

export default details;
