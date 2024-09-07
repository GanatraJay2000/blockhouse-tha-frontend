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
