import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const TISSOT_27_2: Caliber = {
  // Title
  title: "Tissot 27-2",

  //Description
  description:
    "In-house Tissot movement produced around 1936 until 1949. \n\
    Baseplate plane:\n\
    - 27 : sub second\n\
    - 27-1 : sub second, Incabloc\n\
    - 27-3 : sub second, Shock Resist\n\
    - 27-2: sweep second\n\
    - 27-23 : sweep second, Shock Resist\n\
    - 27-53: chronograph 60s, Shock Resist\n\
    - 27-63: sub second, date, Shock Resist\n\
    \n\
    Baseplate bevelled, setting-lever spring modified:\n\
    - 27-T : sub second\n\
    - 27-1T: sub second, Incabloc\n\
    - 27-2T: sweep second\n\
    - 27-21T: sweep second, Incabloc\n\
    - 27-61T: sub second, date, Incabloc\n\
    \n\
    Redesigned movement:\n\
    - 27B : sub second\n\
    - 27B-1 : sub second, Incabloc\n\
    - 27B-2 : sweep second\n\
    - 27B-21: sweep second, Incabloc\n\
    - 27B-61: sweep second, date, Incabloc\n\
    - 27B-9: no second",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Tissot 27_2": "https://ranfft.org/caliber/9927-Tissot-27-2",
    "Emmy Eatch Tissot 27-2": "https://www.emmywatch.com/db/movement/tissot--27-2/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/27_2/27_2_1.JPG",
    "public/assets/Images/Movements/Tissot/27_2/27_2_2.JPG",
    "public/assets/Images/Movements/Tissot/27_2/27_2_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "27-2",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_27_2;
