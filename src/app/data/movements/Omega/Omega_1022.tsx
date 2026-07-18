import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const OMEGA_1022_23J: Caliber = {
  // Title
  title: "Omega Cal. 1022",
  //Description
  description:
    "Reference series 1000 - 1035\n\
  - 1000: automatic, 17 jewels, date\n\
  - 1001: automatic, 20 jewels, date, chronometer\n\
  - 1002: automatic, 20 jewels, date\n\
  - 1010: automatic, 17 jewels, date\n\
  - 1011: automatic, 23 jewels, date, chronometer\n\
  - 1012: automatic, 23 jewels, date\n\
  - 1020: automatic, 17 jewels, day, date\n\
  - 1021: automatic, 23 jewels, day, date, chronometer\n\
  - 1022: automatic, 23 jewels, day, date\n\
  - 1030: manual wind, 17 jewels, date\n\
  - 1035: manual wind, 17 jewels",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Omega 1022": "https://ranfft.org/caliber/8286-Omega-1022",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1022/cal_1022_3.JPG",
    "public/assets/Images/Movements/Omega/cal_1022/cal_1022_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1022/cal_1022_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1022",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_23,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Day, Date, Hacking Seconds, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_1022_23J;
