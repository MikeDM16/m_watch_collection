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
import { MauriceLacroixBrandSeries } from "./MauriceLacroixBrandSeries";

const details: WatchDetails = {
  title: "1996 Maurice Lacroix 5872 Monza Chrono",
  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8020.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8021.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8022.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8024.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8025.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8026.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8027.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8028.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8029.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8030.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8031.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8032.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8033.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8034.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8035.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8036.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8037.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8038.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8039.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8040.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8041.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8040.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8043.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8044.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8045.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8046.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8047.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8048.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8049.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8050.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8051.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8051.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8053.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8055.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8056.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5872_Chrono/IMG_8057.JPG",
  ],
  saleReport: {
    price: 500,
    date: "04/08/2023",
    url: "https://www.catawiki.com/en/l/72819585-maurice-lacroix-monza-chronograph-schumacher-eta-251-264-27j-men-1996",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.MONZA_CHRONOGRAPH,
      catalogueReference: "5872",
      productionYear: "1996",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "37 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Brushed",
      bezel: "Polshed bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Yellow",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.ENAMEL,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Dark Green",
    },

    movement: MovementsDataDB.ETA_251_262,
  },
};

export default details;
