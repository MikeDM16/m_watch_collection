import { BrandsEnum } from "@/app/enums/brandsEnum";

import type { JournalEntry } from "../journalTypes";

const entry: JournalEntry = {
  slug: "omega-speedmaster-reduced-collection",
  kind: "set",
  title: "Omega Speedmaster Reduced Collection",
  date: "2026-05-02",
  brand: BrandsEnum.OMEGA,
  dek: "Two Speedmaster Reduced chronographs, the 1998 Cal. 1141 and the 2000 Racing Schumacher, photographed together.",
  intro: [],
  cover: "public/assets/Images/Omega/Omega_speedmaster_reduced_collection/IMG_2774.JPG",
  photos: [
    { src: "public/assets/Images/Omega/Omega_speedmaster_reduced_collection/IMG_2774.JPG" },
    {
      src: "public/assets/Images/Omega/Omega_speedmaster_reduced_collection/IMG_2775.JPG",
      w: 2664,
      h: 1499,
      watches: ["Omega/Omega_Speedmaster_reduced_1998"],
    },
    {
      src: "public/assets/Images/Omega/Omega_speedmaster_reduced_collection/IMG_2777.JPG",
      w: 2461,
      h: 1969,
      watches: ["Omega/Omega_Speedmaster_Racing_Schumacher_2000_F1_World_Champion_2000"],
    },
  ],
  watches: [
    "Omega/Omega_Speedmaster_Racing_Schumacher_2000_F1_World_Champion_2000",
    "Omega/Omega_Speedmaster_reduced_1998",
  ],
};

export default entry;
