import { useState } from "react"
import { yearsSupported } from "../data/processed/dataFormats"

function YearsList({ updateYearSelected }) {
  const [selectedIndex, setselectedIndex] = useState(0)
  const handleOnClick = (e, index) => {
    const year = +e.currentTarget.innerText
    setselectedIndex(index)
    updateYearSelected(year)
  }

  const indicateCurrentSelection = (index) => {
    return selectedIndex === index ? "year-underline" : ""
  }

  return (
    <ul className="years-list">
      {yearsSupported.map((year, index) => (
        <li
          className={`year ${indicateCurrentSelection(index)}`}
          key={index}
          onClick={(e) => handleOnClick(e, index)}
        >
          {year}
        </li>
      ))}
    </ul>
  )
}

export default YearsList
