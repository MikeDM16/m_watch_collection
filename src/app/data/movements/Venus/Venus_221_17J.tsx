import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const VENUS_221: Caliber = {
  // Title
  title: "Venus Cal. 221",
  //Description
  description:
    "Venus 221 is an 11½-ligne (25.94 mm) hand-wound big-date calibre launched in 1955, with centre seconds and the date " +
    "shown by two discs (units and tens) at 12 o'clock. Ranfft lists it with 21 jewels and a 17-jewel variant, " +
    "and records a Cornavin Watch signature on it.\n\n" +
    "Related calibres:\n" +
    "- 216: chronograph-based big date with small seconds\n" +
    "- 220: 10½''', base calibre\n" +
    "- 222: calendar and moon phase\n" +
    "- 227: date",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Venus 221": "https://ranfft.org/caliber/10608-Venus-221",
    "Ranfft Venus 220": "https://ranfft.org/caliber/10603-Venus-220",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.VENUS,
    // ModelReference
    modelReference: "221",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_36,
    // Functions
    functions: "Big Date at 12 o'clock, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default VENUS_221;
