import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const OMEGA_1141_45J: Caliber = {
  // Title
  title: "Omega Cal. 1141",
  //Description
  description:
    'Omega speedmaster "reduced" movements use a combination of an ETA automatic base movement with a Chronograph module from Debois Depraz. \n' +
    "The Omega 1141 is an automatic chronograph with 45 jewels, using a 24 jewels Debois Derpáz 2020 cronograph powered by a 21 jewels ETA 2890-A2 base movement.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1141/cal_1141_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1141/cal_1141_2.JPG",
    "public/assets/Images/Movements/Omega/cal_1141/cal_1141_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1141",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_42,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "12 hour 30 minute chronograph, Hours, Minutes, Sub Seconds at 3 o'clock",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_1141_45J;
