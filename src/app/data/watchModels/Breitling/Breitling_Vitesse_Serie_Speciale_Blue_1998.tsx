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

import movement_ETA_Valjoux_7750_25J from "../../movements/ETA/ETA_Valjoux_7750_25J";
import { WatchDetails } from "../../watchDetails";
import { BreitlingBrandSeries } from "./BreitlingBrandSeries";

const details: WatchDetails = {
  title: "1998 Breitling Vitesse Serie Speciale Blue",

  sliderImages: [
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4384.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4385.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4386.JPG",

    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4387.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4388.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4389.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4390.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4392.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4407.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4409.JPG",
    // "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4410.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4393.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4394.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4406.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4408.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4411.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4412.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4452.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4454.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4458.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4459.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4460.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4461.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4467.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4468.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4469.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4470.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4471.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_0702.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4456.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4413.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4414.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4415.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4416.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4417.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4418.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4419.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4420.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4421.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4431.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4432.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4433.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4434.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4435.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4436.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4437.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4438.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4439.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4440.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4441.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4442.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4422.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4423.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4424.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4425.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4426.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4427.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4428.JPG",

    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4444.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4445.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4446.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4447.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4448.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4450.JPG",
    "public/assets/Images/Breitling/1998_Breitling_Vitesse_Serie_Speciale_Blue/IMG_4451.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC_CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.TACHYMETER,
      featuresEnum.SOLID_GOLD_BEZEL,
    ],

    information: {
      brand: BrandsEnum.BREITLING,
      series: BreitlingBrandSeries.CHRONOMAT_VITESSE,
      catalogueReference: "Serie Speciale - D13050 - 18K Gold Bezel (9g)",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.SS_GOLD_PUSHERS,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.GOLD_BEZEL,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.GREY,
    },

    movement: movement_ETA_Valjoux_7750_25J,
  },
};

export default details;
