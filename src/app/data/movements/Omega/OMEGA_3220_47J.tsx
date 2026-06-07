import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const OMEGA_3220_47J: Caliber = {
  title: "Omega Cal. 3220",
  description:
    'Omega speedmaster "reduced" movements use a combination of an ETA automatic base movement with a Chronograph module from Debois Depraz. \n' +
    "The Omega 3220 is an automatic chronograph with 47 jewels, using a 26 jewels Debois Derpáz 2020 cronograph powered by a 21 jewels ETA 2892-A2 base movement.",
  usefullLinks: {
    "EmmyWatch Omega 3220": "https://www.emmywatch.com/db/movement/omega--3220/",
  },
  sliderImages: [
    "public/assets/Images/Movements/Omega/Omega_cal_3220/Omega_cal_3220_0.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_3220/Omega_cal_3220_1.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_3220/Omega_cal_3220_2.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_3220/Omega_cal_3220_3.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_3220/Omega_cal_3220_4.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.OMEGA,
    modelReference: "3220",
    type: MovementWatchTypeEnum.AUTOMATIC,
    frequency: FrequencyEnum.F_28800,
    jewels: JewelsNumberEnum.J_42,
    reserve: ReserveHoursEnum.R_41,
    functions: "12 hour 30 minute chronograph, Hours, Minutes, Sub Seconds at 3 o'clock",
    battery: undefined,
  },
};

export default OMEGA_3220_47J;
