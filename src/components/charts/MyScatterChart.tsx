"use client"
import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { fetchChartData } from '../../../action/chartAction';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

const MyScatterChart = ({ yearNo = 5}) => {
  const [chartData, setChartData] = useState(null);
    const url = "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json";
  useEffect(() => {
    const getData = async () => {
      // Replace with your data fetching logic
      const data = await fetchChartData(url,yearNo);
      setChartData(data);
    };
    getData();
  }, []);

  return (
    <div>
      {chartData && <Scatter data={chartData} />}
    </div>
  );
};

// const fetchScatterChartData = async () => {
//   // Replace with your data fetching logic
//   const data = {
//     datasets: [
//       {
//         label: 'Scatter Dataset',
//         data: Array.from({ length: 100 }, () => ({
//           x: Math.random() * 100,
//           y: Math.random() * 100,
//         })),
//         backgroundColor: 'rgba(75, 192, 192, 0.6)',
//       },
//     ],
//   };
//   return data;
// };

export default MyScatterChart;
