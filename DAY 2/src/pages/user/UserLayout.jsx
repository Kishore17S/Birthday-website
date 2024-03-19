import PropTypes from "prop-types"
import Footer from "../../components/Footer"
import navbar from "../../components/navbar"
// import '../../assets/css/Footer.css'
// import '../../assets/css/Navbar.css'
const UserLayout = ({children}) => {
    return(
        <div>
            <header>
            header
            <navbar />
           {/* <div className='b_navbar1'>
            <ul style={{listStyle:"none",marginTop:'30px'}}>
            <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'700px',fontSize:'20px'}} >Home</li>
            <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'900px',fontSize:'20px'}}>About Us</li>
            <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1100px',fontSize:'20px'}} >Profile</li>
            <li style={{textDecoration:'none',color:'white',position:'absolute',marginLeft:'1300px',fontSize:'20px'}}>Logout</li>
            </ul>
    </div>*/}


            </header>
            <main>
            {children}
            </main>
            <footer>
            <Footer />
            </footer>
        </div>
    )
}
UserLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default UserLayout