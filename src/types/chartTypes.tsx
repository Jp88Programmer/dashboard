export interface GdpData {
  countryName: string;
  countryCode: string;
  year2020: number;
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
