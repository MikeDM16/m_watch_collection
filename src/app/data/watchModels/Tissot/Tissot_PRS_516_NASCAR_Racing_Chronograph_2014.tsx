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
  title: "2014 Tissot PRS 516 NASCAR Racing Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4275.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4276.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4277.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4281.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4282.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4284.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4285.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4286.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4287.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4288.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4289.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4291.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4292.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4302.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4303.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4305.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4295.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4296.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4297.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4299.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4300.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4301.JPG",

    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4306.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4308.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4309.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4310.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4311.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4312.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4313.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4314.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4315.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4316.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4317.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4318.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4319.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4320.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4321.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4322.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4323.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4324.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4325.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4326.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4327.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4328.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4330.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4332.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4333.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4334.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4335.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4336.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4337.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4338.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4339.JPG",
    "public/assets/Images/Tissot/2014_Tissot_NASCAR_Racing_White_Blue_V7750/IMG_4340.JPG",
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
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_ETA_Valjoux_7750_25J,
  },
};

export default details;
