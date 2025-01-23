import React, { useEffect, useRef } from "react";
import { Button } from "flowbite-react";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { NumberTicker } from "../components/ui/NumberTicker";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";

// Import images (replace with actual paths)
import BookIcon from "../assets/book_icons.svg";
import SupportIcon from "../assets/support_icon.svg";
import WebDevelopmentIcon from "../assets/Web_development.svg";
import FigmaIcon from "../assets/figma.svg";
import LecturesIcon from "../assets/Lectures.svg";
import DurationIcon from "../assets/Duration.svg";
import HomepageImage from "../assets/homepage_01.png";
import HtmlIcon from "../assets/html.svg";
import { ArrowRight } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../components/ui/chart";
import { InteractiveHoverButton } from "../components/ui/InteractiveHoverButton";
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
      <div className="w-full max-w-[75%] mx-auto  items-center py-16">
        <div className="text-center">
          <p className=" text-4xl mb-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
            It's The Chart of our inrolled last 6 month
          </p>
          <p className="text-md w-full">
            Gain comprehensive knowledge and skills through our expertly
            designed courses, tailored to enhance your learning experience.
          </p>
        </div>
        <div className="flex justify-center w-full mt-4">
          <ChartContainer
            config={chartConfig}
            className="h-[400px] border-2 p-8 rounded-md ml-3"
          >
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
// Reusable Components
const CardSpp = ({ value, icons, title, description, actionButton }) => (
  <div className="w-full md:w-fit p-4 bg-white rounded-lg shadow-md h-fit">
    <img src={icons} alt={title} width={46} height={51} />
    <div className="my-3">
      <p className="font-bold mb-2 text-lg">{title}</p>
      <p className="text-sm text-primary">{description}</p>
    </div>
    <InteractiveHoverButton children="Explor" className="rounded-md" />
  </div>
);

const CategoryCard = ({ ImageSrc, title, NumberOfCourses }) => (
  <>
    <a
      href="#"
      className="relative block rounded-tr-3xl border border-gray-100"
    >
      <span className="absolute -right-px -top-px rounded-bl-3xl rounded-tr-3xl bg-rose-600 px-6 py-4 font-medium uppercase tracking-widest text-white">
        Save 10%
      </span>

      <img
        src={ImageSrc}
        alt=""
        className="h-80 w-full rounded-tr-3xl object-cover"
      />
      <div className="p-4 text-start">
        <strong className="text-xl font-medium text-gray-900">
          {" "}
          Aloe Vera{" "}
        </strong>

        <p className="mt-2 text-pretty text-gray-700">{title}</p>

        <span className="mt-4 block rounded-md border  bg-secondary px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-indigo-900">
          Learn More
        </span>
      </div>
    </a>
  </>
);

const PopularCourseCard = ({
  title,
  description,
  ImageSrc,
  CourseDuration,
  NumberOfLectures,
}) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={ImageSrc} alt={title} className="w-full" />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">{title}</p>
          <button onClick={toggleBookmark} aria-label="Bookmark">
            <CiBookmark size={30} color={isBookmarked ? "blue" : "gray"} />
          </button>
        </div>
        <p className="text-sm my-4">{description}</p>
        <div className="flex xl:justify-between xl:items-center xl:flex-row lg:flex-col lg:items-start text-sm">
          <div className="flex items-center gap-2">
            <img src={LecturesIcon} alt="Lectures" />
            <span>{NumberOfLectures} Lectures</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={DurationIcon} alt="Duration" />
            <span>{CourseDuration} Hours</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const TipCard = ({ ImageSrc, Title, description }) => (
  <div className="w-full bg-white shadow-md rounded-lg overflow-hidden">
    <img src={ImageSrc} alt={Title} className="w-full" />
    <div className="p-4">
      <p className="text-xl font-bold mb-2">{Title}</p>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

const HeroSection = () => (
  <section className="w-full max-w-[75%] mx-auto flex flex-col min-[1182px]:flex-row justify-between items-center py-16">
    <div className="w-full">
      <h1 className="font-bold leading-tight text-5xl md:text-6xl xl:text-7xl">
        <span className="text-primary">Take your time</span>
        <br />
        and learn from
        <br />
        Anywhere
      </h1>
      <p className="text-md my-6 xl:w-2/3">
        Welcome to Serksa, your gateway to limitless learning! Our platform
        offers a wide range of courses designed to help you gain new skills,
        deepen your knowledge, and achieve your goals.
      </p>
      <InteractiveHoverButton
        children="Learn More"
        className="bg-primary text-white rounded-sm"
      />
    </div>
    <div className="relative mt-8 md:mt-0">
      <img
        src={HomepageImage}
        alt="Learning illustration"
        className="shadow-sm"
        width={705}
        height={518}
      />
      <span className="absolute top-0 right-0 bg-white p-4 rounded-lg shadow-lg text-center">
        250 <br />
        Active Students
      </span>
      <span className="absolute -bottom-8 -left-12 bg-white p-4 rounded-lg shadow-lg text-center">
        150 <br />
        Free Courses
      </span>
    </div>
  </section>
);

const SupportSections = () => (
  <section className="w-full mt-12 max-w-[75%] mx-auto flex flex-col md:flex-row items-start py-16 justify-between">
    <CardSpp
      value={
        <NumberTicker
          value={100}
          className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-black"
        />
      }
      icons={BookIcon}
      title="Powerful Program"
      description="Our programs are set up for the student in the world"
    />
    <CardSpp
      icons={SupportIcon}
      title="24/7 Supports"
      description="If you have any question, you can contact our support"
      actionButton={<FaArrowRight />}
    />
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10 xl:w-1/4 ">
      <p className="text-2xl md:text-4xl font-bold mb-3">
        Our best features
        <br />
        <span className="text-primary"> Special for you</span>
      </p>
      <p className="text-sm">
        Look into yourself, get something in return your achievements
      </p>
    </div>
  </section>
);

const CategoriesSection = () => (
  <section className="w-full max-w-[75%] mx-auto flex flex-col items-start py-16">
    <div className="w-full">
      <p className="text-start text-4xl mb-4 font-bold tracking-tight text-gray-900 sm:text-5xl">
        Our Famous Courses
      </p>
      <p className="text-md text-start w-full md:w-[45%]">
        Gain comprehensive knowledge and skills through our expertly designed
        courses, tailored to enhance your learning experience.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {[...Array(3)].map((_, index) => (
        <CategoryCard
          key={index}
          ImageSrc={WebDevelopmentIcon}
          title="Web Development"
          NumberOfCourses="7"
        />
      ))}
    </div>
  </section>
);

const PopularCourses = () => (
  <section className="bg-background py-16">
    <div className="w-full max-w-[75%] mx-auto flex flex-col items-center">
      <div className="text-center">
        <p className="text-2xl md:text-4xl text-white font-bold mb-3">
          Our Popular Courses
        </p>
        <p className="text-sm w-full md:w-[45%] mx-auto text-white">
          Unlock your potential with Our Best Course, where expert-led lessons
          meet practical skills.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[...Array(3)].map((_, index) => (
          <PopularCourseCard
            key={index}
            title="HTML & CSS"
            description="Learn HTML5 and CSS3 to build modern websites"
            NumberOfLectures="30"
            ImageSrc={FigmaIcon}
            CourseDuration="4 hours"
          />
        ))}
      </div>
    </div>
  </section>
);

const EducationTipSection = () => (
  <section className="w-full max-w-[75%] mx-auto flex flex-col items-center py-16">
    <div className="text-center">
      <p className="text-2xl md:text-4xl font-bold mb-3">
        Educational Tips & Tricks
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {[...Array(3)].map((_, index) => (
        <TipCard
          key={index}
          ImageSrc={FigmaIcon}
          Title="Review Regularly"
          description="Revisit previous lessons to strengthen memory retention."
        />
      ))}
    </div>
    <div className="rounded-2xl text-black bg-[#0d948956] w-full p-6 mt-10">
      <p className="font-bold  xl:text-5xl text-3xl md:text-4xl mb-10">
        Best languages course of SERKSA
      </p>
      <div className="grid grid-cols-5 my-4 place-items-center">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={HtmlIcon}
            alt="HTML Icon"
            className="rounded-sm"
          />
        ))}
      </div>
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
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-start  text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our students.
        </h2>
        <div className="mt-8">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="keen-slider__slide opacity-40 transition-opacity duration-500"
              >
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-sm sm:p-8">
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
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{testimonial.text}</p>
                </blockquote>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5"
              >
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
              className="text-gray-600 transition-colors hover:text-gray-900"
            >
              <svg
                className="size-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
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
  return (
    <main>
      <HeroSection />
      <SupportSections />
      <TestimonialSlider />
      <CategoriesSection />
      <Chart />
      {/* <PopularCourses />
      <EducationTipSection /> */}
    </main>
  );
}

export default HomePages;
