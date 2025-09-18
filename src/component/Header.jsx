import React, { useState } from "react";
import "../../src/App.css";
import logo from "../assets/logo_2.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-sticky header-absolute">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          <a className="navbar-brand me-0" href="/" data-discover="true">
            <img
              className="light-mode-item navbar-brand-item w-100 h-40px"
              src={logo}
              alt="logo"
            />
          </a>

          <div
            className={`navbar-collapse collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav navbar-nav-scroll mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/product">
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <ul className="nav align-items-center dropdown-hover ms-sm-2">
            <li className="nav-item ms-2 d-none d-sm-block">
              <a className="btn btn-sm btn-dark mb-0" href="/schedule-call">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="iconify iconify--bi me-2"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                >
                  <g fill="currentColor">
                    <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                  </g>
                </svg>
                Schedule a call
              </a>
            </li>
            {/* <li className="nav-item">
              <button
                className={`navbar-toggler ms-sm-3 p-2 ${
                  isMenuOpen ? "active" : ""
                }`}
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-animation">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </li> */}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
