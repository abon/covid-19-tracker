import React from 'react'

import numeral from 'numeral';

import './QuickFactsBox.css'

function QuickFactsBox({ countryInfo, countries }) {
    return (
        <div className="factBox">
            <h1 className="factBox__headline">Quick Facts</h1>
            <p className="factBox__updatedTime">updated at: </p>


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
