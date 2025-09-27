import { BrandsEnum } from "@/app/enums/brandsEnum";
import { BuckleTypeEnum } from "@/app/enums/buckleTypeEnum";
import { CalendarWatchTypeEnum } from "@/app/enums/calendarWatchTypeEnum";
import { CaseBackDetailsEnum } from "@/app/enums/caseBackDetailsEnum";
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
  title: "1993 Eletta Chronograph OS60",
  sliderImages: [
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7371.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7372.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7373.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7374.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7375.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7376.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7377.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7378.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7379.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7380.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7381.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7382.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7383.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7384.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7385.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7387.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7388.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7389.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7390.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7391.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7392.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7393.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7394.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7393.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7394.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7395.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7396.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7397.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7398.JPG",
    "public/assets/Images/Elleta/Eletta_Chrono_OS60_1993/IMG_7403.JPG",
  ],
  saleReport: {
    price: 59,
    date: "31/07/2023",
    url: "https://www.catawiki.com/en/l/72819739-eletta-orange-boy-chronograph-men-1987",
  },
  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.WR_50_METERS, featuresEnum.CHRONOGRAPH],

    information: {
      brand: BrandsEnum.ELETTA,
      series: "Chronograph",
      catalogueReference: "42-A952G",
      productionYear: "1993",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: "39 mm",
      thickness: "9 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATERPROOF_50M,
      finishingDetails: "Gun-metal/Sanded",
      bezel: "Uni-directional bezel, 10 minute graduatedl",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "White",
      dialMarkers: DialMarketsEnum.ARABIC,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.MIYOTA_OS60,
  },
};

export default details;
