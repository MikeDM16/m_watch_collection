import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_T17: Caliber = {
  // Title
  title: "Omega Cal. T17",
  //Description
  description:
    'Early Omega movement designed specifically for use in rectangular and other shaped cases. Protected by a metal casing. \
    Charles Perregaux (under the direction of Henri Gerber) Description: The "T" designates this calibre\'s tonneau or barrel shape,\
    and "17" its maximum width in millimetres (the calibre\'s length being of 24.5 mm).\n\
    With a 60-hour power reserve, the T-17 had the largest power reserve of all the mechanical wristwatch movements made by Omega until the calibre 8500 of 2006! \
    This achievement was realised thanks to an enlarged barrel which rotated slower and a gearing ratio that allowed a considerable increase in the duration of the run, driving to an outstanding stability for the normal 24-hour daily rate separating consecutive windings.\n\
    The T-17 was produced in more than 167,000 pieces up to 1943.',

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/Omega_cal_T17/Omega_T17_1.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_T17/Omega_T17_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "Cal. T17",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_60,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_T17;
