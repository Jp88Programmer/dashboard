"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyLineChart = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title, style });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  const options = {
    ...(style?.ind && { indexAxis: style?.ind }),
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
        <Line data={chartData} options={options} />
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

export default MyLineChart;
