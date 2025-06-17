import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const FE_140: Caliber = {
  // Title
  title: "FE (France Ebauche) Cal. 140",
  //Description
  description:
    "Caliber Family\n\
  - 140: No Date\n\
  - 140-1: Date\n\
  - 140-2: Day and Date\n\
  suffix A: winding wheels with finer tooth pitch\n\
  suffix B: minor detail modifications\n\
  suffix C: ratchet simplified\n\n",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/FE/FE_140/FE_140_3.JPG",
    "public/assets/Images/Movements/FE/FE_140/FE_140_4.JPG",
    "public/assets/Images/Movements/FE/FE_140/FE_140_5.JPG",
    "public/assets/Images/Movements/FE/FE_140/FE_140_1.JPG",
    "public/assets/Images/Movements/FE/FE_140/FE_140_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FE,
    // ModelReference
    modelReference: "Cal. 140",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_47,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set",
    // Battery
    battery: undefined,
  },
};

export default FE_140;
