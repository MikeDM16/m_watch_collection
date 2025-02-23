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
import { SeikoBrandSeries } from "./SeikoBrandSeries";

const details: WatchDetails = {
  title: "1992 Seiko 6M13 Perpetual Calendar - Age of Discoveries",

  sliderImages: [
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3157.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3158.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3159.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3160.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3161.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3162.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3163.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3164.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3165.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3166.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3167.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3168.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3169.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3170.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3171.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3172.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3173.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3174.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3175.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3176.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3177.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3178.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3179.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3180.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3181.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3182.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3183.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3184.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3185.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3186.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3187.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3188.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3189.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3190.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3191.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3192.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3193.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3194.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3195.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3196.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3197.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3198.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3199.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3200.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3201.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3202.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3203.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3204.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3205.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3206.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3207.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3208.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3209.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3211.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3212.JPG",
    "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/IMG_3213.JPG",
  ],
  saleReport: {
    price: 450,
    date: "22/10/2022",
    url: "",
  },
  technicalData: {
    features: ["Date", "Perpetual Calendar", "Alarm", "30 meters"],

    information: {
      brand: BrandsEnum.SEIKO,
      series: SeikoBrandSeries.AGE_OF_DISCOVERY_SERIES,
      catalogueReference: "6M13-0010 Perpetual Calendar (230834)",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Detailed",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.HARDLEX,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.PERPETUAL,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: {
      title: "Seiko 6M13",
      description: "",
      usefullLinks: {
        "Instruction manual/specs from Seiko": "../Files/SEIKO_6M25.pdf",
        "Seiko 6M13 Parts Catalogue": "../Files/1623_Seiko6M25A.pdf",
      },
      sliderImages: [
        "public/assets/Images/Seiko/1992_Seiko_6M13_0010_Perpetual_Calendar/6M25-cal.JPG",
      ],
      details: {
        manufacturer: "Seiko",
        modelReference: "6M13",
        type: "Quartz",
        battery: "399 / SR 927 W",
        jewels: "9 (Nine) Jewels",
        functions: "Hours, minutes, Perpetual Calendar, Date, Alarm, Month",
      },
    },
  },
};

export default details;
