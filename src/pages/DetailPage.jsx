import { Avatar } from "@chakra-ui/react";
import React from "react";
import { AvatarCircles } from "../components/ui/AvatarCircles";
import { FaVideo } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
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
  return (
    <>
      <nav className="ml-16 mt-4" aria-label="Breadcrumb">
  <ol className="flex items-center gap-1 text-sm text-gray-600">
    <li>
      <a href="#" className="block transition hover:text-gray-700">
        <span className="sr-only"> Home </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" className="block transition hover:text-gray-700"> Couse </a>
    </li>

    <li className="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </li>
    <li>
      <a href="#" className="block transition hover:text-gray-700"> Couse Details </a>
    </li>
  </ol>
     </nav>
     <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2  md:gap-8">
    <div>
        <img
          src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded"
          alt=""
        />
      </div>
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
          <p className="mt-4 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
            architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
            sequi.
          </p>
          <p className="mt-2 text-gray-700">Created by <a className="text-primary underline" href="">RinSanom  </a></p>
          <p className="mt-2 text-gray-700">Joint By Students </p>
          <AvatarCircles  className="mt-4" numPeople={99} avatarUrls={avatars} />
          <div className="flex items-center gap-2 mt-4">
            <FaVideo size={24} className="text-gray-600" />
            <p className="text-secondary  ">50mn of dement video</p>
            <div className="flex items-center">
             {[...Array(5)].map((_, index) => (
                     <FaStar key={index} className="text-primary" />
                   ))}
            </div>
          </div>
        </div>
        <button>
          <a href="#" className="mt-6 inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            Start Learning
          </a>
        </button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
