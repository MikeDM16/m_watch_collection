import { BrandsEnum } from "@/app/enums/brandsEnum";

import type { JournalEntry } from "../journalTypes";

const entry: JournalEntry = {
  slug: "mercedes-benz-slk-collection",
  kind: "set",
  title: "Mercedes Benz SLK Collection",
  date: "2020-03-02",
  brand: BrandsEnum.MERCEDES_BENZ,
  dek: "The 2004 SLK limited-edition set, number 1469 of 2,004: two chronographs and a model of the roadster.",
  intro: [
    "Mercedes Benz released this collector's set for the SLK in 2004, limited to 2,004 numbered examples. \n    This one is number 1469. A light metal case holds two chronographs, their presentation papers and authentication card, and a chromed 1:87 scale model of the Mercedes SLK-Class roadster.",
    "The two watches share the same Miyota OS60 quartz chronograph movement, red seconds and chronograph hands, and red prefurated leather straps. \n    One model uses polished stainless steel with a black carbon dial. The other is made of aluminium, with mercedes claiming its the same metal used in their cars frame.",
  ],
  cover: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1760.JPG",
  photos: [
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1759.JPG" },
    {
      src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1760.JPG",
      watches: ["Mercedes/Mercedes_Benz_SLK_Chrono_I_2004"],
    },
    {
      src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1761.JPG",
      watches: ["Mercedes/Mercedes_Benz_SLK_Chrono_II_2004"],
    },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1762.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1763.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1705.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1706.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1707.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1708.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1709.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1710.JPG" },
    {
      src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1712.JPG",
      watches: ["Mercedes/Mercedes_Benz_SLK_Chrono_II_2004"],
    },
    {
      src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1713.JPG",
      watches: ["Mercedes/Mercedes_Benz_SLK_Chrono_I_2004"],
    },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1752.JPG" },
    { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1753.JPG" },
  ],
  sections: [
    {
      title: "1:87 Mercedes SLK-Class roadster model",
      photos: [
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1754.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1755.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1756.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1757.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1758.JPG" },
      ],
    },
    {
      title: "Case Box presentation",
      photos: [
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1691.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1695.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1696.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1699.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1700.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1701.JPG" },
        { src: "public/assets/Images/Mercedes/2004_Mercedes_SLK_LimEdit/IMG_1702.JPG" },
      ],
    },
  ],
  watches: [
    "Mercedes/Mercedes_Benz_SLK_Chrono_I_2004",
    "Mercedes/Mercedes_Benz_SLK_Chrono_II_2004",
  ],
};

export default entry;
