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
  title: "2001 Pryngeps CR763 Chronograph",
  sliderImages: [
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3224.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3225.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3226.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3227.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3228.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3229.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3230.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3231.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3232.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3233.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3234.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3235.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3236.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3237.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3238.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3239.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3240.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3280.JPG",
    "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/IMG_3281.JPG",
  ],
  saleReport: {
    price: 132,
    date: "02/06/2019",
    url: "https://www.catawiki.pt/l/27028151-pryngeps-swiss-timonier-series-chronograph-cal-citizen-os60-homem-2000-2010",
  },
  technicalData: {
    features: ["Date", "Chronograph", "100 meters", "Tachymeter"],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Chronograph",
      catalogueReference: "CR763",
      productionYear: "2001",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "40 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Gold plated details",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter graduated bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Black",
    },

    movement: {
      title: "Miyota OS60",
      description: "",
      usefullLinks: {
        "Instruction Manual from Miyota": "../Files/0s60.pdf",
      },
      sliderImages: [
        "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/os60-1.JPG",
        "public/assets/Images/Pryngeps/2001_Pryngeps_CR763/os60-2.JPG",
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
