import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import type { Caliber } from "../../caliberTypes";

const UNITAS_6325: Caliber = {
  title: "Unitas 6325",
  description: "Vintage mechanical movement with a small seconds subdial at 6:00. This caliber is often referred to as a military/army movement due to its common usage in such models. Typically found with 17 jewels, although some examples use 21 jewels.",
  usefullLinks: {
    "EmmyWatch Unitas 6325": "https://www.emmywatch.com/db/movement/unitas--6325/"
  },
  sliderImages: [
    "public/assets/Images/Movements/Unitas/UNITAS_6325/Unitas_6325_1.JPG",
    "public/assets/Images/Movements/Unitas/UNITAS_6325/Unitas_6325_2.JPG",
    "public/assets/Images/Movements/Unitas/UNITAS_6325/Unitas_6325_3.JPG",
    "public/assets/Images/Movements/Unitas/UNITAS_6325/Unitas_6325_4.JPG",
  ],
  details: {
    manufacturer: CaliberBrandsEnum.UNITAS,
    modelReference: "6325",
    type: MovementWatchTypeEnum.MECHANIQUE,
    frequency: FrequencyEnum.F_21600,
    jewels: JewelsNumberEnum.J_17,
    reserve: ReserveHoursEnum.R_47,
    functions: "Hours, Minutes, Sweep seconds at 6 O'clock",
    battery: undefined,
  },
};

export default UNITAS_6325;
