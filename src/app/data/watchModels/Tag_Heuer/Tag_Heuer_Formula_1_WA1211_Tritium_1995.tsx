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
  title: "1995 Tag Heuer Professional Formula-1 WA1211",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0344.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0345.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0346.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0347.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0348.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0349.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0350.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0351.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0352.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0353.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0354.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0355.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0356.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0357.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0358.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0359.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0359_1.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0360.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0361.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0362.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0363.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0364.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0365.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0366.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0367.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0368.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0369.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0370.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0371.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0372.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0373.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0375.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0049.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0050.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0051.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0334.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0335_1.JPG",
    "public/assets/Images/Tag_Heuer/1994_Tag_Heuer_F1_WA1211/IMG_0335.JPG",
  ],
  saleReport: {
    price: 280,
    date: "18/10/2020",
    url: "https://www.catawiki.com/l/30207381-tag-heuer-formula-1-professional-2000-wa1212-men-1990-1999",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,

      featuresEnum.WR_200_METERS,
      featuresEnum.UNI_DIRECTIONAL_BEZEL,
      featuresEnum.TRITIUM_DIAL,
    ],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.FORMULA_1_2RD_GEN,
      catalogueReference: "WK1211",
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
      color: "Beige (Tritium patina)",
      dialMarkers: DialMarketsEnum.ARROW,
      finishingDetails: FinishingDetailsEnum.TRITIUM_MARKERS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Jubilee style Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey metal",
    },

    movement: MovementsDataDB.HEUER_1_94,
  },
};

export default details;
