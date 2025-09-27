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
import { EberhardBrandSeries } from "./EberhardBrandSeries";

const details: WatchDetails = {
  title: "1980 Eberhard Chronograph 31000 EP-40-68 Enamel Dial",
  sliderImages: [
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4425.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4427.JPG",

    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4370.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4371.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4372.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4374.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4375.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4376.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4377.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4378.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4379.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4384.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4385.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4386.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4387.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4389.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4390.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4391.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4393.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4394.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4395.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4396.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4397.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4398.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4399.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4400.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4401.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4402.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4403.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4404.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4406.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4407.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4408.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4409.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4410.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4413.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4414.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4415.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4416.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4417.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4418.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4419.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4420.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4421.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4422.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4423.JPG",
    "public/assets/Images/Eberhard/1980_Eberhard_ref_31100_silver_gold/IMG_4424.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.SOLID_GOLD,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.EBERHARD,
      series: EberhardBrandSeries.RE_EDITION,
      catalogueReference: "31100-357 (Replica of the 1940s model)",
      productionYear: "1980",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "13 mm",
      material: "Solid Sterling Silver (925) with 20\u339B Gold plated",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Tachymeter bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bourdeaux Red",
    },

    movement: MovementsDataDB.EXCELSIOR_PARK_40_68_17J,
  },
};

export default details;
