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
  title: "1974 Tissot Seastar Navigator Chrono",
  sliderImages: [
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_2.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_1.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/catalogue_3.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0030.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0031.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0033.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0034.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0044.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0119.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0041.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0043.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0117.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0115.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0118.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0116.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0037.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0113.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0114.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0083.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0084.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0085.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0088.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6436.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6437.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6438.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6439.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6440.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6441.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6443.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6444.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_6445.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/manufacture_date.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0092.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0093.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0094.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0095.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0096.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0097.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0098.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0103.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0104.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0105.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0106.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0107.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0109.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0110.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0111.JPG",

    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0099.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0100.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0101.JPG",
    "public/assets/Images/Tissot/1974_Tissot_Seastar_Navigator_Chrono/IMG_0102.JPG",
  ],
  saleReport: {
    price: 900,
    date: "08/06/2025",
    url: "https://www.catawiki.com/en/l/95741480",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      "Movement with production number 18890993, dating the watch back to 1974",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.NAVIGATOR,
      catalogueReference: "Seastar - 40522-1 (15) (18890993)",
      productionYear: "1974",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "41 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Slight Vertical brush",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TISSOT_2060_7734_17J,
  },
};

export default details;
