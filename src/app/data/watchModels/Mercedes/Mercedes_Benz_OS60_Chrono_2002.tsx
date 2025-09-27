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
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.WR_50_METERS,
      featuresEnum.TACHYMETER,
    ],

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
      crownType: CrownWatchTypeEnum.PUSH_PULL,
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

    movement: MovementsDataDB.MIYOTA_OS60,
  },
};

export default details;
