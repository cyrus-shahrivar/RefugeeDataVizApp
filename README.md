# The Refugee Data Visualizer Project

- Creator: Cyrus Shahrivar
- Version 2.0.0 (August 2021)
- https://cyrus-shahrivar.github.io/RefugeeDataVizApp/

<img src="./docs/images/desktop-screenshot.png" alt="Screenshot of The Refugee Data Visualizer Application at desktop size" width="100%" />

## Purpose
This is a data visualization application that enables the public to explore refugee resettlement patterns for various groups arriving in the US for the recent past. The intent was to enable more informed dialogue in a time of heated, opinionated debate about refugees and immigration.

## Features
- US Government refugee resettlement data for 2010-2020 visualized with a choropleth map of the US and an accompanying bar chart broken down by number resettled in each state and origin country for individuals
- Allows user to dynamically switch between year resettled and origin country data sets
- Able to be viewed on very small screens (280px and above - Samsung Galaxy Fold minimum dimension) and responsive above that

## Technologies Used
- React
- Highcharts: A javascript data visualization library
- HTML/CSS/Vanilla JS
- csvtojson: npm library for data format conversion from csv to json

## Data Management Approach
- Data used for this project originated from the US Government State Department, Bureau of Population, Refugees, and Migration (PRM), Office of Admissions - Refugee Processing Center (RPC) - https://www.wrapsnet.org/archives/, most recently retrieved in August 2021
- The [original](./src/data/originals/) and [processed](./src/data/processed/) data has been saved with this project. A longer description of how data was managed can be found [here](./src/data/processed/README.md)

## Build & Deploy Instructions
Run `npm run deploy`. The package.json deploy and pre-deploy scripts utilize the gh-pages npm package to deploy the site to GitHub Pages. The deployed branch is on `gh-pages`.
## Follow-On TODOs
- [ ] Add tests for components using RTL and regular JEST unit test where needed
- [ ] Update data management README with additional processing made to extra countries per year and
- [ ] Fix bugs with different same country / different naming
- [ ] CSS markup/naming that makes sense
- [ ] Organize and explain data usage/transformations
- [ ] Add more accessibility features
- [ ] Add printable version via print styles
- [ ] Add tutorial mode with tooltips / more interactivity
- [ ] Add social share functionality / icons
- [ ] Add continuous integration
- [ ] Possible Performance Improvements
  - [ ] Migrate data files to be served and cached when needed

## Why Highcharts instead of original D3 Implementation?
The original version of this application was written in D3.js in 2015 and 2016 and the version of D3 used at the time was version 3.0. The current version of D3.js as of this writing (2021) is version 7.0. Many things have changed in the years since. React has exploded as a preferred UI library for frontend development, which has allowed everyone to write more readable, more modular code. In keeping with moving away from managing DOM changes directly as is preferred in the React ecosystem, I chose to leverage Highcharts instead of D3.js. Highchart is a highly used data visualization library with React that abstracts any direct DOM manipulation away from my code. In addition, the sheer amount of micromanagement of D3 code makes it difficult to maintain on an ongoing basis. Highcharts allows me to write understandable, manageable code where I don't have worry as much in keeping the project maintained. I may not come back to this in several years, so I would like something that I don't have to untangle as much as the previous D3 implementation.

## Why use create-react-app?
I chose to leverage `create-react-app` to establish the toolchain for this project so I could bring it into present day standards without worrying about specific choices on exactly what bundler I should use, how I should configure it, etc. This makes the conversion from a static, non-modular codebase into one that is componentized and easy to build and iterate on very quickly.

## References
- [Original Project README & Documentation - 2016](./docs/original-project.md)
- [create-react-app Boilerplate Documentation](./docs/create-react-app-boilderplate.md)

## License
- Highsoft has granted me usage of their software via email confirmation for a "Highsoft Non-Commercial License" on the following products:
  - Highcharts|Highcharts Maps (Granted: 8/12/2021)