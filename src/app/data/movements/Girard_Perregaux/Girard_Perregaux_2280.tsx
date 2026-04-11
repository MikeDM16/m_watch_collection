import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const Girard_Perregaux_2280: Caliber = {
  title: "Girard Perregaux 2280",
  description:
    "Omega Girard Perregaux 2280 movements use a combination of an ETA automatic base movement with a Chronograph module from Debois Depraz. \n" +
    "The GP2280 is an automatic chronograph with 45 jewels, using a 24 jewels Debois Derpáz 2021 cronograph powered by a 21 jewels ETA 2892 base movement.",
  usefullLinks: {},
  sliderImages: [
    "public/assets/Images/Movements/Girard_Perregaux/Girard_Perregaux_2280/Girard_Perregaux_2280_1.JPG",
    "public/assets/Images/Movements/Girard_Perregaux/Girard_Perregaux_2280/Girard_Perregaux_2280_2.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.GIRARD_PERREGAUX,
    modelReference: "2280",
    type: MovementWatchTypeEnum.AUTOMATIC,
    frequency: FrequencyEnum.F_28800,
    jewels: JewelsNumberEnum.J_45,
    reserve: ReserveHoursEnum.R_42,
    functions: "Chronograpg, Hours, Minutes, Sweep Seconds at 3 o'clock",
    battery: undefined,
  },
};

export default Girard_Perregaux_2280;
