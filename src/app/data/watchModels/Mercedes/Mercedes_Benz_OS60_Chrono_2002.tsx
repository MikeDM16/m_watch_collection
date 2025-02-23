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
  title: "2002 Mercedes Benz Chronograph",
  sliderImages: [
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0475.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0476.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0477.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0478.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0479.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0480.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0481.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0482.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0483.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0484.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0485.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0486.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0487.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0488.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0489.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0490.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0491.JPG",
    "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/IMG_0493.JPG",
  ],
  saleReport: {
    price: 170,
    date: "12/12/2019",
    url: "https://www.catawiki.com/l/32661279",
  },
  technicalData: {
    features: ["Date", "Chronograph", "50 meters", "Tachymeter"],

    information: {
      brand: BrandsEnum.MERCEDES_BENZ,
      series: "Chronograph",
      catalogueReference: "-",
      productionYear: "2002",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Tachymeter graduated bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Dark Grey",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: {
      title: "Miyota OS60",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/0s60.pdf",
      },
      sliderImages: [
        "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/os60-1.JPG",
        "public/assets/Images/Mercedes/1996_Mercedes_Chrono_OS60/os60-2.JPG",
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
