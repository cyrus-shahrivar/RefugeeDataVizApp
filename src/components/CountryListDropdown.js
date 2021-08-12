import { capitalize } from "../utils"

function CountryListDropdown({ countriesByYear, updateCountrySelected }) {
  const handleOnChange = (e) => {
    const country = e.target.value
    updateCountrySelected(country)
  }

  return (
    <div>
      <select onChange={handleOnChange}>
        {countriesByYear.map((country, index) => (
          <option key={index} value={country}>
            {capitalize(country)}
          </option>
        ))}
      </select>
      <div className="number-of-countries">
        # of Countries {countriesByYear.length}
      </div>
    </div>
  )
}

export default CountryListDropdown
