import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const OMEGA_672_24J: Caliber = {
  // Title
  title: "Omega Cal. 672",
  //Description
  description:
    "The Omega 672 was produced from 1968 to 1971. It's a chronometer grade movement and shares components with the manual-wind caliber 620. \n\
  It features automatic winding and includes variations with both sweep seconds and non-sweep seconds.\n\n\
  19800 A/h:\n\
  - 670: 17/24 jewels\n\
  - 672: COSC Chronometer, 24 jewels\n\
  - 680: Date, 17 jewels\n\
  - 681: Date, 24 jewels\n\
  - 682: COSC Chronometer, date, 24 jewels\n\
  \n\
  21600 A/h:\n\
  - 683: Date, 17 jewels\n\
  - 684: Date, 24 jewels\n\
  - 685: COSC Chronometer, date, 24 jewels",

  // UsefullLinks
  usefullLinks: {
    "EmmyWatch Omega Cal.672": "https://www.emmywatch.com/db/movement/omega--672/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/Omega_cal_672/Omega_cal_672_1.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_672/Omega_cal_672_2.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_672/Omega_cal_672_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "Cal. 672",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_19800,
    // Jewels
    jewels: JewelsNumberEnum.J_24,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_672_24J;
