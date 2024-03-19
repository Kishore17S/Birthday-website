import '../../assets/css/login.css'

const Register = () => {
  return (
    // <div>
    //   register
    // </div>
    <div className="container">
      <div className="login form">
        <header>Register</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input type="password" placeholder="Confirm your password" />
          <input type="button" className="button" value="Signup" />
        </form>
        <div className="signup">
          <span className="signup" >
          Already have an account?<label htmlFor="check">Login</label>
          </span>
        </div>

        </div>
        </div>
  );
}

export default Register
