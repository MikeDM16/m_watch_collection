import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const PESEUX_7046: Caliber = {
  // Title
  title: "Peseux Cal. 7046",
  //Description
  description:
    "Peseux 7046 is the date version of the Peseux 7040, a 10½-ligne (23.7 mm), 3.1 mm high hand-wound movement " +
    "launched in 1968, running at 21600 A/h with Incabloc shock protection.\n\n" +
    "Variants:\n" +
    "- 7040: no date\n" +
    "- 7050: 11½''', no date\n" +
    "- 7056: 11½''', date\n" +
    "- 7057: 11½''', day and date\n" +
    "- 7060 / 7066 / 7070 / 7076 / 7077: the same set on a taller 3.5 mm base",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Peseux 7046": "https://ranfft.org/caliber/8914-Peseux-7046",
    "Ranfft Peseux 7040": "https://ranfft.org/caliber/8919-Peseux-7040",
    "CaliberCorner Peseux 7040": "https://calibercorner.com/peseux-caliber-7040/",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.PESEUX,
    // ModelReference
    modelReference: "Cal. 7046",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Date, Hours, Minutes",
    // Battery
    battery: undefined,
  },
};

export default PESEUX_7046;
