import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const TISSOT_27B_1: Caliber = {
  // Title
  title: "Tissot 27B-1",

  //Description
  description:
    "In-house Tissot movement produced around 1960 until 1961. \n\
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
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/27B_1/27B_1_1.JPG",
    "public/assets/Images/Movements/Tissot/27B_1/27B_1_2.JPG",
    "public/assets/Images/Movements/Tissot/27B_1/27B_1_3.JPG",
    "public/assets/Images/Movements/Tissot/27B_1/27B_1_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "27B-1",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_27B_1;
