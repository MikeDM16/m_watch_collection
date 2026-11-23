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

import movement_AS_1130_15J from "../../movements/AS/AS_1130_15J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1945 Ruby Precision 15 Rubis",

  sliderImages: [
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7699.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7701.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7702.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7703.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7704.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7705.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7706.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7707.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7708.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7709.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7710.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7711.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7712.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7713.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7714.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7715.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7716.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7717.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7718.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7719.JPG",

    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7739.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7740.JPG",

    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7720.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7723.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7724.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7725.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7726.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7727.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7728.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7729.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7730.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7731.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7732.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7733.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7734.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7735.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7736.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7737.JPG",
    "public/assets/Images/Ruby/1945_Ruby_Precision_15_Rubis/IMG_7738.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      featuresEnum.SMALL_SECONDS,
      featuresEnum.BLUE_HEATED_COPPER_HANDS,
    ],

    information: {
      brand: BrandsEnum.RUBY,
      series: "Precision",
      catalogueReference: "-",
      productionYear: "1945",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.GOLD,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_16,
      color: ColorEnum.BROWN,
    },

    movement: movement_AS_1130_15J,
  },
};

export default details;
