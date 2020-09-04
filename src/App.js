import React, { useState, useEffect } from "react";
import {
  MenuItem,
  FormControl,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";

import numeral from "numeral";
import "./App.css";
import "leaflet/dist/leaflet.css";

// import Navbar from "./Navbar";
import InfoBox from "./InfoBox";
import Map from "./Map";
import Table from "./Table";
import LineGraph from "./LineGraph";
import QuickFactsBox from "./components/QuickFactsBox/QuickFactsBox";
import WorldwideData from "./components/Tables/WorldwideData";
import UzbekistanInfo from "./components/Tables/UzbData/UzbekistanData";
import { sortData, prettyPrintStat } from "./util";

// const API_URL = "https://disease.sh/v3/covid-19/countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({
    lat: "34.80746",
    lng: -40.4796,
  });

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all/")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      fetch("https://disease.sh/v3/covid-19/countries/")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          const sortedData = sortData(data);
          setCountries(countries);
          setTableData(sortedData);
          setMapCountries(data);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all/"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
        setCountry(countryCode);

        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="app">
        <div className="app__left">
          <div className="app__facts">
            <QuickFactsBox countryInfo={countryInfo} />
            <h1 className="bg-white mt-3">Country List Goes here</h1>
          </div>
        </div>
        <div className="app__right">
          <WorldwideData />
          <UzbekistanInfo />
        </div>
      </div>
    </div>
  );
}

export default App;
