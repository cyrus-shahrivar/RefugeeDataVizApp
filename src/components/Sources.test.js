import { render, screen } from "@testing-library/react"
import Sources from "./Sources"

test("renders data source text", () => {
  render(<Sources />)

  const sourcesEl = screen.getByText(
    "U.S. Department of State, Bureau of Population, Refugees, and Migration (PRM), Office of Admissions - Refugee Processing Center (RPC)"
  )

  expect(sourcesEl).toBeInTheDocument()
})
