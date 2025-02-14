import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const TISSOT_27_3: Caliber = {
  // Title
  title: "Tissot 27-3",

  //Description
  description:
    "In-house Tissot movement produced around 1940 until 1950s. \n" +
    'Suffix "-3": sub second, Shock Resist. \n',
  // UsefullLinks
  usefullLinks: {
    "Ranfft Tissot27-3": "https://ranfft.org/caliber/9934-Tissot-27-3",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Tissot/Tissot_27_3/Tissot_27_3.JPG",
    "public/assets/Images/Movements/Tissot/Tissot_27_3/Tissot_27_3_1.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.TISSOT,
    // ModelReference
    modelReference: "27-3",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_41,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds at 6 0'clock",
    // Battery
    battery: undefined,
  },
};

export default TISSOT_27_3;
