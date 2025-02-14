import { FloatingLabel } from "flowbite-react";
import React from "react";
import { CiSearch } from "react-icons/ci";
import CartComponent from "../../components/ui/CartComponent";
import { Prevers } from "../../components/ui/Prevers";

export default function CoursesPage() {
  return (
    <>
      {/* <div className="text-start">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                Understand User Flow.
                <span className="sm:block"> Increase Conversion. </span>
              </h1>
              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt illo tenetur fuga ducimus numquam ea!
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="#">
                  Get Started
                </a>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </div> */}
      <div className="flex flex-wrap justify-between sticky top-[70px] z-30 bg-white dark:bg-primaryDark items-center border-b-2 shadow-sm px-4 md:px-14 space-y-4 md:space-y-0">
        {/* Search Bar */}

        <div className=" border-gray-200 p-2">
          <div className="relative w-[300px]">
            <FloatingLabel
              className="q"
              variant="outlined"
              label="Search Course name"
            />
            <CiSearch className="absolute right-1  top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-textDark text-xl cursor-pointer" />
          </div>
        </div>
        {/* Navigation Menu */}
        <div className="w-[316px] pb-4 md:w-auto h-1">
          <ul className="flex flex-wrap  justify-center md:justify-start space-x-6 text-gray-700 dark:text-textDark font-sans text-base">
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
          <button className="border-2 flex md:inline-block text-white p-2 px-4 hover:bg-primary-dark transition duration-200 items-center justify-center">
            <p className="text-text  dark:text-textDark mr-2">Filter</p>
            {/* <FaFilter className="text-secondary" /> */}
          </button>
          <button className="border-2 hidden md:inline-block  border-l-0 dark:text-textDark text-text p-2  hover:bg-primary-dark transition duration-200">
            Recently
          </button>
        </div>
      </div>
      <div className="grid sm:items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-14 dark:bg-primaryDark">
        {[...Array(30)].map((_, index) => (
          <CartComponent key={index} id={index + 1} />
        ))}
      </div>
      <Prevers className="mb-4" />
    </>
  );
}
