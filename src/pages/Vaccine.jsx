import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'


const API_URL = 'https://disease.sh/v3/covid-19/vaccine';

function Vaccine() {

    const [vacData, setVacData] = useState([])
    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                const vaccines = data.data.map((vac) => ({
                    candidate: vac.candidate,
                    sponsors: vac.sponsors,
                    details: vac.details,
                    trialPhase: vac.trialPhase,
                    institutions: vac.institutions,
                    funding: vac.funding,
                }))
                setVacData(vaccines)
            })
    }, [])

    console.log(vacData)

    return (
        <div >
            <MaterialTable

                style={{ backgroundColor: '#f4f6ff', color: "#27496d", borderRadius: '8px' }}
                title="Coronavirus Vaccines in development"
                columns={[
                    {
                        title: 'Candidate', field: 'candidate',
                        cellStyle: {
                            backgroundColor: '#f4f6ff',
                            color: '#d54062',
                            fontWeight: 'bold',
                            fontFamily: "Poppins,sans-serif",

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
                        title: 'Sponsors', field: 'sponsors',
                        cellStyle: {
                            backgroundColor: '#EBF0F6',
                            color: '#30475e',
                            fontWeight: 'bold',
                            fontSize: "15px",
                            fontFamily: "Poppins,sans-serif",


                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            fontFamily: "Poppins,sans-serif",
                        }
                    },

                    {
                        title: 'Funding', field: 'funding',
                        cellStyle: {
                            backgroundColor: '#f4f6ff',
                            color: '#30475e',
                            fontWeight: 'bold',
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
                        title: 'Institutions', field: 'institutions',
                        cellStyle: {
                            backgroundColor: '#EBF0F6',
                            color: '#30475e',
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
                        title: 'Trial Phase', field: 'trialPhase',
                        cellStyle: {
                            backgroundColor: '#f4f6ff',
                            color: '#30475e',
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
                        title: 'Details', field: 'details',
                        cellStyle: {
                            backgroundColor: '#EBF0F6',
                            color: '#30475e',
                            fontWeight: 'lighter',
                            fontSize: "13px",
                            lineHeight: 2,
                            fontFamily: "Poppins,sans-serif",
                            width: 610,
                            minWidth: 610,
                            height: 50,
                            maxHeight: 50
                        },
                        headerStyle: {
                            backgroundColor: '#d6e0f0',
                            color: '#0f4c75',
                            fontSize: "12px",
                            fontWeight: "bolder",
                            textAlign: 'center',
                            fontFamily: "Poppins,sans-serif",
                            width: 610,
                            minWidth: 610
                        }
                    },
                ]}

                data={vacData}
            />
        </div>
    )
}

export default Vaccine
