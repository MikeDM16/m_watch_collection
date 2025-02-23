import { JewelsNumberEnum } from "@/app/enums/caliberEnums";

import OMEGA_265 from "./Omega_265_15J";

const OMEGA_268 = Object.assign({}, OMEGA_265);
OMEGA_268.title = "Omega Cal. 268";
OMEGA_268.sliderImages = [
  "public/assets/Images/Movements/Omega/Omega_cal_268/cal_268_1.JPG",
  "public/assets/Images/Movements/Omega/Omega_cal_268/cal_268_2.JPG",
  "public/assets/Images/Movements/Omega/Omega_cal_268/cal_268_3.JPG",
];

OMEGA_268.details = Object.assign({}, OMEGA_265.details);

OMEGA_268.details.jewels = JewelsNumberEnum.J_17;
OMEGA_268.details.modelReference = "Cal. 268";

export default OMEGA_268;
