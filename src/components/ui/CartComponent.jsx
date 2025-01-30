import React, { useEffect } from "react";
import { IoBook } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";
import { Avatar } from "flowbite-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { MorkUpData } from "../../lib/data/MorkUpData";

export default function CartComponent({ id }) {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const data = MorkUpData.find((item) => item.id === id);
  // If data is not found, redirect to a 404 page or display a message
  if (!data) {
    navigate("/not-found"); // Redirect to a 404 page or any other route
    return null; // Return null to prevent rendering the component
  }

  return (
    <Link to={`/detailpage/${data.id}`}>
      <div data-aos="fade-up">
        <article className="overflow-hidden rounded-lg shadow transition hover:translate-y-2 hover:shadow-xl">
          <img alt="" src={data.img} className="h-56 w-full object-cover" />
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
              <h3 className="mt-4 text-lg font-semibold text-gray-900 line-clamp-2">
                {data.title}
              </h3>
            </a>

            <p className="mt-2 text-sm text-gray-500 line-clamp-3">
              {data.description}
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
  );
}
