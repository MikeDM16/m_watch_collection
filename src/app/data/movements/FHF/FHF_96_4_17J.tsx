import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const FHF_96_4: Caliber = {
  // Title
  title: "FHF Cal. 96-4",
  //Description
  description: "Also signed as ST or FHF-ST in some movement variants.",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FHF/FHF_96_4/FHF_96_4_3.JPG",
    "public/assets/Images/Movements/FHF/FHF_96_4/FHF_96_4_4.JPG",
    "public/assets/Images/Movements/FHF/FHF_96_4/FHF_96_4_1.JPG",
    "public/assets/Images/Movements/FHF/FHF_96_4/FHF_96_4_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FHF,
    // ModelReference
    modelReference: "Cal. 96-4",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
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

export default FHF_96_4;
