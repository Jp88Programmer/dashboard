import MyPolarArea from '@/components/MyPolarArea';
import MyBarChart from '@/components/MyBarChart';
import MyBubbleChart from '@/components/MyBubbleChart';
import MyLineChart from '@/components/MyLineChart';
import React from 'react';
import MyRadarChart from '@/components/MyRadarChart';
import MyScatterChart from '@/components/MyScatterChart';
import MyPieChart from '@/components/MyPieChart';
import MyDountChart from '@/components/MyDountChart';

const GDPPage: React.FC = () => {
    return (
        <div>
            <h1>GDP Dashboard</h1>
            <p>Welcome to the GDP Dashboard. Here you can find various statistics and information about GDP.</p>
            <MyBarChart />
            <MyBubbleChart />
            <MyLineChart />
            <MyPolarArea />
            <MyRadarChart />
            <MyScatterChart />
            <MyPieChart />
            <MyDountChart />
        </div>
    );
};

export default GDPPage;