import React, { useState, useEffect, useRef } from "react";
import { FloatingLabel, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { RiMoonClearLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
export default function NavbarComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown
  const dropdownRef = useRef(null); // Ref for dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Navbar className="sticky top-0 left-0 z-50 border-b bg-white dark:bg-gray-800 md:px-12 xl:px-32">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
          {/* Brand Logo and Name */}
          <Navbar.Brand href="" className="flex items-center">
            <img
              src="../src/assets/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SEAKSA
            </span>
          </Navbar.Brand>

          {/* Collapsible Content (Navigation Links) */}
          <Navbar.Collapse className="w-full md:flex md:w-auto md:items-center mt-3 md:mt-0">
            <div className="flex flex-col md:flex-row md:space-x-8">
              <Link to="/">
                <Navbar.Link className="hover:text-primary block py-2 md:py-0">
                  Home
                </Navbar.Link>
              </Link>
              <Link to="/courses">
                <Navbar.Link className="hover:text-primary block py-2 md:py-0">
                  Courses
                </Navbar.Link>
              </Link>
              <Link to="/about">
                <Navbar.Link className="hover:text-primary block py-2 md:py-0">
                  About
                </Navbar.Link>
              </Link>
            </div>
          </Navbar.Collapse>

          {/* Sign In Button and Theme Toggle (Always on the Right) */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Button */}
            <RiMoonClearLine className="text-2xl" />

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown
              className="text-3xl inline-block md:hidden focus:outline-none">
              <IoMenu />
            </button>

            {/* User Icon (Mobile) */}
            <FaUser className="inline-block text-2xl text-primary md:hidden" />

            {/* Sign In Button (Desktop) */}
            <Link to="/register">
              <a
                className="group rounded-md relative overflow-hidden border border-primary px-3 py-2 md:px-4 focus:outline-none focus:ring hidden md:inline-block"
                href="#">
                <span className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-primary"></span>
                <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                  Get Start
                  <CgLogIn className="inline h-5 w-5 ml-2" />
                </span>
              </a>
            </Link>
          </div>
        </div>
        {/* Dropdown Menu for Mobile */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef} // Attach ref to dropdown
            className="absolute top-[70px] left-0 right-0 bg-white shadow-lg animate-slideDown z-50">
            <div className="px-4 py-6">
              <ul className="space-y-1">
                <Link to="/" onClick={() => setIsDropdownOpen(false)}>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
                      Home
                    </a>
                  </li>
                </Link>
                <Link to="/courses" onClick={() => setIsDropdownOpen(false)}>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      Courses
                    </a>
                  </li>
                </Link>
                <Link to="/about" onClick={() => setIsDropdownOpen(false)}>
                  <li>
                    <a
                      href="#"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                      About Us
                    </a>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        )}
      </Navbar>
    </>
  );
}
