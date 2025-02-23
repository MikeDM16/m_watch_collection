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
import { SeikoBrandSeries } from "./SeikoBrandSeries";

const details: WatchDetails = {
  title: "1994 Seiko 6M13 Perpetual Calendar - Age of Discoveries",

  sliderImages: [
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8172.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8173.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8174.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8174 2.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8175.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8176.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8177.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8178.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8179.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8180.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8181.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8182.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8182 2.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8183.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8184.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8185.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8186.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8187.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8188.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8189.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8190.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8191.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8192.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8193.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8194.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8195.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8196.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8197.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8198.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8199.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8200.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8202.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8203.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8203-2.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8204.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8205.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8206.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8207.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8208.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8209.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8210.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8211.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8212.JPG",
    "public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/IMG_8213.JPG",
  ],
  saleReport: {
    price: 490,
    date: "22/06/2022",
    url: "",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.PERPETUAL_CALENDAR,
      featuresEnum.ALARM,
      featuresEnum.WR_30_METERS,
    ],

    information: {
      brand: BrandsEnum.SEIKO,
      series: SeikoBrandSeries.AGE_OF_DISCOVERY_SERIES,
      catalogueReference: "6M13-0010 Perpetual Calendar (450111)",
      productionYear: "1994",
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
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Ligth Brown",
    },

    movement: {
      title: "Seiko 6M13",
      description: "",
      usefullLinks: {
        "Instruction manual/specs from Seiko": "../Files/SEIKO_6M25.pdf",
        "Seiko 6M13 Parts Catalogue": "../Files/1623_Seiko6M25A.pdf",
      },
      sliderImages: ["public/assets/Images/Seiko/1994_Seiko_6M13_Perpetual_Calendar/6M25-cal.JPG"],
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
