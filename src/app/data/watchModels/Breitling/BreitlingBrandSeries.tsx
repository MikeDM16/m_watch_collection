import { seriesGroup } from "../seriesGroup";

export const BreitlingBrandSeries = {
  // Chronomat umbrella: base models (no sub-heading) + dated sub-series.
  CHRONOMAT: seriesGroup("Chronomat", {
    CHRONOMAT_NEO_VINTAGE: "Neo-Vintage",
    CHRONOMAT_EVOLUTION: "Evolution (2008-2011)",
    CHRONOMAT_VITESSE: "Vitesse (1997-2000)",
    CHRONOMAT_EARLY: "Early (1984-1996)",
  }),
  VINTAGE_SERIES: seriesGroup("Vintage Series", {
    VINTAGE_SERIES: "",
    COLT: "Colt",
    SEXTANT: "Sextant",
  }),
  NAVITIMER: "Navitimer",
};
