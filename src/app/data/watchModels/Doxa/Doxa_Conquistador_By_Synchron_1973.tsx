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

import movement_ETA_2750 from "../../movements/ETA/ETA_2750_17J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1973 Doxa Conquistador (By Synchron)",

  sliderImages: [
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5722.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5723.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5724.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5725.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5726.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5727.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5728.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5729.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5730.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5732.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5733.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5734.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5736.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5737.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5738.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5739.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5740.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5741.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5742.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5743.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5744.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5745.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5746.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5747.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5748.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5749.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5750.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5751.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5752.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5753.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5754.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5755.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5756.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5757.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5758.JPG",
    "public/assets/Images/Doxa/1973_Doxa_Conquistador_By_Synchron_2750/IMG_5759.JPG",
  ],

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.DOXA,
      series: "Conquistador",
      catalogueReference: "-",
      productionYear: "1973",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_7,
      material: CaseMaterialEnum.GP,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_ETA_2750,
  },
};

export default details;
