import React, { useState } from 'react';
import './Login.css';
import fbImg from '../../images/Icon/fb.png';
import googleImg from '../../images/Icon/google.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import {
  initializeLoginFramework,
  handleGoogleSignIn,
  handleSignOut,
  handleFBLogin,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from './loginManager';

const Login = () => {
  const callSignUpForm = () => {
    setNewUser(true);
  };
  const callLoginForm = () => {
    setNewUser(false);
  };

  let matchPassword;
  let passwordNotMatch;
  const [newPassword, setNewPassword] = useState({
    isPasswordMatch: false,
    myPassword: '',
  });

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { form: { pathname: '/' } };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          handleResponse(res, true);
        }
      );
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        handleResponse(res, true);
      });
    }
    e.preventDefault();
  };

  const handleResponse = (res, redirect) => {
    setUser(res);
    console.log('res: ', res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleOnBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }

    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 7;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      newPassword.myPassword = e.target.value;
      setNewPassword(newPassword);
    }

    if (e.target.name === 'confirm-password') {
      let isMatch = false;

      if (e.target.value === newPassword.myPassword && e.target.value !== '') {
        isMatch = true;
      }
      if (!isMatch) {
        alert('Password not matching!');
      }
      isFieldValid = isMatch;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

    console.log(isFieldValid, newPassword);
  };

  initializeLoginFramework();

  const googleSignIn = () => {
    handleGoogleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };

  const fbSignIn = () => {
    handleFBLogin().then((res) => {
      handleResponse(res, true);
    });
  };

  return (
    <div className='formBlade'>
      {!loggedInUser.isSignIn && (
        <div>
          <form onSubmit={handleSubmit}>
            <h5>Login</h5>

            {newUser && (
              <div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    placeholder='First Name'
                    onBlur={handleOnBlur}
                    required
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='last-name'
                    className='form-control'
                    placeholder='Last Name'
                    onBlur={handleOnBlur}
                    required
                  />
                </div>
              </div>
            )}

            <div className='form-group'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Username or Email'
                onBlur={handleOnBlur}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='Password'
                onBlur={handleOnBlur}
                required
              />
            </div>

            {newUser && (
              <div className='form-group'>
                <input
                  type='password'
                  name='confirm-password'
                  className='form-control'
                  placeholder='Confirm Password'
                  onBlur={handleOnBlur}
                  required
                />
              </div>
            )}

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
              {newUser ? 'Sing Up' : 'Login'}
            </button>
          </form>

          {!newUser ? (
            <label className='pt-2 alignCenter'>
              Don't have an account?{' '}
              <Link
                to='/login'
                onClick={callSignUpForm}
                className='customAnchor'
              >
                Create a Account
              </Link>
            </label>
          ) : (
            <label className='pt-2 alignCenter'>
              Already have an account?{' '}
              <Link
                to='/login'
                onClick={callLoginForm}
                className='customAnchor'
              >
                Login
              </Link>
            </label>
          )}

          <div className='separator'>Or</div>

          {/* Social Media Login */}

          <div>
            <div className='pt-3 px-5'>
              <button onClick={fbSignIn} className='socialBtn'>
                <img
                  src={fbImg}
                  height='25'
                  width='25'
                  alt=''
                  className='mr-5'
                />
                Continue With Facebook
              </button>
            </div>
            <div className='pt-3 px-5'>
              <button onClick={googleSignIn} className='socialBtn'>
                <img
                  src={googleImg}
                  height='25'
                  width='25'
                  alt=''
                  className='mr-5'
                />
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      )}

      {user.success && (
        <p style={{ color: 'green' }}>
          {newUser ? 'Create User' : 'Login In'} Succesfuly
        </p>
      )}
    </div>
  );
};

export default Login;
