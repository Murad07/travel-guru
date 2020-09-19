import React from 'react';
import './Home.css';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LocationCard from '../LocationCard/LocationCard';
import fakeData from './../../fakeData/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const classes = useStyles();

  const location = fakeData;

  return (
    <div className='marginTop'>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={6} className={classes.detail}>
            <div className='paddingLeft'>
              <h1>COX'S BAZAR</h1>
              <p>Detail text about cox's bazar.</p>
              <a href='/booking/1' className='btn btn-warning my-2 mr-sm-0'>
                Booking
              </a>
            </div>
          </Grid>
          <Grid item xs={2}>
            <LocationCard location={location[0]}></LocationCard>
          </Grid>
          <Grid item xs={2}>
            <LocationCard location={location[1]}></LocationCard>
          </Grid>
          <Grid item xs={2}>
            <LocationCard location={location[2]}></LocationCard>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
