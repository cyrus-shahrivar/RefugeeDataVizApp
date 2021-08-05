const fs = require("fs")
const data2010 = require("./2010.json")
const data2011 = require("./2011.json")
const data2012 = require("./2012.json")
const data2013 = require("./2013.json")
const data2014 = require("./2014.json")
const data2015 = require("./2015.json")
const data2016 = require("./2016.json")
const data2017 = require("./2017.json")
const data2018 = require("./2018.json")
const data2019 = require("./2019.json")
const data2020 = require("./2020.json")

const years = [
  { year: 2010, data: data2010 },
  { year: 2011, data: data2011 },
  { year: 2012, data: data2012 },
  { year: 2013, data: data2013 },
  { year: 2014, data: data2014 },
  { year: 2015, data: data2015 },
  { year: 2016, data: data2016 },
  { year: 2017, data: data2017 },
  { year: 2018, data: data2018 },
  { year: 2019, data: data2019 },
  { year: 2020, data: data2020 }
]

const prefixWithUS = (word) => `us-${word}`
const buildGeoPair = (location, value) => [location, value]
const STATES_ABBREVIATIONS = {
  Alabama: "al",
  Alaska: "ak",
  Arizona: "az",
  Arkansas: "ar",
  California: "ca",
  Colorado: "co",
  Connecticut: "ct",
  Delaware: "de",
  "District of Columbia": "dc",
  Florida: "fl",
  Georgia: "ga",
  Hawaii: "hi",
  Idaho: "id",
  Illinois: "il",
  Indiana: "in",
  Iowa: "ia",
  Kansas: "ks",
  Kentucky: "ky",
  Louisiana: "la",
  Maine: "me",
  Maryland: "md",
  Massachusetts: "ma",
  Michigan: "mi",
  Minnesota: "mn",
  Mississippi: "ms",
  Missouri: "mo",
  Montana: "mt",
  Nebraska: "ne",
  Nevada: "nv",
  "New Hampshire": "nh",
  "New Jersey": "nj",
  "New Mexico": "nm",
  "New York": "ny",
  "North Carolina": "nc",
  "North Dakota": "nd",
  Ohio: "oh",
  Oklahoma: "ok",
  Oregon: "or",
  Pennsylvania: "pa",
  "Puerto Rico": "pr",
  "Rhode Island": "ri",
  "South Carolina": "sc",
  "South Dakota": "sd",
  Tennessee: "tn",
  Texas: "tx",
  Utah: "ut",
  Vermont: "vt",
  Virginia: "va",
  Washington: "wa",
  "West Virginia": "wv",
  Wisconsin: "wi",
  Wymoing: "wy"
}

years.forEach(({ year, data }) => {
  const countryDataForYear = {}
  for (const state in data) {
    if (Object.hasOwnProperty.call(data, state)) {
      const stateData = data[state]
      const countries = stateData.totalByOriginCountry

      for (const country in countries) {
        if (Object.hasOwnProperty.call(countries, country)) {
          if (!countryDataForYear[country]) {
            countryDataForYear[country] = []
          }
          const countryData = countries[country]
          countryDataForYear[country].push([
            `us-${STATES_ABBREVIATIONS[stateData.state]}`,
            parseInt(countryData.cumulativeArrivals.replace(",", ""), 10)
          ])
        }
      }
    }
  }

  fs.writeFileSync(
    `./${year}countryData.json`,
    JSON.stringify(countryDataForYear)
  )
})
