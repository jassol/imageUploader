import React, { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    pswd: ''
  })

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  };

  return (
    <div className='form-container'>
      <form onSubmit={()=>{}}>
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
          <input type='submit' value='Log In'></input>
        </div>
      </form>
    </div>
  )
}

export default Login;
