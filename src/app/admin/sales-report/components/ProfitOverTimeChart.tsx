"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { formatMoney, formatPercent, ProfitBucket } from "../salesStats";

// Profit wears the brand red, as the site's charts do; cost a blue validated
// against it (colour-blind separation and contrast) on both the light and the
// dark card. The site's own grey and teal read as "no colour" beside the red.
const chartConfig = {
  cost: { label: "Cost", theme: { light: "#2a78d6", dark: "#3987e5" } },
  profit: { label: "Profit", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const compactEuro = (v: number): string => {
  const a = Math.abs(v);
  const s = a >= 1000 ? `€${Math.round(a / 100) / 10}k` : `€${Math.round(a)}`;
  return v < 0 ? `−${s}` : s;
};

function ProfitTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: ProfitBucket }[];
}) {
  const b = payload?.[0]?.payload;
  if (!active || !b) return null;
  const row = (label: string, value: string) => (
    <div className="flex items-center justify-between gap-6">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-mono font-medium tabular-nums text-foreground">{value}</span>
    </div>
  );
  return (
    <div className="grid min-w-[11rem] gap-1 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium">{b.label}</div>
      {row("Received", formatMoney(b.received))}
      {row("Cost", formatMoney(b.cost))}
      {row(b.profit < 0 ? "Loss" : "Profit", formatMoney(b.profit))}
      {row("Margin", formatPercent(b.received > 0 ? b.profit / b.received : null))}
      {row("Sales", String(b.count))}
    </div>
  );
}

/**
 * Each bar is a period's payouts, split into what the watches cost and what was
 * left: the red share of the bar is the margin. One axis, one unit. A loss-
 * making period draws its profit below zero instead (stackOffset "sign").
 */
export function ProfitOverTimeChart({ data }: { data: ProfitBucket[] }) {
  if (!data.some((b) => b.count > 0)) {
    return <div className="py-10 text-center text-sm text-muted-foreground">No data.</div>;
  }
  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
      <BarChart data={data} stackOffset="sign" margin={{ left: 4, right: 4, top: 8 }}>
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
        <ChartTooltip cursor={{ fillOpacity: 0.06 }} content={<ProfitTooltip />} />
        <ChartLegend content={<ChartLegendContent />} />
        {/* The card-coloured stroke is the 2px gap between the stacked segments. */}
        <Bar
          dataKey="cost"
          stackId="pnl"
          fill="var(--color-cost)"
          stroke="hsl(var(--card))"
          strokeWidth={1}
          maxBarSize={24}
        />
        <Bar
          dataKey="profit"
          stackId="pnl"
          fill="var(--color-profit)"
          stroke="hsl(var(--card))"
          strokeWidth={1}
          radius={[4, 4, 0, 0]}
          maxBarSize={24}
        />
      </BarChart>
    </ChartContainer>
  );
}
