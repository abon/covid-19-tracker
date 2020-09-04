import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';


import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const API_URL = 'https://disease.sh/v3/covid-19/states';

function USData() {

    const [usData, setUsData] = useState([])

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                const getData = data.map((us) => ({
                    state: us.state,
                    cases: us.cases,
                    recovered: us.recovered,
                    active: us.active,
                    deaths: us.deaths,
                }))
                setUsData(data)
            })
    }, [])


    return (
        <div style={{ marginTop: 30 }}>
            <MaterialTable
                style={{ backgroundColor: '#f4f6ff', color: "#27496d", borderRadius: '8px' }}
                title="USA COVID-19 Statistics"

                columns={[
                    {
                        title: 'State', field: 'state',
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


                ]}

                data={usData}
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

export default USData
