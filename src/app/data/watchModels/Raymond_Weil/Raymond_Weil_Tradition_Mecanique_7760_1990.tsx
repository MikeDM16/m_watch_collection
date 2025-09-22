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
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "1990 Raymond Weil Tradition Mécanique 7760",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4902.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4903.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4904.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4944.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4947.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4939.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4940.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4941.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4905.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4906.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4907.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4908.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4910.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4911.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4912.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4914.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4915.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4927.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4932.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4934.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4938.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2199.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2203.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2204.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4916.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4917.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4918.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4919.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4920.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4921.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4922.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4923.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4924.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4925.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4926.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4928.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4929.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4930.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4931.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4998.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_4999.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_5001.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_5002.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_5003.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_5004.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_5005.JPG",
  ],
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANIQUE_CHRONOGRAPH,
      featuresEnum.ELETRO_GOLD_PLATED_18k,
      featuresEnum.OPEN_CASE_BACK,
      featuresEnum.WR_10_METERS,
      featuresEnum.TACHYMETER,
    ],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.TRADITION_MECANIQUE,
      catalogueReference: "Black Dial - A290341",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "38 mm",
      thickness: "12 mm",
      material: "18K Gold Electroplated",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Enamel black",
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Black",
    },

    movement: MovementsDataDB.ETA_Valjoux_7760_17,
  },
};

export default details;
