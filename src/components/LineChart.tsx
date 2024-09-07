import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TLineChart } from "@/lib/types/chartDataTypes";

function CustomLineChart({ className = "" }: { className?: string }) {
  const [chartData, setChartData] = useState<TLineChart | null>(null);

  useEffect(() => {
    const transformData = (rawData: { labels: string[]; data: number[] }) => {
      const lineChartData = rawData.labels.map((label, index) => ({
        labels: label,
        data: rawData.data[index],
      }));
      setChartData(lineChartData);
    };

    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/line-chart-data/"
        );
        const data = await response.json();
        transformData(data);
        // process the data as needed
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
