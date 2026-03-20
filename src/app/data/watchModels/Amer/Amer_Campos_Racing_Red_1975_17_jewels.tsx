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
  title: "1975 Amer Campos Racing Red FE 233 17 Jewels",

  sliderImages: [
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0549.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0550.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0551.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0552.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0554.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0556.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0557.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0558.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0559.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0560.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0561.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0541.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0542.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0543.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0545.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0546.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0547.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0548.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0565.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0567.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0568.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0569.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0570.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0571.JPG",

    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0562.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0563.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0564.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0578.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0579.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0580.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0581.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0572.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0573.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0574.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0575.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0576.JPG",
    "public/assets/Images/Amer/1975_Amer_Campos_Racing_Red_FE_233/IMG_0577.JPG",
  ],

  saleReport: {
    price: 320,
    date: "06/03/2026",
    url: "https://www.catawiki.com/en/l/101585026",
  },

  technicalData: {
    features: [featuresEnum.SMALL_SECONDS, featuresEnum.MECHANICAL],

    information: {
      brand: BrandsEnum.AMER,
      series: "Campos - Racing Red",
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
      color: "White - Red Tuxedo",
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
