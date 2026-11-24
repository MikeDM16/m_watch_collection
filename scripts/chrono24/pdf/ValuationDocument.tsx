/**
 * ValuationDocument.tsx — the valuation report: a cover, a summary, the
 * inventory table, then one page per kept watch. Rendered by 5_report.tsx,
 * once per language. Lives under scripts/ so it never reaches the app bundle.
 */

import {
  Document,
  Page,
  Path,
  Image as PdfImage,
  StyleSheet,
  Svg,
  Text,
  View,
} from "@react-pdf/renderer";
import React from "react";

import type { HistoryPoint } from "../../../src/app/admin/ledger/market.types";
import type { Valuation, ValuationRow } from "../../../src/app/admin/ledger/valuation";
import {
  c24Word,
  date,
  money,
  monthYear,
  percent,
  signedMoney,
  strings,
  type Lang,
  type Strings,
} from "./i18n";

export interface WatchSpecs {
  reference?: string;
  year?: string;
  caseMaterial?: string;
  diameter?: string;
  movement?: string;
}

export interface ReportWatch {
  row: ValuationRow;
  /** Brand and model as the report titles it. */
  brand: string;
  name: string;
  specs: WatchSpecs;
  photo: Buffer | null;
  thumb: Buffer | null;
}

export interface ValuationDocumentProps {
  lang: Lang;
  valuation: Valuation;
  watches: ReportWatch[];
  /** The collection's value over time, oldest first. */
  series: HistoryPoint[];
  generatedAt: string;
  owner?: string;
}

const INK = "#1a1a1a";
const MUTED = "#6b6b6b";
const RULE = "#d9d9d9";
const ACCENT = "#c40d2e";
const UP = "#1f7a4d";
const DOWN = "#b42318";
const BAND = "#e8e8e8";

const s = StyleSheet.create({
  page: { paddingTop: 40, paddingBottom: 56, paddingHorizontal: 44, fontSize: 9, color: INK },
  footer: {
    position: "absolute",
    bottom: 22,
    left: 44,
    right: 44,
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 7,
    color: MUTED,
    borderTopWidth: 0.5,
    borderTopColor: RULE,
    paddingTop: 6,
  },
  h1: { fontSize: 26, fontWeight: "bold" },
  h2: { fontSize: 15, fontWeight: "bold", marginBottom: 12 },
  h3: { fontSize: 10, fontWeight: "bold", marginTop: 18, marginBottom: 6 },
  muted: { color: MUTED },
  kpis: { flexDirection: "row", borderTopWidth: 0.5, borderLeftWidth: 0.5, borderColor: RULE },
  kpi: { flex: 1, padding: 10, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderColor: RULE },
  kpiLabel: { fontSize: 7.5, color: MUTED, marginBottom: 4 },
  kpiValue: { fontSize: 15, fontWeight: "bold" },
  kpiSub: { fontSize: 7, color: MUTED, marginTop: 3 },
  tr: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: RULE,
    paddingVertical: 3,
  },
  th: { fontSize: 7, color: MUTED, fontWeight: "bold" },
  num: { textAlign: "right" },
  specRow: {
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: RULE,
    paddingVertical: 4,
  },
  specLabel: { width: 110, color: MUTED },
  specValue: { flex: 1 },
});

const gainColor = (n: number | null) => (n === null || n === 0 ? INK : n > 0 ? UP : DOWN);

function Footer({ t, generatedAt, lang }: { t: Strings; generatedAt: string; lang: Lang }) {
  return (
    <View style={s.footer} fixed>
      <Text>
        {t.title} · {t.generatedOn} {date(generatedAt, lang)}
      </Text>
      <Text render={({ pageNumber, totalPages }) => t.page(pageNumber, totalPages)} />
    </View>
  );
}

function Kpi({
  label,
  value,
  sub,
  color,
}: {
  label: string;
  value: string;
  sub?: string;
  color?: string;
}) {
  return (
    <View style={s.kpi}>
      <Text style={s.kpiLabel}>{label}</Text>
      <Text style={[s.kpiValue, color ? { color } : {}]}>{value}</Text>
      {sub ? <Text style={s.kpiSub}>{sub}</Text> : null}
    </View>
  );
}

/**
 * A value series as a line, with Chrono24's low–high band behind it when the
 * points carry one, and an optional dashed mark at the purchase date.
 */
function SeriesChart({
  points,
  width,
  height,
  lang,
  mark,
}: {
  points: HistoryPoint[];
  width: number;
  height: number;
  lang: Lang;
  mark?: { date: string; label: string };
}) {
  if (points.length < 2) return null;
  const left = 46;
  const top = 8;
  const bottom = 16;
  const w = width - left;
  const h = height - top - bottom;
  const t = (d: string) => new Date(d).getTime();
  const x0 = t(points[0].date);
  const x1 = t(points[points.length - 1].date);
  const all = points.flatMap((p) => [p.value, p.low ?? p.value, p.high ?? p.value]);
  const pad = (Math.max(...all) - Math.min(...all)) * 0.08 || Math.max(...all) * 0.1;
  const y0 = Math.max(0, Math.min(...all) - pad);
  const y1 = Math.max(...all) + pad;
  const X = (d: string) => left + ((t(d) - x0) / (x1 - x0 || 1)) * w;
  const Y = (v: number) => top + h - ((v - y0) / (y1 - y0 || 1)) * h;
  const f = (n: number) => n.toFixed(1);

  const line = points.map((p, i) => `${i ? "L" : "M"}${f(X(p.date))},${f(Y(p.value))}`).join(" ");
  const banded = points.filter((p) => p.low !== undefined && p.high !== undefined);
  const band =
    banded.length > 1
      ? banded.map((p, i) => `${i ? "L" : "M"}${f(X(p.date))},${f(Y(p.high!))}`).join(" ") +
        " " +
        [...banded]
          .reverse()
          .map((p) => `L${f(X(p.date))},${f(Y(p.low!))}`)
          .join(" ") +
        " Z"
      : null;
  const ticks = [y0, (y0 + y1) / 2, y1];
  const markX = mark && t(mark.date) >= x0 && t(mark.date) <= x1 ? X(mark.date) : null;

  return (
    <Svg width={width} height={height}>
      {ticks.map((v) => (
        <Path
          key={v}
          d={`M${left},${f(Y(v))} L${width},${f(Y(v))}`}
          stroke={RULE}
          strokeWidth={0.5}
        />
      ))}
      {ticks.map((v) => (
        <Text key={`l${v}`} x={0} y={Y(v) + 2.5} style={{ fontSize: 6.5, color: MUTED }}>
          {money(Math.round(v / 10) * 10)}
        </Text>
      ))}
      {band ? <Path d={band} fill={BAND} /> : null}
      {markX !== null ? (
        <Path
          d={`M${f(markX)},${top} L${f(markX)},${top + h}`}
          stroke={ACCENT}
          strokeWidth={0.6}
          strokeDasharray="2,2"
        />
      ) : null}
      {markX !== null && mark ? (
        <Text x={markX + 3} y={top + 8} style={{ fontSize: 6.5, color: ACCENT }}>
          {mark.label}
        </Text>
      ) : null}
      <Path d={line} stroke={INK} strokeWidth={1} fill="none" />
      <Text x={left} y={height - 3} style={{ fontSize: 6.5, color: MUTED }}>
        {monthYear(points[0].date, lang)}
      </Text>
      <Text x={width - 34} y={height - 3} style={{ fontSize: 6.5, color: MUTED }}>
        {monthYear(points[points.length - 1].date, lang)}
      </Text>
    </Svg>
  );
}

function Cover({
  t,
  lang,
  valuation,
  generatedAt,
  owner,
}: ValuationDocumentProps & { t: Strings }) {
  const { totals, asOf } = valuation;
  return (
    <Page size="A4" style={s.page}>
      <View style={{ marginTop: 180 }}>
        <Text style={{ fontSize: 9, color: ACCENT, letterSpacing: 1.5, marginBottom: 10 }}>
          {t.subtitle.toUpperCase()}
        </Text>
        <Text style={s.h1}>{t.title}</Text>
        <Text style={{ fontSize: 11, color: MUTED, marginTop: 8 }}>
          {t.watches(totals.count)} · {t.generatedOn} {date(generatedAt, lang)}
        </Text>
        {owner ? (
          <Text style={{ fontSize: 10, marginTop: 4 }}>
            {t.owner}: {owner}
          </Text>
        ) : null}
      </View>
      <View style={{ marginTop: 60, borderTopWidth: 1.5, borderTopColor: INK, paddingTop: 14 }}>
        <Text style={{ fontSize: 9, color: MUTED }}>{t.totalValue}</Text>
        <Text style={{ fontSize: 34, fontWeight: "bold", marginTop: 4 }}>
          {money(totals.value)}
        </Text>
        <Text style={{ fontSize: 9, color: MUTED, marginTop: 6 }}>
          {asOf ? t.marketAsOf(date(asOf, lang)) : t.noMarket}
        </Text>
      </View>
      <Text
        style={{
          position: "absolute",
          bottom: 70,
          left: 44,
          right: 44,
          fontSize: 7.5,
          color: MUTED,
        }}
      >
        {t.disclaimer}
      </Text>
      <Footer t={t} generatedAt={generatedAt} lang={lang} />
    </Page>
  );
}

function Summary({
  t,
  lang,
  valuation,
  watches,
  series,
  generatedAt,
}: ValuationDocumentProps & { t: Strings }) {
  const { totals } = valuation;
  const brands = new Map<string, { n: number; cost: number; value: number }>();
  for (const w of watches) {
    const b = brands.get(w.brand) ?? { n: 0, cost: 0, value: 0 };
    brands.set(w.brand, { n: b.n + 1, cost: b.cost + w.row.cost, value: b.value + w.row.value });
  }
  const byBrand = [...brands.entries()].sort((a, b) => b[1].value - a[1].value);

  return (
    <Page size="A4" style={s.page}>
      <Text style={s.h2}>{t.summary}</Text>
      <View style={s.kpis}>
        <Kpi label={t.totalValue} value={money(totals.value)} />
        <Kpi label={t.totalCost} value={money(totals.cost)} />
        <Kpi
          label={t.gain}
          value={signedMoney(totals.gain)}
          sub={`${percent(totals.gainPct)} ${t.gainNote}`}
          color={gainColor(totals.gain)}
        />
        <Kpi
          label={t.tracked}
          value={`${totals.tracked} / ${totals.count}`}
          sub={t.trackedNote(totals.count - totals.tracked)}
        />
      </View>

      {series.length > 1 ? (
        <View wrap={false}>
          <Text style={s.h3}>{t.valueOverTime}</Text>
          <SeriesChart points={series} width={507} height={150} lang={lang} />
        </View>
      ) : null}

      <Text style={s.h3}>{t.byBrand}</Text>
      <View style={s.tr}>
        <Text style={[s.th, { flex: 1 }]}>{t.brand}</Text>
        <Text style={[s.th, s.num, { width: 50 }]}>{t.count}</Text>
        <Text style={[s.th, s.num, { width: 80 }]}>{t.cost}</Text>
        <Text style={[s.th, s.num, { width: 80 }]}>{t.value}</Text>
      </View>
      {byBrand.map(([brand, b]) => (
        <View key={brand} style={s.tr} wrap={false}>
          <Text style={{ flex: 1 }}>{brand}</Text>
          <Text style={[s.num, { width: 50 }]}>{b.n}</Text>
          <Text style={[s.num, { width: 80 }]}>{money(b.cost)}</Text>
          <Text style={[s.num, { width: 80, fontWeight: "bold" }]}>{money(b.value)}</Text>
        </View>
      ))}
      <Footer t={t} generatedAt={generatedAt} lang={lang} />
    </Page>
  );
}

function Inventory({
  t,
  lang,
  valuation,
  watches,
  generatedAt,
}: ValuationDocumentProps & { t: Strings }) {
  const cols = { n: 16, img: 34, ref: 78, year: 30, acq: 54, cost: 56, value: 56, basis: 44 };
  return (
    <Page size="A4" style={s.page}>
      <Text style={s.h2}>{t.inventory}</Text>
      <View style={s.tr} fixed>
        <Text style={[s.th, { width: cols.n }]}>#</Text>
        <Text style={[s.th, { width: cols.img }]} />
        <Text style={[s.th, { flex: 1 }]}>{t.watch}</Text>
        <Text style={[s.th, { width: cols.ref }]}>{t.reference}</Text>
        <Text style={[s.th, { width: cols.year }]}>{t.year}</Text>
        <Text style={[s.th, { width: cols.acq }]}>{t.acquired}</Text>
        <Text style={[s.th, s.num, { width: cols.cost }]}>{t.cost}</Text>
        <Text style={[s.th, s.num, { width: cols.value }]}>{t.value}</Text>
        <Text style={[s.th, s.num, { width: cols.basis }]}>{t.basis}</Text>
      </View>
      {watches.map((w, i) => (
        <View key={w.row.watchId} style={s.tr} wrap={false}>
          <Text style={{ width: cols.n, color: MUTED }}>{i + 1}</Text>
          <View style={{ width: cols.img }}>
            {w.thumb ? (
              <PdfImage src={{ data: w.thumb, format: "jpg" }} style={{ width: 28, height: 28 }} />
            ) : null}
          </View>
          <View style={{ flex: 1, paddingRight: 4 }}>
            <Text style={{ fontWeight: "bold" }}>{w.brand}</Text>
            <Text style={{ fontSize: 7.5, color: MUTED }}>{w.name}</Text>
          </View>
          <Text style={{ width: cols.ref, fontSize: 7.5 }}>{w.specs.reference ?? "—"}</Text>
          <Text style={{ width: cols.year }}>{w.specs.year ?? "—"}</Text>
          <Text style={{ width: cols.acq }}>{date(w.row.acquired, lang)}</Text>
          <Text style={[s.num, { width: cols.cost }]}>{money(w.row.cost)}</Text>
          <Text style={[s.num, { width: cols.value, fontWeight: "bold" }]}>
            {money(w.row.value)}
          </Text>
          <Text style={[s.num, { width: cols.basis, fontSize: 7.5, color: MUTED }]}>
            {w.row.basis === "chrono24" ? t.basisMarket : t.basisCost}
          </Text>
        </View>
      ))}
      <View
        style={[s.tr, { borderBottomWidth: 0, borderTopWidth: 1, borderTopColor: INK }]}
        wrap={false}
      >
        <Text style={{ flex: 1, fontWeight: "bold", paddingLeft: cols.n + cols.img }}>
          {t.total}
        </Text>
        <Text style={[s.num, { width: cols.cost, fontWeight: "bold" }]}>
          {money(valuation.totals.cost)}
        </Text>
        <Text style={[s.num, { width: cols.value, fontWeight: "bold" }]}>
          {money(valuation.totals.value)}
        </Text>
        <Text style={{ width: cols.basis }} />
      </View>
      <Footer t={t} generatedAt={generatedAt} lang={lang} />
    </Page>
  );
}

function Spec({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <View style={s.specRow}>
      <Text style={s.specLabel}>{label}</Text>
      <Text style={s.specValue}>{value}</Text>
    </View>
  );
}

function WatchPage({
  t,
  lang,
  w,
  generatedAt,
}: {
  t: Strings;
  lang: Lang;
  w: ReportWatch;
  generatedAt: string;
}) {
  const { row, specs } = w;
  const item = row.item;
  return (
    <Page size="A4" style={s.page}>
      <Text style={{ fontSize: 9, color: ACCENT, letterSpacing: 1 }}>{w.brand.toUpperCase()}</Text>
      <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 3, marginBottom: 14 }}>
        {w.name}
      </Text>

      <View style={{ flexDirection: "row" }}>
        <View style={{ width: 230, height: 230, backgroundColor: "#f2f2f2" }}>
          {w.photo ? (
            <PdfImage src={{ data: w.photo, format: "jpg" }} style={{ width: 230, height: 230 }} />
          ) : null}
        </View>
        <View style={{ flex: 1, marginLeft: 18 }}>
          <Spec label={t.reference} value={specs.reference} />
          <Spec label={t.year} value={specs.year} />
          <Spec label={t.caseMaterial} value={specs.caseMaterial} />
          <Spec label={t.diameter} value={specs.diameter} />
          <Spec label={t.movement} value={specs.movement} />
          <Spec label={t.condition} value={c24Word(item?.condition, lang)} />
          <Spec label={t.accessories} value={c24Word(item?.accessories, lang)} />
          <Spec label={t.purchaseDate} value={date(row.acquired, lang)} />
        </View>
      </View>

      <View style={[s.kpis, { marginTop: 20 }]}>
        <Kpi label={t.cost} value={money(row.cost)} />
        <Kpi
          label={row.basis === "chrono24" ? t.marketValue : t.value}
          value={money(row.value)}
          sub={row.basis === "chrono24" && item ? date(item.lastSeen, lang) : t.basisCost}
        />
        <Kpi
          label={t.gainShort}
          value={row.gain === null ? "—" : signedMoney(row.gain)}
          sub={row.gain === null ? undefined : percent(row.gainPct)}
          color={gainColor(row.gain)}
        />
      </View>

      {item && item.history.length > 1 ? (
        <View wrap={false}>
          <Text style={s.h3}>{t.modelPerformance}</Text>
          <SeriesChart
            points={item.history}
            width={507}
            height={170}
            lang={lang}
            mark={row.acquired ? { date: row.acquired, label: t.purchaseMark } : undefined}
          />
        </View>
      ) : null}
      {!item ? <Text style={{ marginTop: 16, color: MUTED }}>{t.notTracked}</Text> : null}
      <Footer t={t} generatedAt={generatedAt} lang={lang} />
    </Page>
  );
}

export function ValuationDocument(props: ValuationDocumentProps) {
  const t = strings(props.lang);
  return (
    <Document
      title={t.title}
      author={props.owner}
      language={props.lang === "pt" ? "pt-PT" : "en-GB"}
    >
      <Cover {...props} t={t} />
      <Summary {...props} t={t} />
      <Inventory {...props} t={t} />
      {props.watches.map((w) => (
        <WatchPage
          key={w.row.watchId}
          t={t}
          lang={props.lang}
          w={w}
          generatedAt={props.generatedAt}
        />
      ))}
    </Document>
  );
}
