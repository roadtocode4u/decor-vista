import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import BackgroundImg from "./cartoon-boys.jpeg";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem("userEmail", email);
      toast.success('Login Successful!')
      setEmail('')
      setPassword('')

    } else {
      toast.error('Please enter your email and password!');
    }
  };

  return (
    <div className='container-fluid px-0'>
      <div className='row m-0'>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center p-5 bg-body-success'>
          <h1 className='text-center text-primary'>Decor Vista</h1>
          <h2 className='text-center m-3'>Welcome to Your Dream Home Inspiration"</h2>
          <div className="login-form text-center">
            <div className='form-group'>
              <input
                className={`form-control ${email ? 'has-value' : ''}`}
                type="email"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor='email' className='form-label'>Email</label>
            </div>
            <div className='form-group'>
              <input
                className={`form-control ${password ? 'has-value' : ''}`}
                type="password"
                id="password"
                placeholder=" "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor='password' className='form-label'>Password</label>
            </div>

            <button
              onClick={handleLogin}
              className='btn btn-primary rounded px-4 py-2 mb-3 w-50'
              aria-label="Login"
            >
              Log In
            </button>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
          </div>
        </div>
        <div className='col-12 col-md-6 p-0'>
          <img
            src={BackgroundImg}
            alt="Living Room"
            className='w-100 h-500'
            style={{ objectFit: 'cover' }}
          />
          <h4 className='position-absolute top-0 end-2 bg-secondary p-2 text-light rounded m-1'>Transform Your Space with Creativity and Style</h4>
          
          <h4 className='position-absolute top-2 end-2 bg-secondary p-2 text-light rounded m-2'>Discover the Art of Perfect Home Decoration</h4>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
