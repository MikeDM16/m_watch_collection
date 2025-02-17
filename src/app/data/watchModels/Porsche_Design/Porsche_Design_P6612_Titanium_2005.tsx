import { MovementsDataDB } from "../../movementsData";
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
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "2005 Porsche Design Dashboard P6612 Titanium",
  sliderImages: [
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4289.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4290.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4291.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4292.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4293.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4294.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4295.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4296.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4299.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4300.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4301.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4302.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4303.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4304.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4305.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4306.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4307.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4316.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4317.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4318.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4319.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4320.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4321.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4322.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4323.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4324.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4332.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4333.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4334.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4335.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4336.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4338.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4340.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4344.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4345.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4346.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4347.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4348.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4351.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4352.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4355.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4356.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4357.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4360.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4361.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4364.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4365.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4308.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4309.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4310.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4311.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4312.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4313.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4314.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4315.JPG",

    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4325.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4326.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4327.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4328.JPG",
    "public/assets/Images/Porsche_Design/2005_Porsche Design_Dashboard_P662_Titanium/IMG_4329.JPG",
  ],

  sellReport: {
    price: 2450,
    date: "23/11/2024",
    url: "https://www.catawiki.com/en/l/90807963",
  },

  technicalData: {
    features: ["Date", "Automatic Chronograph"],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.DASHBOARD_P6612,
      catalogueReference: "P6612.14 152'646",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "42 mm",
      thickness: "13 mm",
      material: "Titanium",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished sides",
      bezel: "Without",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
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
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "22 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_2894_2,
  },
};

export default details;
