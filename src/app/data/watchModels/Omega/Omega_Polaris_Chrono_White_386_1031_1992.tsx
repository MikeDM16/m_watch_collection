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
  title: "1992 Omega Polaris Ratrappante Chronograph 386 1031.1",

  sliderImages: [
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0673.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0675.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0676.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0677.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0678.JPG",

    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0643.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0644.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0645.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0646.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0647.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0648.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0649.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0650.JPG",

    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0629.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0630.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0634.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0635.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0636.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0637.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0638.JPG",

    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0639.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0640.JPG",

    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0651.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0652.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0653.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0654.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0655.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0656.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0657.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0658.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0659.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0660.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0661.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0662.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0663.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0664.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0665.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0666.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0667.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0668.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0669.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0670.JPG",
    "public/assets/Images/Omega/1992_Omega_Polaris_Ratrappante_386_1031/IMG_0672.JPG",
  ],

  saleReport: {
    price: 1001,
    date: "04/04/2026",
    url: "https://www.catawiki.com/en/l/102635139",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "Ratrappante Chronograpg (DB 386.1031)",
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
      color: ColorEnum.WHITE,
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
