import React, { useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import AOS from "aos";
// Import images (replace with actual paths)
import HomepageImage from "../../assets/homepage_01.png";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import "aos/dist/aos.css";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../../components/ui/chart";
import { InteractiveHoverButton } from "../../components/ui/InteractiveHoverButton";
import cardData from "../../lib/data/cartData.jsx";
import { NumberTicker } from "../../components/ui/NumberTicker";
import { Slide } from "../../components/slids/Slide.jsx";
const stats = [
  {
    name: "Students",
    value: (
      <NumberTicker
        value={300}
        className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-black   dark:text-white"
      />
    ),
    text: "K",
  },

  {
    name: "Total Sucess",
    value: (
      <NumberTicker
        value={77}
        className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-black  dark:text-white"
      />
    ),
    text: "%",
  },
  {
    name: "Main Questions ",
    value: (
      <NumberTicker
        value={80}
        className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-black  dark:text-white"
      />
    ),
    text: "",
  },
  {
    name: "Chief Experts",
    value: (
      <NumberTicker
        value={100}
        className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-black  dark:text-white"
      />
    ),
    text: "",
  },
  {
    name: "Year Experience",
    value: (
      <NumberTicker
        value={16}
        className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-black  dark:text-white"
      />
    ),
    text: "",
  },
];
const Chart = () => {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];
  const chartConfig = {
    desktop: {
      label: "Men",
      color: "#2563eb",
    },
    mobile: {
      label: "Womens",
      color: "#60a5fa",
    },
  };
  return (
    <>
      <div className="w-full max-w-[75%] mx-auto items-center py-16 xl:flex ">
        <div data-aos="fade-right" className="text-center md:text-start">
          <p className=" text-4xl mb-4 font-bold tracking-tight text-gray-900 dark:text-textDark sm:text-5xl">
            It's The Chart of our enrolled last 6 month
          </p>
          <p className="text-md w-full">
            Gain comprehensive knowledge and skills through our expertly
            designed courses, tailored to enhance your learning experience.
          </p>
          <InteractiveHoverButton
            data-aos="fade-up-right"
            children="ENROLL"
            className="bg-primary text-white rounded-sm mt-3"
          />
        </div>
        <div data-aos="fade-up" className="flex justify-center w-full mt-4 ">
          <ChartContainer
            config={chartConfig}
            className="h-[200px] md:h-[400px] border-2 p-8 rounded-md ml-3 ">
            <BarChart accessibilityLayer data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
              <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
      </div>
    </>
  );
};
const CardSpp = ({ title, description, icon: Icon }) => (
  <div
    data-aos="fade-up"
    className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl  w-80 text-center mt-7 shadow-sm dark:bg-secondaryDark">
    <div className="bg-blue-500 p-4 rounded-full mt-3 relative bottom-[60px]">
      <Icon className="text-white text-2xl" />
    </div>
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white ">
      {title}
    </h2>
    <p className="text-gray-600 mt-2">{description}</p>
  </div>
);
const CardCount = ({ name, value, text }) => (
  <div data-aos="fade-up" className="flex justify-center ">
    <div className="bg-gray-50 shadow-sm rounded-lg p-6 text-center w-64 dark:bg-secondaryDark">
      <h1 className="text-4xl font-bold text-primary">
        {value} {text}
      </h1>
      <h2 className="text-lg text-gray-600 mt-2">{name}</h2>
    </div>
  </div>
);
const HeroSection = () => (
  <div className=" dark:bg-primaryDark pb-16">
    <section className="w-full max-w-[75%] mx-auto flex flex-col min-[1182px]:flex-row justify-between items-center py-16">
      <div className="w-full">
        <h1
          data-aos="fade-down-right"
          className="font-bold leading-tight text-2xl md:text-6xl xl:text-7xl">
          <span className="text-primary">Take your time</span>
          <br />
          and learn from
          <br />
          Anywhere
        </h1>
        <p data-aos="fade-up-right" className="text-md my-6 xl:w-2/3 text-xl">
          Welcome to Serksa, your gateway to limitless learning! Our platform
          offers a wide range of courses designed to help you gain new skills,
          deepen your knowledge, and achieve your goals.
        </p>
        <InteractiveHoverButton
          data-aos="fade-up-right"
          children="Learn More"
          className="bg-primary text-white rounded-sm"
        />
      </div>
      <div className="relative mt-8 md:mt-0">
        <img
          data-aos="fade-left"
          src={HomepageImage}
          alt="Learning illustration"
          className="shadow-sm"
          width={705}
          height={518}
        />
        <span
          data-aos="fade-left"
          className="absolute top-0 right-0 bg-white dark:text-textDark dark:bg-secondaryDark p-4 rounded-lg shadow-lg text-center">
          250 <br />
          Active Students
        </span>
        <span
          data-aos="fade-left"
          className="absolute -bottom-8 -left-12 bg-white dark:text-textDark dark:bg-secondaryDark p-4 rounded-lg shadow-lg text-center">
          150 <br />
          Free Courses
        </span>
      </div>
    </section>
  </div>
);
const WhatISSeakSa = () => (
  <div className="bg-gray-100 dark:bg-primaryDark ">
    <section className=" w-full max-w-[75%] mx-auto flex flex-col min-[1182px]:flex-row justify-between items-center py-16">
      <div className=" flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 flex">
          <img
            data-aos="fade-right"
            src="../src/assets/img.png"
            width={330}
            alt="Students using SeakSa"
          />
        </div>
        <div data-aos="fade-left" className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Is <span className="text-primary">SeakSa?</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed dark:text-white">
            <span className="font-semibold text-primary">SeakSa</span> is a
            powerful platform that enables educators to create and manage online
            classes seamlessly. It allows teachers to store course materials,
            manage assignments, quizzes, and exams, monitor due dates, and
            provide students with feedback—all in one place.
          </p>
        </div>
      </div>
    </section>
  </div>
);
const DemoUs = () => (
  <section>
    <div className="w-full max-w-[75%] mx-auto flex flex-col min-[1182px]:flex-row justify-between items-center py-16">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <div data-aos="fade-right" className="max-w-lg md:max-w-none">
            <h2 className="text-3xl md:text-4xl   font-bold text-gray-900 dark:text-white ">
              Everything you can do in a physical classroom,{" "}
              <span className="text-primary  ">you can do with seakSa</span>
            </h2>
            <p className="mt-4 text-gray-700 text-xl dark:text-white">
              TOTCs school management software helps traditional and online
              schools manage scheduling, attendance, payments and virtual
              classrooms all in one secure cloud-based system.
            </p>
          </div>
        </div>
        <img
          data-aos="fade-left"
          alt=""
          src="../src/assets/computer.jpg"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </div>
    </div>
  </section>
);
const SupportSections = () => (
  <div className="bg-gray-100 dark:bg-primaryDark">
    <section className="w-full mt-12 max-w-[75%] mx-auto md:flex-row items-start py-16 justify-between">
      <div
        data-aos="fade-right"
        className=" leading-tight text-md md:text-4xl ">
        <p className="font-bold text-primary">
          All-In-One {""} <br />
          <span className=" text-black font-bold dark:text-textDark">
            Software Devolopment Cousres
          </span>
        </p>
        <p data-aos="fade-up-right" className="text-lg my-6 xl:w-2/3">
          SeakSa is one powerful online software suite that combines all the
          tools needed to run a successful school or office. It includes
          everything your school or office needs to run smoothly.
        </p>
      </div>
      <div className="mt-8 md:mt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        {cardData.map((card, index) => (
          <CardSpp key={index} {...card} />
        ))}
      </div>
    </section>
  </div>
);
const CountSection = () => (
  <section className="w-full mt-7 max-w-[75%] mx-auto md:flex-row items-start py-16 justify-between ">
    <div
      data-aos="fade-up-right"
      className=" leading-tight text-md md:text-2xl xl:text-4xl ">
      <p className="font-bold text-primary">
        Our Susccess {""} <br />
      </p>
      <p className="text-lg my-6 xl:w-2/3 ">
        SeakSa is one powerful online software suite that combines all the tools
        needed to run a successful school or office. It includes everything your
        school or office needs to run smoothly.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
      {stats.map((stat, index) => (
        <CardCount key={index} {...stat} />
      ))}
    </div>
  </section>
);
const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const keenSliderActiveRef = useRef(null);
  const keenSliderCountRef = useRef(null);
  useEffect(() => {
    const initializeSlider = async () => {
      const { default: KeenSlider } = await import("keen-slider");
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        defaultAnimation: { duration: 750 },
        slides: { origin: "center", perView: 1, spacing: 16 },
        breakpoints: {
          "(min-width: 640px)": {
            slides: { origin: "center", perView: 1.5, spacing: 16 },
          },
          "(min-width: 768px)": {
            slides: { origin: "center", perView: 1.75, spacing: 16 },
          },
          "(min-width: 1024px)": {
            slides: { origin: "center", perView: 3, spacing: 16 },
          },
        },
        created(slider) {
          slider.slides[slider.track.details.rel].classList.remove(
            "opacity-40"
          );
          keenSliderActiveRef.current.innerText = slider.track.details.rel + 1;
          keenSliderCountRef.current.innerText = slider.slides.length;
        },
        slideChanged(slider) {
          slider.slides.forEach((slide) => slide.classList.add("opacity-40"));
          slider.slides[slider.track.details.rel].classList.remove(
            "opacity-40"
          );
          keenSliderActiveRef.current.innerText = slider.track.details.rel + 1;
        },
      });

      const keenSliderPrevious = document.getElementById(
        "keen-slider-previous"
      );
      const keenSliderNext = document.getElementById("keen-slider-next");

      keenSliderPrevious.addEventListener("click", () => slider.prev());
      keenSliderNext.addEventListener("click", () => slider.next());

      return () => {
        slider.destroy();
        keenSliderPrevious.removeEventListener("click", () => slider.prev());
        keenSliderNext.removeEventListener("click", () => slider.next());
      };
    };
    initializeSlider();
  }, []);

  const testimonials = [
    {
      name: "Paul Starr",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "Paul Starr",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "Paul Starr",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "Paul Starr",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    {
      name: "Paul Starr",
      image:
        "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa sit rerum incidunt, a consequuntur recusandae ab saepe illo est quia obcaecati neque quibusdam eius accusamus error officiis atque voluptates magnam!",
    },
    // Add more testimonials as needed
  ];
  return (
    <section className="bg-gray-100 dark:bg-primaryDark">
      <div
        data-aos="fade-right"
        className="mx-auto max-w-screen-xl px-14 py-12 sm:px-6 lg:px-14 lg:py-16">
        <h2 className="text-start   font-bold tracking-tight text-gray-900 dark:text-textDark text-3xl md:text-4xl">
          Read trusted reviews from our students.
        </h2>
        <div data-aos="fade-up" className="mt-8">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide opacity-40 transition-opacity duration-500">
                <blockquote className="rounded-lg bg-gray-50 dark:bg-secondaryDark p-6 shadow-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900 dark:text-textDark">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700 dark:text-textDark">
                    {testimonial.text}
                  </p>
                </blockquote>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="text-gray-600 transition-colors hover:text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <p className="w-16 text-center text-sm text-gray-700">
              <span ref={keenSliderActiveRef}></span> /{" "}
              <span ref={keenSliderCountRef}></span>
            </p>
            <button
              aria-label="Next slide"
              id="keen-slider-next"
              className="text-gray-600 transition-colors hover:text-gray-900">
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
// Main Component
function HomePages() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <main className="bg-white dark:bg-primaryDark dark:text-textDark">
      <HeroSection />
      <WhatISSeakSa />
      <DemoUs />
      <SupportSections />
      <CountSection />
      <TestimonialSlider />
      <Slide />
      <Chart />
    </main>
  );
}

export default HomePages;
