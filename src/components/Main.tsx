"use client";
import React, { useEffect, useState } from 'react'
import { gdp_data_2020 } from '../data/gdp_data_2020'

interface GdpData {
    countryName: string;
    countryCode: string;
    year2020: number;
}
const countryCodeArr = ["USA", "CHN", 'JPN', "DEU", "GBR", "IND", "FRA", "ITA", "CAN", "KOR"];
const Main = () => {


    const [countryGdpArr, setCountryGdpArr] = useState<GdpData[]>([]);
    console.log("🚀 ~ Main ~ countryGdpArr:", countryGdpArr)

    const gdpData = async function () {
        try {
            // const res = await fetch("js/gdp_data_2020.json", { method: "GET" });
            const arrGdp = gdp_data_2020 as GdpData[];

            const top10Gdp = [];

            let i = 50;
            while (i > 0) {
                let maxIndex = 0;
                for (let index = 1; index < arrGdp.length; index++) {
                    if (arrGdp[maxIndex].year2020 < arrGdp[index].year2020)
                        maxIndex = index;
                }

                const element = arrGdp[maxIndex];

                if (countryCodeArr.includes(element.countryCode))
                    top10Gdp.push(arrGdp[maxIndex]);

                arrGdp.splice(maxIndex, 1);
                i--;
            }
            console.log("🚀 ~ gdpData ~ arrGdp:", arrGdp)
            setCountryGdpArr(top10Gdp);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        gdpData()
    }, []);


    return (
        <div className="flex flex-col gap-4 p-10">
            <h1 className="text-[#da2337] text-2xl font-medium">Economy of India</h1>
            <p className="para description">The economy of India is a middle income developing market economy. It is the {"world's"}
                sixth-largest economy by
                nominal GDP and the third-largest by purchasing power parity (PPP). According to the International Monetary Fund
                (IMF), on a per capita income basis, India ranked 145th by GDP (nominal) and 122th by GDP (PPP). From
                independence in 1947 until 1991, successive governments promoted protectionist economic policies, with extensive
                state intervention and economic regulation. This is characterised as dirigism, in the form of the License Raj.
                The end of the Cold War and an acute balance of payments crisis in 1991 led to the adoption of a broad economic
                liberalisation in India. Since the start of the 21st century, annual average GDP growth has been 6% to 7%, and
                from 2013 to 2018 and in 2021, India is the {"world's"} fastest growing major economy, surpassing China.
                Historically, India was the largest economy in the world for most of the two millennia from the 1st until the
                19th century.</p>

            <div className="flex flex-row gap-10 w-full">
                {/* <caption className="description">Exports of goods and services (% of GDP) - India</caption> */}
                <div id="flex w-1/2">
                    {countryGdpArr?.length > 0 &&
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Sr No</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Country Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">Country Code</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider text-nowrap">GDP (current US$)</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {countryGdpArr.map((country, index) => (
                                    <tr key={index}>
                                        <th scope="row" className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</th>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{country.countryName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{country.countryCode}</td>
                                        {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{country.year2020}</td> */}
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${(country.year2020 / 10e11).toFixed(4)}T</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
                <iframe
                    src="https://data.worldbank.org/share/widget?end=2020&indicators=NE.EXP.GNFS.ZS&locations=IN&start=2020&view=map"
                    className="w-1/2 min-h-[60vh] h-full"></iframe>
            </div>
        </div>
    )
}

export default Main
