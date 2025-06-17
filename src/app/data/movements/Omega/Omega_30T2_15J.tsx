import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_30T2: Caliber = {
  // Title
  title: "Omega Cal. 30T2",
  //Description
  description: "In-house Omega movement produced around 1939 until 1963.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_30T2/Omega_cal_30T2_1.JPG",
    "public/assets/Images/Movements/Omega/cal_30T2/Omega_cal_30T2_2.JPG",
    "public/assets/Images/Movements/Omega/cal_30T2/Omega_cal_30T2_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "Cal. 30T2",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_30T2;
