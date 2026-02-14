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
  title: "1996 Lorenz Classic Chronograph Valjoux 7760",

  sliderImages: [
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0471.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0472.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0473.JPG",

    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0400.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0401.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0402.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0403.JPG",

    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0404.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0405.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0406.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0407.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0408.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0409.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0411.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0427.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0428.JPG",

    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0342.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0343.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0344.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0346.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0347.JPG",

    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0412.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0413.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0414.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0415.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0416.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0417.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0418.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0419.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0420.JPG",

    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0421.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0422.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0423.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0424.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0425.JPG",
    "public/assets/Images/Lorenz/1996_Lorenz_Classic_Chrono_7760/IMG_0426.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_10_METERS],

    information: {
      brand: BrandsEnum.LORENZ,
      series: "Classic",
      catalogueReference: "12719",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "12 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROUND,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_Valjoux_7760_17,
  },
};

export default details;
