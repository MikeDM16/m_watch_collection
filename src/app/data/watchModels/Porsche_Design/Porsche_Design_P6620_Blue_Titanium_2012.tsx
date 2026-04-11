import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_ETA_Valjoux_7753_27 from "../../movements/ETA/ETA_Valjoux_7753_27J";
import { WatchDetails } from "../../watchDetails";
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "2012 Porsche Design Dashboard P6620 Titanium",

  sliderImages: [
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2203.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2204.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2202.JPG",

    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2201.JPG",

    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2176.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2177.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2178.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2179.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2180.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2181.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2182.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2183.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2184.JPG",

    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2167.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2168.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2168_2.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2169.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2171.JPG",

    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2164.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2165.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2166.JPG",

    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2172.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2174.JPG",

    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2185.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2186.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2187.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2188.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2189.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2190.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2191.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2192.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2193.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2194.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2195.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2196.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2197.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2198.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2199.JPG",
    "public/assets/Images/Porsche_Design/2012_Porsche_Design_Dashboard_P6620_Blue/IMG_2200.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.DASHBOARD,
      catalogueReference: "P6620.11 255.887",
      productionYear: "2012",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_44,
      thickness: CaseThicknessEnum.T_13,
      material: CaseMaterialEnum.TITANIUM,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.SANDBLASTED,
      bezel: BezelTypeEnum.INNER_HOUR,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.BLUE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.RUBBER_RACING,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_24,
      color: ColorEnum.BLUE,
    },

    movement: movement_ETA_Valjoux_7753_27,
  },
};

export default details;
