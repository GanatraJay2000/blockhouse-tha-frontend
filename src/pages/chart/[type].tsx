import BarChart from "@/components/BarChart";
// import CandleStickChart from "@/components/CandleStickChart.jsx";
import ECandleChart from "@/components/ECandleChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import { Button } from "@/components/ui/button";
import { geistMono } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

const _candlestickChartData = [
  { x: "2017-10-24", open: 20, close: 34, low: 10, high: 38 },
  { x: "2017-10-25", open: 40, close: 35, low: 30, high: 50 },
  { x: "2017-10-26", open: 31, close: 38, low: 33, high: 44 },
  { x: "2017-10-27", open: 38, close: 15, low: 5, high: 42 },
];

export default function Chart() {
  const charts: { [key: string]: JSX.Element } = {
    "bar-chart": <BarChart />,
    "line-chart": <LineChart />,
    "pie-chart": <PieChart />,
    "candlestick-chart": <ECandleChart />,
  };

  const router = useRouter();
  const chartType = router.query.type as string;

  return (
    <>
      <Button asChild className="absolute top-4 left-4" size="sm">
        <Link href="/">Back</Link>
      </Button>
      <div
        className={cn(
          "min-h-screen bg-gray-100 flex w-full flex-col justify-center items-center",
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
