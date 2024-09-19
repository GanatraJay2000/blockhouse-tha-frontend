import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { cn } from "@/lib/utils";
import { TLineChart } from "@/lib/types/chartDataTypes";

function CustomLineChart({
  chartData,
  className = "",
}: {
  chartData: TLineChart;
  className?: string;
}) {
  return (
    chartData && (
      <ChartContainer
        config={{}}
        className={cn("h-full min-h-full w-full", className)}
      >
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
            top: 12,
            bottom: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="labels"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="data"
            type="linear"
            stroke="#2563eb"
            strokeWidth={2}
            dot={true}
          />
        </LineChart>
      </ChartContainer>
    )
  );
}

export default CustomLineChart;
