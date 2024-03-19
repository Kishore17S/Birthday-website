import '../assets/css/Navbar.css'
const navbar = () => {
  return (
 
        <div className='b_navbar1'>
        <ul style={{listStyle:"none",marginTop:'30px'}}>
        <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'700px',fontSize:'20px'}} >Home</li>
        <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'900px',fontSize:'20px'}}>About Us</li>
        <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1100px',fontSize:'20px'}} >Profile</li>
        <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1300px',fontSize:'20px'}}>Logout</li>
        </ul>
        </div>

   
 

  )
}

export default navbar
