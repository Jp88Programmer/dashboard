"use client";
import React, { useState } from "react";
import MyBarChart from "./charts/MyBarChart";
import MyLineChart from "./charts/MyLineChart";
import ButtonGrop from "./ButtonGrop";
import {
  urlMilitaryExpend,
  urlHealthExpend,
  urlEducationExpend,
  urlConsuExpend,
  urlDebt,
  urlTaxRevenue,
  urlProfitTax,
  urlStockTraded,
} from "../constants/goverment";
import MyRadarChart from "./charts/MyRadarChart";
import MyPieChart from "./charts/MyPieChart";
import MyDountChart from "./charts/MyDountChart";
import MyPolarArea from "./charts/MyPolarArea";
import MyBubbleChart from "./charts/MyBubbleChart";

const Goverment = () => {
  // State variable to hold yearNo for each chart
  const [yearNos, setYearNos] = useState([5, 5, 5, 5, 5, 5, 5, 5, 5]);

  const handleYearChange = (index: number, yearNo: number) => {
    const newYearNos = [...yearNos];
    newYearNos[index] = yearNo;
    setYearNos(newYearNos);
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Expenditure</div>
          <div>
            Government spending refers to money spent by the public sector on
            the acquisition of goods and provision of services such as
            education, healthcare, social protection, and defense. In national
            income accounting, when the government acquires goods and services
            for current use to directly satisfy the individual or collective
            needs and requirements of the community, it is classified as
            government final consumption spending. When the government acquires
            goods and services for future use, it is classified as government
            investment. This includes public consumption and public investment,
            and transfer payments consisting of income transfers.
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Military Expenditure</div>
          <div>
            Military expenditure, also known as a defense budget, is the amount
            of financial resources dedicated by a state to raising and
            maintaining an armed forces or other methods essential for defense
            purposes. Military budgets often reflect how strongly a country
            perceives the likelihood of threats against it, or the amount of
            aggression it wishes to conjure. It also gives an idea of how much
            financing should be provided for the upcoming fiscal year.
          </div>
        </div>
        <ButtonGrop index={0} handleYearChange={handleYearChange} />
        <MyRadarChart
          url={urlMilitaryExpend}
          yearNo={yearNos[0]}
          style={{
            tension: 0.3,
            pointerRadius: 10,
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Health Expenditure</div>
          <div>
            Health expenditure includes all expenditures for the provision of
            health services, family planning activities, nutrition activities
            and emergency aid designated for health, but it excludes the
            provision of drinking water and sanitation. Health financing is a
            critical component of health systems.
          </div>
        </div>
        <ButtonGrop index={1} handleYearChange={handleYearChange} />
        <MyBubbleChart
          url={urlHealthExpend}
          yearNo={yearNos[1]}
          style={{
            pointerRadius: 10,
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Education Expenditure</div>
          <div>
            Education spending covers expenditure on schools, universities and
            other public and private educational institutions. Spending includes
            instruction and ancillary services for students and families
            provided through educational institutions. Spending is shown in USD
            per student and as a percentage of GDP.
          </div>
        </div>
        <ButtonGrop index={2} handleYearChange={handleYearChange} />
        <MyDountChart
          url={urlEducationExpend}
          yearNo={yearNos[2]}
          title="Consumer Price Index (CPI)"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">
            Government Consumption Expenditure
          </div>
          <div>
            Government final consumption expenditure (GFCE) is an aggregate
            transaction amount on a {"country's"} national income accounts
            representing government expenditure on goods and services that are
            used for the direct satisfaction of individual needs (individual
            consumption) or collective needs of members of the community
            (collective consumption). It consists of the value of the goods and
            services produced by the government itself other than own-account
            capital formation and sales and of purchases by the government of
            goods and services produced by market producers that are supplied to
            households - without any transformation
          </div>
        </div>
        <ButtonGrop index={3} handleYearChange={handleYearChange} />
        <MyPolarArea
          url={urlConsuExpend}
          yearNo={yearNos[3]}
          title="Consumer Price Index (CPI)"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Government Dept</div>
          <div>
            A {"country's"} gross government debt (also called public debt, or
            sovereign debt) is the financial liabilities of the government
            sector. Changes in government debt over time reflect primarily
            borrowing due to past government deficits. A deficit occurs when a
            {"government's"} expenditures exceed revenues. Government debt may
            be owed to domestic residents, as well as to foreign residents. If
            owed to foreign residents, that quantity is included in the{" "}
            {"country's"}
            external debt.
          </div>
        </div>
        <ButtonGrop index={4} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlDebt}
          yearNo={yearNos[4]}
          title="Consumer Price Index (CPI)"
          style={{
            tension: 0.3,
            pointerRadius: 10,
          }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Tax Revenue</div>
          <div>
            Tax revenue is the income that is collected by governments through
            taxation. Taxation is the primary source of government revenue.
            Revenue may be extracted from sources such as individuals, public
            enterprises, trade, royalties on natural resources and/or foreign
            aid.
          </div>
        </div>
        <ButtonGrop index={5} handleYearChange={handleYearChange} />
        <MyDountChart
          url={urlTaxRevenue}
          yearNo={yearNos[5]}
          title="Consumer Price Index (CPI)"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">Profit Tax(%)</div>
          <div>
            A corporate tax is a tax on the profits of a corporation. The taxes
            are paid on a {"company's"} taxable income, which includes revenue
            minus cost of goods sold (COGS), general and administrative (G&A)
            expenses, selling and marketing, research and development,
            depreciation, and other operating costs.
          </div>
        </div>
        <ButtonGrop index={6} handleYearChange={handleYearChange} />
        <MyPieChart
          url={urlProfitTax}
          yearNo={yearNos[6]}
          title="Consumer Price Index (CPI)"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="head-title">
            Stocks traded, total value (current US$)
          </div>
        </div>
        <ButtonGrop index={8} handleYearChange={handleYearChange} />
        <MyBarChart
          url={urlStockTraded}
          yearNo={yearNos[8]}
          title="Consumer Price Index (CPI)"
        />
      </div>
    </div>
  );
};

export default Goverment;
