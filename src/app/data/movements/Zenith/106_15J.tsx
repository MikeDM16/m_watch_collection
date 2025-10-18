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
  description:
    "In-house Zenith movement produced around 1948 until 1955.\n\
  Movement References:\n\
    -106 : sub second\n\
    -106-50: sweep second\n\
    -106-6: sub second, Incabloc\n\
    -106-50-6: sweep second, Incabloc\n\
    -106-S.C.: sweep second, Incabloc\n\
    -106-7: stem unlocking from dlal side\n\
    -106-P: Mouvement pincé\n\
    -extension B: cam disc regulator\n",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Zenith/Cal_106_15J/Cal_106_15J_1.JPG",
    "public/assets/Images/Movements/Zenith/Cal_106_15J/Cal_106_15J_2.JPG",
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
