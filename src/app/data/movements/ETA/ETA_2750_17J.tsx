import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const ETA_2750: Caliber = {
  // Title
  title: "ETA 2750",
  //Description
  description:
    "The ETA 2750 is an 11½''' (26 mm) manual-wind movement with centre seconds and Incabloc shock protection, made from 1969 to 1982.\n" +
    "It is the hand-wound, no-date member of ETA's 2750–2791 family, which also includes the automatic ETA 2783.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft ETA 2750": "https://ranfft.org/caliber/4145-ETA-2750",
    "EmmyWatch ETA 2750": "https://www.emmywatch.com/db/movement/eta--2750/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2750/ETA_2750_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2750/ETA_2750_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "Cal. 2750",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_50,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default ETA_2750;
