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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2005 Tissot T-Tracx Mother of Pearl Lady Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0294.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0295.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0296.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0297.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0298.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0299.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0300.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0301.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0317.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0318.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0302.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0303.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0304.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0305.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0306.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0307.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0308.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0309.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0310.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0311.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0312.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0313.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0314.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0315.JPG",
    "public/assets/Images/Tissot/2005_Tissot_T_Tracx_MOP/IMG_0316.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_100_METERS,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_SPORTS,
      catalogueReference: "T-Tracx Mother of Pearl",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_45,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_RUBBER_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE_MOTHER_OF_PEARL,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.RUBBER,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_22,
      color: ColorEnum.WHITE,
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
