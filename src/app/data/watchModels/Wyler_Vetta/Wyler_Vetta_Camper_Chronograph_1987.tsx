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

import movement_DD_2000_ETA_955_232 from "../../movements/Debois_Depraz/DD_2000_955";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1987 Wyler Vetta Camper Chronograph",

  sliderImages: [
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4256.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4254.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4255.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4257.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4258.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4259.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4260.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4261.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4262.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4263.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4264.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4265.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4266.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4267.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4268.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4269.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4270.JPG",

    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4285.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4286.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4287.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4288.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4289.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4290.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4291.JPG",

    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4271.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4272.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4273.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4274.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4275.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4276.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4277.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4278.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4279.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4280.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4281.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4282.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4283.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4284.JPG",

    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4293.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4294.JPG",
    "public/assets/Images/Wyler_Vetta/1987_Wyler_Vetta_Camper_DD_2000/IMG_4295.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.CHRONOGRAPH, featuresEnum.WR_50_METERS],

    information: {
      brand: BrandsEnum.WYLER_VETTA,
      series: "Camper",
      catalogueReference: "91301,51",
      productionYear: "1987",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK + CalendarWatchTypeEnum.CYCLOPS_LENS,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.LIGHT_BROWN,
    },

    movement: movement_DD_2000_ETA_955_232,
  },
};

export default details;
