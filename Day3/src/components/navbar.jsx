import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import ME from '../assets/images/me.jpg';
const navbar = () => {
  return (
 
        <div className='b_navbar1'>
        <ul style={{listStyle:"none",marginTop:'30px'}}>
        <img src={ME} alt="Avatar" style={{height:"8vh",width:"5%"}} className='navbar_logo'></img>
        <div className='navbar_heading'>MOMENTOUS ENDEAVORS</div>
        <Link style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'700px',fontSize:'20px'}} to="/user/home"><li>Home</li></Link>
        <Link style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'850px',fontSize:'20px'}} to="/user/aboutus"><li>About Us</li></Link>
        <Link style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1000px',fontSize:'20px'}}  to="/user/gallery"><li>Gallery</li></Link>
        <Link  style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1150px',fontSize:'20px'}} ><li>Profile</li></Link>
        <Link  style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1300px',fontSize:'20px'}} to="/login"><li>Logout</li></Link>
        </ul>
        </div>

   
 

  )
}

export default navbar
