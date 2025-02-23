import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_251_272: Caliber = {
  // Title
  title: "ETA 251.272",
  //Description
  description:
    "Superquartz chronograph based on the ETA 251 Series. \
    Caliber with small seconds subdial at 6 o'clock.",
  // UsefullLinks
  usefullLinks: {
    "Instruction manual from ETA": "../Files/ETA251.272operatinginstructions.pdf",
    "Instruction manual from Delma": "../Files/Delma_instructions.pdf",
    "ETA 251.272 Parts Catalogue": "../Files/5424_ETA 251.252, 262, 272 New.pdf",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_251_272/eta251-272.JPG",
    "public/assets/Images/Movements/ETA/ETA_251_272/eta251-272.PNG",
    "public/assets/Images/Movements/ETA/ETA_251_272/eta251-272-2.JPG",
    "public/assets/Images/Movements/ETA/ETA_251_272/eta251-272-3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "251.272",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_22,
    // Reserve
    reserve: undefined,
    // Functions
    functions:
      "Hours, Minutes, 1/10th Chronograph up to 12 hours with split time, date at 6 o'clock",
    // Battery
    battery: "394",
  },
};

export default ETA_251_272;
