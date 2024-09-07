import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { TBarChart } from "@/lib/types/chartDataTypes";

function CustomBarChart({ className = "" }: { className?: string }) {
  const [chartData, setChartData] = useState<TBarChart | null>(null);

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
          "http://127.0.0.1:8000/api/bar-chart-data/"
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
