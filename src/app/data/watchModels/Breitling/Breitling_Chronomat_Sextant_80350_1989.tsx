import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
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
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1989 Breitling Chronomat Sextant 80350 Chronograph",
  sliderImages: [
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7811.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7812.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7813.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7814.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7757.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7758.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7759.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7760.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7761.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7762.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7763.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7764.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7765.JPG",

        "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7796.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7797.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7798.JPG",
    
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7804.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7805.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7807.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7808.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7809.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7810.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7778.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7779.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7780.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7781.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7782.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7783.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7784.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7785.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7786.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7787.JPG",




    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7801.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7803.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7776.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7777.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7766.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7767.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7788.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7789.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7790.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7791.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7799.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7800.JPG",

    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7821.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7822.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7823.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7824.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7825.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7826.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7827.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7828.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7829.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7830.JPG",
    "public/assets/Images/Breitling/1989_Breitling_Chronomat_Sextant_1270_22J/IMG_7831.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.TACHYMETER],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.VINTAGE_SERIES,
      catalogueReference: "Chronomat Sextant (80350)",
      productionYear: "1989",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "36 mm",
      thickness: "12 mm",
      material: "Stainless Steel - Gold Details",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Rider Tabs, 15 min graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Dark Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Polished",
    },

    movement: MovementsDataDB.PIGUET_1270_22J,
  },
};

export default details;
