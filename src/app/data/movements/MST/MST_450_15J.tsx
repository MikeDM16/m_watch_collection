import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const MST_450: Caliber = {
  // Title
  title: "MST (Meyer & Stüdeli) Cal. 450",
  //Description
  description:
    "MST 450 is an 8¾-ligne (19.7 mm) hand-wound movement by Meyer & Stüdeli, the in-house movement maker of Roamer. " +
    "Launched around 1960, it has 15 jewels, small seconds and Incabloc shock protection.\n\n" +
    "Variants:\n" +
    "- 451: date\n" +
    "- 475: 21600 A/h\n" +
    "- 476: 21600 A/h, date",
  // UsefullLinks
  usefullLinks: {
    "Ranfft MST 450": "https://ranfft.org/caliber/8205-MST-450",
  },
  // sliderImages
  sliderImages: [],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.MST,
    // ModelReference
    modelReference: "Cal. 450",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sub Seconds",
    // Battery
    battery: undefined,
  },
};

export default MST_450;
