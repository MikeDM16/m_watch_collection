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

import movement_ETA_251_262 from "../../movements/ETA/ETA_251_262_27J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1995 Pryngeps Rattrapante Chronograph",

  sliderImages: [
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4486.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4487.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4489.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4490.JPG",

    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4484.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4477.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4479.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4483.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4480.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4481.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4482.JPG",

    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4491.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4492.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4493.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4494.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4495.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4496.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4497.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4498.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4513.JPG",

    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4518.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4519.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4522.JPG",

    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4501.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4502.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4503.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4504.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4505.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4506.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4507.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4508.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4509.JPG",

    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4499.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4500.JPG",

    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4510.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4511.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4512.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4514.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4515.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4516.JPG",
    "public/assets/Images/Pryngeps/1995_Pryngeps_Rattrapante_251262/IMG_4517.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Rattrapante Chronograph",
      catalogueReference: "4.091.4.0.03",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_PLATED_10,
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.CLOUD_DE_PARIS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_251_262,
  },
};

export default details;
