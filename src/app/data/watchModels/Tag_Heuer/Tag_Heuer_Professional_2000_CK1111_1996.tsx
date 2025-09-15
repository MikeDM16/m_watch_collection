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
  title: "1996 Tag Heuer Professional 2000 CK1111",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3232.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3233.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3238.JPG",

    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3239.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3240.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3241.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3242.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3243.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3244.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3245.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3246.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3247.JPG",

    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3274.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3276.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3278.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3279.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3281.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3283.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3284.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3285.JPG",

    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3252.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3253.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3254.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3255.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3256.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3250.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3258.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3259.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3260.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3261.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3262.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3263.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3264.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3265.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3266.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3267.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3268.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3269.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3270.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3271.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3272.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3273.JPG",

    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3248.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3249.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3250.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3251.JPG",

    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3235.JPG",
    "public/assets/Images/Tag_Heuer/1996_Tag_Heuer_Professional_2000_CK1111/IMG_3236.JPG",
  ],

  saleReport: {
    price: 650,
    date: "021/09/2025",
    url: "https://www.catawiki.com/en/l/97500593",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_2000_SERIES,
      catalogueReference: "CK1111-0",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Sand-blasted",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.HEUER_2_00,
  },
};

export default details;
