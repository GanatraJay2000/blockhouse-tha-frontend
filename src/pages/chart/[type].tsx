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
