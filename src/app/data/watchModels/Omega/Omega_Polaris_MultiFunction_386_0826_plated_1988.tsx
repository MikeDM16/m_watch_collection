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

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1988 Omega Polaris Analogic/Digital 386.0826",
  sliderImages: [
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8642.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8643.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8644.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8645.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8646.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8647.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8656.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8657.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8658.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8659.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8660.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8661.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8662.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8664.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8665.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8666.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8667.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8668.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8671.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8674.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8675.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8688.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8689.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8690.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8691.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8692.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8693.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8694.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8648.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8649.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8650.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8651.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8652.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8653.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8654.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8655.JPG",

    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8676.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8677.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8683.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8684.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8685.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8686.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826_Gold_plated/IMG_8687.JPG",
  ],

  saleReport: {
    price: 650,
    date: "22/10/2024",
    url: "https://www.catawiki.com/en/l/89181149-omega-seamaster-polaris-chronograph-386-0826-cal-1665-multi-function-18k-gold-plated-men-1988",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "DB 386.0826",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_6,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.VERTICAL_POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK_LCD,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_GOLD_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.GREY,
    },

    movement: MovementsDataDB.OMEGA_1665,
  },
};

export default details;
