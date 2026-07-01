"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, CartesianGrid, ComposedChart, Line, XAxis, YAxis } from "recharts";

import { formatPrice, TimeBucket } from "../salesStats";

const chartConfig = {
  revenue: { label: "Revenue", color: "hsl(var(--chart-1))" },
  count: { label: "Sales", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const compactEuro = (v: number): string =>
  v >= 1000 ? `€${Math.round(v / 100) / 10}k` : `€${Math.round(v)}`;

// Revenue as bars (left axis), sales count as a line (right axis).
export function SalesOverTimeChart({ data }: { data: TimeBucket[] }) {
  if (data.length === 0) {
    return <div className="py-10 text-center text-sm text-muted-foreground">No data.</div>;
  }
  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-[300px] w-full">
      <ComposedChart data={data} margin={{ left: 4, right: 4, top: 8 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={24}
          interval="preserveStartEnd"
        />
        <YAxis
          yAxisId="left"
          tickLine={false}
          axisLine={false}
          width={48}
          tickFormatter={compactEuro}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickLine={false}
          axisLine={false}
          width={28}
          allowDecimals={false}
        />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name) => (
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="text-muted-foreground">
                    {name === "revenue" ? "Revenue" : "Sales"}
                  </span>
                  <span className="font-mono font-medium tabular-nums text-foreground">
                    {name === "revenue" ? formatPrice(Number(value)) : value}
                  </span>
                </div>
              )}
            />
          }
        />
        <Bar
          yAxisId="left"
          dataKey="revenue"
          name="revenue"
          fill="var(--color-revenue)"
          radius={[4, 4, 0, 0]}
        />
        <Line
          yAxisId="right"
          dataKey="count"
          name="count"
          stroke="var(--color-count)"
          strokeWidth={2}
          dot={false}
        />
      </ComposedChart>
    </ChartContainer>
  );
}
