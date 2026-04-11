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

import movement_OMEGA_1675 from "../../movements/Omega/Omega_1675";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1992 Omega Olympia Winter Olympics Albertville Limited 820/3000",
  sliderImages: [
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8502.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8503.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8504.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8705.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8706.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8707.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8708.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8709.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8710.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8718.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8719.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8720.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8721.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8722.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8723.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8724.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8725.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8726.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8727.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8728.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8729.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8412.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8413.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8415.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8416.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8417.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8418.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8419.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8420.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8448.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8449.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8711.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8712.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8713.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8714.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8715.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8716.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8717.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8730.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8731.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8732.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8735.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_8736.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.OLYMPIA,
      catalogueReference: "Winter Olympics Albertville Limited 820/3000 (DB 386.1031)",
      productionYear: "1992",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_10,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.VERTICAL_POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.GREY,
    },

    movement: movement_OMEGA_1675,
  },
};

export default details;
