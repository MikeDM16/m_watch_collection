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

import movement_ETA_Valjoux_7750_25J from "../../movements/ETA/ETA_Valjoux_7750_25J";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2014 Tissot PRS 516 Special Nascar Edition",

  sliderImages: [
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3148.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3149.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3150.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3151.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3152.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3154.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3156_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3158_1.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3115_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3116.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3117.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3118.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3119.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3120.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3121.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3122.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3123_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3124.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3129_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3130.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3131.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3132.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3133.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3134.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3135.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3136.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3137.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3138.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3163.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3104_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3105_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3106_1.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3161.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3162.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3125.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3126_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3127_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3128.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3159_1.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3160.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3139.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3140.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3141.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3142.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3143.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3144.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3145.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3146.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_7750/IMG_3147.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRS_516,
      catalogueReference: "Valjoux J564/664",
      productionYear: "2014",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_42,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_21,
      color: ColorEnum.DARK_BLUE,
    },

    movement: movement_ETA_Valjoux_7750_25J,
  },
};

export default details;
