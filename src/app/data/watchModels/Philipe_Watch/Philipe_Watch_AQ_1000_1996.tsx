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
  title: "1996 Philip Watch AQ 1000 Chrono",
  sliderImages: [
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0073.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0074.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0075.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0076.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0077.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0078.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0079.JPG",

    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0086.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0087.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0088.JPG",

    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0068.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0069.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0070.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0071.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0072.JPG",

    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0093.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0094.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0095.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0096.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0097.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0098.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0099.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0100.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0101.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0160.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0161.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0162.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0163.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0164.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0165.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0166.JPG",

    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0080.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0081.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0082.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0083.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0084.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0085.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0089.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0090.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0091.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0092.JPG",

    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0465.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0466.JPG",
    "public/assets/Images/Philip_Watch/1996_Philip_Watch_AQ_1000/IMG_0467.JPG",
  ],

  saleReport: {
    price: 114,
    date: "11/09/2024",
    url: "https://www.catawiki.com/en/l/87939373",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.PHILIP_WATCH,
      series: "Chronograph",
      catalogueReference: "-",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Brushed",
      bezel: "Polshed bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Green",
    },

    movement: MovementsDataDB.ETA_251_265,
  },
};

export default details;
