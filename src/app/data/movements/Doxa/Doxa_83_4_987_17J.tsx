import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const DOXA_83_4_987_17J: Caliber = {
  // Title
  title: "Doxa Cal. 83/4",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/Doxa/Doxa_83_4/Doxa_83_4_1.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.DOXA,
    // ModelReference
    modelReference: "Cal. 84/4 987",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
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

export default DOXA_83_4_987_17J;
