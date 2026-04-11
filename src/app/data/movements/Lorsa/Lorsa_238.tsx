import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const Lorsa_238: Caliber = {
  title: "Lorsa 238",
  description: "",
  usefullLinks: {},
  sliderImages: [
    "public/assets/Images/Movements/Lorsa/Lorsa_238/Lorsa_238_1.JPG",
    "public/assets/Images/Movements/Lorsa/Lorsa_238/Lorsa_238_2.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.LORSA,
    modelReference: "238",
    type: MovementWatchTypeEnum.MECHANIQUE,
    frequency: FrequencyEnum.F_18000,
    jewels: JewelsNumberEnum.J_17,
    reserve: ReserveHoursEnum.R_34,
    functions: "Hours, Minutes, Sweep Seconds at 6 o'clock",
    battery: undefined,
  },
};

export default Lorsa_238;
