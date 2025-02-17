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
  title: "1999 Tag Heuer Professional 2000 WK1213",
  sliderImages: [
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4631.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4632.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4635.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4637.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4638.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4641.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4642.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4643.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4644.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4645.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4646.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4648.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4649.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4650.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4651.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4652.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4653.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4654.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4655.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4656.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4657.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4658.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4659.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4660.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4661.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4662.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4663.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4664.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4665.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4666.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4667.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4668.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4669.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4670.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4671.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4672.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4673.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4676.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4679.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4680.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4682.JPG",
    "public/assets/Images/Tag_Heuer/1999_Tag_Heuer_Pro2000/IMG_4684.JPG",
  ],
  sellReport: {
    price: 480,
    date: "15/05/2024",
    url: "https://www.catawiki.com/en/l/83708237",
  },

  technicalData: {
    features: ["Date", "Screw-in crown", "200 meters", "Uni-directional rotating bezel"],

    information: {
      brand: BrandsEnum.TAG_HEUER,
      series: TagHeuerBrandSeries.PROFESSIONAL_2000_SERIES,
      catalogueReference: "WK1213",
      productionYear: "1999",
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
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.POWDER_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.HEUER_1_93,
  },
};

export default details;
