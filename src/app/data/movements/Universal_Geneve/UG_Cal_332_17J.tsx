import { CaliberBrandsEnum, FrequencyEnum, JewelsNumberEnum } from "@/app/enums/caliberEnums";
import { MovementWatchTypeEnum } from "@/app/enums/movementWatchTypeEnum";

import type { Caliber } from "../../caliberTypes";

const UNIVERSAL_GENEVE_332: Caliber = {
  // Title
  title: "Universal Genève Cal. 332",
  //Description
  description:
    "Universal Genève 332 is an in-house hand-wound movement found in Universal Genève watches of the 1950s, " +
    "with 17 jewels and centre seconds.\n" +
    "Not to be confused with a later Universal Genève quartz calibre also numbered 332 (day and date with quickset).",
  // UsefullLinks
  usefullLinks: {},
  // sliderImages
  sliderImages: [
    "public/assets/Images/Movements/Universal_Geneve/Universal_Geneve_332_17_jewels/Universal_Geneve_332_01.JPG",
    "public/assets/Images/Movements/Universal_Geneve/Universal_Geneve_332_17_jewels/Universal_Geneve_332_02.JPG",
    "public/assets/Images/Movements/Universal_Geneve/Universal_Geneve_332_17_jewels/Universal_Geneve_332_03.JPG",
    "public/assets/Images/Movements/Universal_Geneve/Universal_Geneve_332_17_jewels/Universal_Geneve_332_04.JPG",
  ],
  // Details
  details: {
    // Manufacturer
    manufacturer: CaliberBrandsEnum.UNIVERSAL_GENEVE,
    // ModelReference
    modelReference: "Cal. 332",
    // Type
    type: MovementWatchTypeEnum.MECHANIQUE,
    // Frequency
    frequency: FrequencyEnum.F_18000,
    // Jewels
    jewels: JewelsNumberEnum.J_17,
    // Reserve
    reserve: undefined,
    // Functions
    functions: "Hours, Minutes, Sweep Seconds",
    // Battery
    battery: undefined,
  },
};

export default UNIVERSAL_GENEVE_332;
