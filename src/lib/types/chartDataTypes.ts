export type TCandlestickChart = {
  x: string;
  open: number;
  high: number;
  low: number;
  close: number;
}[];

export type TLineChart = {
  labels: string;
  data: number;
}[];

export type TPieChart = {
  labels: string;
  data: number;
  fill: string;
}[];

export type TBarChart = {
  labels: string;
  data: number;
}[];

export type TChartData = {
  candlestick_chart: TCandlestickChart;
  line_chart: TLineChart;
  pie_chart: TPieChart;
  bar_chart: TBarChart;
};

export type TBaseChart = {
  labels: string[];
  data: number[];
};

export type TBaseChartApiData = {
  candlestick_chart: TCandlestickChart;
  line_chart: TBaseChart;
  bar_chart: TBaseChart;
  pie_chart: TBaseChart;
};
