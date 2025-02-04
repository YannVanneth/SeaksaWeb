import React from "react";
import { HiUsers } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import DashboardOverview from "./AddCourse";
export default function CourseManagement() {
  const metrics = [
    {
      title: "Total Students",
      value: "3,721",
      icon: <HiUsers className="text-2xl text-primary" />,
    },
    {
      title: "Active Courses",
      value: "42",
      icon: <IoBookOutline className="text-2xl text-primary" />,
    },
    {
      title: "Completed Courses",
      value: "1,284",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8 text-yellow-600">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
    },
    {
      title: "Total Revenue",
      value: "$12,345",
      icon: <FaHandHoldingUsd className="text-2xl text-primary" />,
    },
  ];

  // Data for the Cart components
  const cartData = [
    {
      title: "New Students",
      description: "Track the number of new students joining this month.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
        </svg>
      ),
    },
    {
      title: "Upcoming Courses",
      description: "Stay updated on the upcoming courses available soon.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H8m4 4H8m8-8H8"
          />
        </svg>
      ),
    },
    {
      title: "Revenue Insights",
      description: "Get detailed insights on the revenue generated.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h11M9 21V3m5 18l5-5m-5 5l-5-5"
          />
        </svg>
      ),
    },
  ];

  // Define the Card component
  const Card = ({ title, description, icon }) => {
    return (
      <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          {icon}
        </span>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          {description}
        </p>

        <a
          href="#"
          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Find out more
          <span
            aria-hidden="true"
            className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a>
      </article>
    );
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Course Management
      </h2>

      {/* Render the metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {metric.title}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
              </div>
              <div>{metric.icon}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Render the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cartData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            description={data.description}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
}
