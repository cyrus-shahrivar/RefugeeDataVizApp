const info2010 = require("./csvToJsonConversionFiles/2010arrivals.json")
const info2011 = require("./csvToJsonConversionFiles/2011arrivals.json")
const info2012 = require("./csvToJsonConversionFiles/2012arrivals.json")
const info2013 = require("./csvToJsonConversionFiles/2013arrivals.json")
const info2014 = require("./csvToJsonConversionFiles/2014arrivals.json")
const info2015 = require("./csvToJsonConversionFiles/2015arrivals.json")
const info2016 = require("./csvToJsonConversionFiles/2016arrivals.json")
const info2017 = require("./csvToJsonConversionFiles/2017arrivals.json")
const info2018 = require("./csvToJsonConversionFiles/2018arrivals.json")
const info2019 = require("./csvToJsonConversionFiles/2019arrivals.json")
const info2020 = require("./csvToJsonConversionFiles/2020arrivals.json")
const fs = require("fs")

const years = [
  { year: 2010, data: info2010 },
  { year: 2011, data: info2011 },
  { year: 2012, data: info2012 },
  { year: 2013, data: info2013 },
  { year: 2014, data: info2014 },
  { year: 2015, data: info2015 },
  { year: 2016, data: info2016 },
  { year: 2017, data: info2017 },
  { year: 2018, data: info2018 },
  { year: 2019, data: info2019 },
  { year: 2020, data: info2020 }
]

years.forEach(({ year, data: yearData }) => {
  const fileDataObj = {}

  let interimState = ""
  yearData.forEach((entry) => {
    /**
     * NOTE: year data is structured in such a way that we know
     * -> if "Placement State", begin entry for state
     * -> else, fill out previous Placement State with data by country
     */
    const currentEntryState = entry["Placement State"]
    if (currentEntryState) {
      interimState = currentEntryState
      fileDataObj[currentEntryState] = {
        state: currentEntryState,
        cumulativeArrivals: entry[`FY ${year}`],
        fiscalArrivals: entry["Cumulative Total"],
        totalByOriginCountry: {}
      }
    } else {
      fileDataObj[interimState].totalByOriginCountry[entry.Nationality] = {
        cumulativeArrivals: entry[`FY ${year}`],
        fiscalArrivals: entry["Cumulative Total"]
      }
    }
  })

  fs.writeFileSync(`./${year}.json`, JSON.stringify(fileDataObj))
})
