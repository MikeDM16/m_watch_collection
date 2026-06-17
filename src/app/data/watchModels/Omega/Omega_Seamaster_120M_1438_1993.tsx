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

import movement_OMEGA_1438 from "../../movements/Omega/Omega_1438";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1993 Omega Seamaster 120M Cal. 1438",

  sliderImages: [
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0233.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0234.JPG",

    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0195.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0197.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0198.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0199.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0200.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0201.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0202.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0203.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0204.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0205.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0206.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0209.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0210.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0211.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0212.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0213.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0214.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0215.JPG",

    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0124.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0127.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0128.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0129.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0130.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0131.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0132.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0134.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0135.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0136.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0137.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0139.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0140.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0142.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0143.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0144.JPG",

    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0183.JPG",

    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0220.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0221.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0222.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0223.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0224.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0225.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0226.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0227.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0228.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0229.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0230.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0232.JPG",

    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0219.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0155.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0156.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0157.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0169.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0170.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0171.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0172.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0173.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0174.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0175.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0176.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0177.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0178.JPG",
    "public/assets/Images/Omega/1993_Omega_Seamaster_120m_1438/IMG_0179.JPG",
  ],
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_120_METERS, featuresEnum.SOLID_GOLD_BEZEL],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.SEAMASTER,
      catalogueReference: "SM 196.1501",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_38,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_120M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.DARK_BLUE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.METALLIC_COLOR,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_JUBILEE,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.GREY_GOLD_DETAILS,
    },

    movement: movement_OMEGA_1438,
  },
};

export default details;
