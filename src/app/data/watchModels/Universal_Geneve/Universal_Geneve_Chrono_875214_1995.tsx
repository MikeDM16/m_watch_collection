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
  title: "1995 Universal Geneve 875.214 Chrono",
  sliderImages: [
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6713.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6714.JPG",

    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6686.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6687.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6688.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6689.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6690.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6691.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6692.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6693.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6694.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6695.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6696.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6697.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6698.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6699.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6700.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6701.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6702.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6703.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6704.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6705.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6706.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6707.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6708.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6709.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6710.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6711.JPG",
    "public/assets/Images/Universal_Geneve/1995_Universal_Geneve_875_214/IMG_6712.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.UNIVERSAL_GENEVE,
      series: "Chronograph",
      catalogueReference: "875.214",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "37 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Polished bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Stainless Steel",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
