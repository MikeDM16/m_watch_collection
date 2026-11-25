"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import type { ValuationPoint } from "../../ledger/valuation";
import { compactEuro, formatMoney } from "../salesStats";

// Cost is money out and wears the cost blue; the market value wears the brand
// red: the pair "Money over time" already uses, validated for colour-blind
// separation and contrast on both the light and the dark card.
const chartConfig = {
  value: { label: "Market value", color: "hsl(var(--chart-1))" },
  cost: { label: "At cost", theme: { light: "#2a78d6", dark: "#3987e5" } },
} satisfies ChartConfig;

function MarketTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: ValuationPoint }[];
}) {
  const p = payload?.[0]?.payload;
  if (!active || !p) return null;
  const gain = p.value - p.cost;
  const row = (label: string, value: string, swatch?: string) => (
    <div className="flex items-center justify-between gap-6">
      <span className="flex items-center gap-1.5 text-muted-foreground">
        {swatch && <span className="h-0.5 w-3 rounded-full" style={{ background: swatch }} />}
        {label}
      </span>
      <span className="font-mono font-medium tabular-nums text-foreground">{value}</span>
    </div>
  );
  return (
    <div className="grid min-w-[12rem] gap-1 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
      <div className="font-medium">End of {p.label}</div>
      {row("Market value", formatMoney(p.value), "var(--color-value)")}
      {row("At cost", formatMoney(p.cost), "var(--color-cost)")}
      {row(gain < 0 ? "Below cost by" : "Above cost by", formatMoney(Math.abs(gain)))}
    </div>
  );
}

/** The value at a line's end, with its end-dot; nudged away from the other line's. */
function endLabel(last: number, color: string, dy: number) {
  function EndLabel(props: { x?: number; y?: number; index?: number; value?: number }) {
    const { x, y, index, value } = props;
    if (index !== last || x === undefined || y === undefined || value === undefined) return <g />;
    return (
      <g>
        <circle cx={x} cy={y} r={4} fill={color} stroke="hsl(var(--card))" strokeWidth={2} />
        <text
          x={x + 8}
          y={y + dy}
          dominantBaseline="middle"
          className="fill-foreground font-mono text-xs tabular-nums"
        >
          {compactEuro(value)}
        </text>
      </g>
    );
  }
  return EndLabel;
}

/**
 * The kept watches, month by month: what they were worth on Chrono24 and what
 * they cost. Both step up when a watch is bought; the gap between them is the
 * unrealized gain.
 */
export function MarketValueChart({ data }: { data: ValuationPoint[] }) {
  if (data.length < 2) {
    return <div className="py-10 text-center text-sm text-muted-foreground">No data.</div>;
  }
  const last = data.length - 1;
  const valueOnTop = data[last].value >= data[last].cost;
  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
      <LineChart data={data} margin={{ left: 4, right: 56, top: 12, bottom: 4 }}>
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
        <ChartTooltip cursor={{ strokeOpacity: 0.4 }} content={<MarketTooltip />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="cost"
          type="stepAfter"
          stroke="var(--color-cost)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          dot={false}
          activeDot={{ r: 4, stroke: "hsl(var(--card))", strokeWidth: 2 }}
          label={endLabel(last, "var(--color-cost)", valueOnTop ? 12 : -10)}
          isAnimationActive={false}
        />
        <Line
          dataKey="value"
          type="monotone"
          stroke="var(--color-value)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          dot={false}
          activeDot={{ r: 4, stroke: "hsl(var(--card))", strokeWidth: 2 }}
          label={endLabel(last, "var(--color-value)", valueOnTop ? -10 : 12)}
          isAnimationActive={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
