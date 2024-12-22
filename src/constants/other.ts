//Forest area (sq. km):
const urlForestKm =
  "https://api.worldbank.org/v2/country/IND/indicator/AG.LND.FRST.K2?format=json";

//Forest area(%):
const urlForestPer =
  "https://api.worldbank.org/v2/country/IND/indicator/AG.LND.FRST.ZS?format=json";

//PM2.5 air pollution, population exposed to levels exceeding WHO guideline value (% of total):
const urlAir =
  "https://api.worldbank.org/v2/country/IND/indicator/EN.ATM.PM25.MC.ZS?format=json";

//Population, total:
const urlPopulation =
  "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.TOTL?format=json";

//Population growth(%):
const urlPopulationGrowth =
  "https://api.worldbank.org/v2/country/IND/indicator/SP.POP.GROW?format=json";

//Unemployment, total (% of total labor force):
const urlUnEmployment =
  "https://api.worldbank.org/v2/country/IND/indicator/SL.UEM.TOTL.NE.ZS?format=json";

//Access to electricity (% of population):
const urlElectricity =
  "https://api.worldbank.org/v2/country/IND/indicator/EG.ELC.ACCS.ZS?format=json";

export {
  urlForestKm,
  urlForestPer,
  urlAir,
  urlPopulation,
  urlPopulationGrowth,
  urlUnEmployment,
  urlElectricity,
};
