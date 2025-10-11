export interface FeatureStruct {
  name: string;
  description: string;
}

export const featuresEnum: Record<string, FeatureStruct> = {
  ANTI_MAGNETIC: {
    name: "Anti-magnetic",
    description:
      "The movement is protected from the effects of magnetic fields, preventing it from running inaccurately when exposed to strong magnetic fields, even those greater than 1.5 tesla (15,000 gauss).",
  },
  CHRONOGRAPH: {
    name: "Chronograph",
    description:
      "A watch with a built-in stopwatch function that allows you to measure elapsed time in addition to its regular time-keeping functionality. It often includes a start/stop button and a reset button.",
  },
  MECHANIQUE_CHRONOGRAPH: {
    name: "Mechanique Chronograph",
    description:
      "A chronograph watch powered by mechanical (hand-winding) movement, combining both timekeeping and the ability to measure elapsed time with a stopwatch function.",
  },
  AUTOMATIC_CHRONOGRAPH: {
    name: "Automatic Chronograph",
    description:
      "A chronograph watch powered by automatic (self-winding) movement, featuring both timekeeping and the ability to measure elapsed time with a stopwatch function.",
  },
  AUTOMATIC: {
    name: "Automatic",
    description:
      "A watch powered by automatic (self-winding) movement that doesn't require a battery. It winds itself using the daily usage motion of the wearer's wrist.",
  },
  MECHANICAL: {
    name: "Mechanical",
    description:
      "A watch powered by a traditional mechanical movement, typically requiring manual winding to operate, without the use of batteries or electronic components.",
  },
  ELETRONIC: {
    name: "Electronic",
    description:
      "A watch powered by an electronic movement, usually requiring a battery to operate, with functions that may include digital time displays and advanced features.",
  },
  INCABLOC: {
    name: "Incabloc",
    description:
      "A shock protection system used in watch movements, preventing damage to the balance staff, which is critical for maintaining accurate timekeeping.",
  },
  SMALL_SECONDS: {
    name: "Small Seconds",
    description:
      "A sub-dial showing the seconds hand separately from the main dial, usually placed at 6 o'clock position.",
  },
  ALARM: {
    name: "ALARM",
    description: "",
  },
  PERPETUAL_CALENDAR: {
    name: "Perpetual Calendar",
    description: "",
  },
  MOONPHASE: {
    name: "Moonphase Dial",
    description: "",
  },
  DATE: {
    name: "Date",
    description:
      "A feature that displays the current day of the month, typically in a small window on the dial, commonly placed at the 3 o'clock or 6 o'clock position.",
  },
  TRI_COMPAX_CALENDAR: {
    name: "Tri-Compax Calendar",
    description:
      "A watch with sub-dials displaying the full calendar, including the month, date, and day of the week, allowing to track the entire calendar values.",
  },
  GMT_HAND: {
    name: "GMT Hand",
    description:
      "An additional hour hand that tracks a second time zone, typically using a 24-hour format. Used in conjunction with the bezel marks to display time in another part of the world.",
  },
  COUNT_DOWN_TIMER: {
    name: "Countdown Timer",
    description:
      "A function that allows the user to set a specific amount of time to count down from, typically used for timing events or intervals.",
  },
  RETROGRADE_CHRONOGRAPH: {
    name: "Retrograde Chronograph",
    description:
      "A chronograph with a retrograde function where the hand moves in one direction and then jumps back to the starting point, often used for timing events in a circular fashion.",
  },

  // Related with the bezel and its scales
  UNI_DIRECTIONAL_BEZEL: {
    name: "Uni-directional rotating bezel",
    description:
      "A bezel that rotates in only one direction, typically used in dive watches to avoid accidental adjustments. It is commonly used to track elapsed time during a dive.",
  },
  BI_DIRECTIONAL_BEZEL: {
    name: "Bi-directional rotating bezel",
    description:
      "A bezel that can rotate in both directions (clockwise and counterclockwise). It is useful for timing events, measuring elapsed time, or reading a second time zone.",
  },
  UNI_DIRECTIONAL_COUNTDOWN_BEZEL: {
    name: "Bi-directional count-down bezel",
    description:
      "A bezel that can rotate in both directions, designed to measure time intervals, with a focus on timing events and counting down to a specific point.",
  },
  TACHYMETER: {
    name: "Tachymeter",
    description:
      "A scale on the dial of a chronograph that allows the wearer to calculate speed based on time and distance, typically by measuring how many seconds it takes to travel a fixed distance (e.g., 1000 meters).",
  },
  PULSOMETER: {
    name: "Pulsometer",
    description:
      "A watch with a specialized scale that allows the wearer to measure their heart rate by counting the number of beats per minute, often using a chronograph function.",
  },
  GMT_BEZEL: {
    name: "GMT Bezel",
    description:
      "A bezel with markings that allow the user to track a second time zone when combined with the GMT hand, commonly used by frequent travelers.",
  },
  REGOLO_BEZEL: {
    name: "Regolo Bezel",
    description:
      "A bezel with a scale designed for measuring vehicle fuel efficiency, calculating how many miles a vehicle can travel with a set amount of fuel consumption (liters per 100 km).",
  },
  COMPASS_BEZEL: {
    name: "Compass Bezel",
    description: "",
  },
  COMPASS: {
    name: "Compass",
    description: "",
  },
  ALTITUDE: {
    name: "Altitude Measure",
    description: "",
  },
  METEO: {
    name: "Meteo Humidity Measure",
    description: "",
  },

  // Water resistance limits
  WATER_RESIST: {
    name: "Water Resistant",
    description:
      "A basic level of water resistance that protects the watch from accidental splashes, such as rain. It is not designed for submersion or exposure to water beyond light splashes.",
  },
  WR_10_METERS: {
    name: "10 meters",
    description:
      "Water-resistant to 10 meters, making it suitable for accidental splashes and brief exposure to water, such as wearing the watch in the shower with caution.",
  },
  WR_30_METERS: {
    name: "30 meters",
    description:
      "Water-resistant to 30 meters, making it suitable for accidental splashes and brief exposure to water, such as wearing the watch in the shower with caution.",
  },
  WR_25_METERS: {
    name: "25 meters",
    description:
      "Water-resistant to 25 meters, capable of withstanding light splashes, such as rain, and brief immersion, though prolonged water exposure should be avoided.",
  },
  WR_50_METERS: {
    name: "50 meters",
    description:
      "Water-resistant to 50 meters, suitable for swimming and showering, but not ideal for water sports or diving.",
  },
  WR_100_METERS: {
    name: "100 meters",
    description:
      "A sub-dive watch resistant to water up to 100 meters, making it suitable for swimming, snorkeling, and other light water activities but not high-impact diving.",
  },
  WR_120_METERS: {
    name: "120 meters",
    description:
      "Suitable for swimming, snorkeling, and light diving, but not recommended for high-impact water sports or scuba diving.",
  },
  WR_150_METERS: {
    name: "150 meters",
    description:
      "Suitable for swimming, snorkeling, and light diving, but not recommended for high-impact water sports or scuba diving.",
  },
  WR_200_METERS: {
    name: "200 meters",
    description:
      "A dive watch with water resistance up to 200 meters, suitable for swimming, high-impact water sports, and scuba diving.",
  },
  WR_300_METERS: {
    name: "300 meters",
    description:
      "A high-end dive watch with water resistance up to 300 meters, suitable for all high-impact water sports, scuba diving, and professional underwater activities.",
  },

  SCREWED_IN_CROWN: {
    name: "Screw-in crown",
    description:
      "A self-locking crown that screws into the watch case to ensure water-tightness, often used in diving watches for enhanced water resistance.",
  },
  OPEN_CASE_BACK: {
    name: "Open Case Back",
    description:
      "A transparent case back that allows the wearer to view the movement of the watch, showcasing the intricate mechanics inside.",
  },
  TRITIUM_DIAL: {
    name: "Tritium Dial",
    description:
      "A luminous dial using tritium-based phosphorescent material that glows in low light without the need for an external light source, providing continuous readability.",
  },

  ELETRO_GOLD_PLATED_18k: {
    name: "18K Gold Electroplated",
    description:
      "A watch with a layer of 18-karat gold electroplated onto the case, offering a luxurious appearance with enhanced durability.",
  },
  GOLD_PLATED_14k: {
    name: "14K Gold Plated",
    description:
      "A watch with a gold-plated finish made from 14-karat gold, providing a rich, premium look without the high cost of solid gold.",
  },
  GOLD_PLATED_20M: {
    name: "Gold Plated 20 \u339B",
    description:
      "A 20-micron gold-plated finish on the watch, offering an alternative to solid gold while still providing a gold-like appearance.",
  },
  GOLD_PLATED_10M: {
    name: "Gold Plated 10 \u339B",
    description:
      "A 10-micron gold-plated finish, offering a more affordable gold look with less durability compared to thicker plating options.",
  },
  GOLD_PLATED_80M: {
    name: "Gold Plated 80 \u339B",
    description: "A high-quality thick 80-micron gold-plated finish on the watch.",
  },
  SOLID_GOLD: {
    name: "Gold",
    description:
      "A watch made with solid gold, offering a luxurious and timeless design. It provides the ultimate in prestige and durability.",
  },
  SOLID_STERLING_SILVER: {
    name: "Solid Sterling Silver (925)",
    description:
      "A watch made with solid sterling silver, offering a luxurious and timeless design. It provides an aditional level of prestige and durability.",
  },
  TITANIUM: {
    name: "Titanium",
    description: "",
  },
};
