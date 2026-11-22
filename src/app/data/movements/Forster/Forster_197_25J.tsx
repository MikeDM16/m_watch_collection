import { CaliberBrandsEnum, FrequencyEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const FORSTER_197: Caliber = {
  // Title
  title: "Förster Cal. 197",
  //Description
  description:
    "Förster 197 is an 11½-ligne automatic movement with date by Bernhard Förster of Pforzheim, Germany. " +
    "It belongs to the same family as the Förster 187 and 196, but uses the later mobile stud carrier.\n\n" +
    "Related calibres:\n" +
    "- 192: automatic, fixed stud carrier\n" +
    "- 196: automatic, date, fixed stud carrier\n" +
    "- 194: automatic, mobile stud carrier\n" +
    "- 1197: automatic, day and date",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Förster 187 (family)": "https://ranfft.org/caliber/5815-Frster-187",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FORSTER,
    // ModelReference
    modelReference: "Cal. 197",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default FORSTER_197;
