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

import movement_ETA_2391 from "../../movements/ETA/ETA_2391_21J";
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1962 Ernest Borel Neuchâtel Incabloc",

  sliderImages: [
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5760.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5761.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5764.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5769.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5770.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5771.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5772.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5773.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5774.JPG",

    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5802.JPG",

    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5777.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5778.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5779.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5780.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5782.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5783.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5784.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5785.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5786.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5787.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5788.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5789.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5790.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5791.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5792.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5793.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5794.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5795.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5796.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5797.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5798.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5799.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5800.JPG",
    "public/assets/Images/Ernest_Borel/1962_Ernest_Borel_Neuchatel_Incabloc_2391/IMG_5801.JPG",
  ],

  saleReport: {
    price: 145,
    date: "25/10/2026",
    url: "https://www.catawiki.pt/l/107597983",
  },

  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.INCABLOC],

    information: {
      brand: BrandsEnum.ERNEST_BOREL,
      series: "Neuchâtel",
      catalogueReference: "-",
      productionYear: "1962",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_34,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.GP,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.BEIGE_PATINA,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.DARK_BROWN,
    },

    movement: movement_ETA_2391,
  },
};

export default details;
