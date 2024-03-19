import '../../assets/css/signup.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate=useNavigate();

  const handlelogin =()=>
  {
    navigate("/login")
  }
  const handlesignup =()=>
  {
    navigate("/user/home")
  }
  return (
    // <div>
    //   register
    // </div>
    <div className='register_background'>
    <div className='register_container'>
 {/* <div className="container">*/}
      <div className="login form">
        <header className='register_header'>Register</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="text" placeholder="Enter your name" />
          <input type="phnumber" placeholder="Enter your number" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
          <input type="button" className="button" onClick={handlesignup} value="Signup" />
        </form>
        <div className="register_signup">
          <span className="register_signup" >
          Already have an account? <label className='register_label' htmlFor="check" onClick={handlelogin}>Login</label>
          </span>
        </div>

        </div>
        </div>
        </div>
  );
}

export default Register
