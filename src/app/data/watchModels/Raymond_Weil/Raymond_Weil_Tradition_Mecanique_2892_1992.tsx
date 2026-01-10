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
  title: "1992 Raymond Weil Tradition Mécanique Automatic 2892 21 Jewels",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9249.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9250.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9251.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9252.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9253.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9256.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9257.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9258.JPG",

    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9261.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9262.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9263.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9265.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9266.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9267.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9268.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9269.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9270.JPG",

    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9139.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9141.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9143.JPG",

    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9273.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9274.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9275.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9276.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9277.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9278.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9279.JPG",

    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9287.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9288.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9289.JPG",

    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9271.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9272.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9260.JPG",

    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9280.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9281.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9282.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9283.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9284.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9285.JPG",
    "public/assets/Images/Raymond_Weil/1992_Raymond_Weil_Tradition_Mecanique_2892/IMG_9286.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.AUTOMATIC,
      featuresEnum.ELETRO_GOLD_PLATED_18k,
      featuresEnum.OPEN_CASE_BACK,
      featuresEnum.WR_10_METERS,
    ],

    information: {
      brand: BrandsEnum.RAYMOND_WEIL,
      series: RaymondWeilBrandSeries.TRADITION_MECANIQUE,
      catalogueReference: "Automatic 2800 - A239067",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "35 mm",
      thickness: "7 mm",
      material: "18K Gold Electroplated",
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "19 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.ETA_2892_2_21J,
  },
};

export default details;
