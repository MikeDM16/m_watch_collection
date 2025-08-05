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
  title: "1942 Doxa Antimagnetic",
  sliderImages: [
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2593.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2594.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2597.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2599.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2600.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2601.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2602.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2603.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2604.JPG",

    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2576.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2578.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2579.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2581.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2583.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2584.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2587.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2589.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2590.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2592.JPG",

    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2613.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2614.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2615.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2617.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2621.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2622.JPG",

    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2605.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2606.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2607.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2608.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2609.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2610.JPG",
    "public/assets/Images/Doxa/1945_Doxa_Antimagnetic/IMG_2612.JPG",
  ],
  saleReport: {
    price: 201,
    date: "24/07/2025",
    url: "https://www.catawiki.com/en/l/96715979",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.DOXA,
      series: "Antimagnetic",
      catalogueReference: "-",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "7 mm",
      material: "Gold Plated (20 \u339B)",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Champagne",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.DOXA_83_4_987_17J,
  },
};

export default details;
