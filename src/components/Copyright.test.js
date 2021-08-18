import { render, screen } from "@testing-library/react"
import Copyright from "./Copyright"

test("renders copyright text", () => {
  render(<Copyright />)

  const currentYear = new Date().getFullYear().toString()
  const currentYearText = screen.getByText(new RegExp(currentYear), "i")
  const copyrightName = screen.getByText(/Copyright/i)
  const name = screen.getByText(/Cyrus Shahrivar/i)

  expect(currentYearText).toBeInTheDocument()
  expect(copyrightName).toBeInTheDocument()
  expect(name).toBeInTheDocument()
})
