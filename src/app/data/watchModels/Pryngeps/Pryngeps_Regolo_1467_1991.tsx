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
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1601.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1602.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1603.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1605.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1606.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1607.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1608.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1609.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1610.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1612.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1613.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1614.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1615.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1616.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1617.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1618.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1619.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1620.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1621.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1622.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1623.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1624.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1625.JPG",
    "public/assets/Images/Pryngeps/1990_Pryngeps_Regolo/IMG_1626.JPG",
  ],
  saleReport: {
    price: 110,
    date: "09/03/2020",
    url: "https://www.catawiki.com/l/35158771-pryngeps-regolo-tri-compax-prepetual-calendar-1467-b-new-old-stock-men-1980-1989",
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
      productionYear: "1991",
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
