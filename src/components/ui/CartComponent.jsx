import { Card } from "flowbite-react";
import { Image } from "lucide-react";

import React from "react";
import { FaUser, FaClock, FaBook } from "react-icons/fa";

export default function CartComponent() {
  return (
    <>
      <Card
        className="w-auto h-[400px] overflow-hidden m-0"
        imgAlt="github"
        imgSrc="./src/assets/Git.jpg"
      >
        <div className="p-0">
          <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white truncate">
            GitLab acquires UnReview for code review collaboration
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 truncate">
            GitLab has acquired UnReview, a tool that helps developers
            collaborate on code reviews.
          </p>
        </div>
        <div className="flex space-x-4 ">
          <div className="shrink-0">
            <img
              src="https://i.pinimg.com/736x/49/a4/53/49a453f20f1bf5651bc811f13b36bf70.jpg"
              alt="profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
              Neil Sims
            </p>
            <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              email@windster.com
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">5</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaClock className="text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">5 min</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaBook className="text-gray-500 dark:text-gray-400" />
              <p className="text-sm text-gray-500 dark:text-gray-400">5</p>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
