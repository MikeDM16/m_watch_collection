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

const details: WatchDetails = {
  title: "1975 Lucerne Three Stars",

  sliderImages: [
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1466.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1467.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1468.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1469.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1470.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1471.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1472.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1473.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1475.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1476.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1477.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1478.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1479.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1480.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1481.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1482.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1406.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1408.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1410.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1411.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1413.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1414.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1415.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1416.JPG",
    "public/assets/Images/Lucerne/1975_Lucerne_PR/IMG_1419.JPG",
  ],
  saleReport: {
    price: 80,
    date: "14/02/2019",
    url: "https://www.catawiki.com/l/24263323-lucerne-pr-style-nos-model-gold-plated-case-and-back-men-1960-1969",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.LUCERNE,
      series: "Mechanical",
      catalogueReference: "-",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "14 mm",
      material: "Gold Plated case and back",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical Brushed",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.UNITAS_6380,
  },
};

export default details;
