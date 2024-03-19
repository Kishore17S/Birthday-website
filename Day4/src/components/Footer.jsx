import { useNavigate } from 'react-router-dom';
import Instagram from '../assets/images/instaimage.jpg';
import Twitter from '../assets/images/twitter.jpg';
import Whatsapp from '../assets/images/whatsapp.png';
import Facebook from '../assets/images/facebook.webp';

import '../assets/css/Footer.css'

const Footer = () => {
  const navigate=useNavigate();
  const handlepolicy = () => {
    navigate("/user/policy")
  }
  const handleterms = () => {
    navigate("/user/terms")
  }
  const handlefaq = () => {
    navigate("/user/faq")
  }
 
  return (
    <footer>
            <div className="footerclass">
            <ul style={{listStyle:"none",marginBottom:'60px'}}>
            {/*    <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'760px',fontSize:'20px'}} >Terms and Condition</li>
            <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1030px',fontSize:'20px'}} >Privacy and Policy</li>
            <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1250px',fontSize:'20px'}} >FAQ</li>
  <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1330px',fontSize:'20px'}}>Help</li>*/}
            
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'10px',fontSize:'20px'}} >Momentous Endeavours is an exciting service start-up that provides a platform</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'10px',marginTop:'50px',fontSize:'20px'}} >to connect the best service providers to the customer.</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'10px',marginTop:'120px',fontSize:'20px'}} >Get connected with us on the social network!</p>
            {/*<link ><img src={Instagram} className='footer_insta'></img></link>*/}
            <img src={Instagram} className='footer_insta'></img>
            <img src={Twitter} className='footer_twitter'></img>
            <img src={Whatsapp} className='footer_whatsapp'></img>
            <img src={Facebook} className='footer_facebook'></img>



            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'760px',fontSize:'20px'}} > Quick Links<hr style={{color:'white'}} /></p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'760px',marginTop:'70px',fontSize:'20px',cursor:'pointer'}} onClick={handleterms}> Terms and Conditions</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'760px',marginTop:'110px',fontSize:'20px',cursor:'pointer'}} onClick={handlefaq}> FAQ</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'760px',marginTop:'150px',fontSize:'20px',cursor:'pointer'}} onClick={handlepolicy}> Privacy and Policy</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'760px',marginTop:'190px',fontSize:'20px',cursor:'pointer'}} > Help</p>


            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1060px',fontSize:'20px'}} > Contact Us<hr style={{color:'white'}} /></p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1060px',marginTop:'70px',fontSize:'20px'}} > No.2, D.J.Nagar, Hopescollage,</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1060px',marginTop:'110px',fontSize:'20px'}} > Coimbatore-641 004.</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1060px',marginTop:'150px',fontSize:'20px'}} > momentousendeavors18@gmail.com</p>
            <p style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1060px',marginTop:'190px',fontSize:'20px'}} > +91 9145627308</p>
                
            </ul>
           
            <hr className='footer_line'/>
            <div className='footer_rights'>© 2024 MOMENTOUSENDEAVOURS®. ALL RIGHTS RESERVED.</div>
                </div>
            </footer>
  )
}

export default Footer
