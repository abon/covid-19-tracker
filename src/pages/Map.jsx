import React, { useState, useEffect } from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from "../util";
import "leaflet/dist/leaflet.css";
import './Map.css';

function Map() {
    const [casesType, setCasesType] = useState("cases");
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [mapCenter, setMapCenter] = useState({
        lat: 35.460670,
        lng: -11.119484,
    });



    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries/")
            .then((response) => response.json())
            .then((data) => {
                const countries = data.map((country) => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
                setMapCountries(data);
            });
    }, []);

    const onCountryChange = async (event) => {
        const countryCode = event.target.value;

        const url =
            countryCode === "worldwide"
                ? "https://disease.sh/v3/covid-19/all/"
                : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

        await fetch(url)
            .then((response) => response.json())
            .then((data) => {
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
