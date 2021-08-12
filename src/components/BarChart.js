import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import {
  STATES_ABBREVIATIONS,
  ORDERED_STATES_ABBREVIATIONS
} from "../data/mapData"
import { dataByCountry } from "../data/processed/dataFormats"

function BarChart({ yearSelected, countrySelected }) {
  const dataTransformed = ORDERED_STATES_ABBREVIATIONS.map((abbrev) => {
    const stateData = dataByCountry[yearSelected][countrySelected].find(
      (item) => item[0] === `us-${abbrev}`
    )
    console.log(stateData)
    return stateData ? stateData[1] : 0
  })

  const options = {
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500
          }
        }
      ]
    },
    chart: {
      type: "bar",
      height: 650
    },
    title: { text: undefined },
    xAxis: {
      categories: Object.keys(STATES_ABBREVIATIONS),
      labels: {
        step: 1
      }
    },
    yAxis: {
      title: {
        text: "People Resettled"
      }
    },
    legend: {
      enabled: false
    },
    series: [
      {
        data: dataTransformed,
        color: "#fdc82f"
      }
    ]
  }
  return (
    <div className="bar-chart">
      {dataTransformed && (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </div>
  )
}

export default BarChart
