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

import movement_FE_TRIPLE_CALENDAR_5J from "../../movements/FE/FE_Triple_Calendar_5J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1991 Pryngeps Regolo 1467",
  sliderImages: [
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0639.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0640.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0641.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0642.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0643.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0644.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0645.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0646.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0647.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0648.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0649.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0650.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0651.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0652.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0653.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0654.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0655.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0656.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0657.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0658.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0659.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo_II/IMG_0640_1.JPG",
  ],
  saleReport: {
    price: 90,
    date: "23/11/2020",
    url: "https://www.catawiki.com/l/42625815",
  },
  technicalData: {
    features: [
      featuresEnum.TRI_COMPAX_CALENDAR,
      featuresEnum.REGOLO_BEZEL,
      featuresEnum.WR_30_METERS,
    ],

    information: {
      brand: BrandsEnum.PRYNGEPS,
      series: "Regolo",
      catalogueReference: "1467",
      productionYear: "1990",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.REGOLO,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.ANUAL,
    },

    bracelet: {
      material: BraceletMaterialEnum.SUEDE_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_FE_TRIPLE_CALENDAR_5J,
  },
};

export default details;
