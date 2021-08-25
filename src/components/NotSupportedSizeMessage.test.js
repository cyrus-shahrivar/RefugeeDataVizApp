import { render, screen } from "@testing-library/react"
import NotSupportedSizeMessage from "./NotSupportedSizeMessage"

test("renders NotSupportedSizeMessage", () => {
  render(<NotSupportedSizeMessage />)

  const notSupportedSizeMessageEl = screen.getByText(/not supported/i)

  expect(notSupportedSizeMessageEl).toBeInTheDocument()
})
