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

import movement_Girard_Perregaux_2280 from "../../movements/Girard_Perregaux/Girard_Perregaux_2280";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2004 Girard Perregaux Ferrari Ref. 8020",

  sliderImages: [
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2567.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2569.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2570.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2571.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2572.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2573.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2574.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2575.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2576.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2577.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2578.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2579.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2580.JPG",

    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2581.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2582.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2583.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2584.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2585.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2586.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2587.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2588.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2589.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2591.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2593.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2595.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2597.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2598.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2599.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2600.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2601.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2602.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2603.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2604.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2605.JPG",
    "public/assets/Images/Girard_Perregaux/2024_Girard_Perregaux_Ferrari_R8020_45J/IMG_2606.JPG",
  ],

  technicalData: {
    features: [featuresEnum.AUTOMATIC_CHRONOGRAPH, featuresEnum.TACHYMETER],

    information: {
      brand: BrandsEnum.GIRARD_PERREGAUX,
      series: "Ferrari",
      catalogueReference: "Ref. 8020",
      productionYear: "2004",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_14,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.POLISHED,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.SS_POLISHED,
    },

    movement: movement_Girard_Perregaux_2280,
  },
};

export default details;
