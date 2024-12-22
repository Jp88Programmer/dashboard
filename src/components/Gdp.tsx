"use client";
import React, { useState } from "react";
import MyBarChart from "./charts/MyBarChart";
import MyLineChart from "./charts/MyLineChart";
import ButtonGrop from "./ButtonGrop";
import {
  urlForGdpCapita,
  urlForFixedCapitalFormation,
  urlForGdpGrowth,
  urlForGdp,
  urlForGdpPerCapitaGrowth,
  urlForGdpForPpp,
} from "../constants/gdp";

const Gdp = () => {
  // State variable to hold yearNo for each chart
  const [yearNos, setYearNos] = useState([5, 5, 5, 5, 5, 5]);

  const handleYearChange = (index: number, yearNo: number) => {
    const newYearNos = [...yearNos];
    newYearNos[index] = yearNo;
    setYearNos(newYearNos);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      {/* GDP (current US$) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          Gross Domestic Product (GDP) is a monetary measure that represents the
          market value of all final goods and services produced within a
          specific time period by a country. It serves as a comprehensive
          indicator of economic activity and performance. The definition of GDP
          is maintained by various national and international economic
          organizations. According to the Organisation for Economic Co-operation
          and Development (OECD), GDP is an aggregate measure of production. It
          is calculated as the sum of the gross values added by all resident and
          institutional units engaged in the production of goods and services,
          including taxes (minus subsidies) on products that are not included in
          the value of their outputs. GDP is widely used as a metric for:
          <ul className="flex flex-col gap-2 list-disc pl-8">
            <li className="">
              International comparisons: It helps compare the economic
              performance of different countries.
            </li>
            <li className="">
              Economic progress: It provides a broad measure of a {"nation's"}{" "}
              economic development over time.
            </li>
          </ul>
        </div>
        <ButtonGrop index={0} handleYearChange={handleYearChange} />
        <MyBarChart
          url={urlForGdp}
          yearNo={yearNos[0]}
          title="GDP (current US$)"
        />
      </div>

      {/* GDP per capita(in USD) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">GDP per capita(in USD)</div>
          <div>
            Per capita gross domestic product (GDP) is a financial metric that
            breaks down a {"country's"} economic output per person and is
            calculated by dividing the GDP of a nation by its population.
          </div>
        </div>
        <ButtonGrop index={1} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlForGdpCapita}
          yearNo={yearNos[1]}
          title="GDP per capita(in USD)"
        />
      </div>

      {/* Gross fixed capital formation (% of GDP) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">
            Gross fixed capital formation (% of GDP)
          </div>
          <div>
            Gross fixed capital formation (GFCF) is a macroeconomic concept used
            in official national accounts such as the United Nations System of
            National Accounts (UNSNA), National Income and Product Accounts
            (NIPA) and the European System of Accounts (ESA). GFCF is called
            {"gross"} because the measure does not make any adjustments to
            deduct the consumption of fixed capital (depreciation of fixed
            assets) from the investment figures.
          </div>
        </div>
        <ButtonGrop index={2} handleYearChange={handleYearChange} />
        <MyBarChart
          url={urlForFixedCapitalFormation}
          yearNo={yearNos[2]}
          title="Gross fixed capital formation (% of GDP)"
        />
      </div>

      {/* GDP growth (annual %) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">GDP growth (annual %)</div>
          <div>
            The GDP growth rate compares the year-over-year (or quarterly)
            change in a {"country’s"} economic output to measure how fast an
            economy is growing. Usually expressed as a percentage rate, this
            measure is popular for economic policy-makers because GDP growth is
            thought to be closely connected to key policy targets such as
            inflation and unemployment rates.
          </div>
        </div>
        <ButtonGrop index={3} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlForGdpGrowth}
          yearNo={yearNos[3]}
          title="GDP growth (annual %)"
          style={{
            fill: true,
            tension: 0.3,
          }}
        />
      </div>

      {/* GDP per capita growth (annual %) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">
            GDP per capita growth (annual %)
          </div>
          <div>
            Annual growth rate of real GDP per capita. Annual growth rate of
            real Gross Domestic Product (GDP) per capita is calculated as the
            percentage change in the real GDP per capita between two consecutive
            years. Real GDP per capita is calculated by dividing GDP at constant
            prices by the population of a country or area. The data for real GDP
            are measured in constant US dollars to facilitate the calculation of
            country growth rates and aggregation of the country data.
          </div>
        </div>
        <ButtonGrop index={4} handleYearChange={handleYearChange} />
        <MyBarChart
          url={urlForGdpPerCapitaGrowth}
          yearNo={yearNos[4]}
          title="GDP per capita growth (annual %)"
        />
      </div>

      {/* GDP Purchasing Power Parity (PPP) */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">GDP Purchasing Power Parity (PPP)</div>
          <div>
            While not directly a measure of GDP, economists look at purchasing
            power parity (PPP) to see how one {"country’s"} GDP measures up in
            “international dollars” using a method that adjusts for differences
            in local prices and costs of living to make cross-country
            comparisons of real output, real income, and living standards.
          </div>
        </div>
        <ButtonGrop index={5} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlForGdpForPpp}
          yearNo={yearNos[5]}
          title="GDP Purchasing Power Parity (PPP)"
          style={{
            tension: 0.5,
          }}
        />
      </div>
    </div>
  );
};

export default Gdp;
