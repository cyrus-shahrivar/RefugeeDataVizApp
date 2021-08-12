import { useState } from "react"
import { capitalize } from "../utils"

function CountryListText({ countriesByYear, updateCountrySelected }) {
  const [selectedIndex, setselectedIndex] = useState(0)

  const indicateCurrentSelection = (index) => {
    return selectedIndex === index ? "country-underline" : ""
  }

  const handleOnClick = (e, index) => {
    const country = e.currentTarget.innerText
    setselectedIndex(index)
    updateCountrySelected(country)
  }

  return (
    <div>
      {countriesByYear.map((country, index) => (
        <div
          className={`country ${indicateCurrentSelection(index)}`}
          key={index}
          onClick={(e) => handleOnClick(e, index)}
        >
          {capitalize(country)}
        </div>
      ))}
    </div>
  )
}

export default CountryListText
