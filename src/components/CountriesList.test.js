import { render, screen } from "@testing-library/react"
import CountriesList from "./CountriesList"
import countries from "../data/processed/countriesPerYear.json" // eslint-disable-line

jest.mock("../data/processed/countriesPerYear.json", () => {
  return {
    2100: ["Afghanistan"]
  }
})

test("renders countries list no matter list UI type", () => {
  render(<CountriesList yearSelected={2100} updateCountrySelected={() => {}} />)

  const countryListEls = screen.getAllByText(/afghanistan/i)
  // TODO: another reason why rendering both should be fixed
  const textListEl = countryListEls[0]
  const dropdownListEl = countryListEls[1]

  expect(textListEl).toBeInTheDocument()
  expect(dropdownListEl).toBeInTheDocument()
})
