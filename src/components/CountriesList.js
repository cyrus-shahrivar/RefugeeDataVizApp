import countries from "../data/processed/countriesPerYear.json"
import CountryListDropdown from "./CountryListDropdown"
import CountryListText from "./CountryListText"

function CountriesList({ yearSelected, updateCountrySelected }) {
  const countriesByYear = countries[yearSelected]

  return (
    <div>
      <div className="countries-list--large-screen">
        <CountryListText
          countriesByYear={countriesByYear}
          updateCountrySelected={updateCountrySelected}
        />
      </div>
      <div className="countries-list--small-screen">
        <CountryListDropdown
          countriesByYear={countriesByYear}
          updateCountrySelected={updateCountrySelected}
        />
      </div>
    </div>
  )
}

export default CountriesList
