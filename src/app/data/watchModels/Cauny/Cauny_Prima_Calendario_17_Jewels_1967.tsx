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
import { CaunyBrandSeries } from "./CaunyBrandSeries";

const details: WatchDetails = {
  title: "1967 Cauny Prima Calendario 17 Jewels",

  sliderImages: [
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1753.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1754.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1755.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1756.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1757.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1758.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1759.JPG",

    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1741.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1742.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1743.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1744.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1745.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1746.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1747.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1752.JPG",

    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1760.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1761.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1762.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1763.JPG",

    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1766.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1767.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1768.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1769.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1770.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1771.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1772.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1773.JPG",

    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1778.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1779.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1780.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1781.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1782.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1783.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1784.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1786.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1774.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1775.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1776.JPG",
    "public/assets/Images/Cauny/1967_Cauny_Prima_Calendario/IMG_1777.JPG",
  ],
  saleReport: {
    price: 113,
    date: "10/05/2025",
    url: "https://www.catawiki.com/en/l/95357825",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.MECHANICAL, featuresEnum.GOLD_PLATED_10M],

    information: {
      brand: BrandsEnum.CAUNY,
      series: CaunyBrandSeries.PRIMA,
      catalogueReference: "280-71027",
      productionYear: "1967",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_12,
      material: CaseMaterialEnum.GP_10_SS_BACK,
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.CHAMPAGNE,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.RADIAL_BRUSHED_EFFECT,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS + LuminescentIndexesEnum.TRITIUM,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.RED,
    },

    movement: MovementsDataDB.AS_1950,
  },
};

export default details;
