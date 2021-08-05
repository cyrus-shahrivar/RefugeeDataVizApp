import githubLogo from "../GitHub-Mark-120px-plus.png"

function GithubLink() {
  return (
    <div className="github">
      <a
        href="https://github.com/cyrus-shahrivar/refugeeDataViz"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={githubLogo}
          alt="GitHub Octocat icon link taking you to code repository"
          className="github-link"
        />{" "}
      </a>
    </div>
  )
}

export default GithubLink
