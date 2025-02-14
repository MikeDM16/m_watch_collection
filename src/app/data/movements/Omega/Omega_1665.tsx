import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const OMEGA_1665: Caliber = {
  // Title
  title: "Omega Cal. 1665",
  //Description
  description:
    "Omega high end quartz caliber with analogic and digital functions. \n\
    Based on the ETA 988.432.\n\
    Function are selected by gently turning the crown in slow motions. Functions are adjusted by pressing the crown out and turning it.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Omega/cal_1665/cal_1665_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1665/cal_1665_2.JPG",
    "public/assets/Images/Movements/Omega/cal_1665/cal_1665_6.JPG",
    "public/assets/Images/Movements/Omega/cal_1665/cal_1665_3.JPG",
    "public/assets/Images/Movements/Omega/cal_1665/cal_1665_4.JPG",
    "public/assets/Images/Movements/Omega/cal_1665/cal_1665_5.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1665",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_7,
    // Reserve
    reserve: undefined,
    // Functions
    functions:
      "Multi-function analog/digital - Hours, Minutes, Seconds, Chronograph, GMT, Count-down Timer, Alarm, Day/Date",
    // Battery
    battery: "370",
  },
};

export default OMEGA_1665;
