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
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7103.JPG",
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7104.JPG",
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7105.JPG",
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7106.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9016.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9019.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9020.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9021.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9022.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9023.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9025.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9028.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9029.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9032.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9033.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9035.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_9038.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6984.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6985.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6986.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6987.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6988.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7001.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7002.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7003.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7004.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7005.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7006.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6971.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6972.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6978.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6979.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6980.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6981.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6982.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6983.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6989.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6990.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6991.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6992.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6993.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6994.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7108.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7110.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7111.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7008.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7010.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7011.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7012.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7013.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7014.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_7015.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6995.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6996.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6997.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6998.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_10_1_Black_Titanium/IMG_6999.JPG",
  ],

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
