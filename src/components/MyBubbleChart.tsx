"use client";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, BarElement, Title, Tooltip, Legend, Filler } from "chart.js";
import { Bar, Bubble } from "react-chartjs-2";
import { fetchChartData } from "./barChart";

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

const MyBubbleChart = ({ yearNo = 5 }) => {
    const [chartData, setChartData] = useState(null);
    const url = "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json"

    useEffect(() => {
        const getData = async () => {
            const data = await fetchChartData(url, yearNo);
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
                text: "Chart.js Bar Chart",
            },
        },
    };

    return (
        <div style={{ width: "1000px" }}>
            {chartData ? <Bubble data={chartData} options={options} /> : <p>Loading...</p>}
        </div>
    );
};

export default MyBubbleChart;