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
import { ZenithBrandSeries } from "./ZenithBrandSeries";

const details: WatchDetails = {
  title: "2005 Zenith El Primero Port Royal V",

  sliderImages: [
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8318.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8319.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8321.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8386.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8390.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8393.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8338.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8339.JPG",

    /*
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3740.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3741.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3742.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3744.JPG",
    */
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8342.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8343.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8344.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8345.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8346.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8347.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8348.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8349.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8350.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8351.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8352.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8353.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8327.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8331.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8332.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8333.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8334.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8336.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8337.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8359.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8360.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8361.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8362.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8363.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8364.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8365.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8366.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8367.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8368.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8369.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8370.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8322.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8323.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8324.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8325.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8383.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8385.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8371.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8372.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8373.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8374.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8375.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8376.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8377.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8378.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8379.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8380.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8354.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8356.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8357.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_8358.JPG",

    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3680.JPG",
    "public/assets/Images/Zenith/2005_Zenith_El_Primero_Port_Royal/IMG_3681.JPG",
  ],

  technicalData: {
    features: [featuresEnum.DATE, featuresEnum.AUTOMATIC_CHRONOGRAPH],

    information: {
      brand: BrandsEnum.ZENITH,
      series: ZenithBrandSeries.EL_PRIMERO,
      catalogueReference: "Port Royal V - 01/02.0451.400",
      productionYear: "2005",
      movementType: MovementWatchTypeEnum.AUTOMATIC,
      style: WatchStyleEnum.DRESS,
    },

    case: {
      diameter: "40 mm",
      thickness: "11 mm",
      material: "Stainless Steel",
      waterResistance: WaterResistanceEnum.WATER_RESISTANT,
      finishingDetails: "Polished",
      bezel: "Without",
      crownType: CrownWatchTypeEnum.PUSH_PULL,
      crystal: CrystalMaterialEnum.SAPPHIRE,
      caseback: CaseBackDetailsEnum.OPEN_CASE_BACK,
    },

    dial: {
      color: "Black",
      dialMarkers: DialMarketsEnum.ARABIC_STICKS,
      finishingDetails: FinishingDetailsEnum.DETAILED_SUB_DIALS,
      luminiscentIndexes: LuminescentIndexesEnum.HANDS_AND_MARKERS,
      calendar: CalendarWatchTypeEnum.AT_4_5_OCLOCK,
    },

    bracelet: {
      material: "Stainless Steel Links",
      buckleType: BuckleTypeEnum.FOLDING_CLASP,
      width: "20 mm",
      color: "Grey",
    },

    movement: MovementsDataDB.ZENITH_EL_PRIMERO_400Z,
  },
};

export default details;
