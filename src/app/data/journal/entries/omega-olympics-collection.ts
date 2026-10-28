import { BrandsEnum } from "@/app/enums/brandsEnum";

import type { JournalEntry } from "../journalTypes";

const entry: JournalEntry = {
  slug: "omega-olympic-winter-games-collection",
  kind: "set",
  title: "Omega Olympic Winter Games Collection",
  date: "2024-02",
  brand: BrandsEnum.OMEGA,
  dek: "Three Omega Olympic Winter Games pieces, 1988 to 1992, photographed together.",
  intro: [],
  cover: "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8409.JPG",
  photos: [
    { src: "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8402.JPG" },
    {
      src: "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8405.JPG",
      watches: ["Omega/Omega_Olympia_Albertville_500_386_1031_1992"],
    },
    {
      src: "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8409.JPG",
      watches: ["Omega/Omega_Olympia_Calgary_Seoul_1988"],
    },
    {
      src: "public/assets/Images/Omega/Omega_Olympics_Collection/IMG_8411.JPG",
      watches: ["Omega/Omega_Olympia_Albertville_3000_386_1031_1992"],
    },
  ],
  watchGroups: [
    {
      title: "Albertville Winter Olympics, France 1992",
      note: "Four years after the Calgary Winter Olympics, the Polaris chronograph returned for the 1992 Games in Albertville.\nThe design was simplified, on the dial and in the case outline: the LCD windows are gone and the pushers sit on one side of the case. Omega made it in two numbered runs, 3,000 pieces for the organisation and a smaller series of 499 for the athletes, about 3,500 in all. Both are here, as numbers 820 and 305. The two differ only in the gold inner link between the case and the bracelet.",
      watches: [
        "Omega/Omega_Olympia_Albertville_500_386_1031_1992",
        "Omega/Omega_Olympia_Albertville_3000_386_1031_1992",
      ],
    },
    {
      title: "Calgary And Seoul Olympics 1988",
      note: "Designed by Gérald Genta as part of Omega's Polaris line, this watch is built in steel with solid gold inlays.\nMade for the 1988 Winter Olympic Games with precision in mind, its quartz chronograph module was very advanced for its time: it times to the hundredth of a second, and its split-seconds function can hold up to five intermediate times.\nOmega released only 1,000 pieces for the Games, each with an engraved Olympic caseback. This one is number 457.",
      watches: ["Omega/Omega_Olympia_Calgary_Seoul_1988"],
    },
  ],
};

export default entry;
