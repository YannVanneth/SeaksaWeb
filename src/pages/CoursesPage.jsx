import { FloatingLabel } from "flowbite-react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import CartComponent from "../components/ui/CartComponent";
import { Prevers } from "../components/ui/Prevers";
import { FaFilter } from "react-icons/fa";
export default function CoursesPage() {
  return (
    <>
      <div>
        {" "}
        <h1 className="text-primary text-3xl font-bold text-center m-10">
          Wellcome to our Courses for learning
        </h1>
      </div>
      <div className="flex flex-wrap justify-between     items-center border-b-2 shadow-sm px-4 md:px-14 space-y-4 md:space-y-0">
        {/* Search Bar */}
        <div className=" border-gray-200 p-2">
          <div className="relative w-[300px]">
            <FloatingLabel
              style={{ width: "300px" }}
              variant="outlined"
              label="Search Course name"
            />
            <CiSearch className="absolute right-1  top-1/2 transform -translate-y-1/2 text-gray-400 text-xl cursor-pointer" />
          </div>
        </div>
        {/* Navigation Menu */}
        <div className="w-[316px] md:w-auto h-1">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-gray-700 font-sans text-base">
            <li className="cursor-pointer hover:text-primary hover:border-b-2 border-primary transition duration-200">
              All
            </li>
            <li className="cursor-pointer hover:text-primary hover:border-b-2 border-primary transition duration-200">
              Web
            </li>
            <li className="cursor-pointer hover:text-primary hover:border-b-2 border-primary transition duration-200">
              Mobile
            </li>
            <li className="cursor-pointer hover:text-primary hover:border-b-2 border-primary transition duration-200">
              Data Base
            </li>
          </ul>
        </div>
        <div className="w-[316px] flex justify-end">
          <button className="border-2 flex text-white p-2 px-4 hover:bg-primary-dark transition duration-200 items-center justify-center">
            <p className="text-text mr-2">Filter</p>
            <FaFilter className="text-secondary" />
          </button>
          <button className="border-2 border-l-0 text-text p-2  hover:bg-primary-dark transition duration-200">
            Recently
          </button>
        </div>
      </div>
      <div className="grid sm:items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-14">
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
        <CartComponent />
      </div>
      <Prevers className="mb-4" />
    </>
  );
}
