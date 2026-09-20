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
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4469.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4412.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4413.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4418.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4420.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4421.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4422.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4423.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4424.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4425.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4427.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4449.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4450.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4451.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4452.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2845.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2846.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2847.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2849.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2850.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4414.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4415.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4416.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4417.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2838.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2839.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2840.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4428.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4430.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4431.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4433.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4434.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4447.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4448.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4438.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4439.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4440.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4441.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4442.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4443.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4444.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4445.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4446.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2844.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4453.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4454.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4455.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4457.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4458.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4459.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4460.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4461.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4462.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4463.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4464.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4465.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4466.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4468.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2854.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2855.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2856.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_2857.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4435.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Chronomat_B13050_Blue_Dial/IMG_4436.JPG",
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
