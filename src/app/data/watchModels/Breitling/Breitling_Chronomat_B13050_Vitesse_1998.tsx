import { MovementsDataDB } from "../../movementsData";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";
import { WatchDetails } from "../../watchDetails";
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1998 Breitling Chronomat Vitesse B13050",
  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_4278.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_4288.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_4273.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_4275.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_4277.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3433.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3434.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3436.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3626.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3627.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3628.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3629.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3630.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3631.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3632.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3633.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3634.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3646.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3647.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3648.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3649.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3650.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3651.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3652.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3653.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3654.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3655.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3656.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3657.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3658.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3659.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3660.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3661.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3662.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3663.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3665.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3666.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3667.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3419.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3420.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3421.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3422.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3426.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3427.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3428.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3429.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3668.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3669.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3670.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3672.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3673.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3395.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3396.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3397.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3398.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3635.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3636.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3637.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3638.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3639.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3641.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3642.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3643.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3644.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_Vitesse_B13050/IMG_3645.JPG",
  ],

  technicalData: {
    features: ["Date", "Automatic Chronograph", "100 meters", "Screw-in crown", "Tachymeter"],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT,
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
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ETA_Valjoux_7750_25J,
  },
};

export default details;
