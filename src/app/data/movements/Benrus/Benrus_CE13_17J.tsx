import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const BENRUS_CE13: Caliber = {
  // Title
  title: "Benrus Cal. CE13",
  //Description
  description:
    "The Benrus CE13 is an 8¾''' (19.7 mm) manual-wind movement with small seconds and Incabloc shock protection.",
  // UsefullLinks
  usefullLinks: {
    "EmmyWatch Benrus CE13": "https://www.emmywatch.com/db/movement/benrus--ce13/",
    "EmmyWatch ETA 930": "https://www.emmywatch.com/db/movement/eta--930/",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.BENRUS,
    // ModelReference
    modelReference: "Cal. CE13",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock, Day at 12 o'clock, Date by pointer",
    // Battery
    battery: undefined,
  },
};

export default BENRUS_CE13;
