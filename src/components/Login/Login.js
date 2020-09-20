import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <form>
      <h5>Login</h5>

      <div className='form-group'>
        <input
          type='email'
          className='form-control'
          placeholder='Username or Email'
        />
      </div>

      <div className='form-group'>
        <input
          type='password'
          className='form-control'
          placeholder='Password'
        />
      </div>

      <div className='form-group'>
        <div className='custom-control custom-checkbox'>
          <input
            type='checkbox'
            className='custom-control-input'
            id='customCheck1'
          />
          <label
            className='custom-control-label col-md-6'
            htmlFor='customCheck1'
          >
            Remember me
          </label>
          <label className='col-md-6 text-right'>
            <a className='customAnchor' href='#'>
              Forgot password?
            </a>
          </label>
        </div>
      </div>

      <button type='submit' className='btn btn-warning btn-block'>
        Login
      </button>

      <label className='pt-2 pl-4'>
        Don't have an account?{' '}
        <a className='customAnchor' href='#'>
          Create a Account
        </a>
      </label>

      <div class='separator'>Or</div>
    </form>
  );
};

export default Login;
