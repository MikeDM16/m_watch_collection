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
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "2005 Porsche Design Dashboard P6612/14 Titanium",
  sliderImages: [
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3363.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3364.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3365.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3366.JPG",

    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3369.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3370.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3371.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3372.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3374.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3375.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3376.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3377.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3378.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3379.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_7023.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_7024.JPG",

    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3328.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3327.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3326.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3313.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3314.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3317.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3319.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3321.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3323.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3322.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3324.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3325.JPG",

    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3329.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3331.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3333.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3334.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3335.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3336.JPG",

    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3301.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3302.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3303.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3304.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3305.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3306.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3307.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3309.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3310.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3311.JPG",

    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3337.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3338.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3339.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3340.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3341.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3342.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3343.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3345.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3346.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3348.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3349.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3350.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3351.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3352.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3353.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3354.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3355.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3356.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3357.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3358.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3359.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3360.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3361.JPG",
    "public/assets/Images/Porsche_Design/2025_Porsche_Design_P6612_Black_Titan/IMG_3362.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.DASHBOARD,
      catalogueReference: "P6612.14/1 159.568",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_42,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.TITANIUM,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.NONE,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.TITANIUM_GREY,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER_RACING,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.BLACK,
    },

    movement: movement_ETA_2894_2,
  },
};

export default details;
