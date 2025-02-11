"use client";

import React, { useState } from "react";
import CartComponent from "../../components/ui/CartComponent";
import { Prevers } from "../../components/ui/Prevers";
import { Tab, Tabs } from "../../components/ui/Tab";
import { MorkUpData } from "../../lib/data/MorkUpData";
import { FaStar } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import { Carousel } from "flowbite-react";

///
type InstructorCardProps = {
  imageSrc: string;
  courseTitle: string;
  tags: string[];
  rating: number;
  numberOfStudents: number;
  numberOfCourses: number;
};

const data: InstructorCardProps[] = [
  {
    imageSrc: "https://images.unsplash.com/photo-1596495577886-d920f1a5015e", // Instructor 1
    courseTitle: "React for Beginners",
    tags: ["React", "Frontend", "JavaScript"],
    rating: 4.8,
    numberOfStudents: 1500,
    numberOfCourses: 5,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // Instructor 2
    courseTitle: "Advanced TypeScript",
    tags: ["TypeScript", "Backend", "Programming"],
    rating: 4.6,
    numberOfStudents: 1200,
    numberOfCourses: 3,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1628890920694-6c7be7b3e22f", // Instructor 3
    courseTitle: "Full-Stack Web Development",
    tags: ["Full-Stack", "MERN", "JavaScript"],
    rating: 4.9,
    numberOfStudents: 2500,
    numberOfCourses: 7,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1596496057305-5c12a8b67f6c", // Instructor 4
    courseTitle: "Data Science with Python",
    tags: ["Python", "Data Science", "Machine Learning"],
    rating: 4.7,
    numberOfStudents: 2000,
    numberOfCourses: 4,
  },
  {
    imageSrc: "https://images.unsplash.com/photo-1600180758894-6e1b3f0d9f99", // Instructor 5
    courseTitle: "Mastering Django",
    tags: ["Django", "Backend", "Python"],
    rating: 4.5,
    numberOfStudents: 1100,
    numberOfCourses: 2,
  },
];

const coursesData: Record<string, object[]> = {
  Most_popular: MorkUpData,
  New: MorkUpData,
  Trending: MorkUpData,
};

type TabContentsProps = {
  id?: number;
  Label?: string;
  Courses?: object[];
  perPageItem?: number;
};

const TabContents = ({
  id = 0,
  Label = "Most popular",
  Courses = [],
  perPageItem = 8,
}: TabContentsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * perPageItem;
  const endIndex = startIndex + perPageItem;

  return (
    <Tab id={id} label={Label}>
      <div className=" p-2 dark:bg-primaryDark grid grid-cols-1 sm:items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Courses.slice(startIndex, endIndex).map((course: any, index) => (
          <CartComponent key={index} {...course} />
        ))}
      </div>

      <CourseCarouselSection />
      <PopularInstructorSection />

      <Prevers
        totalItems={Courses.length}
        perPageItem={perPageItem}
        setCurrentPage={setCurrentPage}
      />
    </Tab>
  );
};

const TabSection = () => {
  return (
    <Tabs>
      <Tab id={1} label="Most popular">
        <TabContents
          id={1}
          Label="Most popular"
          Courses={coursesData.Most_popular}
        />
      </Tab>
      <Tab id={2} label="New">
        <TabContents id={2} Label="New" Courses={coursesData.New} />
      </Tab>
      <Tab id={3} label="Trending">
        <TabContents id={3} Label="Trending" Courses={coursesData.Trending} />
      </Tab>
    </Tabs>
  );
};

const CourseCarouselSection = () => {
  const CourseItem = () => {
    return (
      <div className="flex gap-5 items-center">
        <figure className="w-1/2">
          <img
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg"
            alt="#"
          />
        </figure>
        <div>
          <p className="font-bold text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            repellendus ipsa fugiat tempora culpa sunt.
          </p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            fuga qui enim saepe autem culpa deserunt, quis totam, illum aliquam
            odio optio? Voluptatibus, voluptates, sunt ipsa nihil ipsam magni
            quam facere asperiores eius ab maxime sapiente accusamus, alias sit
            magnam?
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="border-2 rounded-lg p-2 my-2">
      <Carousel
        slideInterval={3500}
        indicators={false}
        leftControl=" "
        rightControl="  "
        className="px-9"
        color="black"
      >
        {[
          ...Array(5)
            .fill(null)
            .map((_, index) => <CourseItem key={index} />),
        ]}
      </Carousel>
    </div>
  );
};

const PopularInstructorSection = () => {
  const InstructorCard = ({
    imageSrc,
    courseTitle,
    tags,
    rating,
    numberOfStudents,
    numberOfCourses,
  }: InstructorCardProps) => {
    return (
      <div className="flex gap-3 items-start border-2 p-4 rounded-lg h-fit w-fit">
        <Avatar
          alt="Remy Sharp"
          src={imageSrc}
          sx={{ width: 72, height: 72 }}
        />
        <div>
          <p className="font-bold text-2xl">{courseTitle}</p>
          <p>{tags.map((item) => item)}</p>
          <div>
            <div className="flex gap-1 items-center">
              <p>{rating}</p>
              <FaStar className="text-orange-400" />
              <p className="text-yellow-300">Instructor Rating</p>
            </div>
            <p>{numberOfStudents} students</p>
            <p>{numberOfCourses} courses</p>
          </div>
        </div>
      </div>
    );
  };

  const ListCard = ({ data, index }) => {
    function calculateData({ data, index }) {
      const startIndex = (index - 1) * 3;
      const endIndex = startIndex + 3;
      return data.slice(startIndex, endIndex);
    }

    return (
      <div className="grid grid-cols-4 items-center gap-4">
        {calculateData({ data, index }).map((item, index) => (
          <InstructorCard key={index} {...item} />
        ))}
      </div>
    );
  };

  return (
    <Carousel
      slideInterval={3500}
      indicators={false}
      leftControl=" "
      rightControl="  "
      className="my-4"
    >
      {[
        ...Array(Math.round(data.length / 3))
          .fill(null)
          .map((_, index) => (
            <ListCard data={data} index={index + 1} key={index} />
          )),
      ]}
    </Carousel>
  );
};

export default function CoursesPage() {
  return (
    <section className="w-[80%] mx-auto">
      <div className="flex flex-col gap-5 my-6">
        <p className="font-bold text-4xl">Development Courses</p>
        <div>
          <p className="font-bold text-2xl">Courses to get you started</p>
          <p>Explore courses from experienced, real-world experts.</p>
        </div>
      </div>
      <TabSection />
    </section>
  );
}
