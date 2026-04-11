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

import movement_PIGUET_1270_22J from "../../movements/Piguet/Piguet_1270_22_Jewels";
import { WatchDetails } from "../../watchDetails";
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1988 Breitling Sextant B55047",

  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2472.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2473.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2474.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2475.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2476.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2477.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2478.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2479.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2480.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2481.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2482.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2493.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2494.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2495.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2496.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2497.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2489.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2490.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2491.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2492.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2483.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2484.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2485.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2486.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2487.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Sextant_B55047/IMG_2488.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.TACHYMETER],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.VINTAGE_SERIES,
      catalogueReference: "Chronomat Sextant (B55047)",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.RIDERS_TABS_15_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.MODENA_RED,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_PIGUET_1270_22J,
  },
};

export default details;
