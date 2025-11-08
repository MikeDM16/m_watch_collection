import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import { Caliber } from "../../movementsData";

const CERTINA_25_261_27J: Caliber = {
  // Title
  title: "Certina Cal. 25",
  //Description
  description:
    "The Certina 25-651 is an automatic watch movement produced between 1960 and 1975. Within this period, the movement was primarily used in chronometers, with a total of 7221 units manufactured. \n\n\
    Detailled References:\n\
    19800 A/h:\n\
    - 25-65: automatic\n\
    - 25-651: automatic, date\n\
    - 25-652: automatic, day, date\n\
    - 25-66: manual wind\n\
    - 25-661: manual wind, date\n\
    \n\
    28800 A/h, ball bearing for minute staff:\n\
    - 25-671: automatic, date\n\
    - 25-672: automatic, day, date\n\
    \n\
    28800 A/h, ball bearing plate redesigned:\n\
    - 25-68: automatic\n\
    - 25-681: automatic, date\n\
    - 25-682: automatic, day, date",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Cal. Certina 25": "https://ranfft.org/caliber/1774-Certina-25-651",
    "Emmy Watch Cal. Certina 25": "https://www.emmywatch.com/db/movement/certina--25-651/",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Certina/Certina_25_261/Certina_25_261_1.JPG",
    "public/assets/Images/Movements/Certina/Certina_25_261/Certina_25_261_4.JPG",
    "public/assets/Images/Movements/Certina/Certina_25_261/Certina_25_261_2.JPG",
    "public/assets/Images/Movements/Certina/Certina_25_261/Certina_25_261_3.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.CERTINA,
    // ModelReference
    modelReference: "Cal. 25-261",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_19800,
    // Jewels
    jewels: JewelsNumberEnum.J_27,
    // Reserve
    reserve: ReserveHoursEnum.R_44,
    // Functions
    functions: "Central seconds, Hours, Minutes, Date",
    // Battery
    battery: undefined,
  },
};

export default CERTINA_25_261_27J;
