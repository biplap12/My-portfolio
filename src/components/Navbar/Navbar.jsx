import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div
      className="n-wrapper"
      id="Navbar"
      role="navigation"
      aria-label="Main Navigation"
    >
      {/* left */}
      <div className="n-left" aria-label="toggle button of Biplap Neupane Full Stack Developer">
        <div
          className="n-name"
          aria-label="Biplap Neupane Full Stack Developer"
        >
          Biplap
        </div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right" aria-label="Primary Navigation Links of Biplap Neupane Full Stack Developer">
        <div
          className="n-list"
          aria-label="Primary Navigation Links of Biplap Neupane Full Stack Developer"
        >
          <ul style={{ listStyleType: "none" }}>
            <li className="active" aria-label="Home Biplap Neupane Full Stack Developer">
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                aria-label="Home Biplap Neupane Full Stack Developer"
              >
                Home
              </Link>
            </li>
            <li aria-label="Services Biplap Neupane Full Stack Developer">
              <Link
                to="services"
                spy={true}
                smooth={true}
                aria-label="Services Biplap Neupane Full Stack Developer"
              >
                Services
              </Link>
            </li>
            <li aria-label="Experience Biplap Neupane Full Stack Developer">
              <Link
                to="works"
                spy={true}
                smooth={true}
                aria-label="Experience Biplap Neupane Full Stack Developer"
              >
                Experience
              </Link>
            </li>
            <li aria-label="Portfolio Biplap Neupane Full Stack Developer">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                aria-label="Portfolio Biplap Neupane Full Stack Developer"
              >
                Protfolio
              </Link>
            </li>
          </ul>
        </div>
        <Link
          to="contact"
          spy={true} 
          smooth={true}
          aria-label="Contact Biplap Neupane Full Stack Developer"
        >
          <button
            className="button n-button"
            aria-label="Contact button of Biplap Neupane Full Stack Developer"
          >
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
