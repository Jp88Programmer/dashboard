"use client";
import React, { useEffect, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { fetchChartData } from "../../action/chartAction";
import { IChartParams } from "../../types/chartTypes";
import { Skeleton } from "../ui/skeleton";

ChartJS.register(
  CategoryScale,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyPolarArea = ({ url, yearNo = 5, title, style }: IChartParams) => {
  const [chartData, setChartData] = useState<ChartData<"polarArea"> | null>(
    null
  );

  useEffect(() => {
    const getData = async () => {
      const data = await fetchChartData({ url, yearNo, title, style });
      if (data) {
        const polarData = {
          labels: data.labels,
          datasets: [
            {
              label: "GDP per capita (current US$)",
              data: data.datasets[0].data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        };
        setChartData(polarData);
      }
    };
    getData();
  }, [url, yearNo]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
      },
    },
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div
      className="chart-size"
      style={style?.height ? { height: style.height } : undefined}
    >
      {chartData ? (
        <PolarArea data={chartData} options={options} />
      ) : (
        <div className="space-y-4 w-full h-full flex flex-col items-center justify-center">
          <Skeleton className="h-6 w-[250px]" /> {/* Title skeleton */}
          <div className="relative md:w-[35rem] w-[20rem] aspect-square">
            <Skeleton className="absolute inset-0 rounded-full" />{" "}
            {/* Circle skeleton */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="h-[70%] w-[70%] rounded-full" />{" "}
              {/* Inner circle skeleton */}
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            {" "}
            {/* Legend skeleton */}
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} className="h-5 w-16" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPolarArea;
