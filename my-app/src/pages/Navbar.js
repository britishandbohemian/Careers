import React from 'react';
import './Navbar.css'; // Import your CSS file

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">Think  <span style={{ paddingLeft: 2 }}>Career Group</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa fa-bars"></span> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</a>
              <div className="dropdown-menu" aria-labelledby="dropdown04">
                <a className="dropdown-item" href="#">Who we are</a>
                <a className="dropdown-item" href="#">What We Do</a>
                <a className="dropdown-item" href="#">Brands</a>
              </div>
            </li>
            <li className="nav-item"><a href="/jobs" className="nav-link">Jobs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Contact Us</a></li>
          </ul>
          <div className="d-flex align-items-center">
            <a href="/signin" className="nav-link"><span className="material-icons" style={{color:'black'}}>person</span> </a>
            <a href="/employer" className="nav-link"><span className="material-icons" style={{color:'black'}}>business_center</span></a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
