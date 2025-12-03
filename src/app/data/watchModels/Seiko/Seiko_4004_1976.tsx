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
import { SeikoBrandSeries } from "./SeikoBrandSeries";

const details: WatchDetails = {
  title: "1976 Seiko Type II 4004",

  sliderImages: [
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4073.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4074.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4082.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4083.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4085.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4086.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4088.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4089.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4090.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4091.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4093.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4094.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4095.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4096.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4075.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4076.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4077.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4078.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4080.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4081.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4105.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4106.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4107.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4108.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4109.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4110.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4111.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4124.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4125.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4126.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4127.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4128.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4129.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4131.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4132.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4133.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4134.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4135.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4136.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4137.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4138.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4140.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4142.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4143.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4144.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4145.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4370.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4372.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4371.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4098.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4099.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4100.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4101.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4102.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4103.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4104.JPG",

    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4112.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4113.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4116.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4117.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4118.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4119.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4120.JPG",
    "public/assets/Images/Seiko/1976_Seiko_4004/IMG_4121.JPG",
  ],

  saleReport: {
    price: 170,
    date: "15/10/2024",
    url: "https://www.catawiki.com/en/l/89258183-seiko-type-ii-snowflake-4004-men-1976",
  },

  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.SEIKO,
      series: SeikoBrandSeries.VINTAGE_SERIES,
      catalogueReference: "Type II - 0903-8019 (661506)",
      productionYear: "1976",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "10 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.SNOWFLAKE_PATTERN,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Grey",
    },

    movement: {
      title: "Seiko 0903A",
      description:
        "Early model of the second generation range (Type II) of the Seiko early quartz calibers.",
      usefullLinks: {},
      sliderImages: [
        "public/assets/Images/Seiko/1976_Seiko_4004/0903A-1.JPG",
        "public/assets/Images/Seiko/1976_Seiko_4004/0903A-2.JPG",
      ],
      details: {
        manufacturer: "Seiko",
        modelReference: "0903A (4004)",
        type: "Quartz",
        battery: "SR43SW / 301",
        jewels: "2 (Two) Jewels",
        functions: "Day/Date, Hours, minutes, seconds",
      },
    },
  },
};

export default details;
