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
  title: "1996 Breitling Chronomat B13050 Blue Dial",

  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2804.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2806.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2807.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2809.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2810.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2812.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2813.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2814.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2815.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2816.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2817.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2818.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2819.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2820_1.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2821.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2822.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2838.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2839.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2840.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2841.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2842.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2843.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2844.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2845.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2846.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2847.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2849.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2850.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2827.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2828.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2829.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2830.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2831.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2832.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2833.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2834.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2835.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2836.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2837.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2860.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2861.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2862.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2863.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2864.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2865.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2866.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2867.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2869.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2871.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2823.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2824.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2825.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2826.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2851.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2852.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2853.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2854.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2855.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2856.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2857.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2858.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2859.JPG",
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
      catalogueReference: "B13050",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.RIDERS_TABS_MINUTE,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.DARK_BLUE,
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
