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

import movement_OMEGA_1665 from "../../movements/Omega/Omega_1665";
import { WatchDetails } from "../../watchDetails";
import { OmegaBrandSeries } from "./OmegaBrandSeries";

const details: WatchDetails = {
  title: "1988 Omega Polaris Multifunction 386.0826",
  sliderImages: [
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1428.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1429.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1430.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1431.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1432.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1433.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1434.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1435.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1436.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1437.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1438.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1439.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1440.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1441.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1442.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1443.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1444.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1445.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1446.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1447.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1448.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1449.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1450.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1451.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1452.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1453.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1454.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1455.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1456.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1457.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1505.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1507.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1509.JPG",
    "public/assets/Images/Omega/1988_Polaris_AnaDigi_Black_386_0826/IMG_1510.JPG",
  ],
  saleReport: {
    price: 600,
    date: "24/07/2024",
    url: "https://www.catawiki.com/en/l/86375731-omega-seamaster-polaris-chronograph-386-0826-cal-1665-7-jewles-multi-function-18k-gold-inlay-men-1988",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_30_METERS],

    information: {
      brand: BrandsEnum.OMEGA,
      series: OmegaBrandSeries.POLARIS,
      catalogueReference: "DB 386.0826",
      productionYear: "1988",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_33,
      thickness: CaseThicknessEnum.T_6,
      material: CaseMaterialEnum.SS_GOLD_DETAILS,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.VERTICAL_POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.BLACK_LCD,
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.GOLD_DETAILS,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.GREY,
    },

    movement: movement_OMEGA_1665,
  },
};

export default details;
