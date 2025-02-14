import { Caliber } from "../../movementsData";
import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_1256: Caliber = {
  // Title
  title: "ETA 1256",
  //Description
  description: "",
  // UsefullLinks
  usefullLinks: {
    "17Jewels ETA 1256": "https://17jewels.info/movements/e/eta/eta-1256/",
    "Ranfft ETA 1256": "https://ranfft.org/caliber/3917-ETA-1256",
    "Vintage technical Information from ETA": "../Files/3394_ETA 1256.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_1256/ETA_1256_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_1256/ETA_1256_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_1256/ETA_1256_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "1256",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: ReserveHoursEnum.R_40,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default ETA_1256;
