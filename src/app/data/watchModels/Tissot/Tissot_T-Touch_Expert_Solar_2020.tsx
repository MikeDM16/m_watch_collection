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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2020 Tissot T-Touch Expert Solar Titanium",
  sliderImages: [
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0390.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0391.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0392.JPG",

    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0409.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0411.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0412.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0413.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0416.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0417.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0418.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0419.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0421.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0422.JPG",

    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0431.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0432.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0433.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0434.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0435.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0436.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0437.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0438.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0439.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0440.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0441.JPG",

    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0393.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0394.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0395.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0396.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0398.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0399.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0400.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0401.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0402.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0403.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0404.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0405.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0406.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0407.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0408.JPG",

    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0442.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0444.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0445.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0446.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0447.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0448.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0449.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0450.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0451.JPG",

    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0423.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0424.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0425.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0426.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0427.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0428.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0429.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0430.JPG",

    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0452.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0453.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0454.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0455.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0457.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0458.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0459.JPG",
    "public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/IMG_0460.JPG",
  ],
  saleReport: {
    price: 450,
    date: "11/09/2024",
    url: "https://www.catawiki.com/en/l/87939911",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.COMPASS,
      featuresEnum.METEO,
      featuresEnum.ALTITUDE,
      featuresEnum.ALARM,
      featuresEnum.WR_100_METERS,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_TOUCH,

      catalogueReference: "Expert Solar T091420 A",
      productionYear: "2020",
      movementType: MovementWatchTypeEnum.SOLAR,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "43 mm",
      thickness: "12 mm",
      material: "Titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "-",
      bezel: "Hour graduated",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Dark Purple (Sollar Cells)",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Links Bracelete - Titanium",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "22 mm",
      color: "Titanium Grey",
    },

    movement: {
      title: " ETA E84.301",
      description:
        "Movement for Tissot T-Touch. Functions include Air pressure , Alarm , Alarm II, Altimeter, Azimuth, Backlight, Chronograph, Compass, Date, Mulitple Time-zones, Multifunction Touch Features.",
      usefullLinks: {},
      sliderImages: ["public/assets/Images/Tissot/2020_Tissot_T_Touch_Expert_Solar/E84_301_1.JPG"],

      details: {
        manufacturer: "ETA",
        modelReference: "E84.301",
        type: "Solar",
        battery: "None - Solar cells",
        jewels: "0 Jewels",
        functions: "Chrono up to 1/10 seconds, Date, Thermometer, Altimeter, Compass, Meteo, Alarm",
      },
    },
  },
};

export default details;
