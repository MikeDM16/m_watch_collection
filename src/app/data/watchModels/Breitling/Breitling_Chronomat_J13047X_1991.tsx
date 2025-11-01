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
  title: "1991 Breitling Chronomat J13047x White Gold 018/100",
  sliderImages: [
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2978.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2980.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2982.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2979.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2983.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2973.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2976.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2977.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2984.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2985.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2986.JPG",

    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3003.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3004.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3005.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3006.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3007.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3008.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3009.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3011.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3012.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3013.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3014.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3015.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3016.JPG",

    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2987.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2988.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2990.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2991.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2994.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2996.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3001.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_1538.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_1540.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3002.JPG",

    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3017.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3019.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3020.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3021.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3022.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3023.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3024.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3025.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3026.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3027.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3030.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3031.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3032.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3033.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3034.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3035.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3036.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3037.JPG",

    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2967.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2971.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2970.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_2972.JPG",

    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3043.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3044.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3045.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3046.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3047.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3048.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3049.JPG",
    "public/assets/Images/Breitling/1991_Breitling_J13047X_018/IMG_3050.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT,
      catalogueReference: "J13047X - Limited Edition 018/100",
      productionYear: "1991",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "13 mm",
      material: "Solid White Gold 18K (0.750) (72g)",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
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
      material: "Genuine Breitling Crocodile Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Bourdeaux Red",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_17J,
  },
};

export default details;
