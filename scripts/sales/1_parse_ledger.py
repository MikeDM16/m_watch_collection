"""
1_parse_ledger.py — step 1 of the sales margin pipeline.

Reads the private sales ledger (scripts/Relogios - Vendas.xlsx) and writes a
faithful JSON copy of its per-watch blocks to .sales/ledger.json, for step 2
(match) and step 3 (build) to work from. This step extracts; it does not
interpret. Deciding which row is a purchase, a strap or a payout is step 2's job.

WHAT A BLOCK IS
Every block in the four year tabs ends in a total cell in column H holding

    =SUM(Ex:Ey)-SUM(Fx:Fy)

and that formula's range *is* the block. The "Resumo Venda" caption beside it is
optional (some totals have none), so the formula is what is trusted. Inside a
block the columns are:

    C  optional id, the platform ("Chrono24"), or an "x" mark
    D  description — the watch on the first row, then each cost line
    E  money in: the sale payout, refunds
    F  money out: the purchase, services, straps, shipping, boxes, customs
    G  approximate date
    H  a note, or a quoted hammer price ("550")

SUMMARY TABLES
R24–R26 also carry per-watch summaries off to the right (L hammer, M received,
N "Ganho Real", O name). Their formulas point at ledger cells (`=E190`,
`-F194-F229`), which makes them an answer key for matching, so those cell
references are extracted too. R26's offers table in N–R is not one of them and
falls out naturally: its names sit in N, not O.

WHY THE SELF-CHECK
Excel's SUM silently skips numbers typed as text ("283,94", "-12.5"). They are
skipped here the same way, and listed, so every block's recomputed total must
equal the total Excel cached. A mismatch means this parser misread the sheet,
so the script exits 1 rather than hand a wrong ledger downstream.

PRIVACY
Only the four year tabs reach the output. The workbook's other tabs (bank
balances, investments, gold) are never extracted. Everything written lands in
.sales/, which is gitignored along with the workbook itself. The workbook is
opened read-only and never saved: a save through openpyxl drops Excel features.

Dependencies:
    pip install openpyxl

Usage:
    python scripts/sales/1_parse_ledger.py <workbook.xlsx>
    python scripts/sales/1_parse_ledger.py            # uses DEFAULT_WORKBOOK below
"""

import datetime as dt
import hashlib
import json
import os
import re
import sys
from collections import Counter

from openpyxl import load_workbook

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))

# Used when no workbook is passed on the command line.
DEFAULT_WORKBOOK = os.path.join(REPO_ROOT, "scripts", "Relogios - Vendas.xlsx")

OUT_DIR = os.path.join(REPO_ROOT, ".sales")
OUT_FILE = os.path.join(OUT_DIR, "ledger.json")

# The year tabs. Everything else in the workbook is deliberately left unread.
LEDGER_SHEETS = ("R 17-23", "R24", "R25", "R26")

# Tabs with a summary table, and the column holding its hammer price. R24's
# summary has no hammer column (its L cells hold stray counts), so none is read.
SUMMARY_HAMMER_COLUMN = {"R24": None, "R25": 12, "R26": 12}

# 1-based column numbers, as openpyxl counts them.
COL_C, COL_D, COL_E, COL_F, COL_G, COL_H = 3, 4, 5, 6, 7, 8
COL_L, COL_M, COL_N, COL_O, COL_P = 12, 13, 14, 15, 16
SUMMARY_FORMULA_COLUMNS = {"L": COL_L, "M": COL_M, "N": COL_N, "P": COL_P}

TOTAL_FORMULA = re.compile(r"^=SUM\(E(\d+):E(\d+)\)-SUM\(F(\d+):F(\d+)\)$", re.IGNORECASE)

# A cell reference, optionally sheet-qualified: E190, $F$194, 'R25'!F267, R25!F267.
CELL_REF = re.compile(r"(?:'([^']+)'!|([A-Za-z0-9_]+)!)?\$?([A-Z]{1,3})\$?(\d+)")

# Text that Excel would have summed had it been typed as a number.
NUMERIC_TEXT = re.compile(r"^-?\d+(?:[.,]\d+)?$")

TOLERANCE = 0.005


def as_text(value):
    """Cell value as display text, whitespace collapsed. Blank for None."""
    if value is None:
        return ""
    if isinstance(value, float) and value.is_integer():
        value = int(value)
    if isinstance(value, (dt.datetime, dt.date)):
        return value.isoformat()[:10]
    return re.sub(r"\s+", " ", str(value)).strip()


def raw_number(value):
    """A real number at full precision, or None. Text is never a number here, as
    in Excel's SUM."""
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        return None
    return float(value)


def as_number(value):
    """raw_number rounded to the cent, for output. Sums use raw_number: some
    cells hold values like 26.954, and rounding each one first drifts a cent."""
    n = raw_number(value)
    return None if n is None else round(n, 2)


def as_date(value):
    if isinstance(value, dt.datetime):
        return value.date().isoformat()
    if isinstance(value, dt.date):
        return value.isoformat()
    return None


def is_formula(value):
    return isinstance(value, str) and value.startswith("=")


def cell_name(sheet, column, row):
    letters = ""
    while column:
        column, rem = divmod(column - 1, 26)
        letters = chr(65 + rem) + letters
    return f"{sheet}!{letters}{row}"


def file_facts(path):
    with open(path, "rb") as fh:
        digest = hashlib.sha256(fh.read()).hexdigest()
    mtime = dt.datetime.fromtimestamp(os.path.getmtime(path)).isoformat(timespec="seconds")
    return mtime, digest


def find_blocks(wf, sheet, issues):
    """Every total formula in column H, as (first, last, total_row, ranges)."""
    blocks = []
    for r in range(1, wf.max_row + 1):
        raw = wf.cell(r, COL_H).value
        if not is_formula(raw):
            continue
        m = TOTAL_FORMULA.match(raw.replace(" ", ""))
        if not m:
            continue
        e0, e1, f0, f1 = map(int, m.groups())
        if (e0, e1) != (f0, f1):
            issues.append({
                "kind": "uneven-total-range",
                "cell": cell_name(sheet, COL_H, r),
                "detail": raw,
            })
        blocks.append((min(e0, f0), max(e1, f1), r, (e0, e1), (f0, f1)))
    return blocks


def read_row(wf, wv, sheet, r, issues, today):
    """One ledger row as a dict, or None when C–H are all empty."""
    values = {c: wv.cell(r, c).value for c in range(COL_C, COL_H + 1)}
    if all(v is None or (isinstance(v, str) and not v.strip()) for v in values.values()):
        return None

    row = {"row": r}

    ident = as_text(values[COL_C])
    row["id"] = ident or None

    d_raw = wf.cell(r, COL_D).value
    if is_formula(d_raw):
        # A side calculation typed into the description column. Its result is a
        # number, not a description, so it is kept out of the text.
        issues.append({"kind": "formula-in-description", "cell": cell_name(sheet, COL_D, r),
                       "detail": d_raw})
        row["text"] = ""
    else:
        row["text"] = as_text(values[COL_D])
    font = wf.cell(r, COL_D).font
    row["bold"] = bool(font and font.b)

    for key, col in (("received", COL_E), ("spent", COL_F)):
        number = as_number(values[col])
        row[key] = number
        raw = wf.cell(r, col).value
        if is_formula(raw):
            row[f"{key}Formula"] = raw
        if number is None and isinstance(values[col], str) and values[col].strip():
            text = values[col].strip()
            row[f"{key}Text"] = text
            if NUMERIC_TEXT.match(text.replace(" ", "").replace("€", "")):
                issues.append({"kind": "number-as-text", "cell": cell_name(sheet, col, r),
                               "detail": text})

    date = as_date(values[COL_G])
    row["date"] = date
    if date is None and as_text(values[COL_G]):
        issues.append({"kind": "unreadable-date", "cell": cell_name(sheet, COL_G, r),
                       "detail": as_text(values[COL_G])})
    elif date and dt.date.fromisoformat(date) > today:
        issues.append({"kind": "future-date", "cell": cell_name(sheet, COL_G, r), "detail": date})

    h_raw = wf.cell(r, COL_H).value
    row["note"] = None if is_formula(h_raw) else (as_text(values[COL_H]) or None)
    return row


def sum_column(wv, col, first, last):
    """Excel SUM over a column range: real numbers only."""
    total = 0.0
    for r in range(first, last + 1):
        n = raw_number(wv.cell(r, col).value)
        if n is not None:
            total += n
    return total


def parse_sheet(wf, wv, sheet, issues, today):
    blocks = []
    claimed = {}
    for first, last, total_row, e_range, f_range in find_blocks(wf, sheet, issues):
        block_id = f"{sheet}!{first}"
        for r in range(first, last + 1):
            if r in claimed:
                issues.append({"kind": "overlapping-blocks", "cell": cell_name(sheet, COL_D, r),
                               "detail": f"{claimed[r]} and {block_id}"})
            claimed[r] = block_id

        rows = [row for r in range(first, last + 1)
                if (row := read_row(wf, wv, sheet, r, issues, today)) is not None]

        cached = raw_number(wv.cell(total_row, COL_H).value)
        computed = sum_column(wv, COL_E, *e_range) - sum_column(wv, COL_F, *f_range)
        if cached is None:
            issues.append({"kind": "total-not-cached", "cell": cell_name(sheet, COL_H, total_row),
                           "detail": "open and save the workbook in Excel to cache totals"})

        blocks.append({
            "id": block_id,
            "sheet": sheet,
            "firstRow": first,
            "lastRow": last,
            "totalRow": total_row,
            "caption": as_text(wf.cell(total_row, COL_D).value) or None,
            "total": None if cached is None else round(cached, 2),
            "computedTotal": round(computed, 2),
            "exact": cached is None or abs(cached - computed) <= TOLERANCE,
            "rows": rows,
        })

    # Money typed outside every block is money no step downstream will ever see.
    totals = {b["totalRow"] for b in blocks}
    for r in range(1, wv.max_row + 1):
        if r in claimed or r in totals:
            continue
        for col in (COL_E, COL_F):
            if as_number(wv.cell(r, col).value) is not None:
                issues.append({"kind": "money-outside-block", "cell": cell_name(sheet, col, r),
                               "detail": as_text(wv.cell(r, COL_D).value)})
    return blocks


def ledger_refs(wf, sheet, formula, depth=0):
    """E/F cells a summary formula reaches, following its own L/M/N/P cells once."""
    refs = []
    for quoted, bare, col, row in CELL_REF.findall(formula or ""):
        target = quoted or bare or sheet
        if col in ("E", "F"):
            refs.append(f"{target}!{col}{row}")
        elif target == sheet and col in SUMMARY_FORMULA_COLUMNS and depth < 2:
            inner = wf.cell(int(row), SUMMARY_FORMULA_COLUMNS[col]).value
            if is_formula(inner):
                refs.extend(ledger_refs(wf, sheet, inner, depth + 1))
    return refs


def parse_summaries(wf, wv, sheet):
    """The user's per-watch summary rows: a name in O and a received amount in M."""
    hints = []
    hammer_col = SUMMARY_HAMMER_COLUMN.get(sheet)
    for r in range(1, wv.max_row + 1):
        name = wv.cell(r, COL_O).value
        received = as_number(wv.cell(r, COL_M).value)
        if not isinstance(name, str) or not name.strip() or received is None:
            continue
        formulas = {}
        for key, col in SUMMARY_FORMULA_COLUMNS.items():
            raw = wf.cell(r, col).value
            if is_formula(raw):
                formulas[key] = raw
        refs = []
        for formula in formulas.values():
            refs.extend(ledger_refs(wf, sheet, formula))
        hints.append({
            "sheet": sheet,
            "row": r,
            "name": as_text(name),
            "hammer": as_number(wv.cell(r, hammer_col).value) if hammer_col else None,
            "received": received,
            "gain": as_number(wv.cell(r, COL_N).value),
            "formulas": formulas,
            "refs": sorted(set(refs)),
        })
    return hints


def main(workbook):
    if hasattr(sys.stdout, "reconfigure"):
        sys.stdout.reconfigure(encoding="utf-8")

    if not os.path.isfile(workbook):
        sys.exit(f"Workbook not found: {workbook}")

    # Twice: once for the formulas (block ranges, summary references), once for
    # the values Excel cached (numbers, dates, totals).
    wbf = load_workbook(workbook, data_only=False)
    wbv = load_workbook(workbook, data_only=True)

    missing = [s for s in LEDGER_SHEETS if s not in wbf.sheetnames]
    if missing:
        sys.exit(f"Missing ledger tab(s): {', '.join(missing)}")

    today = dt.date.today()
    issues, blocks, hints = [], [], []
    for sheet in LEDGER_SHEETS:
        blocks.extend(parse_sheet(wbf[sheet], wbv[sheet], sheet, issues, today))
        if sheet in SUMMARY_HAMMER_COLUMN:
            hints.extend(parse_summaries(wbf[sheet], wbv[sheet], sheet))

    mismatches = [b for b in blocks if not b["exact"]]

    mtime, digest = file_facts(workbook)
    try:
        shown = os.path.relpath(workbook, REPO_ROOT).replace("\\", "/")
    except ValueError:  # another drive on Windows
        shown = workbook
    out = {
        "version": 1,
        "generatedAt": dt.datetime.now().isoformat(timespec="seconds"),
        "source": {"file": shown, "mtime": mtime, "sha256": digest},
        "sheets": list(LEDGER_SHEETS),
        "blocks": blocks,
        "hints": hints,
        "issues": issues,
    }

    os.makedirs(OUT_DIR, exist_ok=True)
    tmp = OUT_FILE + ".tmp"
    with open(tmp, "w", encoding="utf-8") as fh:
        json.dump(out, fh, ensure_ascii=False, indent=1)
    os.replace(tmp, OUT_FILE)

    per_sheet = Counter(b["sheet"] for b in blocks)
    money_rows = sum(1 for b in blocks for r in b["rows"]
                     if r["received"] is not None or r["spent"] is not None)
    kinds = Counter(i["kind"] for i in issues)

    print("=" * 60)
    print(f"Workbook:        {shown}")
    print(f"Blocks:          {len(blocks)}   ("
          + " · ".join(f"{s}: {per_sheet[s]}" for s in LEDGER_SHEETS) + ")")
    print(f"Rows with money: {money_rows}")
    print(f"Summary rows:    {len(hints)}   ({sum(1 for h in hints if h['hammer'])} with a hammer price)")
    print(f"Totals checked:  {len(blocks) - len(mismatches)} ok · {len(mismatches)} mismatched")
    if kinds:
        print("Issues listed:   " + " · ".join(f"{k}: {n}" for k, n in sorted(kinds.items())))
    print(f"Written:         {os.path.relpath(OUT_FILE, REPO_ROOT)}")
    print("=" * 60)

    if mismatches:
        print("\nTotals that do not reproduce — the parser misread these blocks:")
        for b in mismatches:
            print(f"  {b['id']:>10}  Excel {b['total']:>10.2f}  parsed {b['computedTotal']:>10.2f}")
        sys.exit(1)

    print("Next: npx tsx scripts/sales/2_match.ts")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else DEFAULT_WORKBOOK)
