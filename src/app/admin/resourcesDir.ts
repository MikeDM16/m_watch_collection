import path from "path";

/**
 * The local MWatchCollectionResources checkout, where photos sit before they
 * are pushed. Same convention as the add-watches lookup script.
 *
 * turbopackIgnore: a path built from an env var makes the build trace the whole
 * project into the server output. This only ever runs in development, behind
 * the dev gate, so there is nothing to trace.
 *
 * Its own module, with nothing else imported: the admin pages that use it
 * must not pull in the collection index, which a save regenerates.
 */
export const RESOURCES_DIR = path.resolve(
  /*turbopackIgnore: true*/
  process.env.WATCH_RESOURCES_DIR ?? path.join(process.cwd(), "..", "MWatchCollectionResources"),
);
