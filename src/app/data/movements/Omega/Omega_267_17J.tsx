import { JewelsNumberEnum } from "@/app/enums/caliberEnums";

import OMEGA_265 from "./Omega_265_15J";

const OMEGA_267 = Object.assign({}, OMEGA_265);
OMEGA_267.title = "Omega Cal. 267";
OMEGA_267.sliderImages = [
  "public/assets/Images/Movements/Omega/Omega_cal_267/cal_267_1.JPG",
  "public/assets/Images/Movements/Omega/Omega_cal_267/cal_267_2.JPG",
  "public/assets/Images/Movements/Omega/Omega_cal_267/cal_267_3.JPG",
];

OMEGA_267.details = Object.assign({}, OMEGA_265.details);

OMEGA_267.details.jewels = JewelsNumberEnum.J_17;
OMEGA_267.details.modelReference = "Cal. 267";

export default OMEGA_267;
