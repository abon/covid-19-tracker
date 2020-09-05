import React, { useState, useEffect } from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";

import { showDataOnMap } from "../util";
import { sortData, prettyPrintStat } from "../util";

import "leaflet/dist/leaflet.css";


function Map() {
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
            <div className="map">
                <LeafletMap center={mapCenter} zoom={mapZoom} >
                    <TileLayer
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {showDataOnMap(mapCountries, casesType)}
                </LeafletMap>
            </div>
        </div>
    )
}

export default Map
