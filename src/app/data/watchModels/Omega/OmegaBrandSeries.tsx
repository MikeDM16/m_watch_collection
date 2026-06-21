import { seriesGroup } from "../seriesGroup";

export const OmegaBrandSeries = {
  CONSTELLATION: "Constellation",
  SPEEDMASTER: seriesGroup("Speedmaster", {
    RACING: "Racing",
    REDUCED: "Reduced",
    MK40: "MK40 Triple Calendar",
  }),

  OLYMPIA: seriesGroup("Olympia", {
    WINTER_OLYMPICS_ALBERTVILLE: "Winter Olympics Albertville",
    WINTER_OLYMPICS_CALGARY_SEOUL: "Winter Olympics Calgary And Seoul",
  }),

  POLARIS: "Polaris",
  DE_VILLE_VINTAGE: "De Ville (Vintage)",
  SEAMASTER: "Seamaster",
  SEAMASTER_VINTAGE: "Seamaster (Vintage)",
  STAYBRITE: "Staybrite",
};
