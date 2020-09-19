import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import bgImg from './images/Image/rectangle1.png';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Hotel from './components/Hotel/Hotel';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Typography
          component='div'
          style={{
            backgroundImage: `url(${bgImg})`,
            height: '100vh',
          }}
        >
          <Header></Header>

          <Router>
            <Switch>
              <Route path='/booking/:id'>
                <Booking />
              </Route>
              <Route path='/hotel/:title'>
                <Hotel></Hotel>
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Router>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
