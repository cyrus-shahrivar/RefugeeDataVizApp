import { render, screen } from "@testing-library/react"
import GithubLink from "./GitHubLink"

test("renders github link image", () => {
  render(<GithubLink />)

  const githubLinkEl = screen.getByAltText(
    "GitHub Octocat icon link taking you to code repository"
  )

  expect(githubLinkEl).toBeInTheDocument()
})
