import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ZENITH_106_15J: Caliber = {
  // Title
  title: "Zenith caliber 106",

  //Description
  description: "In-house Zenith movement produced around 1948 until 1955.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Zenith/P12_4_50/106_15J__0.JPG",
    "public/assets/Images/Movements/Zenith/P12_4_50/106_15J__1.JPG",
  ],

  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ZENITH,
    // ModelReference
    modelReference: "106",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default ZENITH_106_15J;
