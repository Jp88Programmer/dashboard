"use client";
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import { fetchChartData } from "../../action/chartAction";
import { IChartData, IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const MyBubbleChart = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState<IChartData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title, style });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  const options = {
    // indexAxis: "y",
    responsive: true,
    layout: {
      padding: {
        top: 10,
        right: 30,
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div className="w-full">
      {chartData ? (
        <Bubble data={chartData} options={options} />
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

export default MyBubbleChart;
