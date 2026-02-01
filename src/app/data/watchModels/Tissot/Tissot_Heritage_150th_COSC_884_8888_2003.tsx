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
  title: "2003 Tissot Heritage COSC Limited Edition 0884/8888",

  sliderImages: [
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8156.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8157.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8158.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8159.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8161.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8162.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8163.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8164.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8166.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8167.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8169.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8170.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8171.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8172.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8173.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8174.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8175.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8176.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8192.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8193.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8196.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8197.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8199.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8200.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8201.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8202.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8203.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8205.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8206.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8207.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8208.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8178.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8179.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8180.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8181.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8182.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8183.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8184.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8185.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8186.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8187.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8188.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8189.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8190.JPG",

    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8209.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8210.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8211.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8212.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8214.JPG",
    "public/assets/Images/Tissot/2003_Tissot_150th_Heritage_884_8888/IMG_8215.JPG",
  ],

  saleReport: {
    price: 900,
    date: "11/01/2026",
    url: "https://www.catawiki.com/en/l/100478792",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,

      catalogueReference: "150th Anniversary T66.1.721.31 0884/8888",
      productionYear: "2003",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "39 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Silver",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2895_1,
  },
};

export default details;
