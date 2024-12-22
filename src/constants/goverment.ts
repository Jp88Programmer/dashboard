//Military expenditure (% of general government expenditure) :
const urlMilitaryExpend =
  "https://api.worldbank.org/v2/country/IND/indicator/MS.MIL.XPND.ZS?format=json";

// Domestic general government health expenditure:
const urlHealthExpend =
  "https://api.worldbank.org/v2/country/IND/indicator/SH.XPD.GHED.GE.ZS?format=json";

//Expenditure on education:
const urlEducationExpend =
  "https://api.worldbank.org/v2/country/IND/indicator/SE.XPD.TOTL.GD.ZS?format=json";

//General government final consumption expenditure (current US$):
const urlConsuExpend =
  "https://api.worldbank.org/v2/country/IND/indicator/NE.CON.GOVT.CD?format=json";

//Central government debt, total:
const urlDebt =
  "https://api.worldbank.org/v2/country/IND/indicator/GC.DOD.TOTL.CN?format=json";

//Tax revenue (current LCU):
const urlTaxRevenue =
  "https://api.worldbank.org/v2/country/IND/indicator/GC.TAX.TOTL.CN?format=json";

//Profit tax (% of commercial profits):
const urlProfitTax =
  "https://api.worldbank.org/v2/country/IND/indicator/IC.TAX.PRFT.CP.ZS?format=json";

const urlTaxPayment =
  "https://api.worldbank.org/v2/country/IND/indicator/IC.TAX.PAYM?format=json";

//Stocks traded, total value (current US$):
const urlStockTraded =
  "https://api.worldbank.org/v2/country/IND/indicator/CM.MKT.TRAD.CD?format=json";

export {
  urlMilitaryExpend,
  urlHealthExpend,
  urlEducationExpend,
  urlConsuExpend,
  urlDebt,
  urlTaxRevenue,
  urlTaxPayment,
  urlProfitTax,
  urlStockTraded,
};
