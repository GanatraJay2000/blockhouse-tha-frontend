import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TPieChart } from "@/lib/types/chartDataTypes";

function CustomPieChart({ className = "" }: { className?: string }) {
  const [chartData, setChartData] = useState<TPieChart | null>(null);

  useEffect(() => {
    const transformData = (rawData: { labels: string[]; data: number[] }) => {
      const lineChartData = rawData.labels.map((label, index) => ({
        labels: label,
        data: rawData.data[index],
        fill: `hsl(var(--chart-${index + 1}))`,
      }));
      setChartData(lineChartData);
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/pie-chart-data/"
        );
        const data = await response.json();
        transformData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
