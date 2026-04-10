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
  title: "2001 Calypso Chronograph OS10",

  sliderImages: [
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2951.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2952.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2953.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2954.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2955.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2956.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2957.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2958.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2967.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2968.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2969.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2970.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2971.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2972.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2973.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2974.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2975.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2976.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_2977.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/MRRQ2327.JPG",
    "public/assets/Images/Calypso/2001_Calypso_Chrono_OS10/IMG_0781.JPG",
  ],
  saleReport: {
    price: 123,
    date: "13/05/2019",
    url: "https://www.catawiki.com/l/26584413-calypso-nos-12h-racing-chronograph-cal-citizen-os10-men-1990-1999",
  },
  technicalData: {
    features: [
      featuresEnum.DATE,
      featuresEnum.CHRONOGRAPH,
      featuresEnum.TACHYMETER,
      featuresEnum.WR_30_METERS,
    ],

    information: {
      brand: BrandsEnum.CALYPSO,
      series: "Chronograph",
      catalogueReference: "2011",
      productionYear: "1998",
      movementType: MovementWatchTypeEnum.QUARTZ,
      style: WatchStyleEnum.SPORTS,
    },

    case: {
      diameter: CaseDiameterEnum.D_38,
      thickness: CaseThicknessEnum.T_8,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_30M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.TACHYMETER,
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.MINERAL,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: ColorEnum.RED,
      dialMarkers: DialMarketsEnum.DAGGER,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.SHARK_LEATHER,
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: BraceletWidthEnum.W_18,
      color: ColorEnum.RED,
    },

    movement: MovementsDataDB.MIYOTA_OS10,
  },
};

export default details;
