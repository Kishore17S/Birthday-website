import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css'
import React, { useState } from 'react';


const Login = () => {
  const navigate=useNavigate();
  const handleLogin = () => {
    navigate("/navbar")
  }
  

  return (
    // <div>
    //   Login
    // </div>
    <div className="container">
      <div className="login form">
        <header>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <a href="#">Forgot password?</a>
          <input type="button" className="button" onClick={handleLogin}value="Login" />
        </form>
        <div className="signup">
          <span className="signup">
            Don't have an account? <label htmlFor="check">Signup</label>
          </span>
        </div>
        </div>

        </div>
        
        

    
   
    );
  }
  
  export default Login



