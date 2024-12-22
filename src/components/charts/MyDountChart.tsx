"use client";
import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { fetchChartData } from "../../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";

ChartJS.register(ArcElement, Tooltip, Legend);

const MyDountChart = ({ url, yearNo = 5, title }: IChartParams) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  const options = {
    responsive: true,
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
    <div className="w-full">
      {chartData && <Doughnut data={chartData} options={options} />}
    </div>
  );
};

export default MyDountChart;
