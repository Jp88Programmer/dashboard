"use client";
import React, { useEffect, useState } from "react";

import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchChartData } from "../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const MyRadarChart = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title, style });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  return (
    <div
      className="chart-size"
      style={style?.height ? { height: style.height } : undefined}
    >
      {chartData ? (
        <Radar data={chartData} />
      ) : (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="relative w-full aspect-square md:max-w-[40rem] max-w-[30rem]">
            {/* Center circle */}
            <Skeleton className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full" />

            {/* Radar lines */}
            {[...Array(6)].map((_, index) => (
              <Skeleton
                key={index}
                className="absolute top-1/2 left-1/2 h-1 origin-left"
                style={{
                  width: "45%",
                  transform: `rotate(${index * 60}deg) translateY(-50%)`,
                }}
              />
            ))}

            {/* Circular rings */}
            {[...Array(3)].map((_, index) => (
              <Skeleton
                key={index}
                className="absolute top-1/2 left-1/2 rounded-full"
                style={{
                  width: `${(index + 1) * 30}%`,
                  height: `${(index + 1) * 30}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyRadarChart;
