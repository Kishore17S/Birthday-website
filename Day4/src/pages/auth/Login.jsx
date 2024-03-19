import { useNavigate } from 'react-router-dom';
import '../../assets/css/login.css'
import React, { useState } from 'react';
import logo from '../../assets/images/logo.png'



const Login = () => {
  const navigate=useNavigate();
  const handleLogin = () => {
    navigate("/user/home")
  }

  const handlesignup =()=>
  {
    navigate("/register")
  }
  const handleforgotpassword =()=>
  {
    navigate("/forgotpassword")
  }
  

  return (
    // <div>
    //   Login
    // </div>
    <div className='login_background'>
    <div className='login_container'>
  {/*<div className="container">*/}
      <div className="login form">
     {/* <img className="login_logo"
          src={logo} 
          alt=""
          srcset=""             
  />*/}
        <header className='login_header'>Login</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <a className="login_a" onClick={handleforgotpassword}>Forgot password?</a>
          <input type="button" className="button" onClick={handleLogin} value="Login" />
        </form>
        <div className="login_signup">
          <span className="login_signup">
            Don't have an account? <label className="login_label" htmlFor="logincheck" onClick={handlesignup}>Signup</label>
          </span>
        </div>
        </div>
        </div>

        </div>
        // </div>
        
        

    
   
    );
  }
  
  export default Login



