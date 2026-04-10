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
  title: "1950 Omega Seamaster Jumbo Cal. 265",
  sliderImages: [
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5763.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5764.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5765.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5766.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5767.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5768.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5769.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5770.JPG",

    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5794.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5795.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5796.JPG",

    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5797.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5798.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5799.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5800.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5801.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5802.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5804.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5805.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5806.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5807.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5808.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5810.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5813.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5814.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5815.JPG",

    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5778.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5779.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5780.JPG",

    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5781.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5782.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5783.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5784.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5785.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5786.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5787.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5788.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5789.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5790.JPG",

    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5791.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5792.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5793.JPG",

    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5771.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5772.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5773.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5774.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5775.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5776.JPG",
    "public/assets/Images/Omega/1950_Omega_Seamaster_Jumbo_CK2544/IMG_5777.JPG",
  ],

  saleReport: {
    price: 1100,
    date: "26/12/2025",
    url: "https://www.catawiki.com/en/l/100052954",
  },

  technicalData: {
    features: [
      featuresEnum.MECHANICAL,
      featuresEnum.GOLD_PLATED_80M,
      "Movement with production number 12034059, dating the watch back to 1950",
    ],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SEAMASTER_VINTAGE,
      catalogueReference: "Jumpo CK2544-1 (Caliber 12034059)",
      productionYear: "1950",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: CaseDiameterEnum.D_40,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.GP_80,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LIZARD_LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLACK,
    },

    movement: MovementsDataDB.OMEGA_265,
  },
};

export default details;
