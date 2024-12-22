//Import volume index (2000 = 100)
const urlForImportVolume =
  "https://api.worldbank.org/v2/country/IND/indicator/TM.VAL.MRCH.XD.WD?format=json";

// //Import unit value index (2000 = 100)
const urlForImportUnitValue =
  "https://api.worldbank.org/v2/country/IND/indicator/TM.UVI.MRCH.XD.WD?format=json";

//Imports of goods and services (USD)
const urlForImportOfGoods =
  "https://api.worldbank.org/v2/country/IND/indicator/BM.GSR.TOTL.CD?format=json";

export { urlForImportVolume, urlForImportUnitValue, urlForImportOfGoods };
