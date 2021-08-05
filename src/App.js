import "./App.css"
import MapChart from "./components/MapChart"
import CountriesList from "./components/CountriesList"
import YearsList from "./components/YearsList"
import Header from "./components/Header"
import { useState } from "react"
import BarChart from "./components/BarChart"
import Footer from "./components/Footer"
import NotSupportedSizeMessage from "./components/NotSupportedSizeMessage"

function App() {
  const [yearSelected, setyearSelected] = useState(2010)
  const [countrySelected, setcountrySelected] = useState("Afghanistan")
  const updateYearSelected = (year) => setyearSelected(year)
  const updateCountrySelected = (country) => setcountrySelected(country)

  console.log(yearSelected, " ", countrySelected)

  return (
    <div className="App">
      <Header />
      <main>
        <YearsList updateYearSelected={updateYearSelected} />
        <CountriesList
          updateCountrySelected={updateCountrySelected}
          yearSelected={yearSelected}
        />
        <MapChart
          countrySelected={countrySelected}
          yearSelected={yearSelected}
        />
        <BarChart
          countrySelected={countrySelected}
          yearSelected={yearSelected}
        />
      </main>
      <NotSupportedSizeMessage />
      <Footer />
    </div>
  )
}

export default App
