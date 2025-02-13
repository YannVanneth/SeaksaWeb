"use client";

import { Carousel } from "flowbite-react";
import { MorkUpData } from "../../lib/data/MorkUpData";
import { AvatarCircles } from "../ui/AvatarCircles";
import { FaStar, FaVideo } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
export function Slide() {
  const avatars = [
    {
      imageUrl: "https://avatars.githubusercontent.com/u/16860528",
      profileUrl: "https://github.com/dillionverma",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/20110627",
      profileUrl: "https://github.com/tomonarifeehan",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/106103625",
      profileUrl: "https://github.com/BankkRoll",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59228569",
      profileUrl: "https://github.com/safethecode",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/59442788",
      profileUrl: "https://github.com/sanjay-mali",
    },
    {
      imageUrl: "https://avatars.githubusercontent.com/u/89768406",
      profileUrl: "https://github.com/itsarghyadas",
    },
  ];
  console.log(" Data  ", MorkUpData);

  return (
    <section>
      <div className="mt-7 w-full max-w-[75%] mx-auto flex flex-col items-start ">
        <div data-aos="fade-right" className="w-full">
          <p className="text-start mb-4 font-bold tracking-tight text-gray-900 dark:text-textDark text-3xl md:text-4xl">
            Our Famous Courses
          </p>
          <p className="text-md text-start w-full md:w-[45%]">
            Gain comprehensive knowledge and skills through our expertly
            designed courses, tailored to enhance your learning experience.
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-10 md:px-20 lg:px-32 xl:px-[190px] h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel
          slideInterval={2000}
          leftControl={
            <AiFillCaretLeft className="text-4xl text-gray-600 dark:text-gray-300 border-2 border-gray-600 dark:border-gray-300 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700" />
          }
          rightControl={
            <AiFillCaretRight className="text-4xl text-gray-600 dark:text-gray-300 border-2 border-gray-600 dark:border-gray-300 rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700" />
          }
          className=" ">
          {MorkUpData.map((course) => (
            <Link key={course.id} to={`/detailpage/${course.id}`}>
              <div className="flex">
                <div className="bg-white dark:bg-gray-800 rounded-2xl w-full p-4 sm:p-6 hover:shadow-lg transition-all duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-center">
                    <div className="flex justify-center">
                      <img
                        src={course.img}
                        className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-auto max-h-64 object-cover rounded-lg"
                        alt={course.title}
                      />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 dark:text-white">
                        {course.title}
                      </h2>
                      <p className="mt-2 sm:mt-4 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        {course.description}
                      </p>
                      <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                        Created by{" "}
                        <a className="text-primary underline">RinSanom</a>
                      </p>
                      <div className="flex items-center gap-2 mt-3 sm:mt-4">
                        <FaVideo
                          size={20}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <p className="text-secondary text-sm sm:text-base">
                          50 min of demo video
                        </p>
                        {[...Array(5)].map((_, index) => (
                          <FaStar
                            key={index}
                            className="text-primary text-sm sm:text-base"
                          />
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <BsNewspaper
                          size={18}
                          className="text-gray-600 dark:text-gray-300"
                        />
                        <p className="text-secondary text-sm sm:text-base">
                          Last update: 20/02/2025
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
