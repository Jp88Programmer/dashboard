"use client"
import React, { useEffect, useState } from 'react';

import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { fetchChartData } from '../../../action/chartAction';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const MyRadarChart = ({ yearNo = 5 }) => {
    const [chartData, setChartData] = useState(null);

    const url = "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.PCAP.CD?format=json";

    useEffect(() => {
        const getData = async () => {
            const data = await fetchChartData(url, yearNo);
            setChartData(data);
        };
        getData();
    }, [url, yearNo]);

    return (
        <div>
            {chartData && <Radar data={chartData} />}
        </div>
    );
};

export default MyRadarChart;
