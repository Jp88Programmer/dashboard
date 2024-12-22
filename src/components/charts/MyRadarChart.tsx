"use client"
import React, { useEffect, useState } from 'react';

import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { fetchChartData } from '../../../action/chartAction';
import { IChartParams } from '../../types/chartTypes';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const MyRadarChart = ({ url, yearNo = 5, title }: IChartParams) => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const data = await fetchChartData({ url, yearNo, title });
            setChartData(data);
        };
        getData();
    }, [url, yearNo]);

    return (
        <div className="w-full">
            {chartData && <Radar data={chartData} />}
        </div>
    );
};

export default MyRadarChart;
