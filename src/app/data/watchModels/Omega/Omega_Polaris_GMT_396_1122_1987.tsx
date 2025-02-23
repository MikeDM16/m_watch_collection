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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1987 Omega Seamaster Polaris GMT 396.1122",
  sliderImages: [
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7217.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7218.JPG",

    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7195.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7196.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7197.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7198.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7199.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7200.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7201.JPG",

    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7208.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7209.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7210.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7211.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7212.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7213.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7214.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7215.JPG",

    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7190.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7225.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7227.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7228.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7229.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7231.JPG",

    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7216.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7219.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7220.JPG",

    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7202.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7203.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7204.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7205.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7206.JPG",
    "public/assets/Images/Omega/1987_Polaris_GMT_396_1122/IMG_7207.JPG",
  ],
  saleReport: {
    price: 550,
    date: "07/03/2024",
    url: "https://www.catawiki.com/en/l/80949567",
  },

  technicalData: {
    features: ["Date", "30 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "DR 396.1122",
      productionYear: "1987",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "6 mm",
      material: "Stainless Steel - Gold plated",
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Cream Yellow",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.OMEGA_1449,
  },
};

export default details;
