import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const OMEGA_1449: Caliber = {
  // Title
  title: "Omega Cal. 1449",
  //Description
  description:
    "Omega quartz caliber based on the ETA 255.265, with an additional GMT hand. \n\
    GMT pointer is setted by turning the crown counter-clockwise. \n\
    Date wheel is setted turning the crown clockwise.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_255_265/ETA_255_265_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_265/ETA_255_265_2.JPG",
    "public/assets/Images/Movements/Omega/cal_1449/cal_1449_3.JPG",
    "public/assets/Images/Movements/Omega/cal_1449/cal_1449_4.JPG",
    "public/assets/Images/Movements/Omega/cal_1449/cal_1449_1.JPG",
    "public/assets/Images/Movements/Omega/cal_1449/cal_1449_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.OMEGA,
    // ModelReference
    modelReference: "1449",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_6,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "GMT Hand, Date, Hours, Minutes, Seconds",
    // Battery
    battery: "373",
  },
};

export default OMEGA_1449;
