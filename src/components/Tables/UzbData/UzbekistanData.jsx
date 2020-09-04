import React, { useState, useEffect } from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import './UzbekistanData.css';

const API_URL = 'https://disease.sh/v3/covid-19/countries/uzbekistan?strict=true'
const IMG_URL = 'https://disease.sh/assets/img/flags/uz.png'

function UzbekistanData() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])

    return (
        <TableContainer className='table__container' component={Paper}>
            <Toolbar className='table__toolbar'>
                <img src={IMG_URL} style={{ height: 20, width: 30, paddingRight: 10 }} alt="" />
                <Typography className='toolbar__header' >
                    Uzbekistan COVID-19 Statistics
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
                        {data.country}
                    </TableCell >
                    <TableCell className='cell__cases' >
                        {data.cases}
                    </TableCell>
                    <TableCell className='cell__recovered'>
                        {data.recovered}
                    </TableCell>
                    <TableCell className='cell__active'>
                        {data.active}
                    </TableCell>
                    <TableCell className='cell__deaths'>
                        {data.deaths}
                    </TableCell>
                    <TableCell className='cell__critical'>
                        {data.critical}
                    </TableCell>
                </TableBody>
            </Table>
        </TableContainer>

    )
}

export default UzbekistanData
