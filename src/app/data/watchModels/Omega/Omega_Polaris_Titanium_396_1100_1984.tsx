import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CrowWatchTypeEnum } from "@/app/enums/crowWatchTypeEnum";
import { CrystalMaterialEnum } from "@/app/enums/crystalMaterialEnum";
import { DialMarketsEnum } from "@/app/enums/dialMarketsEnum";
import { FinishingDetailsEnum } from "@/app/enums/finishingDetailsEnum";
import { LuminescentIndexesEnum } from "@/app/enums/luminescentIndexesEnum";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import { WatchStyleEnum } from "@/app/enums/watchStyleEnum";
import { WaterResistanceEnum } from "@/app/enums/waterResistanceEnum";

import { MovementsDataDB } from "../../movementsData";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1984 Omega Seamaster Polaris Titanium 396.1100",
  sliderImages: [
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1616.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1617.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1619.JPG",

    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1575.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1576.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1577.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1578.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1579.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1580.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1581.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1582.JPG",

    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1597.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1598.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1599.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1600.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1601.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1602.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1603.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1604.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1605.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1606.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1607.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1609.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1610.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1611.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1612.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1613.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1614.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1615.JPG",

    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1682.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1677.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1679.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1674.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1683.JPG",

    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1583.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1584.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1585.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1586.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1587.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1588.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1589.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1590.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1591.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1592.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1593.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1594.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1595.JPG",
    "public/assets/Images/Omega/1984_Polaris_Titanium_396_1100/IMG_1596.JPG",
  ],
  technicalData: {
    features: ["Date", "120 meters"],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "TA 396.1100",
      productionYear: "1984",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "33 mm",
      thickness: "6 mm",
      material: "Titanium and Gold",
      waterResistance: WaterResistanceEnum.WATERPROOF_120M,
      finishingDetails: "Vertical Polished",
      bezel: "Without bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Titanium and Gold",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "19 mm",
      color: "Titanium Grey and Gold",
    },

    movement: MovementsDataDB.OMEGA_1441,
  },
};

export default details;
