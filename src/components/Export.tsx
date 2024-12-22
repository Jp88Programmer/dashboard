"use client";
import React, { useState } from "react";
import ButtonGrop from "./ButtonGrop";
import MyLineChart from "./charts/MyLineChart";
import {
  urlForExportVolumeIndex,
  urlForExportTaxes,
  urlForExportUnit,
  urlForGoods,
} from "../constants/export";
import MyBubbleChart from "./charts/MyBubbleChart";
import MyBarChart from "./charts/MyBarChart";
import MyRadarChart from "./charts/MyRadarChart";

const Export = () => {
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
          <div className="text-lg font-medium">Export</div>
          <div>
            Exports are goods and services that are produced in one country and
            sold to buyers in another. Exports, along with imports, make up
            international trade.Exports are incredibly important to modern
            economies because they offer people and firms many more markets for
            their goods. One of the core functions of diplomacy and foreign
            policy between governments is to foster economic trade, encouraging
            exports and imports for the benefit of all trading parties.
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <caption className="md:text-base text-sm">
            India Exports By Country
          </caption>
          <iframe
            className="2xl:w-[50rem] lg:w-[30rem] md:w-[25rem] w-[20rem] 2xl:h-[30rem] lg:h-[25rem] h-[20rem]"
            src="https://comtrade.tradingeconomics.com/comtrade/share?r=ind&c=0000&v=treemapmarkets&t=2&title"
          ></iframe>
        </div>
        <div className="md:text-base text-sm">
          Export refers to a product or service produced in one country but sold
          to a buyer abroad. Exports are one of the oldest forms of economic
          transfer and occur on a large scale between nations. Exporting can
          increase sales and profits if they reach new markets, and they may
          even present an opportunity to capture significant global market
          share.
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <caption className="md:text-base text-sm">
            India Exports By Category
          </caption>
          <iframe
            className="2xl:w-[50rem] lg:w-[30rem] md:w-[25rem] w-[20rem] 2xl:h-[30rem] lg:h-[25rem] h-[20rem]"
            src="https://comtrade.tradingeconomics.com/comtrade/share?r=ind&c=0000&v=piechartcategories&t=2&title="
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Export volume index</div>
          <div>
            Export volume indexes are derived from {"UNCTAD's"} volume index
            series and are the ratio of the export value indexes to the
            corresponding unit value indexes.
          </div>
        </div>
        <ButtonGrop index={1} handleYearChange={handleYearChange} />
        <MyBubbleChart
          url={urlForExportVolumeIndex}
          yearNo={yearNos[1]}
          title="Export volume index"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Export unit value index</div>
          <div>
            Unit-values are defined by: trade value / quantity. These
            unit-values are divided by the average unit-value of the previous
            year to obtain elementary unit-value indices, from which outliers
            are detected and removed.
          </div>
        </div>
        <ButtonGrop index={2} handleYearChange={handleYearChange} />
        <MyRadarChart
          url={urlForExportUnit}
          yearNo={yearNos[2]}
          title="Export unit value index"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">
            Exports of goods and services
          </div>
          <div>
            Exports of goods and services consist of transactions in goods and
            services (sales, barter, and gifts) from residents to non-residents.
            Exports of goods occur when economic ownership of goods changes
            between residents and non-residents. This applies irrespective of
            corresponding physical movements of goods across frontiers.
          </div>
        </div>
        <ButtonGrop index={3} handleYearChange={handleYearChange} />
        <MyBarChart
          url={urlForGoods}
          yearNo={yearNos[3]}
          title="Exports of goods and services"
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 md:text-base text-sm">
          <div className="text-lg font-medium">Taxes on exports</div>
          <div>
            Export taxes are taxes on goods or services that become payable when
            the goods leave the economic territory or when the services are
            delivered to non-residents; they include export duties, profits of
            export monopolies and taxes resulting from multiple exchange rates.
          </div>
        </div>
        <ButtonGrop index={3} handleYearChange={handleYearChange} />
        <MyLineChart
          url={urlForExportTaxes}
          yearNo={yearNos[3]}
          title="Taxes on exports"
        />
      </div>
    </div>
  );
};

export default Export;
