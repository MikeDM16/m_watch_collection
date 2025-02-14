import ETA_Valjoux_7750_25 from "./ETA_Valjoux_7750_25J";

const ETA_Valjoux_7751_25 = Object.assign({}, ETA_Valjoux_7750_25);

ETA_Valjoux_7751_25.description =
  "Full-calendar chronograph movement based on ETA / Valjoux 7750, introduced around 1986. \n\
  The date is displayed through an additional centrally-mounted hand; day and month is displayed with two discs at 12:00.";

ETA_Valjoux_7751_25.sliderImages.push("public/assets/Images/Movements/Omega/cal_1151/1151_2.JPG");

ETA_Valjoux_7751_25.details = Object.assign({}, ETA_Valjoux_7750_25.details);
ETA_Valjoux_7751_25.details.functions =
  "Day, Date, Month, Hours, Minutes, Small Seconds, Day/Night Indication, Chronograph";

/*ETA_Valjoux_7751_25.details = {
  // Manufacturer
manufacturer:
  CaliberBrandsEnum.VALJOUX,
  // ModelReference
modelReference:
  "7750",
  // Type
type:
  MovementWatchTypeEnum.AUTOMATIC,
  // Frequency
frequency:
  FrequencyEnum.F_28800,
  // Jewels
jewels:
  JewelsNumberEnum.J_25,
  // Reserve
reserve:
  ReserveHoursEnum.R_44,
  // Functions
functions:
  "Day, Date, Hours, Minutes, Sweep Seconds at 9 o'clock, 12h 30M 60s Chronograph",
  // Battery
battery:
  undefined,
);*/

export default ETA_Valjoux_7751_25;
