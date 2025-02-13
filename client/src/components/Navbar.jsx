import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiLogOut } from "react-icons/fi";
import { useAuth } from "../context/AuthContext";
import NavLink from "../components/NavLink"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownVisible(!isDropdownVisible);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      {/* Main Navbar */}
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/FitnessAppLogo.png" 
            className="w-16 border border-gray-400 rounded-full" 
            alt="Logo"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-lg">
          <NavLink to="/" className="hover:text-blue-600 transition">
            Home
          </NavLink>
          <NavLink to="/Features" className="hover:text-blue-600 transition">
            Features
          </NavLink>
          <NavLink to="/ContactUs" className="hover:text-blue-600 transition">
            Contact Us
          </NavLink>
        </div>

        {/* User Menu - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          {!isAuthenticated ? (
            <>
              <Link 
                to="/SignIn" 
                className="text-gray-600 hover:text-blue-600 transition text-lg"
              >
                Login
              </Link>
              <Link 
                to="/Register" 
                className="px-4 py-2 text-lg text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className="flex items-center text-lg text-gray-700 hover:text-blue-600 transition"
              >
                {user?.name || "User"}
                <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
              </button>

              {/* Dropdown Menu */}
              {isDropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
                  <Link 
                    to="/profile/update-profile" 
                    className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsDropdownVisible(false)}
                  >
                    Profile
                  </Link>
                  <button 
                    onClick={() => {
                      logout();
                      setIsDropdownVisible(false);
                    }}
                    className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100"
                  >
                    <FiLogOut className="inline mr-2" size={18} /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="p-2 border border-gray-400 rounded-md"
          >
            <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }} 
            animate={{ opacity: 1, height: "auto" }} 
            exit={{ opacity: 0, height: 0 }} 
            className="md:hidden bg-white shadow-lg border-t border-gray-200"
          >
            <div className="flex flex-col space-y-3 px-6 py-4 text-lg">
              <NavLink to="/" onClick={toggleMenu}>
                Home
              </NavLink>
              <NavLink to="/Features" onClick={toggleMenu}>
                Features
              </NavLink>
              <NavLink to="/AboutUs" onClick={toggleMenu}>
                About Us
              </NavLink>
              <NavLink to="/ContactUs" onClick={toggleMenu}>
                Contact Us
              </NavLink>

              {!isAuthenticated ? (
                <>
                  <Link 
                    to="/SignIn" 
                    className="text-gray-600" 
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link 
                    to="/Register" 
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg text-center"
                    onClick={toggleMenu}
                  >
                    Register
                  </Link>
                </>
              ) : (
                <div className="relative">
                  <button 
                    onClick={toggleDropdown} 
                    className="flex items-center text-gray-700"
                  >
                    {user?.name || "User"}
                    <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
                  </button>

                  {/* Mobile Dropdown */}
                  {isDropdownVisible && (
                    <div className="mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                      <Link 
                        to="/profile/update-profile" 
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsDropdownVisible(false)}
                      >
                        Profile
                      </Link>
                      <button 
                        onClick={() => {
                          logout();
                          setIsDropdownVisible(false);
                        }}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        <FiLogOut className="inline mr-2" size={18} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
