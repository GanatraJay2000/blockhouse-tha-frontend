import BarChart from "@/components/BarChart";
// import CandleStickChart from "@/components/CandleStickChart.jsx";
import ECandleChart from "@/components/ECandleChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import { Button } from "@/components/ui/button";
import { geistMono } from "@/lib/fonts";
import {
  TBaseChart,
  TBaseChartApiData,
  TChartData,
  TPieChart,
} from "@/lib/types/chartDataTypes";
import { cn } from "@/lib/utils";
import { GetServerSideProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Chart({
  chartData,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  const router = useRouter();
  const chartType = router.query.type as string;

  const charts: { [key: string]: JSX.Element } = {
    "bar-chart": <BarChart chartData={chartData["bar_chart"]} />,
    "line-chart": <LineChart chartData={chartData["line_chart"]} />,
    "pie-chart": <PieChart chartData={chartData["pie_chart"]} />,
    "candlestick-chart": (
      <ECandleChart chartData={chartData["candlestick_chart"]} />
    ),
  };

  return (
    <>
      <Button asChild className="absolute top-4 left-4" size="sm">
        <Link href="/">Back</Link>
      </Button>
      <div
        className={cn(
          "min-h-screen bg-gray-100 dark:bg-slate-900 flex w-full flex-col justify-center items-center",
          geistMono.className
        )}
      >
        <div className="w-full md:w-auto p-5">
          <p className="text-center font-medium text-3xl mb-5 flex flex-wrap justify-center flex-col md:flex-row">
            <span className="">Chart:</span>{" "}
            <span className="text-sm md:text-3xl">{router.query.type}</span>
          </p>
          <div className="bg-white shadow-sm border rounded-lg p-10 h-[400px] ">
            {charts[chartType]}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = (async () => {
  const transformData = (data: TBaseChartApiData) => {
    const transformLineOrBarData = (rawData: TBaseChart) => {
      return rawData.labels.map((label, index) => ({
        labels: label,
        data: rawData.data[index],
      }));
    };

    const transformPieData = (rawData: TBaseChart): TPieChart => {
      return rawData.labels.map((label, index) => ({
        labels: label,
        data: rawData.data[index],
        fill: `hsl(var(--chart-${index + 1}))`,
      }));
    };

    return {
      candlestick_chart: data.candlestick_chart,
      line_chart: transformLineOrBarData(data.line_chart),
      bar_chart: transformLineOrBarData(data.bar_chart),
      pie_chart: transformPieData(data.pie_chart),
    };
  };

  try {
    const response = await fetch("http://127.0.0.1:8000/api/all-data/");
    const data = await response.json();
    const chartData = transformData(data);

    // Pass data to the page via props
    return { props: { chartData } };
  } catch (_error) {
    return {
      redirect: {
        destination: "/?error=true",
        permanent: false,
      },
    };
  }
}) satisfies GetServerSideProps<{
  chartData?: TChartData;
}>;
