"use client"
import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { fetchChartData } from '../../../action/chartAction';
import { IChartParams } from '../../types/chartTypes';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const MyScatterChart = ({ url, yearNo = 5, title }: IChartParams) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      // Replace with your data fetching logic
      const data = await fetchChartData({ url, yearNo, title });
      setChartData(data);
    };
    getData();
  }, [url, yearNo]);

  return (
    <div className="w-full">
      {chartData && <Scatter data={chartData} />}
    </div>
  );
};

export default MyScatterChart;
