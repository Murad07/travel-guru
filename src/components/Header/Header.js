import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav className='navbar navbar-light '>
        <a href='/' className='navbar-brand'>
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

        <a className='nav-link text-white' href='#'>
          News
        </a>
        <a className='nav-link text-white' href='#'>
          Destination
        </a>
        <a className='nav-link text-white' href='#'>
          Blog
        </a>
        <a className='nav-link text-white' href='#'>
          Contact
        </a>
        <div>
          <a href='/sign-up' className='btn btn-warning my-2 mr-sm-0'>
            Login
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;
