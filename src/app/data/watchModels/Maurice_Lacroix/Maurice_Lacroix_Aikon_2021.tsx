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
import { MauriceLacroixBrandSeries } from "./MauriceLacroixBrandSeries";

const details: WatchDetails = {
  title: "2021 Maurice Lacroix Aikon Chronograph",
  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2054.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2055.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2056.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2057.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2058.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2059.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2060.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2061.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2062.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2065.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2066.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2067.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2068.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2069.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2071.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2072.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2073.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2076.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2077.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2078.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2079.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2080.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2081.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2082.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2083.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2084.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2085.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2086.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2087.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2088.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2089.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2092.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2093.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2095.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/IMG_2096.JPG",
  ],
  saleReport: {
    price: 650,
    date: "09/11/2023",
    url: "https://www.catawiki.com/en/l/76230157",
  },
  technicalData: {
    features: ["Date", "Chronograph", "100 meters", "Screw-in crown"],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.AIKON,
      catalogueReference: "Aikon Chronograph - AI 1018",
      productionYear: "2021",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "44 mm",
      thickness: "14 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Polished bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Green",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Rubber",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "24 mm",
      color: "Green",
    },

    movement: {
      title: "Ronda 3540.D",
      description: "High quality quartz chronograph from Ronda.",
      usefullLinks: {
        "Ronda Caliber 3540.D": "https://calibercorner.com/ronda-caliber-3540-d/",
      },
      sliderImages: [
        "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_Aikon_Chrono/ronda_3540d.JPG",
      ],
      details: {
        manufacturer: "Ronda",
        modelReference: "3540.D",
        type: "Quartz Chrono",
        jewels: "5 (five) Jewels ",
        functions: "Date, Hours, Minutes, Seconds at 6 o'clock, 30min 1/10 Chronograph",
      },
    },
  },
};

export default details;
