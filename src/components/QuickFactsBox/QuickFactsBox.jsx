import React, { useState, useEffect } from 'react'
import numeral from 'numeral';

import './QuickFactsBox.css';

function QuickFactsBox() {

    const [countryInfo, setCountryInfo] = useState({});


    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/all/")
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
    }, []);

    return (
        <div className="factBox">
            <div className="factBox__headline">
                Quick Facts
                <span class="pulse "></span>
            </div>
            <p className="factBox__updatedTime">updates every 10 mins </p>
            <div className="factBox__cases">
                <h2 className="cases__data" >{numeral(countryInfo.cases).format("0,0")}</h2>
                <h4 className="cases">Total Cases</h4>
            </div>

            <div className="factBox__recovered">
                <h2 className='recovered__data'>{numeral(countryInfo.recovered).format("0,0")}</h2>
                <h4 className="recovered">Total Recovered</h4>
            </div>
            <div className="factBox__active">
                <h2 className="active__data">{numeral(countryInfo.active).format("0,0")}</h2>
                <h4 className="active">Total Active</h4>
            </div>


            <div className="factBox__critical">
                <h2 className="critical__data">{numeral(countryInfo.critical).format("0,0")}</h2>
                <h4 className="critical">Total Critical</h4>
            </div>

            <div className="factBox__deaths">
                <h2 className="deaths__data">{numeral(countryInfo.deaths).format("0,0")}</h2>
                <h4 className="deaths">Total Deaths</h4>
            </div>



        </div>
    )
}

export default QuickFactsBox
