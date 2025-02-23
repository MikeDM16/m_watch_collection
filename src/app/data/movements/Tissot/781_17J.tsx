import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const TISSOT_781: Caliber = {
  // Title
  title: "Tissot 781",

  //Description
  description: "In-house Tissot movement produced around 1960 until 1972. \n",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/781/781_1.JPG",
    "public/assets/Images/Movements/Tissot/781/781_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "781",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_781;
