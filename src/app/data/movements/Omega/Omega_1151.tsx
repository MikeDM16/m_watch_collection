import { CaliberBrandsEnum } from "@/app/enums/caliberEnums";

import ETA_Valjoux_7751_25 from "../ETA/ETA_Valjoux_7751_25J";

const OMEGA_1151 = Object.assign({}, ETA_Valjoux_7751_25);

OMEGA_1151.description =
  "Full-calendar chronograph movement based on ETA / Valjoux 7750, introduced around 1986. \n\
  The date is displayed through an additional centrally-mounted hand; day and month is displayed with two discs at 12:00.";

OMEGA_1151.sliderImages = [
  "public/assets/Images/Movements/Omega/cal_1151/1151_1.JPG",
  "public/assets/Images/Movements/Omega/cal_1151/1151_2.JPG",
  "public/assets/Images/Movements/Omega/cal_1151/1151_3.JPG",
];

OMEGA_1151.details = Object.assign({}, ETA_Valjoux_7751_25.details);

OMEGA_1151.details.manufacturer = CaliberBrandsEnum.OMEGA;
OMEGA_1151.details.modelReference = "1151";

/*OMEGA_1151.details = {
  // Manufacturer
manufacturer:
  CaliberBrandsEnum.VALJOUX,
  // ModelReference
modelReference:
  "7750",
  // Type
type:
  MovementWatchTypeEnum.AUTOMATIC,
  // Frequency
frequency:
  FrequencyEnum.F_28800,
  // Jewels
jewels:
  JewelsNumberEnum.J_25,
  // Reserve
reserve:
  ReserveHoursEnum.R_44,
  // Functions
functions:
  "Day, Date, Hours, Minutes, Sub Seconds at 9 o'clock, 12h 30M 60s Chronograph",
  // Battery
battery:
  undefined,
);*/

export default OMEGA_1151;
