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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2008 Timex Power Reserve T2M515",

  sliderImages: [
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0319.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0320.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0321.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0322.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0323.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0324.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0325.JPG",

    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0338.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0339.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0340.JPG",

    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0326.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0327.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0328.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0329.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0330.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0331.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0332.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0330.JPG",

    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0334.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0335.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0336.JPG",
    "public/assets/Images/Timex/2008_Timex_T2M515_Power_Reserve/IMG_0337.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TIMEX,
      series: "Power Reserve",
      catalogueReference: "T2M515",
      productionYear: "2008",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_45,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.UNI_10_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.DAY_DATE_SUBDIALS,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.WHITE,
    },

    movement: MovementsDataDB.SEAGULL_ST2505,
  },
};

export default details;
