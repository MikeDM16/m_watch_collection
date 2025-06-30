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
  title: "2008 Tissot T-Race T472S Chronograph",
  sliderImages: [
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0404.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0405.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0406.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0407.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0408.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0409.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0410.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0411.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0412.JPG",

    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0418.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0419.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0420.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0421.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0422.JPG",

    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0430.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0431.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0432.JPG",

    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0443.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0444.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0445.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0446.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0447.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0449.JPG",

    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0433.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0434.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0435.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0436.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0437.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0438.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0439.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0440.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0441.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0442.JPG",

    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0413.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0414.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0415.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0416.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0417.JPG",

    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0424.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0425.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0428.JPG",
    "public/assets/Images/Tissot/2008_Tissot_T_Race_T472S/IMG_0429.JPG",
  ],
  saleReport: {
    price: 192,
    date: "13/06/2025",
    url: "https://www.catawiki.com/en/l/96001404",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_50_METERS,
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_RACE,
      catalogueReference: "T442S",
      productionYear: "2008",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Polished",
      bezel: "Inner bezel, tachymeter graduated",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Rubber",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_G10_211,
  },
};

export default details;
