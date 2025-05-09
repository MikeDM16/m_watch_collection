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
  title: "1996 Maurice Lacroix 5393 Chrono",
  sliderImages: [
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8947.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8948.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8949.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8950.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8951.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8952.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8953.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8954.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8955.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8956.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8957.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8958.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8959.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8961.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8962.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8963.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8964.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8965.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8966.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8967.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8968.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8970.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8971.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8972.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8973.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8974.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8975.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8976.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8977.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8978.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8979.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8980.JPG",
    "public/assets/Images/Maurice_Lacroix/2021_Maurice_Lacroix_5393_Chrono/IMG_8981.JPG",
  ],
  saleReport: {
    price: 400,
    date: "24/07/2022",
    url: "",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.MAURICE_LACROIX,
      series: MauriceLacroixBrandSeries.MONZA_CHRONOGRAPH,
      catalogueReference: "5393",
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
      bezel: "Polished bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Red",
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
