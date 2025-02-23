import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
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
  title: "2005 Porsche Design Dashboard P6612 Titanium",
  sliderImages: [
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7032.JPG",
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7030.JPG",
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7033.JPG",
    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7034.JPG",

    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7063.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7064.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7028.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7029.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7035.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7036.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7037.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7038.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7039.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7041.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7087.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7088.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7090.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7016.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7017.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7018.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7019.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7020.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7023.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7024.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7025.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7208.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7202.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7049.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7050.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7051.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7052.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7053.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7054.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7055.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7056.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7057.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7059.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7060.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7061.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7062.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7042.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7043.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7044.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7045.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7046.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7047.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7048.JPG",

    //"public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7107.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7065.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7066.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7067.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7068.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7069.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7070.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7076.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7077.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7078.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7079.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7080.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7081.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7083.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7085.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7086.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7071.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7072.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7073.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7074.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7075.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7096.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7097.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7098.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7099.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7100.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7101.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_17_2_Red_Titanium/IMG_7102.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.DASHBOARD_P6612,
      catalogueReference: "P6612.17/2 160.182",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "13 mm",
      material: "Titanium with Black PVD",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Black PVD Coating",
      bezel: "Without",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Red",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Rubber",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "22 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_2894_2,
  },
};

export default details;
