"use client";
import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../../action/chartAction";
import { IChartData, IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const MyScatterChart = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState<IChartData | null>(null);

  useEffect(() => {
    const getData = async () => {
      // Replace with your data fetching logic
      const data = await fetchChartData({ url, yearNo, title, style });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  return (
    <div className="w-full">
      {chartData ? (
        <Scatter data={chartData} />
      ) : (
        <div className="space-y-3 w-full h-full p-4">
          <div className="flex items-center justify-center">
            <Skeleton className="h-[40px] w-[200px] " />
          </div>
          <Skeleton className="md:h-[25rem] h-[15rem] w-full " />
        </div>
      )}
    </div>
  );
};

export default MyScatterChart;
