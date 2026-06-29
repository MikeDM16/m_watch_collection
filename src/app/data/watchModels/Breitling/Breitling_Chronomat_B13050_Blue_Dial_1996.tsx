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
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0830.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0834.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0835.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0837.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0838.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0839.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0840.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0841.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0842.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0843.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0844.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0846.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0847.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0852.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0853.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0876.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0877.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0879.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0880_1.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0881.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0882.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0883.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0884.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0885.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0887.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0888.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0891.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0893.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0800.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0854.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0855.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0856.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0857.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0858.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0859.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0861.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0862.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0863.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0816.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0817.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0818.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0864.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0865.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0848.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0849.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0850.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0851.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0867.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0868.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0869.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0870.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0871.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0872.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0873.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0874.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0875.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0819.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0820.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0821.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0822.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0823.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0824.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0825.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0826.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0827.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_0828.JPG",
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
