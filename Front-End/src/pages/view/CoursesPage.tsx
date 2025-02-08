"use client";

import { Carousel } from "flowbite-react";
import React, { useState } from "react";
import CartComponent from "../../components/ui/CartComponent";
import { Prevers } from "../../components/ui/Prevers";
import { Tab, Tabs } from "../../components/ui/Tab";
import { MorkUpData } from "../../lib/data/MorkUpData";

type Course = {
  id: number;
};

const coursesData: Record<string, Course[]> = {
  Most_popular: MorkUpData,
  New: MorkUpData,
  Trending: MorkUpData,
};

type TabContentsProps = {
  id?: number;
  Label?: string;
  Courses?: Course[];
  perPageItem?: number;
};

const TabContents = ({ id = 0, Label = "Most popular", Courses = [], perPageItem = 8 }: TabContentsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate start and end indexes
  const startIndex = (currentPage - 1) * perPageItem;
  const endIndex = startIndex + perPageItem;

  return (
    <Tab id={id} label={Label}>
      <div className="grid sm:items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-4 p-2 dark:bg-primaryDark">
        {Courses.slice(startIndex, endIndex).map((course) => (
          <CartComponent key={course.id} {...course} />
        ))}
      </div>
      {/* Pass setCurrentPage to Prevers */}
      <Prevers totalItems={Courses.length} perPageItem={perPageItem} setCurrentPage={setCurrentPage} />
    </Tab>
  );
};

const TabSection = () => {
  return (
    <Tabs>
      <Tab id={1} label="Most popular">
        <TabContents id={1} Label="Most popular" Courses={coursesData.Most_popular} />
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



const CarouselSection = () => {

  const CarouselItem = ()=>{
    return <div className="flex gap-5 items-center border-2 rounded-lg p-4">
      <figure className="w-1/2">
      <img src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_3x2.jpg" alt="#" />
      </figure>
      <div>
        <p className="font-bold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus ipsa fugiat tempora culpa sunt.</p>
        <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate fuga qui enim saepe autem culpa deserunt, quis totam, illum aliquam odio optio? Voluptatibus, voluptates, sunt ipsa nihil ipsam magni quam facere asperiores eius ab maxime sapiente accusamus, alias sit magnam?</p>
      </div>
    </div>
  }

  return <div >
  <Carousel slideInterval={3500} indicators={false} leftControl=" " rightControl="  " className="px-9" color="black">
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
    <CarouselItem />
  </Carousel>
</div>
}

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
      <CarouselSection />
    </section>
  );
}
