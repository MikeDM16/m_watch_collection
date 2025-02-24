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

import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "2004 Mercedes Benz SLK Limited Edition 1469/2004",
  sliderImages: [
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1714.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1715.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1716.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1717.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1718.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1719.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1720.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1721.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1722.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1723.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1724.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1725.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1726.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1727.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1728.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1729.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1730.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1731.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1732.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1651.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/IMG_1652.JPG",
  ],
  saleReport: {
    price: 350,
    date: "08/07/2020",
    url: "https://www.catawiki.com/l/38771563-watch-mercedes-benz-slk-limited-ed-n-1469-2004-mercedes-benz-after-2000",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.MERCEDES_BENZ,
      series: "SLK Design",
      catalogueReference: "-",
      productionYear: "2004",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "37 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.CARBON_FIBER,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather - Racing Style",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Red",
    },

    movement: {
      title: "Miyota OS60",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/0s60.pdf",
      },
      sliderImages: [
        "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/os60-1.JPG",
        "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_I/os60-2.JPG",
      ],
      details: {
        manufacturer: "Miyota (Citizen)",
        modelReference: "OS60",
        type: "Quartz",
        battery: "399",
        jewels: "0 Jewels (None)",
        functions: "Chrono up to 12 hours 60min, Date, Hours, Minutes, Seconds at 6 o'clock",
      },
    },
  },
};

export default details;
