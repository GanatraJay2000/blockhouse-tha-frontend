import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { cn } from "@/lib/utils";
import { TCandlestickChart } from "@/lib/types/chartDataTypes";

function ECandleChart({
  chartData,
  className = "",
}: {
  chartData: TCandlestickChart;
  className?: string;
}) {
  const chartRef = useRef<HTMLDivElement>(null);

  function splitData(rawData: TCandlestickChart) {
    const categoryData = [];
    const values = [];

    for (let i = 0; i < rawData.length; i++) {
      categoryData.push(rawData[i].x);
      values.push([
        rawData[i].open,
        rawData[i].close,
        rawData[i].low,
        rawData[i].high,
      ]);
    }
    return {
      categoryData: categoryData,
      values: values,
    };
  }

  useEffect(() => {
    if (!chartData) return;
    if (!chartRef.current) return;
    const myChart = echarts.init(chartRef.current!);
    const { categoryData, values } = splitData(chartData);

    const option = {
      xAxis: {
        data: categoryData,
      },
      yAxis: {},
      tooltip: {},
      series: [
        {
          type: "candlestick",
          data: values,
          itemStyle: {
            color: "#2563eb",
            color0: "#2563eb",
            borderColor: "#2563eb",
            borderColor0: "#2563eb",
          },
        },
      ],
    };

    myChart.setOption(option);
  }, [chartData]);

  return (
    <div
      className={cn("h-full min-h-full w-full", className)}
      ref={chartRef}
    ></div>
  );
}

export default ECandleChart;
