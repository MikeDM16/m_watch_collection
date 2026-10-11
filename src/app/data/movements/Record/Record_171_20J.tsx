import { CaliberBrandsEnum, FrequencyEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const RECORD_171: Caliber = {
  // Title
  title: "Record Cal. 171",
  //Description
  description:
    "The Record 171 is an 11½''' (26 mm) bumper automatic, with small seconds and Incabloc shock protection, from around 1950. Its weight swings through a limited arc and bounces off a spring at each end.\n" +
    "Record Watch Co. of Tramelan made it as part of its 161–174 series, which moved from bumper to full-rotor winding.\n\n" +
    "Variants:\n" +
    "- 161, 171: bumper, sub second\n" +
    "- 161, 171: bumper, sweep second\n" +
    "- 174: rotor, sub second\n" +
    "- 174(SC): rotor, sweep second\n" +
    "- 174(CLD): rotor, sub second, date\n" +
    "- 174(CLD-RM): as 174(CLD), with power reserve display",
  // UsefullLinks
  usefullLinks: {
    "Ranfft Record 171": "https://ranfft.org/caliber/9202-Record-171",
  },
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Record/Record_171/Record_171_1.JPG",
    "public/assets/Images/Movements/Record/Record_171/Record_171_2.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.RECORD,
    // ModelReference
    modelReference: "Cal. 171",
    // Type
    type: MovementWatchTypeEnum.AUTOMATIC,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_20,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Hours, Minutes, Sub Seconds at 6 o'clock",
    // Battery
    battery: undefined,
  },
};

export default RECORD_171;
