import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_2824: Caliber = {
  // Title
  title: "ETA 2824",
  //Description
  description:
    "High quality ETA automatic movement with gold plated finishing, adjusted and bi-diretional winding. \n \n" +
    "It has been in production since 1982 and was based off of the original Eterna caliber 1427.",
  // UsefullLinks
  usefullLinks: {
    "Caliber Corner ETA 2824": "https://calibercorner.com/eta-caliber-2824-2/",
    "Technical Information from ETA": "../Files/29_ETA2801.2-ETA2836.2.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_0.JPG",
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_5.JPG",
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_Tissot_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_2824/ETA_2824_Tissot_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "2824-2",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_28800,
    // Jewels
    jewels: JewelsNumberEnum.J_25,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Date, Hours, Minutes, Sweep Seconds, Quick date set and bi-directional winding",
    // Battery
    battery: undefined,
  },
};

export default ETA_2824;
