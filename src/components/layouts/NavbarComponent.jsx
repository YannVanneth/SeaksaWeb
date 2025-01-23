import React, { useState } from "react";
import { FloatingLabel, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { LuSunMoon } from "react-icons/lu";
export default function NavbarComponent() {
  return (
    <>
      <Navbar className="sticky top-0 left-0 z-50 border-b bg-white dark:bg-gray-800">
        <div className="w-full flex justify-between mx-32 ">
          <Navbar.Brand href="">
            <img
              src="./src/assets/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              SEAKSA
            </span>
          </Navbar.Brand>
          <div className="flex items-center md:order-2">
            <LuSunMoon className="text-2xl text-center mr-3" />
            <div className="ml-2">
              <a
                className="group rounded-md relative inline-block overflow-hidden border border-primary px-8 py-2 focus:outline-none focus:ring"
                href="#"
              >
                <span className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-primary"></span>

                <span className="relative text-sm font-medium text-black transition-colors group-hover:text-white">
                  Sign In
                  <CgLogIn className="inline h-5 w-5 ml-2" />
                </span>
              </a>
            </div>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse className="mt-3">
            <Link to="/">
              <Navbar.Link className="hover:text-primary">Home</Navbar.Link>
            </Link>
            <Link to="/courses">
              <Navbar.Link className="hover:text-primary" href="#">
                Courses
              </Navbar.Link>
            </Link>

            <Link to="/about">
              <Navbar.Link className="hover:text-primary" href="#">
                About
              </Navbar.Link>
            </Link>
          </Navbar.Collapse>
          {/* <div className="relative w-full md:w-1/3  border-gray-200 hidden md:block">
          <FloatingLabel variant="outlined" label="Search Course name" />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
        </div> */}
        </div>
      </Navbar>
    </>
  );
}
