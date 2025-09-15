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
  title: "2005 Tissot PR 100 Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4750.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4751.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4752.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4753.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4754.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4755.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4756.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4757.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4759.JPG",

    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4775.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4776.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4777.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4778.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4782.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4784.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4785.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4786.JPG",

    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4760.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4761.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4762.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4763.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4764.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4765.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4766.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4767.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4768.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4769.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4770.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4771.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4772.JPG",
    "public/assets/Images/Tissot/2005_Tissot_PR_100_Chronograph/IMG_4773.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_100,
      catalogueReference: "P372/472",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "40 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Hexa Gold Plated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
