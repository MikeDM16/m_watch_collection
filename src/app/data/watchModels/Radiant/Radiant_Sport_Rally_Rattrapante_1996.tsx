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
      diameter: "39 mm",
      thickness: "11 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Brushed",
      bezel: "10 minute graduated",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
