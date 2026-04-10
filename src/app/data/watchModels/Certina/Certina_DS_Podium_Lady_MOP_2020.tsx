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
import { CertinaBrandSeries } from "./CertinaBrandSeries";

const details: WatchDetails = {
  title: "2020 Certina DS Podium Mother Of Pearl",
  sliderImages: [
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3129.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3130.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3131.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3132.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3133.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3134.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3135.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3136.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3137.JPG",

    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3117.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3118.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3120.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3121.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3122.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3125.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3126.JPG",

    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3138.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3139.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3140.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3141.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3142.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3143.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3144.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3145.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3146.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3147.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3148.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3149.JPG",
    "public/assets/Images/Certina/2020_Certina_DS_Podium_MOP_Lady/IMG_3150.JPG",
  ],

  saleReport: {
    price: 164,
    date: "29/07/2025",
  },

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.SCREWED_IN_CROWN],

    information: {
      brand: BrandsEnum.CERTINA,
      series: CertinaBrandSeries.DS_PODIUM,
      catalogueReference: "Mother of Pearl Lady",
      productionYear: "2020",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: CaseDiameterEnum.D_25,
      thickness: CaseThicknessEnum.T_9,
      material: CaseMaterialEnum.STAINLESS_STEEL,
      waterResistance: WaterResistanceEnum.WATERPROOF_100M,
      finishingDetails: CaseFinishingEnum.POLISHED,
      bezel: BezelTypeEnum.WITHOUT,
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.BRAND_DECORATION,
    },

    dial: {
      color: ColorEnum.WHITE_MOTHER_OF_PEARL,
      dialMarkers: DialMarketsEnum.ROMAN,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.AT_6_OCLOCK,
    },

    bracelet: {
      material: BraceletMaterialEnum.LEATHER,
      buckleType: BuckleTypeEnum.BUTTERFLY_DEPLOY_CLASP,
      width: BraceletWidthEnum.W_14,
      color: ColorEnum.RED,
    },

    movement: MovementsDataDB.ETA_2671,
  },
};

export default details;
