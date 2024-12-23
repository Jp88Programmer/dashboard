/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChartData, ChartType, DefaultDataPoint } from "chart.js";

export interface GdpData {
  countryName: string;
  countryCode: string;
  year2020: number;
}

export interface ChartDataset<
  TType extends ChartType = ChartType,
  TLabel = unknown
> {
  label: string;
  data: number[];
  backgroundColor: string[];
  borderColor: string[];
  fill?: boolean;
  pointRadius?: number;
  tension?: number;
  spanGaps?: boolean;
  pointStyle: string[];
}

export interface IChartData extends ChartData<ChartType> {
  labels: string[];
  datasets:
    | ChartDataset[]
    | ChartDataset<"bar">[]
    | ChartDataset<"line">[]
    | ChartDataset<"polarArea">[]
    | ChartDataset<"radar">[]
    | ChartDataset<"scatter">[];
}

export interface IChartParams {
  url: string;
  yearNo: number;
  title?: string;
  style?: {
    width?: string;
    height?: string;
    fill?: boolean;
    tension?: number;
    pointerRadius?: number;
    spanGaps?: boolean;
    ind?: string;
  };
}
