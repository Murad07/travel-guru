import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser.name);
  return (
    <div>
      <nav className='navbar navbar-light '>
        <a href='/home' className='navbar-brand'>
          <img src={logo} height='30' alt='' />
        </a>

        <div>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          ></input>
        </div>

        <Link className='menuBtn' to='/home'>
          Home
        </Link>
        <Link className='menuBtn' to='/home'>
          Destination
        </Link>
        <Link className='menuBtn' to='/home'>
          Blog
        </Link>
        <Link className='menuBtn' to='/home'>
          Contact
        </Link>

        <div>
          {!loggedInUser.isSignIn ? (
            <Link to='/login' className='btn btn-warning my-2 mr-sm-0'>
              Login
            </Link>
          ) : (
            <Link
              onClick={() => setLoggedInUser({})}
              to='/home'
              className='btn btn-warning my-2 mr-sm-0'
            >
              Sign Out
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
