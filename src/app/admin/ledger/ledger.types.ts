/**
 * The back-office ledger: every watch's money, entered in the dev-only admin.
 * It lives in the gitignored `.ledger/ledger.json` and stands beside the Excel
 * workbook, which stays (`npm run sales:sync`); a compare view shows where the
 * two disagree.
 *
 * Types only, and always imported with `import type`. The store holds purchase
 * prices and payouts: pages read it with `fs` after the dev gate, never through
 * an import, and nothing of it may reach a bundle.
 */

import type { BlockKind, CostCategory } from "../sales-report/salesData.types";

/**
 * A run of money that belongs together: one workbook block, a lot bought
 * together, or a kept watch's Collection block. The effective cost of a watch
 * kept out of a group is what the group has not earned back.
 */
export interface LedgerGroup {
  /** "R24!82" for an imported workbook block; random for one made in the back-office. */
  id: string;
  label: string;
  kind: BlockKind | "unsold" | "void" | "collection";
  /** The workbook range it came from, "R25!188:241". */
  origin?: string;
  /** Watches in it (sold or not), for lots: the workbook's lot size. */
  size?: number;
  /** The workbook block's own total at import, kept for reference only. */
  total?: number;
}

export type WatchStatus = "for-sale" | "kept" | "sold" | "returned" | "gone";

/**
 * Where watches are bought: a platform (eBay, Vinted…) or a person. The list
 * lives in the store, not in code, so it can grow without a release and a
 * private seller's name never reaches the public repo. A watch's `source` must
 * be one of these ids.
 */
export interface LedgerSource {
  /** UPPER_SNAKE: "EBAY", "MARKETPLACE". */
  id: string;
  label: string;
}

/** A physical watch that money went into: sold, for sale, or kept. */
export interface LedgerWatch {
  id: string;
  label: string;
  /** The catalogue model it is (CollectionIndexEntry.modelFile), or null. */
  modelFile: string | null;
  status: WatchStatus;
  /** Its home group: the block or lot it came from. */
  group?: string;
  /** Purchase date. */
  acquired?: string | null;
  /** When it left stock, when that is not its first sale line's date (a payout booked on a purchase row). */
  sold?: string;
  /** A lot's unsold share standing for this many watches. */
  count?: number;
  /** A price noted beside it (the Polaris "350"), when its money sits in a lot. */
  paidNote?: number;
  /** How the catalogue link was made: imported from the matcher, or set in the back-office. */
  linkedBy?: "user" | "claude" | "ledger-link" | "high";
  /** Where the workbook names it, "R24!93" or "Collection!25". */
  origin?: string;
  /** Archived flags from the workbook reading (lot-share, paired-by-order, trade-in…). */
  flags?: string[];
  note?: string;
  /** Where it was bought: a LedgerSource id. */
  source?: string;
  archive?: {
    /** The workbook summary's own "Ganho Real". */
    userGain?: number;
    /** The year-tab stock item a kept watch's money came from. */
    link?: { stock: string; ref: string; label: string };
  };
}

/** The kinds of money a line can be. `parts`: a watch bought to take parts for another. */
export type LineKind = "sale" | "refund" | CostCategory | "parts";

/** A share of a line held by a watch, or by overhead (boxes, batteries, returned watches). */
export interface Holder {
  /** A watch id, or "overhead". */
  id: string;
  /** 0–1. A line's holders sum to 1. */
  share: number;
}

/** One movement of money. */
export interface LedgerLine {
  id: string;
  /** ISO date. */
  date: string;
  /** The date was missing and taken from its group's first dated row. */
  dateGuessed?: true;
  direction: "in" | "out";
  /** Euros, as entered: signed within its direction (one workbook row is negative). */
  amount: number;
  kind: LineKind;
  text: string;
  note?: string | null;
  /** Catawiki, OLX, Vinted, a friend… */
  channel?: string;
  /** The year tabs' trading, or the Collection tab's watches kept. */
  book: "trade" | "collection";
  /** The group it was paid in: its workbook block, never the holder's. */
  group?: string;
  holders: Holder[];
  /** The workbook cell it came from, "R24!F89". */
  origin?: string;
  /** The workbook row's fingerprint plus side, to pair it with that row again. */
  fingerprint?: string;
  /** Part of a watch traded in. */
  tradeIn?: true;
}

export interface LedgerStore {
  version: 1;
  /** When the store was seeded from the workbook, and from which workbook. */
  seeded?: { at: string; workbookSha256: string };
  groups: LedgerGroup[];
  watches: LedgerWatch[];
  lines: LedgerLine[];
  /** Where watches are bought, for LedgerWatch.source. */
  sources?: LedgerSource[];
  /**
   * Where a catalogue watch with no ledger watch yet was bought: modelFile → a
   * LedgerSource id. No money is recorded for it. A ledger watch linked to the
   * model later takes the source over, and the entry goes.
   */
  modelSources?: Record<string, string>;
}

/**
 * The workbook read as a ledger, as of the last `npm run sales:sync`
 * (`.sales/workbook-ledger.json`, written by scripts/ledger/snapshot.ts): what
 * the compare view pairs the back-office ledger's lines against.
 */
export interface WorkbookSnapshot {
  version: 1;
  generatedAt: string;
  workbookSha256: string;
  groups: LedgerGroup[];
  watches: LedgerWatch[];
  lines: LedgerLine[];
  /** What did not add up when the workbook was read; the snapshot is partial while there are any. */
  problems: string[];
}

/** A catalogue sale as the build needs it: from collection-index.json. */
export interface CatalogueSaleRef {
  modelFile: string;
  /** saleReport.price, the gross hammer. */
  price: number;
  /** saleReport.date, "DD/MM/YYYY". */
  date: string;
}
