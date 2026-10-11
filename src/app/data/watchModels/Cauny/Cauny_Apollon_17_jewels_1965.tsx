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

import movement_FHF_96_4 from "../../movements/FHF/FHF_96_4_17J";
import { WatchDetails } from "../../watchDetails";
import { CaunyBrandSeries } from "./CaunyBrandSeries";

const details: WatchDetails = {
  title: "1965 Cauny Apollon Calendario 17 Rubis",

  sliderImages: [
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5939.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5942.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5943.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5945.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5946.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5947.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5950.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5951.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5952.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5980.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5982.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5953.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5954.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5955.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5956.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5958.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5959.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5960.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5961.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5962.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5963.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5964.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5965.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5966.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5967.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5968.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5969.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5970.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5971.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5972.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_1551.JPG",

    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5973.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5974.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5975.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5976.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5977.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5978.JPG",
    "public/assets/Images/Cauny/1965_Cauny_Apollon_Calendario/IMG_5979.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.CAUNY,
      series: CaunyBrandSeries.APOLLON,
      catalogueReference: "255-552-96/4",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.GP_10_SS_BACK,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.CHAMPAGNE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BROWN,
    },

    movement: movement_FHF_96_4,
  },
};

export default details;
