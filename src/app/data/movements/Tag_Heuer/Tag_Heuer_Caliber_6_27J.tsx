import ETA_2895_2_27J from "../ETA/ETA_2895_2_27J";

const TAG_HEUER_CALIBER_6 = Object.assign({}, ETA_2895_2_27J);

TAG_HEUER_CALIBER_6.title = "Tag Heuer Caliber 6 (ETA 2895-2)";
TAG_HEUER_CALIBER_6.description =
  "Calibre 6 is a automatic movement, based on either the ETA 2895-2 or the Sellita SW260-1.\n Some variants offer the Chronometer level certificate.\n\n\
  The ETA version is 26.2mm and uses 27 jewels.\n\The Sellita version is 26mm and uses 31 jewels.";

TAG_HEUER_CALIBER_6.sliderImages = [
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_6/Tag_Heuer_Caliber_6_1.JPG",
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_6/Tag_Heuer_Caliber_6_2.JPG",
].concat(TAG_HEUER_CALIBER_6.sliderImages.slice(1, 3));

export default TAG_HEUER_CALIBER_6;
