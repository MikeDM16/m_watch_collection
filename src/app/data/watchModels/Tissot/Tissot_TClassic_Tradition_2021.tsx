import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2021 Tissot T-Classic Tradition",
  sliderImages: [
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1625.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1626.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1627.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1628.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1629.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1630.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1631.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1632.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1633.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1634.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1635.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1636.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1637.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1638.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1639.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1640.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1641.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1642.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1643.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1644.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1645.JPG",
    "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/IMG_1647.JPG",
  ],

  technicalData: {
    features: ["Date"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.T_CLASSIC,
      catalogueReference: "Tradition",
      productionYear: "2021",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "42 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links Bracelet",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Two Tone (Grey Gold)",
    },

    movement: {
      title: "ETA F06.111",
      description:
        "Very basic Quartz movement from ETA's trendline series. \n" +
        "Those calibers represent the entry line from the ETA range of movements.",
      usefullLinks: {},
      sliderImages: [
        "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/ETA_F06_111_1.JPG",
        "public/assets/Images/Tissot/2021_Tissot_T_Classic_Tradition/ETA_F06_111_2.JPG",
      ],
      details: {
        manufacturer: "ETA",
        modelReference: "F06.111",
        type: "Quartz",
        battery: "371 / SR920SW",
        jewels: "3 (three) Jewels",
        functions: "Date, Hours, Minutes, Seconds",
      },
    },
  },
};

export default details;
