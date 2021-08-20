import { render, screen } from "@testing-library/react"
import YearsList from "./YearsList"
import { yearsSupported } from "../data/processed/dataFormats"

test.each(yearsSupported)("renders year (%i)", (a) => {
  render(<YearsList />)

  const yearEl = screen.getByText(new RegExp(a), "i")
  expect(yearEl).toBeInTheDocument()
})

test.todo("clicking year results in desired user effect")
