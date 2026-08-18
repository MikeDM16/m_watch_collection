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

import movement_ETA_251_251 from "../../movements/ETA/ETA_251_251_27J";
import { WatchDetails } from "../../watchDetails";
import { PorscheDesignBrandSeries } from "./PorscheDesignBrandSeries";

const details: WatchDetails = {
  title: "1998 Eterna - Porsche Design 911 - GT2 Cup Limited Edition",

  sliderImages: [
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3811.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3812.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3813.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3815.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3816.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3817.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3818.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3820.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3738.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3739.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3740.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3742.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3746.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3748.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3749.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3750.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3751.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3752.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3753.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3754.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3756.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3758.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3759.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3760.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3761.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3762.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3763.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3764.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3775.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3776.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3777.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3778.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3779.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3780.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3781.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3782.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3784.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3785.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3789.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3790.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3791.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3792.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3795.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3796.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3797.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3798.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3799.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3800.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3801.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3802.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3803.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3804.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3805.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3806.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3807.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3808.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3809.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_911_GT2_Limited_Edition/IMG_3810.JPG",

    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0776.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0780.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0781.JPG",
    "public/assets/Images/Porsche_Design/1998_Porsche_Design_Eterna_911_GT2_Cup/IMG_0784.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      "This exclusive Porsche Design was commissioned to Eterna as a victory prize for the 1998 FIA GT Championship.",
    ],

    information: {
      brand: BrandsEnum.PORSCHE_DESIGN,
      series: PorscheDesignBrandSeries.PORSCHE_DESIGN_911,
      catalogueReference: "FIA GT - Porsche 911 - GT2 Cup",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_39,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.SANDBLASTED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.BLACK,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.SS_SANDBLASTED,
    },

    movement: movement_ETA_251_251,
  },
};

export default details;
