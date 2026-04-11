import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const Duromat_7522: Caliber = {
  title: "Duromat 7522",
  description: "",
  usefullLinks: {
    "Rafft Duromat 7522": "https://ranfft.org/caliber/3008-Durowe-7522-INT",
  },

  sliderImages: [
    "public/assets/Images/Movements/Duromat/Duromat_7522_21J/Duromat_7522_21J_1.JPG",
    "public/assets/Images/Movements/Duromat/Duromat_7522_21J/Duromat_7522_21J_2.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.DUROMAT,
    modelReference: "7522/3",
    type: MovementWatchTypeEnum.AUTOMATIC,
    frequency: FrequencyEnum.F_21600,
    jewels: JewelsNumberEnum.J_21,
    reserve: ReserveHoursEnum.R_38,
    functions: "Hours, Minutes, Sweep Seconds, Calendar",
    battery: undefined,
  },
};

export default Duromat_7522;
