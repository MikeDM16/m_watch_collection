import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const ETA_2391: Caliber = {
  // Title
  title: "ETA 2391",
  //Description
  description:
    "The ETA 2391 is an 11½''' (26 mm) manual-wind movement with centre seconds and Incabloc shock protection, from around 1960.\n" +
    "It is a hand-wound member of ETA's 2390–2472 family, which also includes the automatic ETA 2472, and was made with 17 or 21 jewels.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft ETA 2391": "https://ranfft.org/caliber/4007-ETA-2391",
  },
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/ETA/ETA_2391/ETA_2391_1.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "Cal. 2391",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default ETA_2391;
