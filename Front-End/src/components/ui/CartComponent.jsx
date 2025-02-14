import React, { useEffect, useState } from "react";
import { IoBook } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { GoBookmarkFill, GoBookmark } from "react-icons/go";
import { Avatar } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { MorkUpData } from "../../lib/data/MorkUpData";

export default function CartComponent({ id }) {
  const navigate = useNavigate();
  const savedBookmarks = JSON.parse(localStorage.getItem("bookmark")) || [];
  const [isBookmarked, setIsBookmarked] = useState(savedBookmarks.includes(id));
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const data = MorkUpData.find((item) => item.id === id);
  if (!data) {
    navigate("/not-found");
    return null;
  }

  const toggleBookmark = (event) => {
    event.preventDefault();
    let updatedBookmarks;

    if (isBookmarked) {
      updatedBookmarks = savedBookmarks.filter(
        (bookmarkId) => bookmarkId !== id
      );
    } else {
      updatedBookmarks = [...savedBookmarks, id];
    }

    setIsBookmarked(!isBookmarked);
    localStorage.setItem("bookmark", JSON.stringify(updatedBookmarks));
  };
  return (
    <Link to={`/detailpage/${data.id}`}>
      <div data-aos="fade-up">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-xl">
          <img alt="" src={data.img} className="h-56 w-full object-cover" />
          <div className="bg-white dark:bg-secondaryDark p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  img="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                  alt="avatar of Jese"
                  rounded
                />
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-textDark">
                    Jese Leos
                  </div>
                  <div className="text-sm text-gray-500 dark:text-textDark">
                    Joined in August 2014
                  </div>
                </div>
              </div>
              <button onClick={toggleBookmark} className="focus:outline-none">
                {isBookmarked ? (
                  <GoBookmarkFill className="text-primary text-3xl" />
                ) : (
                  <GoBookmark className="text-primary text-3xl" />
                )}
              </button>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-textDark line-clamp-2">
              {data.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500 dark:text-textDark line-clamp-3">
              {data.description}
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <IoBook className="text-primary text-[18px]" />
                <span className="dark:text-textDark">10 Lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMdTime className="text-primary text-xl" />
                <span className="dark:text-textDark">4 Hours</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Link>
  );
}
