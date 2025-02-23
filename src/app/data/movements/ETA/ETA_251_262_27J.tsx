import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_251_262: Caliber = {
  // Title
  title: "ETA 251.262",
  //Description
  description:
    "ETA superquartz chronograph with small seconds subdial at 6 o'clock. Later replaced by the ETA 251.264. \n\
  Chronograph with 1/10 seconds at 2 o'clock, 60 seconds and 60 minutes central chronograph hands, 12 hours subdial at 10 o'clock and split seconds chronograph function.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_255_264/ETA_255_264_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_255_264/ETA_255_264_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "251.262",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_27,
    // Reserve
    reserve: undefined,
    // Functions
    functions:
      "Hours, Minutes, 1/10th Chronograph up to 12 hours with split time, date at 3 o'clock",
    // Battery
    battery: "394",
  },
};

export default ETA_251_262;
