import React from "react";
import styles from "./cards.module.css";
import { Grid, Typography, CardContent, Card } from "@material-ui/core";

const Cards = props => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary" gutterBottom>
              REAL DATE
            </Typography>
            <Typography variant="body2" gutterBottom>
              number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary" gutterBottom>
              REAL DATE
            </Typography>
            <Typography variant="body2" gutterBottom>
              number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">Real Data</Typography>
            <Typography color="textSecondary" gutterBottom>
              REAL DATE
            </Typography>
            <Typography variant="body2" gutterBottom>
              number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
