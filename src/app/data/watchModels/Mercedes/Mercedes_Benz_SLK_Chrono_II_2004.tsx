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
  title: "2004 Mercedes Benz SLK Design 1469/2004",
  sliderImages: [
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1733.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1734.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1735.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1736.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1737.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1738.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1739.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1740.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1741.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1742.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1743.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1744.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1745.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1746.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1747.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1748.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1749.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1750.JPG",
    "public/assets/Images/Mercedes/2004_Mercedes_SLK_Chrono_II/IMG_1751.JPG",
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
      diameter: "39 mm",
      thickness: "12 mm",
      material: "Aluminium",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Matte",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather - Racing Style",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Red",
    },

    movement: MovementsDataDB.MIYOTA_OS60,
  },
};

export default details;
