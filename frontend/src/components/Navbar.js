import { NavLink,useNavigate } from 'react-router-dom';
import pic from '../images/Book.png';

export default function Navbar() {
  const navigate = useNavigate();

  const handlefun = ()=>
  {
    localStorage.removeItem("authToken");
    navigate('/');
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={pic} alt="LOGO" style={{ height: "70px", width: "80px" }} />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Center the navigation links */}
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-link fs-4"
                activeClassName="active"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link fs-4"
                activeClassName="active"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link fs-4"
                activeClassName="active"
              >
                CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/blogs"
                className="nav-link fs-4"
                activeClassName="active"
              >
                BLOGS
              </NavLink>
            </li>
          </ul>
          {
          (localStorage.getItem('authToken')) ? 
          <ul className="navbar-nav"> 
          
            <li className="nav-item">
              <div
                className="btn bg-white text-danger mx-1"
                onClick={handlefun}
                               
              >
                LOGOUT
              </div>
            </li>
            
          </ul>
          :
          <ul className="navbar-nav"> 
          
          <li className="nav-item">
            <NavLink
              to="/login"
              className="nav-link fs-4"
              activeClassName="active"
            >
              LOGIN
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/createuser"
              className="nav-link fs-4"
              activeClassName="active"
            >
              SIGNUP
            </NavLink>
          </li>
        </ul>
          }
        </div>
      </div>
    </nav>
  );
}
