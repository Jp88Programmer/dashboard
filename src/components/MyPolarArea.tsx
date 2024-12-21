"use client"
import React, { useEffect, useState } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, CategoryScale, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { fetchChartData } from './barChart';

ChartJS.register(CategoryScale, ArcElement, RadialLinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const MyPolarArea = ({ yearNo = 5 }) => {
    const [chartData, setChartData] = useState(null);
    const url = "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json";

    useEffect(() => {
        const getData = async () => {
            const data = await fetchChartData(url, yearNo);
            const polarData = {
                labels: data.labels,
                datasets: [
                    {
                        label: 'GDP per capita (current US$)',
                        data: data.datasets[0].data,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                        ],
                        borderWidth: 1,
                    },
                ],
            };
            setChartData(polarData);
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
                text: "GDP per capita (current US$)",
            },
        },
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 100
            }
        }
    };

    return (
        <div style={{ width: "1000px" }}>
            {chartData ? <PolarArea data={chartData} options={options} /> : <p>Loading...</p>}
        </div>
    );
};

export default MyPolarArea;