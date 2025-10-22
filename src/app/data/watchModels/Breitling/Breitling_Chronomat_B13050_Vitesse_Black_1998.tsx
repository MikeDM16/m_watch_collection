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
  title: "1998 Breitling Chronomat Vitesse B13050",
  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6654.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6656.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6657.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6683.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6686.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6688.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6629.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6630.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6631.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6632.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6633.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6635.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6636.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6658.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6659.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6660.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6661.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6663.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6665.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6666.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6668.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6689.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6690.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6691.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6638.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6639.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6641.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6642.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6643.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6644.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6645.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6648.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6650.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6651.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_5052.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6669.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6670.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6671.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6672.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6673.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6674.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6675.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6676.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6677.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6679.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6680.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6681.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6682.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6693.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6694.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6695.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6696.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6697.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6698.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050_Black/IMG_6699.JPG",
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
      series: BreitlingBrandSeries.CHRONOMAT_VITESSE,
      catalogueReference: "Vitesse (B13050.1 138371 Acier)",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Stainless Steel - Gold Pushers and tabs",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Minute graduated, Chronomat Riders Tabs bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather Strap",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Dark Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
