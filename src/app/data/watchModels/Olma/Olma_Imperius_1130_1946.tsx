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
  title: "1946 Olma Imperius AS 1130",

  sliderImages: [
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0818.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0819.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0821.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0822.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0823.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0825.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0826.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0828.JPG",

    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0848.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0849.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0850.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0851.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0852.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0853.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0854.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0855.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0856.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0857.JPG",

    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0834.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0835.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0836.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0837.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0838.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0839.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0840.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0841.JPG",

    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0829.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0830.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0831.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0832.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0833.JPG",

    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0842.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0843.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0844.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0845.JPG",
    "public/assets/Images/Olma/1946_Olma_Imperius_1130/IMG_0846.JPG",
  ],
  technicalData: {
    features: [featuresEnum.MECHANICAL, featuresEnum.SMALL_SECONDS],

    information: {
      brand: BrandsEnum.OLMA,
      series: "Imperius",
      catalogueReference: "0951",
      productionYear: "1946",
      movementType: MovementWatchTypeEnum.MECHANIQUE,
      style: WatchStyleEnum.DRESS,
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
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.NONE,
      calendar: CalendarWatchTypeEnum.WITHOUT,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Brown",
    },

    movement: MovementsDataDB.AS_1130,
  },
};

export default details;
