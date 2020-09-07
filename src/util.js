import React from "react";
import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#d72323",
    multiplier: 800,
  },
  recovered: {
    hex: "#2eb872",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fbf0f0",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  let sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return sortedData;
};

export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <div className="info-container">
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="info-name">{country.country}</div>
          <div className="info-confirmed">
            Cases:
            <span style={{ color: "#fa1616" }}>
              {numeral(country.cases).format("0,0")}
            </span>
          </div>
          <div className="info-recovered">
            Recovered:
            <span style={{ color: "#45BF83" }}>
              {numeral(country.recovered).format("0,0")}
            </span>
          </div>

          <div className="info-active">
            Active:
            <span style={{ color: "#fddb3a" }}>
              {numeral(country.active).format("0,0")}
            </span>
          </div>
          <div className="info-critical">
            Critical:
            <span style={{ color: "#ff9234" }}>
              {numeral(country.critical).format("0,0")}
            </span>
          </div>
          <div className="info-deaths">
            Deaths:
            <span style={{ color: "#b2ebf2" }}>
              {numeral(country.deaths).format("0,0")}
            </span>
          </div>
        </div>
      </Popup>
    </Circle>
  ));
