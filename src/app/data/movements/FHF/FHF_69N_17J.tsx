import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const FHF_69N: Caliber = {
  // Title
  title: "FHF Cal. 69",
  //Description
  description:
    "Also signed as ST or FHF-ST in some movement variants. Also branded by Tissot as Cal. 2137",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FHF/FHF_69N/FHF_69N_1.JPG",
    "public/assets/Images/Movements/FHF/FHF_69N/FHF_69N_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FHF,
    // ModelReference
    modelReference: "Cal. 69",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds, Quick date set",
    // Battery
    battery: undefined,
  },
};

export default FHF_69N;
