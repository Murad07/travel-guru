import React from 'react';
import Header from '../Header/Header';
import './Home.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import bgImg from '../../images/Image/rectangle1.png';

const Home = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='md'>
        <Typography
          component='div'
          style={{ backgroundImage: `url(${bgImg})`, height: '100vh' }}
        >
          <Header></Header>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Home;
