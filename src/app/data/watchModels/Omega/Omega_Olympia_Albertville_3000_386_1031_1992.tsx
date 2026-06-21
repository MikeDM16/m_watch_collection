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

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4021.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4022.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4023.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4024.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4025.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4028.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4029.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4031.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4032.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4033.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4034.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4035.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4037.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4038.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4039.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4040.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4041.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4042.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4043.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4051.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4052.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4053.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4054.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4055.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4056.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4057.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4058.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4059.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4060.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4061.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4062.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4063.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4065.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4066.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4044.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4045.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4046.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4047.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4048.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4049.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4050.JPG",

    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4067.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4068.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4069.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4070.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4071.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4072.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4073.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4074.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4075.JPG",
    "public/assets/Images/Omega/1992_Polaris_Albertville_386_1031_3000/IMG_4076.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.OLYMPIA.WINTER_OLYMPICS_ALBERTVILLE,
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
