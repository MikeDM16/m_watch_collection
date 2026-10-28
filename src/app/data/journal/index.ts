import novartCollection from "./entries/1974-novart-watch-collection";
import formulaMagicaCaramulo from "./entries/2026-formula-magica-caramulo";
import breitlingCollection from "./entries/breitling-collection";
import mercedesSlkCollection from "./entries/mercedes-benz-slk-collection";
import omegaOlympicsCollection from "./entries/omega-olympics-collection";
import omegaPolarisCollection from "./entries/omega-polaris-collection";
import omegaSpeedmasterReducedCollection from "./entries/omega-speedmaster-reduced-collection";
import porscheDesignDashboardCollection from "./entries/porsche-design-dashboard-collection";
import tagHeuerCollection from "./entries/tag-heuer-collection";
import tissotCollection from "./entries/tissot-collection";
import zenithCollection from "./entries/zenith-collection";
import type { JournalEntry } from "./journalTypes";

/**
 * Every published Journal entry, in any order: journalService sorts them.
 *
 * An entry whose photos are not on GitHub yet stays commented out here, the
 * same rule as a watch in collectionData. Uncomment both lines once they are.
 */
export const journalEntries: JournalEntry[] = [
  omegaOlympicsCollection,
  breitlingCollection,
  omegaPolarisCollection,
  tagHeuerCollection,
  novartCollection,
  tissotCollection,
  mercedesSlkCollection,
  zenithCollection,
  omegaSpeedmasterReducedCollection,
  porscheDesignDashboardCollection,
  formulaMagicaCaramulo,
];
