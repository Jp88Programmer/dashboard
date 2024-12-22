//Cost of business start-up procedures (% of GNI per capita)
const urlForGni =
  "https://api.worldbank.org/v2/country/IND/indicator/IC.REG.COST.PC.ZS?format=json";

// Ease of doing business score
const urlForScore =
  "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.DFRN.XQ?format=json";

// //New businesses registered (number)
const urlNoOfBusiness =
  "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.NREG?format=json";

//New business density
const urlForDensity =
  "https://api.worldbank.org/v2/country/IND/indicator/IC.BUS.NDNS.ZS?format=json";

//Individuals using the Internet (% of population)
const urlForNoOfTheInternet =
  "https://api.worldbank.org/v2/country/IND/indicator/IT.NET.USER.ZS?format=json";

//Inflation (annual %)
const urlForInflation =
  "https://api.worldbank.org/v2/country/IND/indicator/FP.CPI.TOTL.ZG?format=json";

//cpi
const urlForCpi =
  "https://api.worldbank.org/v2/country/IND/indicator/FP.CPI.TOTL?format=json";

export {
  urlForGni,
  urlForScore,
  urlNoOfBusiness,
  urlForDensity,
  urlForNoOfTheInternet,
  urlForInflation,
  urlForCpi,
};
