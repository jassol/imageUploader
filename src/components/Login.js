import React, { useState } from 'react';
import PageHeader from './PageHeader';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
  const { logIn, title } = props;
  const path = title === 'Log In' ? '/login' : '/signup';

  const [formData, setFormData] = useState({
    email: '',
    pswd: ''
  });

  const [error, setError] = useState({
    status: 0,
    message: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setError({
        status: 0,
        message: ''
      });
      const queryString = '/auth' + path;
      const { data } = await axios.put(queryString, formData);
      // line below reloads app as a logged in user
      logIn(data);
    } catch (err) {
      setError({
        status: err.response.status,
        message: err.response.data.message
      })
    }
  }

  return (
    <div>
      <PageHeader title={title} />
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <h6 className='error'>{error.message}</h6>
          <div>
            <label htmlFor='email'>E-mail</label>
            <br />
            <input
              type='text'
              name='email'
              onChange={handleChange}
              value={formData.email}
              required>
            </input>
          </div>
          <div>
            <label htmlFor='pswd'>Password</label>
            <br />
            <input
              type='text'
              name='pswd'
              onChange={handleChange}
              value={formData.pswd}
              required>
            </input>
          </div>
          <div>
            <input type='submit' value={title}></input>
          </div>
          <LoginSubtext path={path} />
        </form>
      </div>
    </div>
  )
}

const LoginSubtext = (props) => {
  return (props.path === '/login') ? (
    <h6>Don't have an account yet? Create one&nbsp;
    <Link to='/signup'>here</Link>
    </h6>
  ) : (
    <h6>Already have an account? Log in&nbsp;
    <Link to='/login'>here</Link>
    </h6>
  )
};

export default Login;
