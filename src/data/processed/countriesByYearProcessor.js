const fs = require("fs")
const data2010 = require("./2010countryData.json")
const data2011 = require("./2011countryData.json")
const data2012 = require("./2012countryData.json")
const data2013 = require("./2013countryData.json")
const data2014 = require("./2014countryData.json")
const data2015 = require("./2015countryData.json")
const data2016 = require("./2016countryData.json")
const data2017 = require("./2017countryData.json")
const data2018 = require("./2018countryData.json")
const data2019 = require("./2019countryData.json")
const data2020 = require("./2020countryData.json")

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

const countriesPerYear = {}

years.forEach(({ year, data }) => {
  countriesPerYear[year] = Object.keys(data).sort()
})

fs.writeFileSync("./countriesPerYear.json", JSON.stringify(countriesPerYear))
