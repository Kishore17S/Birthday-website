import { useNavigate } from 'react-router-dom';
import '../../assets/css/ForgotPassword.css';


const ForgotPassword = () => {
  const navigate=useNavigate();
  const handlepassword =() =>
  {
    navigate("/login")
  }
  return (
    <div className='forgotpass_background'>
    <div className='forgotpass_container'>
  
      <div className="login form">
        <header className='forgotpass_header'>Retrive Password</header>
        <form action="#">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter new password" />
          <input type="password" placeholder="Conform your new password" />
          <input type="button" className="button" onClick={handlepassword} value="Update password" />
        </form>
        
        </div>
        </div>

        </div>
  )
}

export default ForgotPassword
