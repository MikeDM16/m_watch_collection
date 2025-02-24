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
  title: "1995 Jaguar Fragrances Chronograph - Limited Edition",

  sliderImages: [
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6598.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6599.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6600.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6601.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6602.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6604.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6605.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6606.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6607.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6609.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6610.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6611.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6612.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6613.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6614.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6615.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6616.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6617.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6618.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6619.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6620.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6621.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6622.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6623.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6624.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6625.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6626.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6627.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6628.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6629.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6630.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6631.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6632.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6633.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6634.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6635.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6636.JPG",
    "public/assets/Images/Jaguar/1995_Jaguar_Fragrances_Chrono_II/IMG_6637.JPG",
  ],
  saleReport: {
    price: 140,
    date: "21/04/2022",
    url: "https://www.catawiki.com/en/l/57915195",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.JAGUAR_FRAGRANCES,
      series: "Fragrances Collection - Limited Edition",
      catalogueReference: "-",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Chromed",
      bezel: "Uni-directional, 10-minute graduated",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather (Shark skin)",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.MIYOTA_OS10,
  },
};

export default details;
