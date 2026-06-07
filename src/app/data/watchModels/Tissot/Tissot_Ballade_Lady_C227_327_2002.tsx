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

import movement_ETA_955_112 from "../../movements/ETA/ETA_955_112";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "2002 Tissot Ballade Lady C227 327",

  sliderImages: [
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4352.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4354.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4355.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4356.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4357.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4358.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4359.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4360.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4361.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4363.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4364.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4365.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4366.JPG",

    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4375.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4376.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4377.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4378.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4380.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4381.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4382.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4383.JPG",

    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4367.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4368.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4369.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4370.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4371.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4372.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4373.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4374.JPG",

    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4723.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4724.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4725.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4726.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4727.JPG",
    "public/assets/Images/Tissot/2002_Tissot_Ballade_Lady_C227_327/IMG_4728.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.BALLADE,
      catalogueReference: "C227/327C",
      productionYear: "2002",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_27,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.COIN_EDGE,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_14,
      color: ColorEnum.BROWN,
    },

    movement: movement_ETA_955_112,
  },
};

export default details;
