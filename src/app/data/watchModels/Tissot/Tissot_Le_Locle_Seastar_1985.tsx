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
  title: "1985 Tissot Le Locle Seastar",
  sliderImages: [
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4348.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4349.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4350.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4351.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4352.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4353.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4354.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4355.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4356.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4357.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4358.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4359.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4360.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4361.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4362.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4363.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4364.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/IMG_4365.JPG",
    "public/assets/Images/Tissot/1985_Tissot_Le_Locle/tissot case.JPG",
  ],
  saleReport: {
    price: 180,
    date: "23/08/2019",
    url: "https://www.catawiki.com/l/28812081",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.ELETRONIC, featuresEnum.GOLD_PLATED_20M],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.LE_LOCLE,
      catalogueReference: "Seastar 40 328",
      productionYear: "1985",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "33 mm",
      thickness: "6 mm",
      material: "14K Gold Plated (20 \u339B) - Stainless Steel backcase",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "18 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_955_114,
  },
};

export default details;
