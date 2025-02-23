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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2009 Tissot T-Touch Titanium",
  sliderImages: [
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9882.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9883.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9884.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9885.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9886.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9887.JPG",

    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9911.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9912.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9913.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9914.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9915.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9916.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9917.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9918.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9919.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9920.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9922.JPG",

    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9931.JPG",

    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9877.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9878.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9879.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9880.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9881.JPG",

    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9888.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9889.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9890.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9891.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9892.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9893.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9894.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9895.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9896.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9897.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9898.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9899.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9900.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9901.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9902.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9903.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9905.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9906.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9907.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9908.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9909.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9910.JPG",

    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9924.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9925.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9927.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9928.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9929.JPG",
    "public/assets/Images/Tissot/2016_Tissot_T-Touch/IMG_9930.JPG",
  ],
  saleReport: {
    price: 250,
    date: "14/09/2023",
    url: "https://www.catawiki.com/en/l/74330947-tissot-t-touch-ii-titanium-men-2016",
  },
  technicalData: {
    features: ["Date", "Chronograph", "Compass", "Meteo", "Altitude", "Alarm", "30 meters"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_TOUCH,
      catalogueReference: "T001520 A",
      productionYear: "2009",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "43 mm",
      thickness: "14 mm",
      material: "Titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "-",
      bezel: "bi-directional, compass graduated",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Orange",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Rubber",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Back with orange details",
    },

    movement: {
      title: " ETA E40.305",
      description:
        "Second generation Tissot T-Touch movement. \n \n" +
        "Alarm, Altitude Indicator, Thermometer, Compass.",
      usefullLinks: {},
      sliderImages: ["public/assets/Images/Tissot/2016_Tissot_T-Touch/ETA-E40_305.JPG"],

      details: {
        manufacturer: "ETA",
        modelReference: "E40.305",
        type: "Quartz",
        battery: "CR 1632",
        jewels: "0 Jewels",
        functions: "Chrono up to 1/10 seconds, Date, Thermometer, Altimeter, Compass, Meteo, Alarm",
      },
    },
  },
};

export default details;
