import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2005 Ferrari Modena Red Chronograph",
  sliderImages: [
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2594.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2595.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2596.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2597.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2598.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2599.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2600.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2601.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2602.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2603.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2604.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2605.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2606.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2607.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2608.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2610.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2611.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2612.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2585.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2586.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2587.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2588.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2589.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2590.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2591.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2592.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2593.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2621.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2622.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2623.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2624.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2625.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2626.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2627.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2628.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2629.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2630.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2631.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2632.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2633.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2634.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2635.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2636.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2637.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2638.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2639.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2640.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2641.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2642.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2643.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2644.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2645.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2646.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2647.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2648.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2649.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2650.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2652.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2653.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2655.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2656.JPG",
    "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/IMG_2660.JPG",
  ],
  saleReport: {
    price: 330,
    date: "27/07/2020",
    url: "https://www.catawiki.com/l/39337225-watch-motorsport-modena-red-chronograph-ferrari-1990-2000",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.WR_200_METERS,
      featuresEnum.SCREWED_IN_CROWN,
    ],

    information: {
      brand: BrandsEnum.FERRARI,
      series: "Modena Chronograph",
      catalogueReference: "-",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "37 mm (40 with crown)",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_200M,
      finishingDetails: "Polished",
      bezel: "Circular Brushed",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Modema Red",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "SS Bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20-18 mm",
      color: "Two-tone (polished/brushed), Grey",
    },

    movement: {
      title: "Miyota OS60",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/0s60.pdf",
      },
      sliderImages: [
        "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/os60-1.JPG",
        "public/assets/Images/Ferrari/2005_Ferrari_Modena_Chrono/os60-2.JPG",
      ],
      details: {
        manufacturer: "Miyota (Citizen)",
        modelReference: "OS60",
        type: "Quartz",
        battery: "399 / SR927SW",
        jewels: "0 Jewels (None)",
        functions: "Chrono up to 12 hours 60min, Date, Hours, Minutes, Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
