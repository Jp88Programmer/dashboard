"use client";
import React, { useState } from 'react'
import { Button } from './ui/button'
import MyBarChart from './charts/MyBarChart'
import { cn } from '@/lib/utils';


const Gdp = () => {

    const urlForGdp =
        "https://api.worldbank.org/v2/country/IND/indicator/NY.GDP.MKTP.CD?format=json";

    const [yearNo, setYearNo] = useState(5);
    return (
        <div className='flex flex-col gap-4 p-4'>
            <div className='flex flex-col gap-2 md:text-base text-sm'>
                Gross Domestic Product (GDP) is a monetary measure that represents the market value of all final goods and services produced within a specific time period by a country. It serves as a comprehensive indicator of economic activity and performance.
                The definition of GDP is maintained by various national and international economic organizations. According to the Organisation for Economic Co-operation and Development (OECD), GDP is an aggregate measure of production. It is calculated as the sum of the gross values added by all resident and institutional units engaged in the production of goods and services, including taxes (minus subsidies) on products that are not included in the value of their outputs.
                GDP is widely used as a metric for:
                <ul className='flex flex-col gap-2 list-disc pl-8'>
                    <li className=''>
                        International comparisons: It helps compare the economic performance of different countries.
                    </li>
                    <li className=''>
                        Economic progress: It provides a broad measure of a {"nation's"} economic development over time.
                    </li>
                </ul>
            </div>
            <div className='flex gap-2'>
                <Button className={cn("w-20 p-2 text-center bg-button-primary")} onClick={() => {
                    if (yearNo !== 5)
                        setYearNo(5)
                }
                }>5</Button>
                <Button className={cn("w-20 p-2 text-center bg-button-primary")} onClick={() => {
                    if (yearNo !== 10)
                        setYearNo(10)
                }}>10</Button>
                <Button className={cn("w-20 p-2 text-center bg-button-primary")} onClick={() => {
                    if (yearNo !== 15)
                        setYearNo(15)
                }}>15</Button>
                <Button className={cn("w-20 p-2 text-center bg-button-primary")} onClick={() => {
                    if (yearNo !== 20)
                        setYearNo(20)
                }}>20</Button>
                <Button className={cn("w-20 p-2 text-center bg-button-primary")} onClick={() => {
                    if (yearNo !== 100)
                        setYearNo(100)
                }}>Max</Button>
            </div>
            <div>
                <MyBarChart url={urlForGdp} yearNo={yearNo} title="GDP (current US$)" />
            </div>
        </div>
    )
}

export default Gdp
