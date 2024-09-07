import { geistMono } from "@/lib/fonts";
import Link from "next/link";

export default function Home() {
  const nav = [
    { href: "/chart/candlestick-chart", label: "Candlestick Chart" },
    { href: "/chart/line-chart", label: "Line Chart" },
    { href: "/chart/bar-chart", label: "Bar Chart" },
    { href: "/chart/pie-chart", label: "Pie Chart" },
  ];

  return (
    <div
      className={`${geistMono.className} py-10 bg-slate-100 w-full min-h-screen flex flex-col md:flex-row items-center justify-center gap-10`}
    >
      {nav.map((item, index) => (
        <Link key={index} href={item.href} className="w-64">
          <div className="h-40 w-full bg-white border shadow-sm rounded-xl flex justify-center items-center">
            {item.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
