import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file
import { AuthContext } from '../context/AuthContext';


function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation(); // Get current location for active link highlighting
  const navigate = useNavigate(); // Function for programmatic navigation

  const handleSignOut = (e) => {
    e.preventDefault();
    setIsLoggedIn(false); // Update user logged-in state
    navigate('/signin'); // Redirect to home page on sign out
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/">Think <span style={{ paddingLeft: 2 }}>Career Group</span></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav m-auto">
            <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/jobs' ? 'active' : ''}`}>
              <Link to="/jobs" className="nav-link">Jobs</Link>
            </li>
            <li className={`nav-item ${location.pathname === '/blog' ? 'active' : ''}`}>
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>

            <li className={`nav-item ${location.pathname === '/brands' ? 'active' : ''}`}>
  <Link to="/groups" className="nav-link">Groups</Link>
  {console.log(location.pathname === '/brands')} {/* Temporary for debugging */}
</li>

            <li className={`nav-item ${location.pathname === '/contact-us' ? 'active' : ''}`}>
              <Link to="/contact-us" className="nav-link">Contact Us</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
  {isLoggedIn ? (
    <>
      <button style={{backgroundColor:"white",color:'Black'}} className="nav-link" onClick={handleSignOut}>
        <span className="material-icons">exit_to_app</span>
      </button>
      <Link to="/profile" className="nav-link">  {/* Link to your profile page */}
        <span className="material-icons">settings</span>
      </Link>
    </>
  ) : (
    <Link to="/signin" className="nav-link">
      <span className="material-icons">person</span>
    </Link>
  )}
  <Link to="/employer" className="nav-link">
    <span className="material-icons" style={{ color: 'black' }}>business_center</span>
  </Link>
</div>





        </div>
      </div>
    </nav>
  );
}

export default Navbar;
