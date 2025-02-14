import { FrequencyEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";
import DD_2000_ETA_955_232 from "./DD_2000_955";

const DD_2000_ETA_2982 = Object.assign({}, DD_2000_ETA_955_232);

DD_2000_ETA_2982.title = "LWO 283 - Dubois Depraz 2000 on ETA 2892";
DD_2000_ETA_2982.sliderImages = [
  "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_955_232/LWO_283_1.JPG",
  "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_955_232/LWO_283_2.JPG",
  "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_2892/DD_2000_2892_1.JPG",
  "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_2892/DD_2000_2892_2.JPG",
  "public/assets/Images/Movements/DuboisDepraz/DD_2000_ETA_2892/DD_2000_2892_3.JPG",
];

DD_2000_ETA_2982.details = Object.assign({}, DD_2000_ETA_955_232.details);
DD_2000_ETA_2982.details.modelReference = "LWO283 (DD 2000 on ETA 2892)";
DD_2000_ETA_2982.details.type = MovementWatchTypeEnum.AUTOMATIC;
DD_2000_ETA_2982.details.frequency = FrequencyEnum.F_28800;
DD_2000_ETA_2982.details.jewels = JewelsNumberEnum.J_40;
DD_2000_ETA_2982.details.battery = undefined;

/*
DD_2000_ETA_2982.details = {
  // Manufacturer
manufacturer:
  CaliberBrandsEnum.DUBOIS_DEPRAZ,
  // ModelReference
modelReference:
  "LWO283 (DD 2000 on ETA 2892)",
  // Type
type:
  MovementWatchTypeEnum.AUTOMATIC,
  // Frequency
frequency:
  FrequencyEnum.F_28800,
  // Jewels
jewels:
  JewelsNumberEnum.J_40,
  // Reserve
reserve:
  ReserveHoursEnum.R_40,
  // Functions
functions:
  "12h 30M Meca Chronograph, Date, Hours, Minutes, Seconds",
  // Battery
battery:
  undefined,
);*/

export default DD_2000_ETA_2982;
