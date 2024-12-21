"use client"
import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { fetchChartData } from './barChart';

ChartJS.register(ArcElement, Tooltip, Legend);

const MyDountChart = ({ yearNo = 5 }) => {
    const [chartData, setChartData] = useState(null);
    const url = "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json";

    useEffect(() => {
        const getData = async () => {
            const data = await fetchChartData(url, yearNo);
            setChartData(data);
        };
        getData();
    }, [url, yearNo]);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'GDP per capita (current US$)',
            },
        },
    };

    return (
        <div>
            {chartData && <Doughnut data={chartData} options={options} />}
        </div>
    );
};

export default MyDountChart;
