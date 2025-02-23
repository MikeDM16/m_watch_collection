import ETA_955_112 from "../ETA/ETA_955_112";

const HEUER_ETA_955 = Object.assign({}, ETA_955_112);

HEUER_ETA_955.title = "Tag Heuer (ETA 955.412)";

HEUER_ETA_955.description =
  HEUER_ETA_955.description +
  "\n\nThis movement is used in several Tag Heuer qaurtz models with different code name brandings. \n\
  - ETA 955.112: Tag Heuer 3.89 and 4.00\n\
  - ETA 955.412: Tag Heuer 1.93/94/97, 4.93/96";

HEUER_ETA_955.sliderImages = Object.assign([], ETA_955_112.sliderImages);
HEUER_ETA_955.sliderImages.push(
  "public/assets/Images/Movements/ETA/ETA_955_112/955_112_Heuer_3_89.JPG",
  "public/assets/Images/Movements/ETA/ETA_955_112/955_112_Heuer_4_00.JPG",
);

export default HEUER_ETA_955;
