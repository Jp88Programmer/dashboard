"use client";
import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchChartData } from "../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyPieChart = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title, style });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  const options = {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  return (
    <div
      className="chart-size"
      style={style?.height ? { height: style.height } : undefined}
    >
      {chartData ? (
        <Pie data={chartData} options={options} />
      ) : (
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-center">
            <Skeleton className="h-[2rem] w-[200px]" />
          </div>
          <div className="flex items-center justify-center">
            <Skeleton className="md:h-[30rem] md:w-[30rem] h-[20rem] w-[20rem] rounded-full" />{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPieChart;
