import React, { useEffect } from "react";
import { IoBook } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { Avatar } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function CartComponent() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Link to ="/detailpage">
      <div data-aos="fade-up">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="./src/assets/Git.jpg"
            className="h-56 w-full object-cover"
          />
          <div className="bg-white p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <Avatar
                  img="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                  alt="avatar of Jese"
                  rounded
                />
                <div className="text-left">
                  <div className="font-medium text-gray-900 dark:text-white">
                    Jese Leos
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                  </div>
                </div>
              </div>
            </div>

            <a href="#">
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                How to position your furniture for positivity
              </h3>
            </a>

            <p className="mt-2 text-sm text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae dolores, possimus pariatur animi temporibus nesciunt
              praesentium dolore sed nulla ipsum eveniet corporis quidem,
              mollitia itaque minus soluta, voluptates neque explicabo tempora
              nisi culpa eius atque dignissimos. Molestias explicabo corporis
              voluptatem?
            </p>

            <div className="mt-3 flex flex-wrap items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <IoBook className="text-primary text-[18px]" />
                <span>10 Lectures</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMdTime className="text-primary text-xl" />
                <span>4 Hours</span>
              </div>
            </div>
          </div>
        </article>
      </div>
      </Link>
    </>
  );
}
