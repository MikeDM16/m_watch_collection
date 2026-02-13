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
  title: "1983 Tissot Heritage 130th Anniversary Moon Phase",

  sliderImages: [
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0430.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0431.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0434.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0435.JPG",

    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0436.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0437.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0438.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0439.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0440.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0441.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0442.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0443.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0444.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0445.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0446.JPG",

    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0460.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0461.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0462.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0463.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0464.JPG",

    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0447.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0448.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0449.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0450.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0451.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0452.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0453.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0454.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0455.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0456.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0457.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0458.JPG",
    "public/assets/Images/Tissot/1983_Tissot_130th_Anniversary_moon_phase_7734/IMG_0459.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.OPEN_CASE_BACK, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.HERITAGE,
      catalogueReference: "130th Anniversary - Moon Phase Limited Edition",
      productionYear: "1983",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "37 mm",
      thickness: "12 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Without Bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Browb",
    },

    movement: MovementsDataDB.VALJOIX_7734_17J,
  },
};

export default details;
