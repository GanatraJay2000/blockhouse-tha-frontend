import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
import { cn } from "@/lib/utils";
import { TCandlestickChart } from "@/lib/types/chartDataTypes";

function ECandleChart({ className = "" }: { className?: string }) {
  const [chartData, setChartData] = useState<TCandlestickChart | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/candlestick-data/"
        );
        const data = await response.json();
        setChartData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
