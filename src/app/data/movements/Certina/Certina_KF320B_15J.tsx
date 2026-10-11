import {
  CaliberBrandsEnum,
  FrequencyEnum,
  JewelsNumberEnum,
  ReserveHoursEnum,
} from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const CERTINA_KF320B: Caliber = {
  // Title
  title: "Certina Cal. KF320B",
  //Description
  description:
    "The Certina 320B, also marked K.F. 320 after Kurth Frères, the company behind Certina, is a 12''' (27 mm) manual-wind movement with small seconds and Incabloc shock protection, from around 1945.\n" +
    "Hertig of Biel used Certina movements like this one in watches sold under its own name.",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Certina 320B": "https://ranfft.org/caliber/1798-Certina-320B",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Certina/Certina_KF320B/Certina_KF320B_1.JPG",
    "public/assets/Images/Movements/Certina/Certina_KF320B/Certina_KF320B_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.CERTINA,
    // ModelReference
    modelReference: "Cal. KF320B",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_15,
    // Reserve
    reserve: ReserveHoursEnum.R_42,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default CERTINA_KF320B;
