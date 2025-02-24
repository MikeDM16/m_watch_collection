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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1991 Tissot PRX P475 Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6915.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6916.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6917.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6918.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6919.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6921.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6909.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6910.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6911.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6877.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6878.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6879.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6880.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6881.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6882.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6891.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6892.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6893.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6894.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6895.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6896.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6897.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6898.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6905.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6906.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6907.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6908.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6883.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6884.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6885.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6886.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6887.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6888.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6889.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6890.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6899.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6900.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6901.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6902.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6903.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6904.JPG",

    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6912.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6913.JPG",
    "public/assets/Images/Tissot/1991_Tissot_PRX_P475_Chrono/IMG_6914.JPG",
  ],

  saleReport: {
    price: 265,
    date: "01/07/2024",
    url: "https://www.catawiki.com/en/l/85556405-tissot-prx-waffle-dial-no-reserve-price-eta-22j-251-272-chronograph-men-1991",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_100_METERS],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.PRX,
      catalogueReference: "P475",
      productionYear: "1991",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Coin Detail bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Polished",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
