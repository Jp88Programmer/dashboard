"use client";
import React, { useState } from "react";
import ButtonGrop from "./ButtonGrop";
import MyLineChart from "./charts/MyLineChart";
import {
  urlForImportVolume,
  urlForImportUnitValue,
  urlForImportOfGoods,
} from "../constants/import";
import MyBubbleChart from "./charts/MyBubbleChart";
import MyBarChart from "./charts/MyBarChart";

const Import = () => {
  const [yearNos, setYearNos] = useState([5, 5, 5]);

  const handleYearChange = (index: number, yearNo: number) => {
    const newYearNos = [...yearNos];
    newYearNos[index] = yearNo;
    setYearNos(newYearNos);
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Import</div>
          <div>
            An import is a good or service bought in one country that was
            produced in another. Imports and exports are the components of
            international trade. If the value of a {"country's"} imports exceeds
            the value of its exports,the country has a negative balance of
            trade, also known as a trade deficit.
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <caption className="md:text-base text-sm">
            India Imports By Country
          </caption>
          <iframe
            className="2xl:w-[50rem] lg:w-[30rem] md:w-[25rem] w-[20rem] 2xl:h-[30rem] lg:h-[25rem] h-[20rem]"
            src="https://comtrade.tradingeconomics.com/comtrade/share?r=ind&c=0000&v=treemapmarkets&t=1&title="
          ></iframe>
        </div>
        <div className="md:text-base text-sm">
          Countries are most likely to import goods or services that their
          domestic industries cannot produce as efficiently or cheaply as the
          exporting country. Countries may also import raw materials or
          commodities that are not available within their borders.An import is a
          product or service produced abroad and purchased in your home country.
          Imported goods or services are attractive when domestic industries
          cannot produce similar goods and services cheaply or efficiently.
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <caption className="md:text-base text-sm">
            India Imports By Category
          </caption>
          <iframe
            className="2xl:w-[50rem] lg:w-[30rem] md:w-[25rem] w-[20rem] 2xl:h-[30rem] lg:h-[25rem] h-[20rem]"
            src="https://comtrade.tradingeconomics.com/comtrade/share?r=ind&c=0000&v=treemapmarkets&t=1&title="
          ></iframe>
        </div>
        {/* <ButtonGrop index={1} handleYearChange={handleYearChange} />
                <MyLineChart url={urlForGdpCapita} yearNo={yearNos[1]} title="GDP per capita(in USD)" /> */}
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Import Price Index</div>
          <div>
            Import Price Indices (MPIs) measure changes in the prices of goods
            and services provided by nonresidents (rest of the world) and used
            by residents of the economic territory.
          </div>
        </div>
        <ButtonGrop index={1} handleYearChange={handleYearChange} />
        <MyBubbleChart
          url={urlForImportVolume}
          yearNo={yearNos[1]}
          title="Import Price Index"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Import unit value index</div>
          <div>
            Unit-values are defined by: trade value / quantity. These
            unit-values are divided by the average unit-value of the previous
            year to obtain elementary unit-value indices, from which outliers
            are detected and removed.
          </div>
        </div>
        <ButtonGrop index={2} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlForImportUnitValue}
          yearNo={yearNos[2]}
          title="Import Volume"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">
            Imports of goods and services
          </div>
          <div>
            Imports of goods and services consist of transactions in goods and
            services (purchases, barter, and gifts) from non-residents to
            residents. Imports of goods occur when economic ownership of goods
            changes between residents and non-residents.This applies
            irrespective of corresponding physical movements of goods across
            frontiers.
          </div>
        </div>
        <ButtonGrop index={3} handleYearChange={handleYearChange} />
        <MyBarChart
          url={urlForImportOfGoods}
          yearNo={yearNos[3]}
          title="Imports of goods and services"
        />
      </div>
    </div>
  );
};

export default Import;
