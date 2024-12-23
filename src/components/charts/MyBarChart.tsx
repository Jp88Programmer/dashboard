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
import { Bar } from "react-chartjs-2";
import { fetchChartData } from "../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";
import { ChartData } from "chart.js";

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

const MyBarChart = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState<ChartData<"bar"> | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data: any = await fetchChartData({ url, yearNo, title });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  const options = {
    ...(style?.ind && { indexAxis: style.ind as "x" | "y" }),
    responsive: true,
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
        <Bar data={chartData} options={options} />
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

export default MyBarChart;
