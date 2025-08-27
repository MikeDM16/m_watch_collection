import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_610_17J: Caliber = {
  // Title
  title: "Omega Cal. 610",
  //Description
  description:
    "Automatic Caliber series:\n\
    - 550: 17 jewels\n\
    - 551: 24 jewels, chronometer\n\
    - 552: 24 jewels\n\
    - 560: 17 jewels, date\n\
    - 561: 24 jewels, date, chronometer\n\
    - 562: 24 jewels, date\n\
    - 563: 17 jewels, quickset date\n\
    - 564: 24 jewels, quickset date, chronometer\n\
    - 565: 24 jewels, quickset date\n\
    - 750: 17 jewels, day, quickset date\n\
    - 751: 24 jewels, day, quickset date, chronometer\n\
    - 752: 24 jewels, day, quickset date\n\n\
    Manual wind Caliber serie:\n\
    - 600: Reed's regulator\n\
    - 601: excenter regulator\n\
    - 602: excenter regulator, chronometer\n\
    - 610: Reed's regulator, date\n\
    - 611: excenter regulator, date\n\
    - 613: excenter regulator, quickset date",

  // UsefullLinks
  usefullLinks: {
    "EmmyWatch Omega Cal.610": "https://www.emmywatch.com/db/movement/omega--610/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/Omega_cal_610/Omega_cal_610.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_610/Omega_cal_610_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "Cal. 610",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_19800,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_610_17J;
