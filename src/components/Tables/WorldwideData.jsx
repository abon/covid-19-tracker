import React, { useEffect, useState } from 'react'
import MaterialTable from 'material-table'

function WorldwideData() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const getCountriesData = async () => {
            fetch("https://disease.sh/v3/covid-19/countries/")
                .then((response) => response.json())
                .then((data) => {
                    const countries = data.map((country) => ({
                        name: country.country,
                        value: country.countryInfo.iso2,
                        cases: country.cases,
                        recovered: country.recovered,
                        active: country.active,
                        deaths: country.deaths,
                        critical: country.critical,

                    }));

                    setCountries(countries);
                });
        };

        getCountriesData();
    }, []);


    return (
        <div>

            <MaterialTable

                style={{ backgroundColor: '#f4f6ff', color: "#27496d", borderRadius: '8px' }}
                title="World COVID-19 Statistics"
                columns={[
                    {
                        title: 'Name', field: 'name',
                        cellStyle: {
                            // backgroundColor: '#f4f6ff',
                            color: '#0f4c75'
                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "arial",

                        }
                    },
                    {
                        title: 'Cases', field: 'cases',
                        cellStyle: {
                            // backgroundColor: '#16213E',
                            color: '#F8615A',
                            fontWeight: 'bolder',
                            fontSize: "15px"

                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "arial",
                        }
                    },
                    {
                        title: 'Recovered', field: 'recovered',
                        cellStyle: {
                            // backgroundColor: '#16213E',
                            color: '#00b8a9',
                            fontWeight: 'bolder',
                            fontSize: "15px"
                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "arial",
                        }
                    },
                    {
                        title: 'Active', field: 'active',
                        cellStyle: {
                            // backgroundColor: '#16213E',
                            color: '#ffb400',
                            fontWeight: 'bolder',
                            fontSize: "15px"
                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "arial",
                        }
                    },
                    {
                        title: 'Deaths', field: 'deaths',
                        cellStyle: {
                            // backgroundColor: '#16213E',
                            color: '#d72323',
                            fontWeight: 'bolder',
                            fontSize: "15px"
                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "arial",
                        }
                    },

                    {
                        title: 'Critical', field: 'critical',
                        cellStyle: {
                            // backgroundColor: '#16213E',
                            color: '#f79c1d',
                            fontWeight: 'bolder',
                            fontSize: "15px"

                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "arial",
                        }
                    },
                ]}

                data={countries}
                options={{
                    rowStyle: x => {
                        if (x.tableData.id % 2) {
                            return { backgroundColor: "#F4F6FF" }
                        } else {
                            return { backgroundColor: "#EBF0F6" }
                        }
                    }
                }}

            />
        </div>



    )
}

export default WorldwideData
