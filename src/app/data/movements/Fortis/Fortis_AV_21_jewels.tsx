import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const FORTIS_AV_21J: Caliber = {
  // Title
  title: "Fortis AV 21 Jewels",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: ["public/assets/Images/Movements/Fortis/Fortis_AV_21J/Fortis_AV_21J_1.JPG"],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.FORTIS,
    // ModelReference
    modelReference: "Cal. AV 21 Jewels",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_21,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions: "Day, Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default FORTIS_AV_21J;
