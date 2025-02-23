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
  title: "1991 Seiko 7T36 Moonphase Chronograph - Age of Discoveries",

  sliderImages: [
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3421.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3422.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3423.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3424.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3425.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3426.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3428.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3429.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3430.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3431.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3432.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3433.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3434.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3435.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3437.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3439.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3440.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3441.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3442.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3443.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3444.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3445.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3446.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3447.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3448.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3449.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3450.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3451.JPG",
    "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/IMG_3442.JPG",
  ],
  sellReport: {
    price: 510,
    date: "06/12/2023",
    url: "https://www.catawiki.com/en/l/77571295-seiko-age-of-discoveries-nos-moonphase-chrono-jdm-7t36-men-1991",
  },
  technicalData: {
    features: ["Date", "Moonphase", "Alarm", "30 meters"],

    information: {
      brand: BrandsEnum.SEIKO,
      series: SeikoBrandSeries.AGE_OF_DISCOVERY_SERIES,
      catalogueReference: "Moonphase Chronograph - 7T36-7410 (157436)",
      productionYear: "1991",
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
      calendar: CalendarWatchTypeEnum.DAY,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: {
      title: "Seiko 7T36",
      description: "",
      usefullLinks: {},
      sliderImages: [
        "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/7T36_B_1.JPG",
        "public/assets/Images/Seiko/1991_Seiko_7T36_7410_Moonphase_chrono/7T36_B_2.JPG",
      ],
      details: {
        manufacturer: "Seiko",
        modelReference: "7T36",
        type: "Quartz",
        battery: "399 / SR 927 W",
        jewels: "0 (Zero) Jewels",
        functions: "Hours, minutes, Moonphase, Date, Alarm, Smooth Seconds Chrono",
      },
    },
  },
};

export default details;
