import ETA_2824 from "../ETA/ETA_2824";

const TAG_HEUER_CALIBER_5 = Object.assign({}, ETA_2824);

TAG_HEUER_CALIBER_5.title = "Tag Heuer Caliber 5 (ETA 2824-2)";
TAG_HEUER_CALIBER_5.description =
  "Calibre 5 is a automatic movement, based on either the ETA 2824-2 (25 jewels) or the Sellita SW200-1 (26 jewels).\n Some variants offer the Chronometer level certificate.";

TAG_HEUER_CALIBER_5.sliderImages = [
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_5/Tag_Heuer_Caliber_5_1.JPG",
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_5/Tag_Heuer_Caliber_5_2.JPG",
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_5/Tag_Heuer_Caliber_5_3.JPG",
].concat(TAG_HEUER_CALIBER_5.sliderImages.slice(1, 3));

export default TAG_HEUER_CALIBER_5;
