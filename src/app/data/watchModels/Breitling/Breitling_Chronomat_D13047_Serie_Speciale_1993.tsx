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

import movement_ETA_Valjoux_7750_17J from "../../movements/ETA/ETA_Valjoux_7750_17J";
import { WatchDetails } from "../../watchDetails";
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1993 Breitling Chronomat D13047 Serie Speciale",

  sliderImages: [
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0440.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0441.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0442.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0443.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0444.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0445.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0447.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0496.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0497.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0498.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0499.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0500.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0501.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0503.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0504.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0505.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0506.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0507.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0508.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0509.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0702.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0448.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0449.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0450.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0451.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0452.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0453.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0455.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0457.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0458.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0459.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0463.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0465.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0466.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0467.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0468.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0469.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0470.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0471.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0472.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0473.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0474.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0475.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0477.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0460.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0461.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0462.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0478.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0479.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0480.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0481.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0482.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0483.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0484.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0485.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0486.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0487.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0488.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0489.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0490.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0491.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0492.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0493.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0494.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0514.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0517.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.SOLID_GOLD_BEZEL,
      "Transitional model between the old and new reference formats, featuring both the early reference 81.950 and the newer D13047. The 'D' prefix denotes the 18k solid gold bezel.",
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT.CHRONOMAT_EARLY,
      catalogueReference: "Serie Speciale - D13047 81.950 - 18K Gold Bezel (9g)",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.GOLD_BEZEL,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_ETA_Valjoux_7750_17J,
  },
};

export default details;
