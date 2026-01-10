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
  title: "1991 Pryngeps Regolo 1467",
  sliderImages: [
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1601.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1602.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1603.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1605.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1606.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1607.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1608.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1609.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1610.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1612.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1613.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1614.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1615.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1616.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1617.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1618.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1619.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1620.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1621.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1622.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1623.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1624.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1625.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1626.JPG",
  ],
  saleReport: {
    price: 110,
    date: "09/03/2020",
    url: "https://www.catawiki.com/l/35158771-pryngeps-regolo-tri-compax-prepetual-calendar-1467-b-new-old-stock-men-1980-1989",
  },
  technicalData: {
    features: [
      featuresEnum.TRI_COMPAX_CALENDAR,
      featuresEnum.REGOLO_BEZEL,
      featuresEnum.WR_30_METERS,
    ],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Regolo",
      catalogueReference: "1467",
      productionYear: "1991",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "36 mm",
      thickness: "9 mm",
      material: "Stainless Steel - Gold plated details",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Regolo graduated bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.ANUAL,
    },

    bracelet: {
      material: "Suede Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.FE_TRIPLE_CALENDAR_5J,
  },
};

export default details;
