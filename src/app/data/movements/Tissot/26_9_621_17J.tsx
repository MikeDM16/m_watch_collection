import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const TISSOT_26_9_621: Caliber = {
  // Title
  title: "Tissot 26.9",

  //Description
  description:
    "In-house Tissot movement produced around 1955 until 1960. \n\
  designation:\n\
  - 26.9-21 / -: manual wind\n\
  - 26.9-621 / -: manual wind, date\n\
  - 28.5R-21 / 823: automatic\n\
  - 28.5R-621 / 824: automatic, date",

  // UsefullLinks
  usefullLinks: {
    "Ranfft Tissot Cal. 26.9": "https://ranfft.org/caliber/9919-Tissot-269-621",
  },
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/Tissot/26_9_621/26_9_621_1.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "26.9 - 621",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_19800,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_38,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_26_9_621;
