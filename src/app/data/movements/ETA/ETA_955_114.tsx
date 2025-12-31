import { CaliberBrandsEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const ETA_955_114: Caliber = {
  // Title
  title: "ETA 955.114",
  //Description
  description:
    "ETA 955.114 is part of vintage ETA Normflatline movements. It has 7 jewels with a stell plated finish. \n\
  It is a “V8” movement, indicating that it is assembled in Switzerland.\n\
  It was produced from around the 1985 to 1995.\n\
  \n\
  ETA 955.414 is an equivalent movement but with a smaller diameter. \n\
  955.114 has 25.6mm diameter. 955.414 has 23.3mm diameter.\n\n\
  The 955.114 was later replaced by the ETA 955.112",

  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/ETA/ETA_955_114/ETA_955_114_1.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_114/ETA_955_114_2.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_114/ETA_955_114_3.JPG",
    "public/assets/Images/Movements/ETA/ETA_955_114/ETA_955_114_4.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.ETA,
    // ModelReference
    modelReference: "955.114",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: undefined,
    // Jewels
    jewels: JewelsNumberEnum.J_7,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Date, Hours, Minutes, Seconds",
    // Battery
    battery: "395 (or 371)",
  },
};

export default ETA_955_114;
