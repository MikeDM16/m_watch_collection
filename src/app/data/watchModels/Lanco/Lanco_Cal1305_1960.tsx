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

const details: WatchDetails = {
  title: "1960 Lanco Cal. 1305",
  sliderImages: [
    "public/assets/Images/Lanco/1960_Lanco/IMG_2431.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2432.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2433.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2435.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2436.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2437.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2438.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2439.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2440.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2441.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2443.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2434.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2429.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2461.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2467.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2468.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2469.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2470.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2471.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2473.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2474.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2475.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2655.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2656.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2657.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2658.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2660.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2661.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2662.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2663.JPG",
    "public/assets/Images/Lanco/1960_Lanco/IMG_2666.JPG",
  ],
  sellReport: {
    price: 102,
    date: "13/07/2018",
    url: "https://www.catawiki.com/l/19682073-lanco-men-1950-1959",
  },
  technicalData: {
    features: ["Mechanical", "Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.LANCO,
      series: "-",
      catalogueReference: "-",
      productionYear: "1960",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "36 mm",
      thickness: "8 mm",
      material: "Gold Plated (20 \u339B) - SS case back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.POWDER_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: {
      title: "Langendorf 1305",
      description: " Gold plated in-house Lanco Movement. Incabloc from factory.",
      usefullLinks: {
        "Ranfft Langendorf 1305":
          "http://www.ranfft.de/cgi-bin/bidfun-db.cgi?10&ranfft&&2uswk&Langendorf_1305",
      },
      sliderImages: [
        "public/assets/Images/Lanco/1960_Lanco/mov1.PNG",
        "public/assets/Images/Lanco/1960_Lanco/mov2.PNG",
        "public/assets/Images/Lanco/1960_Lanco/mov3.PNG",
      ],
      details: {
        manufacturer: "Lanco (Lagendorf - Swiss Made)",
        modelReference: "1305",
        type: "Mechanical",
        frequency: "18000 A/h",
        jewels: "17 (Seventeen) Jewels ",
        reserve: "50 Hours",
        functions: "Hours, Minutes, Sweep Seconds at 6 o'clock position",
      },
    },
  },
};

export default details;
