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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1995 Tag Heuer Professional Formula-1 WA1219",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2586.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2587.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2588.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2589.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2590.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2591.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2592.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2593.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2594.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2595.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2596.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2597.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2598.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2599.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2601.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2602.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2603.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2604.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2605.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2606.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2607.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2608.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2609.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2610.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2611.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2612.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2613.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2614.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2615.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2616.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1219/IMG_2617.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2620.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2622.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2623.JPG",
    "public/assets/Images/Tag_Heuer/1995_Tag_Heuer_F1_WA1218/IMG_2626.JPG",
  ],
  saleReport: {
    price: 425,
    date: "21/11/2023",
    url: "https://www.catawiki.com/en/l/76812413",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_200_METERS, featuresEnum.UNI_DIRECTIONAL_BEZEL],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.FORMULA_1_2RD_GEN,
      catalogueReference: "WA1219",
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
      crownType: CrownWatchTypeEnum.PUSH_PULL,
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

    movement: MovementsDataDB.HEUER_1_97,
  },
};

export default details;
