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
  title: "1942 Universal Geneve Mécanique Cal. 262",
  sliderImages: [
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2623.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2624.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2625.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2626.JPG",

    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2635.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2636.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2637.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2638.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2639.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2640.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2641.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2642.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2643.JPG",

    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2628.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2629.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2630.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2631.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2633.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2634.JPG",

    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2663.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2664.JPG",

    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2644.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2645.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2646.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2647.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2648.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2649.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2650.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2651.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2652.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2655.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2656.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2657.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2658.JPG",
    "public/assets/Images/Universal_Geneve/1942_Universal_Geneve_cal_262/IMG_2659.JPG",
  ],

  saleReport: {
    price: 700,
    date: "24/07/2025",
    url: "https://www.catawiki.com/en/l/96716167",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.UNIVERSAL_GENEVE,
      series: "Mécanique",
      catalogueReference: "31229",
      productionYear: "1942",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Chromed",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Polished bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "White Enamel",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.UNIVERSAL_GENEVE_262_17J,
  },
};

export default details;
