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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1968 Tissot Seastar PR 516 GL",
  sliderImages: [
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4156.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4157.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4159.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4177.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4178.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4179.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4186.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4187.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4188.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4189.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4190.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4191.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4190.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4183.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4184.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4185.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4146.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4147.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4148.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4149.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4151.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4152.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4153.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4154.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4155.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4160.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4161.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4162.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4163.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4164.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4165.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4166.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4167.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4168.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4169.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4170.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4171.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4172.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4175.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4176.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4180.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4181.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4182.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4193.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4194.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4195.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4196.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4197.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4374.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4375.JPG",
    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/IMG_4376.JPG",

    "public/assets/Images/Tissot/1968_Tissot_Seastar_PR516_GL/serial_number.JPG",
  ],

  saleReport: {
    price: 240,
    date: "16/10/2024",
    url: "https://www.catawiki.com/en/l/89257329-tissot-pr-516-gl-seastar-automatic-no-reserve-price-cal-784-1-21-jewels-men-1968",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      "Movement with production number 10339554, dating the watch back to 1968",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PR_516_VINTAGE,
      catalogueReference: "GL Visodate 46572-3X",
      productionYear: "1968",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "36 mm",
      thickness: "13 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical brushed polishing",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.DAY_DATE_AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.TISSOT_794,
  },
};

export default details;
