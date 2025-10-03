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
  title: "1964 Tissot Seastar Visodate T.12 Automatic",
  sliderImages: [
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1267.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1268.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1264.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1266.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1269.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1271.JPG",

    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1233.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1235.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1236.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1237.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1238.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1240.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1241.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1242.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1243.JPG",

    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1252.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1253.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1254.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1255.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1256.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1258.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1261.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1263.JPG",

    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1244.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1245.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1246.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1247.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1248.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1249.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1250.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1251.JPG",

    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/tissot_manufacturing_dates.JPG",

    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1204.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1205.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1207.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1208.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1209.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1210.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1211.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1213.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1214.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1215.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1216.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1217.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1218.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1219.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1220.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1221.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1223.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1224.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1225.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1226.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1227.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1228.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1229.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1231.JPG",
    "public/assets/Images/Tissot/1964_Tissot_T12_Automatic/IMG_1232.JPG",
  ],

  saleReport: {
    price: 282,
    date: "24/09/2025",
    url: "https://www.catawiki.com/en/l/97911370",
  },

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      "Movement with production number 6922170, dating the watch back to 1964.",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T12,
      catalogueReference: "Visodate Seastar T.12 44514-4",
      productionYear: "1964",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Beige",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.TISSOT_784,
  },
};

export default details;
