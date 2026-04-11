import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_ETA_251_272 from "../../movements/ETA/ETA_251_272_22J";
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

  saleReport: {
    price: 350,
    date: "25/09/2025",
    url: "https://www.catawiki.com/en/l/97911218",
  },

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
      diameter: CaseDiameterEnum.D_40,
      thickness: CaseThicknessEnum.T_10,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.HEXA_GOLD_PLATED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLACK,
    },

    movement: movement_ETA_251_272,
  },
};

export default details;
