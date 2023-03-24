import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../redux/actions/userActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const NavbarCmp = () => {
  // For the Dropdown in Nav
  const [dropIsOpen, setDropIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  // For The Animated Scroll Up Behaviour of Navbar
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, setVisible]);

  // My Functionality
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const logoutHandler = () => {
    dispatch(logout());
    navigate(redirect);
  };

  return (
    <nav
      className={`fixed bg-white w-screen shadow-md z-50 transition-all duration-500 ${
        visible ? "" : "transform -translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to="/"
                className="text-2xl font-semibold hover:text-slate-600 ml-8 sm:ml-0"
              >
                MindMate
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <Link
                  to="/"
                  className="text-gray-600 block px-3 py-2 text-base hover:text-black hover:font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/appointments"
                  className="text-gray-600 block px-3 py-2 text-base hover:text-black hover:font-medium"
                >
                  Appointment
                </Link>
                <Link
                  to="/articles"
                  className="text-gray-600 block px-3 py-2 text-base hover:text-black hover:font-medium"
                >
                  Articles
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-end mr-5">
            {userInfo ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropIsOpen(!dropIsOpen)}
                  className="text-gray-600 block px-3 py-2 text-base hover:text-black hover:font-medium"
                >
                  <FontAwesomeIcon icon={faUser} />
                </button>
                {dropIsOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-1">
                      <Link
                        to="/profile"
                        className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base hover:font-medium"
                      >
                        Profile
                      </Link>
                      <Link
                        onClick={logoutHandler}
                        className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base hover:font-medium"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-teal-600  hover:bg-teal-700  text-white py-2 px-4 rounded">
                  Login / Register
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <Link
            to="/"
            className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          <Link
            to="/appointments"
            className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Appointment
          </Link>
          <Link
            to="/articles"
            className="text-gray-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Articles
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarCmp;
