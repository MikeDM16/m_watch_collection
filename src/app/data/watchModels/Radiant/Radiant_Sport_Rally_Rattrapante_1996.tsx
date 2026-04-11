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

import movement_ETA_251_262 from "../../movements/ETA/ETA_251_262_27J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1996 Radiant Sport Rally Rattrapante Chronograph",

  sliderImages: [
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0284.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0285.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0286.JPG",

    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0167.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0169.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0174.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0177.JPG",

    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0178.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0179.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0180.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0182.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0183.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0184.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0185.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0186.JPG",

    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0279.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0281.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0282.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0283.JPG",

    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0202.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0203.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0204.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0205.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0206.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0207.JPG",

    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0187.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0188.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0189.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0190.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0191.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0192.JPG",

    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0193.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0194.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0195.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0196.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0197.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0198.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0199.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0200.JPG",
    "public/assets/Images/Radiant/1996_Radiant_Rattrapante_Chrono/IMG_0201.JPG",
  ],

  saleReport: {
    price: 136,
    date: "18/02/2026",
    url: "https://www.catawiki.com/en/l/101342550",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.RADIANT,
      series: "Sport Rally",
      catalogueReference: "251262",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_11,
      material: CaseMaterialEnum.SS_GOLD_PLATED,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.BRUSHED,
      bezel: BezelTypeEnum.GRADUATED_10_MIN,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_251_262,
  },
};

export default details;
