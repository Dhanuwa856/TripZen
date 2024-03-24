import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content container">
        <div className="footer-logo">
          <Link to="/">
            <img src={Logo} alt="website logo" title="Web site Logo" />
            <h2>TripZen</h2>
          </Link>
          <p>Explore the World With TripZen</p>
        </div>

        <div className="footer-contact">
          <h2>Contact Us</h2>
          <ul>
            <li>
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              123 Street, City, Country
            </li>
            <li>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              info@example.com
            </li>
            <li>
              <span>
                <i className="fas fa-phone"></i>
              </span>
              +1234567890
            </li>
          </ul>
          {/* Add social media links if needed */}
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            At TripZen, we're passionate about helping travelers discover
            unforgettable experiences around the world. With a dedication to
            exceptional service and a commitment to creating memorable journeys,
            we strive to make travel planning seamless and enjoyable for
            everyone.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-social">
          <span>
            <i class="fa-brands fa-facebook-f"></i>
          </span>
          <span>
            <i class="fa-brands fa-x-twitter"></i>
          </span>
          <span>
            <i class="fa-brands fa-linkedin-in"></i>
          </span>
          <span>
            <i class="fa-brands fa-instagram"></i>
          </span>
        </div>
        <span>
          &copy; 2024 <span className="un-line">TripZen</span>. All rights
          reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
