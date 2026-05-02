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

import movement_ETA_2894_2 from "../../movements/ETA/ETA_2894_2_37J";
import { WatchDetails } from "../../watchDetails";
import { ChopardBrandSeries } from "./ChopardBrandSeries";

const details: WatchDetails = {
  title: "2000 Chopard Mille Miglia Titanium",

  sliderImages: [
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3512.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3513.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3471.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3473.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3474.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3475.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3476.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3477.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3531.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3532.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3535.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3478.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3479.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3480.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3481.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3482.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3483.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3484.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3485.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3499.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3500.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3502.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3506.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3509.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3510.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3511.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3525.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3526.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3527.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3528.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3529.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3530.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3538.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3540.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3541.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3542.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3543.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3544.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3545.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3546.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3547.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3548.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3549.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3566.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3568.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3555.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3556.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3557.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3558.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3559.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3560.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3561.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3562.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3563.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3564.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3565.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3550.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3551.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3552.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3553.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3554.JPG",

    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3516.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3517.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3518.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3519.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3520.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3521.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3522.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3523.JPG",
    "public/assets/Images/Chopard/2000_Chopard_Mille_Miglia_Titanium/IMG_3524.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.CHOPARD,
      series: ChopardBrandSeries.MILLE_MIGLIA,
      catalogueReference: "8407 (779035)",
      productionYear: "2000",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.TITANIUM,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.TITANIUM_GREY,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_2894_2,
  },
};

export default details;
