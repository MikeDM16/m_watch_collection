import { Caliber } from "../../movementsData";
import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

const ETA_251_265: Caliber = {
  // Title
  title: "ETA 251.265",
  //Description
  description:
    "ETA superquartz chronograph based on the ETA 255.251. Very rare caliber with 1/100th measuraments. \
  Caliber with small seconds subdial at 6 o'clock. \n\
  Chronograph with 1/100 ratrappant seconds using a right LCD screen. 12 hours subdial at 10 o'clock.\n\
  The month day is displayed on the right LCD screen. The month is displayed on the left LCD screen when the crown is in the second position.",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_251_265/ETA_251_265_0.JPG",
    "public/assets/Images/Movements/ETA/ETA_251_265/ETA_251_265_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_251_265/ETA_251_265_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "251.265",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_23,
    // Reserve
    reserve: undefined,
    // Functions
    functions:
      "Hours, Minutes, 1/10th Chronograph up to 12 hours with split time, date at 3 o'clock",
    // Battery
    battery: "394",
  },
};

export default ETA_251_265;
