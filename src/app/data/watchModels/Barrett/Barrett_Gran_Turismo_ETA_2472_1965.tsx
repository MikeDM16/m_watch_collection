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
  title: "1965 Barrett Gran Turismo ETA 2472",
  sliderImages: [
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6184.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6185.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6186.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6187.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6189.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6166.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6167.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6168.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6169.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6170.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6171.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6172.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6173.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6174.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6175.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6112.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6190.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6192.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6193.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6194.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6195.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6196.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6197.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6199.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6200.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6201.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6203.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6176.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6177.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6178.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6179.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6180.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6181.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6182.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6183.JPG",

    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6204.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6205.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6206.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6208.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6209.JPG",
    "public/assets/Images/Barrett/1965_Barrett_Gran_Turismo_eta_2472/IMG_6210.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC],

    information: {
      brand: BrandsEnum.BARRETT,
      series: "Gran Turismo",
      catalogueReference: "42574 (Brevet 238872)",
      productionYear: "1965",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.CASUAL,
    },

    case: {
      diameter: "35 mm",
      thickness: "12 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Vertical Brushed",
      bezel: "Engine-turned bezel",
      crownType: CrownWatchTypeEnum.SCREW_DOWN,
      crystal: CrystalMaterialEnum.ACRYLIC,
      caseback: CaseBackDetailsEnum.DETAILS_ENGRAVED,
    },

    dial: {
      color: "Grey",
      dialMarkers: DialMarketsEnum.BATTON,
      finishingDetails: FinishingDetailsEnum.APPLIED_INDECES,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_3_OCLOCK,
    },

    bracelet: {
      material: "Leather",
      buckleType: BuckleTypeEnum.STANDARD_BUCKLE,
      width: "20 mm",
      color: "Yellow",
    },

    movement: MovementsDataDB.ETA_2472,
  },
};

export default details;
