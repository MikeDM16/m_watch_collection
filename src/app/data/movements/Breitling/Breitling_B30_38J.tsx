import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const BREITLING_B30_38J: Caliber = {
  title: "Breitling B30",
  description:
    "Breitling B30 movements use a combination of an ETA automatic base movement ETA 2892-A2 with a Chronograph module from Debois Depraz.",
  usefullLinks: {},
  sliderImages: [
    "public/assets/Images/Movements/Breitling/Breitling_B30_38J/Breitling_B30_38J_2.JPG",
    "public/assets/Images/Movements/Breitling/Breitling_B30_38J/Breitling_B30_38J_3.JPG",
    "public/assets/Images/Movements/Breitling/Breitling_B30_38J/Breitling_B30_38J_1.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.BREITLING,
    modelReference: "B30",
    type: MovementWatchTypeEnum.AUTOMATIC,
    frequency: FrequencyEnum.F_28800,
    jewels: JewelsNumberEnum.J_38,
    reserve: ReserveHoursEnum.R_42,
    functions: "Chronograpg, Hours, Minutes, Sweep Seconds at 3 o'clock",
    battery: undefined,
  },
};

export default BREITLING_B30_38J;
