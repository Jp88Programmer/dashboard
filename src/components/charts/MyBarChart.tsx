"use client";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar } from "react-chartjs-2";
import { fetchChartData } from "../../../action/chartAction";

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler);

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

const MyBarChart = ({ url, yearNo = 5, title }: { url: string, yearNo: number, title: string }) => {
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
            {chartData ? <Bar data={chartData} options={options} /> : <p>Loading...</p>}
        </div>
    );
};

export default MyBarChart;