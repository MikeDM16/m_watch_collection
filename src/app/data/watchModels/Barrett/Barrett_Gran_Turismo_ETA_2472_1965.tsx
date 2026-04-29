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

import movement_ETA_2472 from "../../movements/ETA/ETA_2472_25J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1965 Barrett Gran Turismo ETA 2472",
  sliderImages: [
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3261.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3262.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3266.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3267.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3268.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3269.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3270.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3271.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3272.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3273.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3288.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3289.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3290.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3292.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3294.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3295.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3297.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3300.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3276.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3277.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3278.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3280.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3281.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3282.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3283.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3284.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3285.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3286.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_3287.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.BARRETT,
      series: "Gran Turismo",
      catalogueReference: "42574 (Brevet 238872)",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.VERTICAL_BRUSHED,
      bezel: BezelTypeEnum.ENGINE_TURNED,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.GREY,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BORDEAUX,
    },

    movement: movement_ETA_2472,
  },
};

export default details;
