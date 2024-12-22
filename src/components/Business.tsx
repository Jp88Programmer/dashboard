"use client";
import React, { useState } from "react";
import ButtonGrop from "./ButtonGrop";
import MyLineChart from "./charts/MyLineChart";
import MyBarChart from "./charts/MyBarChart";
import MyPieChart from "./charts/MyPieChart";
import MyDountChart from "./charts/MyDountChart";
import {
  urlForGni,
  urlForScore,
  urlNoOfBusiness,
  urlForDensity,
  urlForNoOfTheInternet,
  urlForInflation,
  urlForCpi,
} from "../constants/business";

const Business = () => {
  const [yearNos, setYearNos] = useState([5, 5, 5, 5, 5, 5, 5]);

  const handleYearChange = (index: number, yearNo: number) => {
    const newYearNos = [...yearNos];
    newYearNos[index] = yearNo;
    setYearNos(newYearNos);
  };
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Business</div>
          <div>
            Business economics is a field in applied economics which uses
            economic theory and quantitative methods to analyze business
            enterprises and the factors contributing to the diversity of
            organizational structures and the relationships of firms with
            labour, capital and product markets. A professional focus of the
            journal Business Economics has been expressed as providing practical
            information for people who apply economics in their jobs.
          </div>
          <div>
            Ease of doing business is an index published by the World Bank. It
            is an aggregate figure that includes different parameters which
            define the ease of doing business in a country.
          </div>
          <div>
            Ease of doing business is an index published by the World Bank. It
            is an aggregate figure that includes different parameters which
            define the ease of doing business in a country.
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between w-full">
        <div className="flex flex-col gap-4 lg:w-[45%] w-full lg:px-4 px-2 py-2">
          <ButtonGrop index={0} handleYearChange={handleYearChange} />
          <MyPieChart url={urlForGni} yearNo={yearNos[0]} />
        </div>

        <div className="flex flex-col gap-4 lg:w-[45%] w-full lg:px-4 px-2 py-2">
          <ButtonGrop index={1} handleYearChange={handleYearChange} />
          <MyDountChart url={urlForScore} yearNo={yearNos[1]} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-3 items-center justify-between w-full">
        <div className="flex flex-col gap-4 lg:w-[45%] w-full lg:px-4 px-2 py-2">
          <ButtonGrop index={2} handleYearChange={handleYearChange} />
          <MyPieChart url={urlNoOfBusiness} yearNo={yearNos[2]} />
        </div>

        <div className="flex flex-col gap-4 lg:w-[45%] w-full lg:px-4 px-2 py-2">
          <ButtonGrop index={3} handleYearChange={handleYearChange} />
          <MyDountChart url={urlForDensity} yearNo={yearNos[3]} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Consumer</div>
          <div>
            A consumer is a person or a group who intends to order, orders, or
            uses purchased goods, products, or services primarily for personal,
            social, family, household and similar needs, not directly related to
            entrepreneurial or business activities.
          </div>
          <div>
            The number of active Internet users in India is expected to increase
            by 45% in the next five years and touch 900 million by 2025 from
            around 622 million in 2020, according to the IAMAI-Kantar ICUBE 2020
            report. The report defines an active user as someone who has
            accessed the Internet at least once in the past month.
          </div>
        </div>
        <ButtonGrop index={4} handleYearChange={handleYearChange} />
        <MyBarChart url={urlForNoOfTheInternet} yearNo={yearNos[4]} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Inflation</div>
          <div>
            Inflation measures how much more expensive a set of goods and
            services has become over a certain period, usually a year. Inflation
            is the rate of increase in prices over a given period of time.
            Inflation is typically a broad measure, such as the overall increase
            in prices or the increase in the cost of living in a country. But it
            can also be more narrowly calculated—for certain goods, such as
            food, or for services, such as a haircut, for example. Whatever the
            context, inflation represents how much more expensive the relevant
            set of goods and/or services has become over a certain period, most
            commonly a year.
          </div>
        </div>
        <ButtonGrop index={5} handleYearChange={handleYearChange} />
        <MyLineChart url={urlForInflation} yearNo={yearNos[5]} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Consumer Price Index (CPI)</div>
          <div>
            Consumer Price Index (CPI) is a measure that examines the weighted
            average of prices of a basket of consumer goods and services, such
            as transportation, food, and medical care. It is calculated by
            taking price changes for each item in the predetermined basket of
            goods and averaging them. Changes in the CPI are used to assess
            price changes associated with the cost of living. The CPI is one of
            the most frequently used measures of inflation and deflation.
          </div>
        </div>
        <ButtonGrop index={6} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlForCpi}
          yearNo={yearNos[6]}
          title="Consumer Price Index (CPI)"
        />
      </div>
    </div>
  );
};

export default Business;
