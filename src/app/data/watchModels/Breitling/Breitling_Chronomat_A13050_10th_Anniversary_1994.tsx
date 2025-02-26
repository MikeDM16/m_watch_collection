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
  title: "1994 Breitling Chronomat 10th Anniversary COSC Limited Edition",
  sliderImages: [
    /*
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_4266.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_4268.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_4269.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_4272.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3578.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3579.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3580.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3583.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3585.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3586.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3587.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3588.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3589.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3590.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3591.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3592.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3593.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3594.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3595.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3596.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3597.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3598.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3622.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3623.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3624.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3625.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3355.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3356.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3357.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3358.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3359.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3364.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_7641.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3365.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3366.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3608.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3609.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3610.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3611.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3612.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3613.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3614.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3615.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3616.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3617.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3618.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3619.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3620.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3621.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3599.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3600.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3602.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3603.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3604.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3605.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3606.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_7650.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_7651.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3678.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_3679.JPG",
    */

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9356.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9357.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9268.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9267.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9271.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9272.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9276.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9331.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9333.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9334.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9335.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9336.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9339.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9346.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9321.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9322.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9323.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9325.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9326.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9328.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9329.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9330.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9351.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9352.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9353.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9354.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9355.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9340.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9341.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9342.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9343.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9344.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9345.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9347.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9348.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9349.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9350.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9278.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9280.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9281.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9283.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9284.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9285.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9286.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9287.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9288.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9290.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9291.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9292.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9294.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9303.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9304.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9305.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9306.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9307.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9308.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9309.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9295.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9296.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9298.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9299.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9300.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9301.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9310.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9311.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9312.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9313.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9314.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9315.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9316.JPG",

    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9317.JPG",
    "public/assets/Images/Breitling/1994_Breitling_Chronomat_10th_Anniversary_A13050/IMG_9318.JPG",
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
      series: BreitlingBrandSeries.CHRONOMAT,
      catalogueReference: "10ht Anniversary Limited Edition 1157/1994 (A13050)",
      productionYear: "1994",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Minute graduated, Chronomat Riders Tabs bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_17J,
  },
};

export default details;
