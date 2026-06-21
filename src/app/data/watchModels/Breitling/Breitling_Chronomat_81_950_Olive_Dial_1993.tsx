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
  title: "1993 Breitling Chronomat 81.950 Olive Dial",

  sliderImages: [
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0271.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0273.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0274.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0275.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0276.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0330.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0331.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0277.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0278.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0279.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0280.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0281.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0282.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0283.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0284.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0285.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0287.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0310_1.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0312.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0315.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0401.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0402.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0403.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0405.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0317.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0318.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0319.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0327.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0328.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0329.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0291_1.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0292.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0293.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0294.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0295.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0296.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0297.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0298.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0299.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0288_1.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0289_1.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0290_1.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0300.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0301.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0302.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0303.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0304.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0305.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0306.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0307_1.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0308_1.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_81950_Green/IMG_0309_1.JPG",

    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0514.JPG",
    "public/assets/Images/Breitling/1993_Breitling_Chronomat_D13047/IMG_0517.JPG",
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
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT.CHRONOMAT_EARLY,
      catalogueReference: "81.950 (Early Generation)",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_PUSHERS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.SANDBLASTED,
      bezel: BezelTypeEnum.RIDERS_TABS_MINUTE,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.GREEN,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_Valjoux_7750_17J,
  },
};

export default details;
