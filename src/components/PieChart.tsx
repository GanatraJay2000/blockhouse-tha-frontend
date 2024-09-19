import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { cn } from "@/lib/utils";
import { TPieChart } from "@/lib/types/chartDataTypes";

function CustomPieChart({
  chartData,
  className = "",
}: {
  chartData: TPieChart;
  className?: string;
}) {
  return (
    chartData && (
      <ChartContainer
        config={{}}
        className={cn("h-full min-h-full w-full", className)}
      >
        <PieChart>
          <ChartTooltip
            content={<ChartTooltipContent nameKey="labels" hideLabel />}
          />
          <Pie data={chartData} dataKey="data">
            <LabelList
              dataKey="labels"
              className="fill-background"
              stroke="none"
              fontSize={12}
            />
          </Pie>
        </PieChart>
      </ChartContainer>
    )
  );
}

export default CustomPieChart;
