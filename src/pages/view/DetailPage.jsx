import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaVideo, FaStar } from "react-icons/fa";
import { MorkUpData } from "../../lib/data/MorkUpData";
import HeroVideoDialog from "../../components/ui/HeroVideoDialog";
import { BsNewspaper } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import CartComponent from "../../components/ui/CartComponent";
import { AvatarCircles } from "../../components/ui/AvatarCircles";
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

export default function DetailPage() {
  const { id } = useParams();
  const data = MorkUpData.find((item) => item.id === parseInt(id));
  console.log("ID:", id, "Data:", data);
  if (!data) {
    return <div>404 Not Found</div>;
  }
  return (
    <>
      <nav className="ml-16 mt-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-600">
          <li>
            <Link to="/" className="block transition hover:text-gray-700">
              <span className="sr-only"> Home </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </Link>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <Link
              to="/courses"
              className="block transition hover:text-gray-700">
              Course
            </Link>
          </li>
          <li className="rtl:rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>
          <li>
            <a href="#" className="block transition hover:text-gray-700">
              Course Details
            </a>
          </li>
        </ol>
      </nav>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div className="relative h-[200px] md:h-full xl:h-[360px] object-cover">
              <HeroVideoDialog
                className="dark:hidden h-[200px] !importan"
                animationStyle="from-center"
                videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
                thumbnailSrc={data.img}
                thumbnailAlt="Hero Video"
              />
            </div>
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {data.title}
                </h2>
                <p className="mt-4 text-gray-700">{data.description}</p>
                <p className="mt-2 text-gray-700">
                  Created by{" "}
                  <a className="text-primary underline" href="">
                    RinSanom
                  </a>
                </p>
                <p className="mt-2 text-gray-700">Joined By Students</p>
                <AvatarCircles
                  className="mt-4"
                  numPeople={99}
                  avatarUrls={avatars}
                />
                <div className="flex items-center gap-2 mt-4">
                  <FaVideo size={24} className="text-gray-600" />
                  <p className="text-secondary">50mn of dement video</p>
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="text-primary" />
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <BsNewspaper size={22} className="text-gray-600" />
                  <p className="text-secondary">Last update: 20/02/2025</p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <TbWorld size={22} className="text-gray-600" />
                  <p className="text-secondary">English </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-md font-semibold text-gray-900 ">
                What you will learn
              </h2>
              <ul className="mt-4 text-gray-700 list-none">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  The 25+ guidelines of amazing web design: simple rules and
                  guidelines that go straight to the point
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  Immediate FREE access to the course e-book "Best Resources for
                  Web Design and Development with HTML5 & CSS3"
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  How to make text look professionally designed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✓</span>
                  How to get and use amazing images, fonts and icons to make
                  your website shine — all for FREE.
                </li>
              </ul>
            </div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-md font-semibold text-gray-900l">
                Description
              </h2>
              <p className="mt-4 text-gray-700">{data.description}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Get more with paid Web Design courses
              </h2>
              <span className=" text-gray-700">
                Enroll in our in-depth courses from top-rated instructors
              </span>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
            {[...Array(3)].map((_, index) => (
              <CartComponent key={index} id={index + 1} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
