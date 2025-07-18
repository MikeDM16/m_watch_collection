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
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "2005 Porsche Design Dashboard P6612/10 Titanium",
  sliderImages: [
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0189.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0190.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0191.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0192.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0193.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0195.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0243.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0244.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0245.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0248.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0249.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0250.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0196.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0197.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0198.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0199.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0200.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0204.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0205.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0206.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0207.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0218.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0219.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0220.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0221.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0223.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0224.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6971.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6972.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6978.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6979.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6980.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6981.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6982.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6983.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0225.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0226.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0227.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0228.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0236.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0237.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0238.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0239.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0240.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0241.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0242.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0233.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0234.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0208.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0209.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0210.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0211.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0212.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0213.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0215.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0216.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_0217.JPG",
  ],

  saleReport: {
    price: 1568,
    date: "15/07/2025",
    url: "https://www.catawiki.com/en/l/96564223",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.DASHBOARD_P6612,
      catalogueReference: "P6612.10/1 155.416",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "13 mm",
      material: "Titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Brushed",
      bezel: "Without",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Titanium Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Leather (Racing Style)",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "22 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_2894_2,
  },
};

export default details;
