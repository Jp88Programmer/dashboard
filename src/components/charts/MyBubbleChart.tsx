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
import { Bar, Bubble } from "react-chartjs-2";
import { fetchChartData } from "../../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";

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

const MyBubbleChart = ({ url, yearNo = 5, title }: IChartParams) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title });
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MyBubbleChart;
