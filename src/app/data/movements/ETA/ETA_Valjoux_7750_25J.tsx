import { JewelsNumberEnum } from "@/app/enums/caliberEnums";

import ETA_Valjoux_7750_17 from "./ETA_Valjoux_7750_17J";

const ETA_Valjoux_7750_25 = Object.assign({}, ETA_Valjoux_7750_17);

ETA_Valjoux_7750_25.description =
  "High quality automatic chronograph from Valjoux. \n\
  Recent ETA model with the number of jewels improved from 17 to 25 jewels.";

ETA_Valjoux_7750_25.sliderImages = [
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_1.JPG",
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_2.JPG",
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/7750_Tissot_1.JPG",
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/Valjoux_7750_COSC_1.JPG",
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/Valjoux_7750_COSC_2.JPG",
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/Valjoux_7750_1_ML.JPG",
  "public/assets/Images/Movements/ETA/ETA_Valjoux_7750/Valjoux_7750_2_ML.JPG",
];

ETA_Valjoux_7750_25.details = Object.assign({}, ETA_Valjoux_7750_17.details);
ETA_Valjoux_7750_25.details.jewels = JewelsNumberEnum.J_25;

/*ETA_Valjoux_7750_25.details = {
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
  "Day, Date, Hours, Minutes, Sweep Seconds at 9 o'clock, 12h 30M 60s Chronograph",
  // Battery
battery:
  undefined,
);*/

export default ETA_Valjoux_7750_25;
