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
import { TagHeuerBrandSeries } from "./TagHeuerBrandSeries";

const details: WatchDetails = {
  title: "1995 Tag Heuer Professional Formula-1 WA1219",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4768.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4769.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4770.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4771.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4772.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4773.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4774.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4775.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4776.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4777.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4778.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4779.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4780.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4781.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4782.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4784.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4785.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4786.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/IMG_4787.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/KOCK7746.JPG",
    "public/assets/Images/Tag_Heuer/1998_Tag_Heuer_F1_WA1219/UXRO8574.JPG",
  ],
  saleReport: {
    price: 188,
    date: "08/11/2019",
    url: "https://www.catawiki.com/l/30587787-tag-heuer-formula-1-professional-200m-waa1219-men-1990-1999",
  },
  technicalData: {
    features: ["Date", "Push-in crown", "200 meters", "Uni-directional rotating bezel"],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.FORMULA_1_2RD_GEN,
      catalogueReference: "WK1219",
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
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "F1 series Rubber strap",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Dark Blue",
    },

    movement: MovementsDataDB.HEUER_4_93,
  },
};

export default details;
