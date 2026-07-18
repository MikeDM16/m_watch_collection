import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const TISSOT_31_21_17J: Caliber = {
  // Title
  title: "Tissot 31-21",

  //Description
  description:
    "In-house Tissot movement produced around 1944 until 1956. \n\
    Detailed references diferences:\n\
    - 28-1 : sub second, base plate without mounting flange\n\
    - 28-21: sweep second, base plate without mounting flange\n\
    - 28.5-1 : sub second, base plate with mounting flange\n\
    - 28,5-21: sweep second, base plate with mounting flange\n\
    - 31-1 : sub second, bigger base plate\n\
    - 31-21: sweep second, bigger base plate",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Tissot 31-21": "https://ranfft.org/caliber/9960-Tissot-31-21",
    "Emmy Eatch Tissot 31-21-2": "https://www.emmywatch.com/db/movement/tissot--31-21/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/31_21/31_21_1.JPG",
    "public/assets/Images/Movements/Tissot/31_21/31_21_2.JPG",
    "public/assets/Images/Movements/Tissot/31_21/31_21_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "31-21",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_19800,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_31_21_17J;
