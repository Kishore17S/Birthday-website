import { SidebarDataAdmin } from './SidebarDataAdmin';
import '../../assets/css/AdminDashboard.css';
import { BiLogOutCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
// import Swal from "sweetalert2";
const AdminDashboard = () => {
//   const navigate=useNavigate();
  

  const productDetails = 7;  
  const vendorDetails = 7; 


  return (
    <>
      <div id='overview'>
        <nav className="sidebardash">
          <ul className="nav-menu">
            {SidebarDataAdmin.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.path} className="nav-link">
                  {item.icon}
                  <span className="nav-text">{item.title}</span>
                </a>
              </li>
            ))}
            <li className="nav-item" style={{ marginTop: '360px' }}>
              <a href="#" className="nav-link">
                <BiLogOutCircle size={30} />
                <span className="nav-text" >Log Out</span>
              </a>
            </li>
          </ul>
        </nav>

        <div id='navbarcard'>
          

          <div id='spacetable'>
            <div className="containerdash">
              <div className="row justify-content-center">
                <div className="col-md-2">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Users</h5>
                    <p className="carddash-text">{productDetails}</p>
                  </div>
                </div>

                <div className="col-md-2">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Kids Orders</h5>
                    <p className="carddash-text">{vendorDetails}</p>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className='black-card carddash'>
                    <h5 className="carddash-title">Number of Adult Orders</h5>
                    <p className="carddash-text">{vendorDetails}</p>
                  </div>
                </div>
                
                <div className="col-md-2">
                <div className='black-card carddash'>
                <h5 className="carddash-title">Number of Toddler's order</h5>
                <p className="carddash-text">{vendorDetails}</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;