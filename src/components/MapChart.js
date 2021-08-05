import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import usaGeoJson from "@highcharts/map-collection/countries/us/us-all.geo.json"
import { dataByCountry } from "../data/processed/dataFormats"

require("highcharts/modules/map")(Highcharts)

function MapChart({ countrySelected = "Afghanistan", yearSelected = 2010 }) {
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
    title: { text: undefined },
    colorAxis: {
      minColor: "#808080",
      maxColor: "#fdc82f"
    },
    series: [
      {
        mapData: usaGeoJson,
        name: "US",
        data: dataByCountry[yearSelected][countrySelected]
      }
    ]
  }

  return (
    <div className="map-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        constructorType={"mapChart"}
      />
    </div>
  )
}

export default MapChart
