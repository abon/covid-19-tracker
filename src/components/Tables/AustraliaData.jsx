import React, { useState, useEffect } from 'react';
import numeral from 'numeral';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const API_URL = 'https://disease.sh/v3/covid-19/continents/Australia%2FOceania?strict=true'


function AsiaData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [])

    return (
        <TableContainer className='table__container' component={Paper}>
            <Toolbar className='table__toolbar'>
                <Typography className='toolbar__header' >
                    Australia/Oceania COVID-19 Statistics
                </Typography>
            </Toolbar>
            <Table className="table" aria-label="simple table">
                <TableHead className='table__head'>
                    <TableRow className='table__row'>
                        <TableCell className='table__cell' >Name</TableCell>
                        <TableCell className='table__cell'>Cases</TableCell>
                        <TableCell className='table__cell' >Recovered</TableCell>
                        <TableCell className='table__cell'>Active</TableCell>
                        <TableCell className='table__cell'>Deaths</TableCell>
                        <TableCell className='table__cell'>Critical</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='table__body'>
                    <TableCell className='cell__country'>
                        {data.continent}
                    </TableCell >
                    <TableCell className='cell__cases' >
                        {numeral(data.cases).format("0,0")}
                    </TableCell>
                    <TableCell className='cell__recovered'>
                        {numeral(data.recovered).format("0,0")}
                    </TableCell>
                    <TableCell className='cell__active'>
                        {numeral(data.active).format("0,0")}
                    </TableCell>
                    <TableCell className='cell__deaths'>
                        {numeral(data.deaths).format("0,0")}
                    </TableCell>
                    <TableCell className='cell__critical'>
                        {numeral(data.critical).format("0,0")}
                    </TableCell>
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default AsiaData
