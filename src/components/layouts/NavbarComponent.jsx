import { GraduationCap, Search, Sun } from "lucide-react";
import React, { useState } from "react";
import { FloatingLabel, Navbar } from "flowbite-react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <>
      <Navbar className=" mx-16" fluid rounded>
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

        <div className="flex md:order-2">
          <Button className="bg-primary mr-3">Loing</Button>
          <Button className="bg-primary">Resgister</Button>
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
          <Link to="/category">
            <Navbar.Link className="hover:text-primary" href="#">
              Category
            </Navbar.Link>
          </Link>
          <Link to="/about">
            <Navbar.Link className="hover:text-primary" href="#">
              About
            </Navbar.Link>
          </Link>
        </Navbar.Collapse>
        <FloatingLabel
          className="w-[300px]"
          variant="outlined"
          label="Search"
        />
      </Navbar>
      <div className="border-b-2 w-full h-3"></div>
    </>
  );
}
