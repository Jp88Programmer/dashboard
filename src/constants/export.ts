//Export volume index (2000 = 100)
const urlForExportVolumeIndex =
  "https://api.worldbank.org/v2/country/IND/indicator/TX.QTY.MRCH.XD.WD?format=json";

// Taxes on exports (% of tax revenue)
const urlForExportTaxes =
  "https://api.worldbank.org/v2/country/IND/indicator/GC.TAX.EXPT.ZS?format=json";

// //Export unit value index (2000 = 100)
const urlForExportUnit =
  "https://api.worldbank.org/v2/country/IND/indicator/TX.UVI.MRCH.XD.WD?format=json";

//Exports of goods and services (USD) //BX.GSR.GNFS.CD
const urlForGoods =
  "https://api.worldbank.org/v2/country/IND/indicator/BX.GSR.GNFS.CD?format=json";

export {
  urlForExportVolumeIndex,
  urlForExportTaxes,
  urlForExportUnit,
  urlForGoods,
};
