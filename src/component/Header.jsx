import React, { useState, useEffect } from "react";
import "../../src/App.css";
import logo from "../assets/logo_2.png";
import { FaRegCalendarAlt } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  
  useEffect(() => {
    // Get current path for active state
    setCurrentPath(window.location.pathname);
  }, []);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to check if link is active
  const isActiveLink = (path) => {
    return currentPath === path;
  };

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/product', label: 'Product' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

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
          
          {/* Mobile menu - show/hide based on isMenuOpen state */}
          <div
            className={`${
              isMenuOpen 
                ? "block absolute top-full left-0 w-full bg-white shadow-lg z-50" 
                : "hidden"
            } xl:block xl:static xl:w-auto xl:bg-transparent xl:shadow-none ml-[272px] mr-[10px]`}
          >
            <ul className="flex flex-col xl:flex-row xl:mx-auto p-2 xl:p-0 space-y-2 xl:space-y-0 xl:space-x-2 items-center">
              {navItems.map((item, index) => (
                <li key={index} className="nav-item">
                  <a 
                    className={`block py-[10px] px-[25px] rounded-lg text-center text-[16px] font-medium transition-all duration-200 ${
                      isActiveLink(item.path)
                        ? "bg-[#5f41fb14] text-[#5f41fb]" // Active state
                        : "text-gray-700 hover:bg-[#5f41fb14] hover:text-[#5f41fb]" // Default and hover state
                    }`}
                    href={item.path}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="flex items-center ml-auto">
            <li className="hidden sm:block ml-2">
              <a
                className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-gray-900 text-white rounded hover:bg-gray-800 transition-colors"
                href="#"
              >
                <FaRegCalendarAlt />
                Schedule a call
              </a>
            </li>
            <li>
              <button
                className={`xl:hidden ml-3 p-2 rounded focus:outline-none focus:ring-2 focus:ring-gray-200 ${
                  isMenuOpen ? "bg-gray-100" : ""
                }`}
                type="button"
                onClick={toggleMenu}
                aria-label="Toggle navigation"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;