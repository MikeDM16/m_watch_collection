import { BezelTypeEnum } from "@/app/enums/bezelTypeEnum";
import { BraceletMaterialEnum } from "@/app/enums/braceletMaterialEnum";
import { BraceletWidthEnum } from "@/app/enums/braceletWidthEnum";
import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
import { CaseDiameterEnum } from "@/app/enums/caseDiameterEnum";
import { CaseFinishingEnum } from "@/app/enums/caseFinishingEnum";
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
  saleReport: {
    price: 180,
    date: "23/03/2019",
    url: "https://www.catawiki.com/l/25007081-greenwich-premier-gold-eta-251-272-shapphire-crystal-men-1990-1999",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
      featuresEnum.GOLD_PLATED_20M,
    ],

    information: {
      brand: BrandsEnum.GREENWICH,
      series: "Premier",
      catalogueReference: "-",
      productionYear: "1995",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_40,
      thickness: CaseThicknessEnum.T_13,
      material: "Gold Plated case and back (20 \u339B)",
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.TEXTURED,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_20,
      color: ColorEnum.BLUE,
    },

    movement: MovementsDataDB.ETA_251_272,
  },
};

export default details;
