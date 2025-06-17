import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ZENITH_P_12_4_50: Caliber = {
  // Title
  title: "Zenith caliber 12-4-50",

  //Description
  description:
    "Introduced around 1942.\n\
  Caliber series with small sub second:\n\
  - 12-4-P: sub second\n\
  - 12-4-50: sub second\n\
  - 12-4-P-6: sub second, Incabloc\n\
  \n\
  Caliber series with Central Sweep second:\n\
  - 12-4-P-50: sweep second\n\
  - 12-4-P-50-6: sweep second, Incabloc\n\
  - 12-4-P-7: stem unlocking from dlal side\n",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Zenith/P12_4_50/P_12_4_50__0.JPG",
    "public/assets/Images/Movements/Zenith/P12_4_50/P_12_4_50__1.JPG",
  ],

  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ZENITH,
    // ModelReference
    modelReference: "12-4-50",
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

export default ZENITH_P_12_4_50;
