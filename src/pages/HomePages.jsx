import { Button } from "flowbite-react";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

// Import images (replace with actual paths)
import BookIcon from "../assets/book_icons.svg";
import SupportIcon from "../assets/support_icon.svg";
import WebDevelopmentIcon from "../assets/Web_development.svg";
import FigmaIcon from "../assets/figma.svg";
import LecturesIcon from "../assets/Lectures.svg";
import DurationIcon from "../assets/Duration.svg";
import HomepageImage from "../assets/homepage_01.png";
import HtmlIcon from "../assets/html.svg";

const CardSpp = ({ icons, title, description, actionButton }) => (
  <div className="w-full md:w-fit p-4 bg-white rounded-lg shadow-md h-fit">
    <img src={icons} alt={title} width={46} height={51} />
    <div className="my-3">
      <p className="font-bold mb-2 text-lg">{title}</p>
      <p className="text-sm text-primary">{description}</p>
    </div>
    <Button color="success">{actionButton}</Button>
  </div>
);

const CategoryCard = ({ ImageSrc, title, NumberOfCourses }) => (
  <div className="rounded-md shadow-lg overflow-hidden">
    <img src={ImageSrc} alt={title} className="w-full" />
    <div className="px-4 py-2 text-center">
      <p className="text-lg font-semibold">{title}</p>
      <p className="text-sm text-gray-600">{NumberOfCourses} courses</p>
    </div>
  </div>
);

const PopularCourseCard = ({
  title,
  description,
  ImageSrc,
  CourseDuration,
  NumberOfLectures,
}) => {
  // State to manage bookmark status
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Function to toggle bookmark status
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
            <CiBookmark
              size={30}
              color={isBookmarked ? "blue" : "gray"} // Change color based on bookmark status
            />
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
      <Button color="success">Learn more</Button>
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
  <section className="w-full max-w-[75%] mx-auto flex flex-col md:flex-row items-start py-16 justify-start">
    <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8">
      <CardSpp
        icons={BookIcon}
        title="Powerful Program"
        description="Our programs are set up for the student in the world"
        actionButton={<FaArrowRight />}
      />
      <CardSpp
        icons={SupportIcon}
        title="24/7 Supports"
        description="If you have any question, you can contact our support"
        actionButton={<FaArrowRight />}
      />
    </div>
    <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-10 xl:w-1/4">
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
  <section className="w-full max-w-[75%] mx-auto flex flex-col items-center py-16">
    <div className="text-center">
      <p className="text-2xl md:text-4xl text-primary font-bold mb-3">
        All Categories
      </p>
      <p className="text-sm w-full md:w-[45%] mx-auto">
        Gain comprehensive knowledge and skills through our expertly designed
        courses, tailored to enhance your learning experience.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {[...Array(6)].map((_, index) => (
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

// // Main Component
const HomePages = () => (
  <main>
    <HeroSection />
    <SupportSections />
    <CategoriesSection />
    <PopularCourses />
    <EducationTipSection />
  </main>
);

export default HomePages;
