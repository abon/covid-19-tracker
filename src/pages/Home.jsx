import React, { useState, useEffect } from "react";
import "../Home.css";
import {
    QuickFactsBox,
    WorldwideData,
    UzbekistanData,
    USData,
    AsiaData,
    NorthAmericaData,
    SouthAmericaData,
    AfricaData,
    EuropeData,
    AustraliaData,
    Navbar,
} from "../components/index";


import { sortData, prettyPrintStat } from "../util";

// const API_URL = "https://disease.sh/v3/covid-19/countries";

function App() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState("worldwide");
    const [tableData, setTableData] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [countryInfo, setCountryInfo] = useState({});
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [mapCenter, setMapCenter] = useState({
        lat: "34.80746",
        lng: -40.4796,
    });



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

            <div className="app">
                <div className="app__left">
                    <div className="app__facts">
                        <QuickFactsBox />
                    </div>
                </div>
                <div className="app__right">
                    <WorldwideData />
                    <UzbekistanData />
                    <USData />
                    <AsiaData />
                    <EuropeData />
                    <AustraliaData />
                    <NorthAmericaData />
                    <SouthAmericaData />
                    <AfricaData />
                </div>
            </div>
        </div>
    );
}

export default App;