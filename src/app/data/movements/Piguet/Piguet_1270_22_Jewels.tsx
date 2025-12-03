import { CaliberBrandsEnum, FrequencyEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const PIGUET_1270_22J: Caliber = {
  // Title
  title: "Frédéric Piguet 1270",
  //Description
  description:
    "The Caliber 1270 is a hybrid chronograph movement that combines a quartz base movement with a mechanical chronograph mechanism.\n\
    Frédéric Piguet's meca-quartz movements powered a variety of watches under different brands or caliber names: \n\
    - Roberge Cal. MMR2322 \n\
    - Zenith Cal. 430 \n\
    - Breitling Cal. 55 \n\
    - Omega Cal. 1270 \n\
    - Chopard Cal. 1270 \n\
    - Bvlgari Cal. 1270 \n\
    - Bugatti Cal. 694 \n\
    - MHR Cal. 1270 \n\
    - Thorr Cal. 1270 ",

  // UsefullLinks
  usefullLinks: {
    "EmmyWatch 1270": "https://www.emmywatch.com/db/movement/omega--1270/",
  },

  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Piguet/Piguet_1270/Piguet_1270_1.JPG",
    "public/assets/Images/Movements/Piguet/Piguet_1270/Piguet_1270_3.JPG",
    "public/assets/Images/Movements/Piguet/Piguet_1270/Piguet_1270_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.PIGUET,
    // ModelReference
    modelReference: "1270",
    // Type
    type: MovementWatchTypeEnum.QUARTZ,
    // Frequency
    frequency: FrequencyEnum.F_21600,
    // Jewels
    jewels: JewelsNumberEnum.J_22,
    // Reserve
    reserve: undefined,
    // Functions
    functions:
      "Hours, Minutes, 6 o'clock sweep seconds, Central Chronograph seconds, 9 o'clock 30 minute subdial, 3 o'clock 12 hours subdial, date at 4 o'clock",
    // Battery
    battery: undefined,
  },
};

export default PIGUET_1270_22J;
