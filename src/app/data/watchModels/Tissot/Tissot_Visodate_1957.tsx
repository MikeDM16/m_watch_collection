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
  title: "1957 Tissot Visodate",
  sliderImages: [
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5850.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5851.JPG",

    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5820.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5821.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5822.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5823.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5824.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5825.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5826.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5827.JPG",

    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5840.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5842.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5843.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5844.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5846.JPG",

    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5828.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5829.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5830.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5831.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5832.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5833.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5834.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5835.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5836.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5837.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/IMG_5838.JPG",

    "public/assets/Images/Tissot/1957_Tissot_Visodate/visodate-sell-add1.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/visodate-sell-add.JPG",
    "public/assets/Images/Tissot/1957_Tissot_Visodate/tissot_manufacturing_dates.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANICAL,
      featuresEnum.GOLD_PLATED_20M,
      "Movement with production number 3909420, dating the watch back to 1957",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.VISODATE,
      catalogueReference: "56000-1S",
      productionYear: "1957",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Gold Plated (20 \u339B) - Stainless Steel backcase",
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
      finishingDetails: FinishingDetailsEnum.PAN_DIAL,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Lizard skin leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Black",
    },

    movement: MovementsDataDB.TISSOT_27B_21,
  },
};

export default details;
