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
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1992 Omega Olympia Winter Olympics Albertville Limited 305/499",
  sliderImages: [
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8542.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8543.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8544.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8545.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8765.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8766.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8767.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8768.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8770.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8771.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8783.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8784.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8785.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8786.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8787.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8788.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8789.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8790.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8791.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8792.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8793.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8794.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8795.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8433.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8434.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8436.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8437.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8438.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8439.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8440.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8441.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8442.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8443.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8444.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8772.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8773.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8774.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8775.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8776.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8777.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8778.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8779.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8780.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8782.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8796.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8797.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8798.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8800.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_500/IMG_8801.JPG",
  ],
  sellReport: {
    price: 2230,
    date: "04/08/2024",
    url: "https://www.catawiki.com/en/l/86729993",
  },
  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.OLYMPIA,
      catalogueReference: "Winter Olympics Albertville Limited 305/499 (DB 386.1031)",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "10 mm",
      material: "Stainless Steel - Gold Inlay",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.OMEGA_1675,
  },
};

export default details;
