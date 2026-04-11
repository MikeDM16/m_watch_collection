import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
import { CaseMaterialEnum } from "@/app/enums/caseMaterialEnum";
import { CaseThicknessEnum } from "@/app/enums/caseThicknessEnum";
import { ColorEnum } from "@/app/enums/colorEnum";
import { CrownWatchTypeEnum } from "@/app/enums/crownWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { featuresEnum } from "@/app/enums/featuresEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import movement_ETA_Valjoux_7760_17 from "../../movements/ETA/ETA_Valjoux_7760_17J";
import { WatchDetails } from "../../watchDetails";
import { RaymondWeilBrandSeries } from "./RaymondWeilBrandSeries";

const details: WatchDetails = {
  title: "1990 Raymond Weil Tradition Mécanique Enamel",
  sliderImages: [
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2210.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2216.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2206.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2207.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2208.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2209.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2253.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2256.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2257.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2212.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2213.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2214.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2215.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2217.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2218.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2219.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2220.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2222.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2223.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2224.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2225.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2226.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2242.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2243.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2244.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2245.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2199.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2203.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2204.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2227.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2228.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2229.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2230.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2231.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2232.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2233.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2234.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2235.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2236.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2238.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2239.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2240.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2241.JPG",

    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2248.JPG",
    "public/assets/Images/Raymond_Weil/1990_Raymond_Weil_7760_A290703/IMG_2249.JPG",
  ],
  saleReport: {
    price: 800,
    date: "16/07/2025",
    url: "https://www.catawiki.com/en/l/96521948",
  },

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
      catalogueReference: "White Enamel Dial - A290703",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_38,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.GOLD_18K_ELECTROPLATED,
      waterResistance: WaterResistanceEnum.WATERPROOF_10M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: ColorEnum.WHITE_ENAMEL,
      dialMarkers: DialMarketsEnum.BREGUET,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.CROCODILE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_Valjoux_7760_17,
  },
};

export default details;
