import React, { useState } from "react";
import { FloatingLabel, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import { LuSunMoon } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
export default function NavbarComponent() {
  return (
    <>
      <Navbar className="mx-16 py-2" fluid rounded>
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
          <Button className="hidden md:block bg-primary text-white mr-3 hover:bg-primary-dark transition duration-200">
            Login
          </Button>
          <Button className="hidden md:block border border-black bg-white text-black hover:bg-primary hover:text-white transition duration-200">
            Sign Up
            <CgLogIn className="inline h-5 w-5 ml-2" />
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
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
        <div className="relative w-full md:w-1/3  border-gray-200 hidden md:block">
          <FloatingLabel variant="outlined" label="Search Course name" />
          <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
        </div>
      </Navbar>
      <div className="border-b-2 w-full h-3"></div>
    </>
  );
}
