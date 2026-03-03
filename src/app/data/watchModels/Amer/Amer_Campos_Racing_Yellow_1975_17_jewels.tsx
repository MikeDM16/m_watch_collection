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
  title: "1975 Amer Campos Racing Yellow FE 233 17 Jewels",

  sliderImages: [
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0592.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0593.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0595.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0597.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0598.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0599.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0600.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0601.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0602.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0603.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0582.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0583.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0584.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0585.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0586.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0587.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0588.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0589.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0590.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0604.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0605.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0606.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0620.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0621.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0622.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0623.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0624.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0625.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0607.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0608.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0609.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0610.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0611.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0612.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0613.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0614.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0615.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0616.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0617.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0618.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Yellow_FE_233/IMG_0619.JPG",
  ],

  saleReport: {
    price: 140,
    date: "26/02/2026",
    url: "https://www.catawiki.com/en/l/101584681",
  },

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.AMER,
      series: "Campos - Racing Yellow",
      catalogueReference: "7027 10",
      productionYear: "1975",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "8 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without bezel",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.NONE,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Crocodile Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "18 mm",
      color: "Bourdeaux",
    },

    movement: MovementsDataDB.FE_233,
  },
};

export default details;
