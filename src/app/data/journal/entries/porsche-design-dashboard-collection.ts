import { BrandsEnum } from "@/app/enums/brandsEnum";

import type { JournalEntry } from "../journalTypes";

const entry: JournalEntry = {
  slug: "porsche-design-dashboard-collection",
  kind: "set",
  title: "Porsche Design Dashboard Collection",
  date: "2024-11-27",
  brand: BrandsEnum.PORSCHE_DESIGN,
  dek: "Two Porsche Design Dashboard chronographs, one red and one black, photographed together.",
  intro: [],
  cover: "public/assets/Images/Porsche_Design/Porsche_Design_Dahsboard_collection/IMG_7091.JPG",
  photos: [
    {
      src: "public/assets/Images/Porsche_Design/Porsche_Design_Dahsboard_collection/IMG_7091.JPG",
      watches: ["Porsche_Design/Porsche_Design_P6612_14_2_Red_Titanium_2012"],
    },
    {
      src: "public/assets/Images/Porsche_Design/Porsche_Design_Dahsboard_collection/IMG_7092.JPG",
      watches: ["Porsche_Design/Porsche_Design_P6612_10_1_Black_Titanium_2005"],
    },
    { src: "public/assets/Images/Porsche_Design/Porsche_Design_Dahsboard_collection/IMG_7093.JPG" },
    { src: "public/assets/Images/Porsche_Design/Porsche_Design_Dahsboard_collection/IMG_7094.JPG" },
    { src: "public/assets/Images/Porsche_Design/Porsche_Design_Dahsboard_collection/IMG_7095.JPG" },
  ],
  watches: [
    "Porsche_Design/Porsche_Design_P6612_14_2_Red_Titanium_2012",
    "Porsche_Design/Porsche_Design_P6612_10_1_Black_Titanium_2005",
  ],
};

export default entry;
