import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const FHF_30: Caliber = {
  // Title
  title: "FHF Cal. 30",
  //Description
  description:
    "Base movement widely used in many watches such as Oyster Watch Co. and even Tudor. In Tudor references it was called the calibre 59.\n\
    Can be found with 15 or 17 jewels variants, and also offers a version with small seconds.",
  usefullLinks: {
    "EmmyWatch FHF30": "https://www.emmywatch.com/db/movement/fontainemelon--30/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FHF/FHF_30/FHF_30_1.JPG",
    "public/assets/Images/Movements/FHF/FHF_30/FHF_30_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FHF,
    // ModelReference
    modelReference: "Cal. 30",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default FHF_30;
