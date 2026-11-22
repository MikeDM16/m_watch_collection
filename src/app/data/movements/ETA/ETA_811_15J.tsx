import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const ETA_811: Caliber = {
  // Title
  title: "ETA 811",
  //Description
  description:
    "ETA 811 is a 10½-ligne (23.7 mm) round hand-wound movement from around 1935, with 15 jewels and small seconds. " +
    "Ranfft notes that its bridge shapes were probably made exclusively for Solvil, and records a Titus signature.\n\n" +
    "Related calibres in the same series:\n" +
    "- 810: 10½''', sub seconds\n" +
    "- 816: 10½''', sweep seconds\n" +
    "- 820: 11½''', sub seconds\n" +
    "- 1023: 11½''', sweep seconds",
  // UsefullLinks
  usefullLinks: {
    "Ranfft ETA 811": "https://ranfft.org/caliber/4322-ETA-811",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "Cal. 811",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ETA_811;
