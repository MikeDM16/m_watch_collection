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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1993 Tissot L395 Chronograph",

  sliderImages: [
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7485.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7486.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7487.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7488.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7489.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7491.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7492.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7493.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7494.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7495.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7496.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7497.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7498.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7501.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7502.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7503.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7504.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7505.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7507.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7508.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7509.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7510.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7511.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7512.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7513.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7514.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7515.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7516.JPG",
    "public/assets/Images/Tissot/1993_Tissot_L936_Chrono/IMG_7517.JPG",
  ],
  sellReport: {
    price: 140,
    date: "10/06/2022",
    url: "",
  },
  technicalData: {
    features: ["Date", "Chronograph", "30 meters", "Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "L396 Chronograph",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "37 mm",
      thickness: "10 mm",
      material: "Gold Plated 20 \u339B Bezel - SS Case back",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Blue",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
