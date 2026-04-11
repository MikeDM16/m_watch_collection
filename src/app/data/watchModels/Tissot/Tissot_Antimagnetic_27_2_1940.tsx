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

import movement_TISSOT_27_2 from "../../movements/Tissot/27_2_17J";
import { WatchDetails } from "../../watchDetails";
import { TissotBrandSeries } from "./TissotBrandSeries";

const details: WatchDetails = {
  title: "1940 Tissot Antimagnetic 27-2",

  sliderImages: [
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1799.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1800.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1768.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1769.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1771.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1772.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1773.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1775.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1776.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1777.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1784.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1785.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1786.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_9999.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1798.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1795.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1796.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1797.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1778.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1779.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1780.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1781.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1782.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1783.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1787.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1788.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1789.JPG",

    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1836.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1837.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1838.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1839.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1840.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1841.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1842.JPG",
    "public/assets/Images/Tissot/1942_Tissot_Antimagnetic_27-2/IMG_1843.JPG",
  ],

  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.MECHANICAL,
      "Movement with production number 1115089, dating the watch back to 1940",
    ],

    information: {
      brand: BrandsEnum.TISSOT,
      series: TissotBrandSeries.ANTIMAGNETIC,
      catalogueReference: "1115089",
      productionYear: "1940",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_35,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.SS_CHROMED,
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.WITHOUT_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.VERTICAL_BRUSHED,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.BLACK,
    },

    movement: movement_TISSOT_27_2,
  },
};

export default details;
