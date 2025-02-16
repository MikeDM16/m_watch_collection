import { MovementsDataDB } from "../../movementsData";
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
import { WatchDetails } from "../../watchDetails";

const details: WatchDetails = {
  title: "1995 Greenwich Premier Chronograph",

  sliderImages: [
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1749.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1750.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1751.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1752.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1754.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1755.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1756.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1757.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1758.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1759.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1760.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1761.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1768.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1769.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1770.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1771.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1772.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1773.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1774.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1775.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1779.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1780.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/IMG_1781.JPG",
    "public/assets/Images/Greenwich/1995_Greenwich_Premier/RTET3968.JPG",
  ],
  sellReport: {
    price: 180,
    date: "23/03/2019",
    url: "https://www.catawiki.com/l/25007081-greenwich-premier-gold-eta-251-272-shapphire-crystal-men-1990-1999",
  },
  technicalData: {
    features: ["Date", "Chronograph", "100 meters", "Screw-in crown", "Gold Plated 20 \u339B"],

    information: {
      brand: BrandsEnum.GREENWICH,
      series: "Premier",
      catalogueReference: "-",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "40 mm",
      thickness: "13 mm",
      material: "Gold Plated case and back (20 \u339B)",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: "Polished",
      bezel: "Tachymeter engraved bezel",
      crownType: CrowWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: "20 mm",
      color: "Blue",
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
