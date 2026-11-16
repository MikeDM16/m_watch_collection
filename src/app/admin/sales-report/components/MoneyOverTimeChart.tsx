"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
} from "@/components/ui/chart";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import type { MoneyBucket } from "../collectionStats";
import { compactEuro, formatMoney } from "../salesStats";

// Money out wears the cost blue, money in the brand red: the pair the profit
// chart above already uses, validated for colour-blind separation and contrast
// on both the light and the dark card.
const chartConfig = {
  spent: { label: "Spent", theme: { light: "#2a78d6", dark: "#3987e5" } },
  received: { label: "Received", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

function MoneyTooltip({
  active,
  payload,
}: {
  active?: boolean;
  payload?: { payload: MoneyBucket }[];
}) {
  const b = payload?.[0]?.payload;
  if (!active || !b) return null;
  const net = b.received - b.spent;
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
      <div className="font-medium">To the end of {b.label}</div>
      {row("Spent", formatMoney(b.spent), "var(--color-spent)")}
      {b.keptSpent > 0 && row("of which on watches kept", formatMoney(b.keptSpent))}
      {row("Received", formatMoney(b.received), "var(--color-received)")}
      {row(net < 0 ? "Still in the hobby" : "Ahead by", formatMoney(Math.abs(net)))}
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
 * Everything spent and everything received, to date. Where the blue runs above
 * the red, that much is still in the hobby; where the red runs above, the
 * watches have paid for themselves and then some.
 */
export function MoneyOverTimeChart({ data }: { data: MoneyBucket[] }) {
  if (!data.some((b) => b.spent || b.received)) {
    return <div className="py-10 text-center text-sm text-muted-foreground">No data.</div>;
  }
  const last = data.length - 1;
  const spentOnTop = data[last].spent >= data[last].received;
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
        <ChartTooltip cursor={{ strokeOpacity: 0.4 }} content={<MoneyTooltip />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Line
          dataKey="spent"
          type="monotone"
          stroke="var(--color-spent)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          dot={false}
          activeDot={{ r: 4, stroke: "hsl(var(--card))", strokeWidth: 2 }}
          label={endLabel(last, "var(--color-spent)", spentOnTop ? -10 : 12)}
          isAnimationActive={false}
        />
        <Line
          dataKey="received"
          type="monotone"
          stroke="var(--color-received)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          dot={false}
          activeDot={{ r: 4, stroke: "hsl(var(--card))", strokeWidth: 2 }}
          label={endLabel(last, "var(--color-received)", spentOnTop ? 12 : -10)}
          isAnimationActive={false}
        />
      </LineChart>
    </ChartContainer>
  );
}
