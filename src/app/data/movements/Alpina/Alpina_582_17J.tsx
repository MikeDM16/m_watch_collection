import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const ALPINA_582: Caliber = {
  // Title
  title: "Alpina Cal. 582",
  //Description
  description:
    "Alpina 582 is a 12¾-ligne (28.55 mm) bumper (hammer-rotor) automatic launched in 1945, " +
    "with small seconds at 6 and Incabloc shock protection. Early examples are signed both Straub and Alpina.\n\n" +
    "Variants:\n" +
    "- 584: automatic, sweep seconds\n" +
    "- 584C: automatic, sweep seconds, date\n" +
    "- 590: hand-wound, sub seconds\n" +
    "- 594: hand-wound, sweep seconds\n" +
    "- 594CS: hand-wound, sweep seconds, date\n" +
    "- suffix R: ring balance with mobile stud carrier",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Alpina 582": "https://ranfft.org/caliber/187-Alpina-582",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ALPINA,
    // ModelReference
    modelReference: "Cal. 582",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_37,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default ALPINA_582;
