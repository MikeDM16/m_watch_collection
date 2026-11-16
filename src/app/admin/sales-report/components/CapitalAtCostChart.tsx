"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { compactEuro, formatMoney } from "../salesStats";

/** One band of the stack: a series key, its label, and its colour per theme. */
export interface CapitalSeries {
  key: string;
  label: string;
  light: string;
  dark: string;
}

type Bucket = { key: string; label: string } & Record<string, number | string>;

function CapitalTooltip({
  active,
  payload,
  series,
}: {
  active?: boolean;
  payload?: { payload: Bucket }[];
  series: CapitalSeries[];
}) {
  const b = payload?.[0]?.payload;
  if (!active || !b) return null;
  const value = (k: string) => Number(b[k] ?? 0);
  const total = series.reduce((s, x) => s + value(x.key), 0);
  return (
    <div className="grid min-w-[12rem] gap-1 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium">At the end of {b.label}</div>
      {series.map((s) => (
        <div key={s.key} className="flex items-center justify-between gap-6">
          <span className="flex items-center gap-1.5 text-muted-foreground">
            <span
              className="h-2 w-2 rounded-[2px]"
              style={{ background: `var(--color-${s.key})` }}
            />
            {s.label}
          </span>
          <span className="font-mono font-medium tabular-nums text-foreground">
            {formatMoney(value(s.key))}
          </span>
        </div>
      ))}
      {series.length > 1 && (
        <div className="flex items-center justify-between gap-6 border-t border-border/50 pt-1">
          <span className="text-muted-foreground">Total</span>
          <span className="font-mono font-medium tabular-nums text-foreground">
            {formatMoney(total)}
          </span>
        </div>
      )}
    </div>
  );
}

/**
 * Capital held in watches, at cost, at the end of each period: stacked bands,
 * each a light wash under a 2px edge. A single band needs no legend; the card
 * title names it.
 */
export function CapitalAtCostChart({ data, series }: { data: Bucket[]; series: CapitalSeries[] }) {
  if (!data.some((b) => series.some((s) => Number(b[s.key] ?? 0) !== 0))) {
    return <div className="py-10 text-center text-sm text-muted-foreground">No data.</div>;
  }
  const config = Object.fromEntries(
    series.map((s) => [s.key, { label: s.label, theme: { light: s.light, dark: s.dark } }]),
  ) satisfies ChartConfig;
  return (
    <ChartContainer config={config} className="aspect-auto h-[300px] w-full">
      <AreaChart data={data} margin={{ left: 4, right: 12, top: 12, bottom: 4 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={24}
          interval="preserveStartEnd"
        />
        <YAxis tickLine={false} axisLine={false} width={52} tickFormatter={compactEuro} />
        <ChartTooltip
          cursor={{ strokeOpacity: 0.4 }}
          content={<CapitalTooltip series={series} />}
        />
        {series.length > 1 && <ChartLegend content={<ChartLegendContent />} />}
        {series.map((s) => (
          <Area
            key={s.key}
            dataKey={s.key}
            stackId="capital"
            type="linear"
            stroke={`var(--color-${s.key})`}
            strokeWidth={2}
            fill={`var(--color-${s.key})`}
            fillOpacity={0.12}
            activeDot={{ r: 4, stroke: "hsl(var(--card))", strokeWidth: 2 }}
            isAnimationActive={false}
          />
        ))}
      </AreaChart>
    </ChartContainer>
  );
}
