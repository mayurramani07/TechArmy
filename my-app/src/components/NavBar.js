import React from 'react';
import './NavBar.css';

const NavBar = ({ setCurrentForm }) => {
  return (
    <header>
      <div className="navBar">
        <div className="logo">
          <i className="fa fa-home"></i>
          Rentlar
        </div>
        <nav>
          <ul>
            <li><a href="#" onClick={() => setCurrentForm("main")}>Home</a></li>
            <li><a href="#" onClick={() => setCurrentForm("projects")}>Projects</a></li>
            <li><a href="#" onClick={() => setCurrentForm("About Us")}>About Us</a></li>
            <li><a href="#" onClick={() => setCurrentForm("Contact")}>Contact</a></li>
            <li><a href="#" onClick={() => setCurrentForm("login")}>Login</a></li>
            <li><a href="#" onClick={() => setCurrentForm("PropertyListing")}>Become a Host</a></li>

            {/* <li><a href="#" onClick={() => setCurrentForm("BecomeAHost")}>Become a Host</a></li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
