import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const OMEGA_265: Caliber = {
  // Title
  title: "Omega Cal. 265",
  //Description
  description:
    "Caliber series with small sub second:\n\
  - 30: 15 jewels, no shock protection\n\
  - 30T1: 15 jewels, no shock protection\n\
  - 30T2: 15 jewels, no shock protection\n\
  - 30T2PC: 15 jewels, Incabloc\n\
  - 260: =30T2 since 1949, 15 jewels\n\
  - 261: 17 jewels, antimagnetic\n\
  - 262: 17 jewels, excenter regulator\n\
  - 265: 15 jewels, antimagnetic\n\
  - 266,267: 17 jewels, antimagnetic\n\
  - 268: ring- instead screw balance\n\
  - 269: flat- instead Breguet-hairspring\n\
  \n\
  Caliber series with Central Sweep second:\n\
  - 30SC: 16 jewels, no shock protection\n\
  - 30T1: 16 jewels, no shock protection\n\
  - 30T2SC: 16 jwwels, no shock protection\n\
  - 30T2SCPC: 17/18 jewels, Incabloc\n\
  - 280: =Omega 30SC T2 since 1949, 17 jewels\n\
  - 281: 17 jewels, excenter regulator\n\
  - 283,284: 17 jewels, antimagnetic\n\
  - 285: ring- instead screw balance\n\
  - 286: flat- instead Breguet-hairspring",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/Omega_cal_265/Omega_cal_265_1.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_265/Omega_cal_265_2.JPG",
    "public/assets/Images/Movements/Omega/Omega_cal_265/Omega_cal_265_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "Cal. 265",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_45,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default OMEGA_265;
