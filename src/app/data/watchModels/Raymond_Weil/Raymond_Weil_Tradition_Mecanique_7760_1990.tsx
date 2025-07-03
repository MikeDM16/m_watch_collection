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
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2015.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2016.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2017.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2018.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2019.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2020.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2021.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2022.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2023.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2024.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2025.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2026.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2027.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2028.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2029.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2030.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2031.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2032.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2033.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2034.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2036.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2037.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2038.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2039.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2041.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3915.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3916.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3919.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3920.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3923.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3924.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_3925.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2043.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2044.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2048.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2049.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2050.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760/IMG_2051.JPG",
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
