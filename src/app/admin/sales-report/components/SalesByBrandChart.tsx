"use client";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, Cell, XAxis, YAxis } from "recharts";

import { BrandDatum, formatPrice } from "../salesStats";

const BAR_COLORS = [
  "hsl(var(--chart-1))",
  "hsl(var(--chart-2))",
  "hsl(var(--chart-3))",
  "hsl(var(--chart-4))",
  "hsl(var(--chart-5))",
];

const chartConfig = { revenue: { label: "Revenue" } } satisfies ChartConfig;

const compactEuro = (v: number): string =>
  v >= 1000 ? `€${Math.round(v / 100) / 10}k` : `€${Math.round(v)}`;

// Horizontal bars, top-N brands by revenue.
export function SalesByBrandChart({ data }: { data: BrandDatum[] }) {
  if (data.length === 0) {
    return <div className="py-10 text-center text-sm text-muted-foreground">No data.</div>;
  }
  return (
    <ChartContainer config={chartConfig} className="aspect-auto h-[360px] w-full">
      <BarChart data={data} layout="vertical" margin={{ left: 8, right: 16 }}>
        <XAxis type="number" tickLine={false} axisLine={false} tickFormatter={compactEuro} />
        <YAxis type="category" dataKey="label" tickLine={false} axisLine={false} width={110} />
        <ChartTooltip
          content={
            <ChartTooltipContent
              formatter={(value, name, item) => (
                <span className="font-mono font-medium tabular-nums text-foreground">
                  {formatPrice(Number(value))}
                  <span className="ml-2 font-sans font-normal text-muted-foreground">
                    · {item?.payload?.count} sold
                  </span>
                </span>
              )}
            />
          }
        />
        <Bar dataKey="revenue" name="revenue" radius={4}>
          {data.map((d, i) => (
            <Cell key={d.label} fill={BAR_COLORS[i % BAR_COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  );
}
