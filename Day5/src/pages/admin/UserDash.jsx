import { SidebarDataAdmin } from './SidebarDataAdmin';
import '../../assets/css/AdminDashboard.css';


const UserAdminDash = () => {
  
  return (
    <>
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
        </ul>
      </nav>
      <div id='navbarcard'>
        
        <div id='spacetable'>
          <div className="row">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>User Name</th>
                  <th>Email ID</th>
                  <th>PH number</th>
                  <th>Orders</th>
                  <th> Category</th>
                  <th>Location</th>
                  <th>Amount</th>
                </tr>
              </thead>
              {/* <tbody>
               
                 
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAdminDash;