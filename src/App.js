import React, { createContext, useState } from 'react';
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
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
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
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
              <Header></Header>
              <Switch>
                <Route path='/booking/:id'>
                  <Booking />
                </Route>
                <PrivateRoute path='/hotel/:title'>
                  <Hotel></Hotel>
                </PrivateRoute>
                <Route path='/login'>
                  <Login></Login>
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </Router>
          </UserContext.Provider>
        </Typography>
      </Container>
    </React.Fragment>
  );
}

export default App;
