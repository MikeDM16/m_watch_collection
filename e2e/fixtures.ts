/**
 * Shared fixtures. Everything here is a real entry in the catalogue, chosen so
 * the assertions stay meaningful rather than tautological.
 */

/** Must match src/app/siteConfig.ts when NEXT_PUBLIC_SITE_URL is unset. */
export const CANONICAL_ORIGIN = "https://www.mwatchcollection.com";

export const HOME = "/";
export const BRAND = "/collection/Omega";

/**
 * A mechanical piece with 31 of the 32 spec fields populated — every field
 * except Battery, which only a quartz movement has.
 */
export const MODEL_MECHANICAL = "/collection/Omega/Omega%20StayBrite%20Tank%20CK3416";
/** Its model file, as the model editor addresses it. */
export const MODEL_MECHANICAL_FILE = "Omega/Omega_StayBrite_CK3416_T17_1934";

/** A quartz piece, which is the only way the 32nd field (Battery) renders. */
export const MODEL_QUARTZ = "/collection/Omega/Omega%20De%20Ville%20191.0167%20Cal.%201365";

export const JOURNAL = "/journal";

/**
 * A published Journal entry: the Novart set, 16 photographs and 11 watches, in
 * one block long enough to fold. It stays the set fixture because a set is
 * what the brand page lists.
 */
export const JOURNAL_ENTRY = "/journal/1974-novart-watch-collection";
export const JOURNAL_ENTRY_PHOTOS = 16;

/**
 * The first event, for the paths a set never takes: sections, section watches,
 * the event strip and an external link. 233 photographs across seven sections.
 */
export const JOURNAL_EVENT = "/journal/2026-formula-magica-caramulo";
export const JOURNAL_EVENT_PHOTOS = 233;

/** The brand of that entry, and one watch in it, for the links back into the Journal. */
export const JOURNAL_BRAND = "/collection/Novart";
export const JOURNAL_MODEL = "/collection/Novart/Novart%20Monza%20Red%2017%20Jewels";

/**
 * The 32 specification labels, exactly as the page prints them. Sourced from
 * the four mappings in src/app/data/watchDetails.tsx plus
 * CaliberTechinicalDetailskeyToDisplayTextmappings in
 * src/app/data/caliberTypes.ts. If a mapping gains a field, this list is what
 * fails first.
 */
export const SPEC_LABELS = {
  information: [
    "Brand",
    "Series",
    "Catalogue Reference",
    "Production Year",
    "Movement Type",
    "Style",
  ],
  case: [
    "Diameter",
    "Thickness",
    "Material",
    "Water Resistance",
    "Finishing Details",
    "Bezel",
    "Crown Type",
    "Crystal",
    "Caseback",
  ],
  dial: ["Color", "Dial Markers", "Finishing Details", "Luminiscent Indexes", "Calendar"],
  bracelet: ["Material", "Buckle Type", "Width", "Color"],
  movement: [
    "Manufacturer",
    "Model",
    "Type",
    "Jewels",
    "Frequency",
    "Reserve",
    "Functions",
    "Battery",
  ],
} as const;

/** The in-page anchors the header and footer link to. */
export const HOME_ANCHORS = [
  "start",
  "AllBrandsItems",
  "AboutMe",
  "Contacts",
  "PreviousSales",
] as const;

/** Every admin API route, with a request body where the handler takes one. */
export const ADMIN_ROUTES = [
  { method: "GET", path: "/api/admin/enums" },
  { method: "GET", path: "/api/admin/models?action=brands" },
  { method: "POST", path: "/api/admin/create-model" },
  { method: "POST", path: "/api/admin/create-movement" },
  { method: "POST", path: "/api/admin/sales-review" },
  { method: "POST", path: "/api/admin/journal" },
  { method: "POST", path: "/api/admin/model-edit" },
  // A real photo path, so a missing gate would answer 200, not a 404 for the file.
  {
    method: "GET",
    path: "/api/admin/journal-image?path=public/assets/Images/Novart/1974_Novart_set_Collection/IMG_5987.JPG",
  },
] as const;
