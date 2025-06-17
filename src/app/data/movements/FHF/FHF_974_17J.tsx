import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const FHF_974: Caliber = {
  // Title
  title: "FHF Cal. 974",
  //Description
  description: "Also signed as ST or FHF-ST in some movement variants.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FHF/FHF_974/FHF_974_2.JPG",
    "public/assets/Images/Movements/FHF/FHF_974/FHF_974_3.JPG",
    "public/assets/Images/Movements/FHF/FHF_974/FHF_974_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FHF,
    // ModelReference
    modelReference: "Cal. 974",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds, Quick date set",
    // Battery
    battery: undefined,
  },
};

export default FHF_974;
