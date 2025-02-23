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
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1963 Tissot Seastar Seven",
  sliderImages: [
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7952.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7953.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7954.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7955.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7956.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7957.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7958.JPG",

    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7973.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7974.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7975.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7976.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7977.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7979.JPG",

    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7959.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7960.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7961.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7962.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7963.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7964.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7965.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7967.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7968.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7969.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7970.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7971.JPG",
    "public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/IMG_7972.JPG",

    //"public/assets/Images/Tissot/1963_Tissot_Seastar_Seven/tissot_manufacturing_dates.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      "Movement with production number 6070863, dating the watch back to 1963",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.SEASTAR,
      catalogueReference: "Seastar Seven 42524-1S",
      productionYear: "1963",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "34 mm",
      thickness: "8 mm",
      material: "Stainless Steel - Gold Plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Gold",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.TISSOT_781,
  },
};

export default details;
