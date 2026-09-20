import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const UNITAS_6497: Caliber = {
  title: "Unitas 6497",
  description:
    "Mechanical movement with a small seconds subdial at 9:00. \
    One of the most iconic mechanical movements originally designed in the 1950s for pocket watches, successfully transitioned to large wristwatches. Most notably powering oversized pilot (Flieger) watches and luxury military-style timepieces like Panerai",
  usefullLinks: {
    "EmmyWatch Unitas 6497": "https://www.emmywatch.com/db/movement/unitas--6497/",
  },
  sliderImages: [
    "public/assets/Images/Movements/Unitas/Unitas_6497/Unitas_6497_1.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6497/Unitas_6497_2.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6497/Unitas_6497_3.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6497/Unitas_6497_4.JPG",
    "public/assets/Images/Movements/Unitas/Unitas_6497/Unitas_6497_5.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.UNITAS,
    modelReference: "6497",
    type: MovementWatchTypeEnum.MECHANIQUE,
    frequency: FrequencyEnum.F_21600,
    jewels: JewelsNumberEnum.J_17,
    reserve: ReserveHoursEnum.R_45,
    functions: "Hours, Minutes, Sweep seconds at 9 O'clock",
    battery: undefined,
  },
};

export default UNITAS_6497;
