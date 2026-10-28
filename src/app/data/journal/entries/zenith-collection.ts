import { BrandsEnum } from "@/app/enums/brandsEnum";

import type { JournalEntry } from "../journalTypes";

const entry: JournalEntry = {
  slug: "zenith-collection",
  kind: "set",
  title: "Zenith Collection",
  date: "2024-07-18",
  brand: BrandsEnum.ZENITH,
  dek: "Two El Primero chronographs, the 2005 Port Royal V and the 2010 ChronoMaster, photographed together.",
  intro: [],
  cover: "public/assets/Images/Zenith/Zenith_Collection/IMG_3751.JPG",
  photos: [
    {
      src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3751.JPG",
      watches: ["Zenith/Zenith_El_Primero_ChronoMaster_2010"],
    },
    {
      src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3754.JPG",
      w: 2315,
      h: 2380,
      watches: ["Zenith/Zenith_El_Primero_Port_Royal_V_2005"],
    },
    { src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3755.JPG" },
    { src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3757.JPG" },
    { src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3758.JPG" },
    { src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3760.JPG" },
    { src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3761.JPG" },
    { src: "public/assets/Images/Zenith/Zenith_Collection/IMG_3762.JPG" },
  ],
  watches: [
    "Zenith/Zenith_El_Primero_ChronoMaster_2010",
    "Zenith/Zenith_El_Primero_Port_Royal_V_2005",
  ],
};

export default entry;
