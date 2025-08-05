import ETA_Valjoux_7750_25 from "../ETA/ETA_Valjoux_7750_25J";

const TAG_HEUER_CALIBER_16 = Object.assign({}, ETA_Valjoux_7750_25);

TAG_HEUER_CALIBER_16.title = "Tag Heuer Caliber 16 (ETA 7750)";
TAG_HEUER_CALIBER_16.description =
  "Calibre 16 is a automatic chronograph with date, based on either the ETA 7750 or the Sellita SW500.\n Some variants offer the Chronometer level certificate";

TAG_HEUER_CALIBER_16.sliderImages = [
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_16/Tag_Heuer_Caliber_16_2.JPG",
  "public/assets/Images/Movements/Tag_Heuer/Tag_Heuer_Caliber_16/Tag_Heuer_Caliber_16_1.JPG",
].concat(TAG_HEUER_CALIBER_16.sliderImages.slice(0, 2));

export default TAG_HEUER_CALIBER_16;
