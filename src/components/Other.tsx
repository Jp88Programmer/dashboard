"use client";
import React, { useState } from "react";
import MyBarChart from "./charts/MyBarChart";
import MyLineChart from "./charts/MyLineChart";
import ButtonGrop from "./ButtonGrop";
import {
  urlForestKm,
  urlForestPer,
  urlPopulation,
  urlPopulationGrowth,
  urlUnEmployment,
  urlElectricity,
} from "../constants/other";

import MyPolarArea from "./charts/MyPolarArea";
import MyBubbleChart from "./charts/MyBubbleChart";

const Other = () => {
  // State variable to hold yearNo for each chart
  const [yearNos, setYearNos] = useState([5, 5, 5, 5, 5]);

  const handleYearChange = (index: number, yearNo: number) => {
    const newYearNos = [...yearNos];
    newYearNos[index] = yearNo;
    setYearNos(newYearNos);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Forest Area</div>
          <div>
            Forest cover is the total geographical area declared as forest by
            the government. As of 2019, the total forest cover in India is
            712,249 Sq km (71.22 million hectares), which is 21.67 percent of
            the total geographical area. The total forest cover as per the
            IFSR-2021-22 is 80.90 million hectares that is 24.62% .Whereas, the
            total forest and tree cover in India is 807,276 Sq km (80.73 million
            hectors), which is 24.56 percent of the total geographical area of
            the country. Tree density is the quantification of how closely the
            trees are growing in a hectare area. It is not the exact number of
            trees in the forest but, serves as an estimate to the foresters.
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between w-full">
          <div className="flex flex-col gap-4 lg:w-[45%] w-full lg:px-4 px-2 py-2">
            <ButtonGrop index={0} handleYearChange={handleYearChange} />
            <MyBarChart url={urlForestKm} yearNo={yearNos[0]} />
          </div>

          <div className="flex flex-col gap-4 lg:w-[45%] w-full lg:px-4 px-2 py-2">
            <ButtonGrop index={1} handleYearChange={handleYearChange} />
            <MyBubbleChart url={urlForestPer} yearNo={yearNos[1]} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Population</div>
          <div>
            Population typically refers to the number of people in a single
            area, whether it be a city or town, region, country, continent, or
            the world. India is the second most populated country in the world
            with a sixth of the {"world's"} population. According to the 2019
            revision of the World Population Prospects the population stood at
            1,352,642,280.
          </div>
        </div>
        <ButtonGrop index={2} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlPopulation}
          yearNo={yearNos[2]}
          style={{
            tension: 0.3,
            pointerRadius: 10,
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Population Growth Rate</div>
          <div>
            Population growth rate is the increase in the number of people in a
            population. Global human population growth amounts to around 83
            million annually, or 1.1% per year. The global population has grown
            from 1 billion in 1800 to 7.9 billion in 2020. The UN projected
            population to keep growing, and estimates have put the total
            population at 8.6 billion by mid-2030, 9.8 billion by mid-2050 and
            11.2 billion by 2100.
          </div>
        </div>
        <ButtonGrop index={3} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlPopulationGrowth}
          yearNo={yearNos[3]}
          style={{
            fill: true,
            tension: 0.3,
            pointerRadius: 10,
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">UnEmployment</div>
          <div>
            Unemployment refers to the condition where individuals who are
            capable of working and actively seeking jobs are unable to find
            suitable employment. In India, unemployment is a significant
            socio-economic issue influenced by factors such as population
            growth, economic slowdowns, skill mismatches, and regional
            disparities.
          </div>
        </div>
        <ButtonGrop index={4} handleYearChange={handleYearChange} />
        <MyBarChart url={urlUnEmployment} yearNo={yearNos[4]} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Access to electricity</div>
          <div>
            Access to electricity is the percentage of population with access to
            electricity. Access to electricity (% of population) in India was
            reported at 97.82 % in 2019, according to the World Bank collection
            of development indicators, compiled from officially recognized
            sources.
          </div>
        </div>
        <ButtonGrop index={5} handleYearChange={handleYearChange} />
        <MyPolarArea url={urlElectricity} yearNo={yearNos[5]} />
      </div>
    </div>
  );
};

export default Other;
