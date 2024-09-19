import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { cn } from "@/lib/utils";
import { TBarChart } from "@/lib/types/chartDataTypes";

function CustomBarChart({
  chartData,
  className = "",
}: {
  chartData: TBarChart;
  className?: string;
}) {
  return (
    chartData && (
      <ChartContainer
        config={{}}
        className={cn("h-full min-h-full w-full", className)}
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="labels"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="data" fill="#2563eb" radius={5} />
        </BarChart>
      </ChartContainer>
    )
  );
}

export default CustomBarChart;
