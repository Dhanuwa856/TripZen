import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [fix, setFix] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  function toggleMobileMenuOpen() {
    setMenuActive(!menuActive);
  }

  function setFixed() {
    if (window.scrollY >= 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);

  return (
    <nav className={fix ? "nav-bar fixed" : "nav-bar"}>
      <div className="container">
        <div className="nav-logo">
          <Link to="/">
            <img src={Logo} alt="website logo" title="Web site Logo" />
            <h2>TripZen</h2>
          </Link>
        </div>
        <ul className={`nav-menu ${menuActive ? "nav-menu-0" : ""}`}>
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/destinations" className="nav-link">
              Destinations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/guides" className="nav-link">
              Travel Guides
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className="nav-link">
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              <button className="btn">Contact Us</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-menu-icons">
        <div
          className={`open-icon ${menuActive ? "nav-icon-non-visible" : ""}`}
          onClick={toggleMobileMenuOpen}
        >
          <i class="fa-solid fa-bars"></i>
        </div>
        <div
          className={`colse-icon ${
            menuActive ? "nav-icon-visible" : "nav-icon-non-visible"
          }`}
          onClick={toggleMobileMenuOpen}
        >
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
