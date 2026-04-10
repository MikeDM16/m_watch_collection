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

const details: WatchDetails = {
  title: "2005 Emes OS60 Chronograph",
  sliderImages: [
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2098.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2099.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2101.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2102.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2103.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2104.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2105.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2106.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2107.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2108.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2109.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2110.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2111.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2112.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2113.JPG",
    "public/assets/Images/Emes/2005_Emes_Chrono_OS60/IMG_2114.JPG",
  ],
  saleReport: {
    price: 100,
    date: "18/05/2019",
    url: "https://www.catawiki.com/l/26524577-emes-german-12h-racing-chronograph-cal-os60-men-2000-2010",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_100_METERS,
      featuresEnum.SCREWED_IN_CROWN,
    ],

    information: {
      brand: BrandsEnum.EMES,
      series: "Chronograph",
      catalogueReference: "-",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_36,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.SATIN_MATTE,
      bezel: BezelTypeEnum.TACHYMETER_INNER,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.DARK_GREY,
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SS_LINKS,
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: BraceletWidthEnum.W_19,
      color: ColorEnum.MATTE_GREY,
    },

    movement: MovementsDataDB.MIYOTA_OS60,
  },
};

export default details;
