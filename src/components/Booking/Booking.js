import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import fakeData from '../../fakeData/index';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import './Booking.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
      backgroundColor: 'white',
    },
  },
}));

const Booking = () => {
  const classes = useStyles();
  const { id } = useParams();

  const locations = fakeData.filter((item) => item.id === parseInt(id));
  const { title, details } = locations[0];

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <div className='text-white px-4 pt-5'>
            <h1>{title}</h1>
            <p>{details}</p>
          </div>
        </Grid>
        <Grid item xs={6}>
          {/* <div className='formBg'> */}
          <form className={classes.root} noValidate autoComplete='off'>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <TextField
                  id='outlined-basic'
                  label='Origin'
                  variant='outlined'
                />
              </Grid>
              <Grid item>
                <TextField
                  id='outlined-basic'
                  label='Destination'
                  variant='outlined'
                />
              </Grid>
              <Grid item>
                <TextField
                  id='date'
                  label='From'
                  type='date'
                  defaultValue='2017-05-24'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <TextField
                  id='date'
                  label='To'
                  type='date'
                  defaultValue='2017-05-24'
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item>
                <Link to={`/hotel/${title}`} className='btn btn-warning '>
                  Start Booking
                </Link>
              </Grid>
            </Grid>
          </form>
          {/* </div> */}
        </Grid>
      </Grid>
    </div>
  );
};

export default Booking;
