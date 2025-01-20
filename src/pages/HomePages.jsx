import { Button } from "../components/ui/Button";
import { CiBookmark } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";

const styles = {
  section:
    "w-[75%] mx-auto flex justify-between items-center leading-tight h-screen",
  textContainer: "text-wrap w-1/3",
  heading: "text-[60px] font-bold leading-tight",
  subheading: "text-[40px] font-bold leading-tight",
  primaryText: "text-primary",
  description: "text-[16px] my-5",
  imageContainer: "relative",
  label:
    "text-primary bg-white drop-shadow-lg text-center p-6 rounded-lg absolute",
};

const responsive = {
  lg: "",
  md: "",
  sm: "flex justify-center",
};

const popularCoursesData = [
  {
    Title: "Web Development",
    description:
      "Discover how to build web applications using HTML, CSS, and JavaScript. Learn from top-notch developers and industry experts.",
    ImageSrc: "src/assets/figma.svg",
    link: "/courses/web-development",
  },
];

// section conponents
const HomePages = () => {
  return (
    <main>
      <HeroSection />
      <SupportSections />
      <CategoriesSection />
      <PopularCourses />
      <EducationTipSection />
    </main>
  );
};

export default HomePages;

const HeroSection = () => {
  return (
    <section className={`${styles.section} justify-start`}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>
          <span className={styles.primaryText}>Take your time</span>
          <br />
          and learn from
          <br />
          Anywhere
        </h1>
        <p className={styles.description}>
          Welcome to Serksa, your gateway to limitless learning! Our platform
          offers a wide range of courses designed to help you gain new skills,
          deepen your knowledge, and achieve your goals.
        </p>
        <Button
          variant="primary"
          className="text-white"
          rightIcon={<FaArrowRight />}
        >
          Learn more
        </Button>
      </div>

      <div className={styles.imageContainer}>
        <img
          src="src/assets/homepage_01.png"
          alt="Learning illustration"
          className="shadow-sm"
          width={705}
          height={518}
        />

        <span className={`${styles.label} top-0 right-0`}>
          250 <br />
          Active Students
        </span>
        <span className={`${styles.label} -bottom-8 -left-12`}>
          150 <br />
          Free Courses
        </span>
      </div>
    </section>
  );
};
const SupportSections = () => {
  // the pages conponents
  const CardSpp = ({ icons, title, description, actionButton }) => {
    return (
      <div className="w-[60%]">
        <img src={icons} alt={icons} width={46} height={51} />
        <div className="my-3">
          <p className="font-bold mb-2 text-[16px]">{title}</p>
          <p className="text-[14px] text-primary w-[60%]">{description}</p>
        </div>
        <Button variant="primary" className="text-white">
          {actionButton}
        </Button>
      </div>
    );
  };

  return (
    <section
      className={`${styles.section
        .replace("justify-between", "justify-start")
        .replace("items-center", "items-start")} h-[60%] mb-[8rem]`}
    >
      <div className="flex items-center w-auto">
        <CardSpp
          icons="src/assets/book_icons.svg"
          title="Powerful Program"
          description="Our programs are set up for the student in the world"
          actionButton={<FaArrowRight />}
        />
        <CardSpp
          icons="src/assets/support_icon.svg"
          title="24/7 Supports"
          description="If you have any question , you can contact our  support"
          actionButton={<FaArrowRight />}
        />
      </div>
      <div className="w-1/4">
        <p className={`font-bold mb-3 ${styles.subheading}`}>
          Our best features <br />
          <span className="text-primary">Special for you</span>
        </p>
        <p>Look into yourself, get something in return your achievements</p>
      </div>
    </section>
  );
};

const CategoriesSection = () => {
  const CategoryCard = ({ ImageSrc, title, NumberOfCourses }) => {
    return (
      <div className="rounded-md shadow-lg overflow-clip">
        <img src={ImageSrc} alt={ImageSrc} />
        <div className="px-4 py-2 text-center leading-7">
          <p className="text-[18px]">{title}</p>
          <p className="text-[14px] ">{NumberOfCourses} courses</p>
        </div>
      </div>
    );
  };

  return (
    <section
      id="categories_section"
      className={`${styles.section.replace(
        "h-screen",
        "h-fit"
      )} flex-col gap-[6rem] mb-16`}
    >
      <div className="text-center w-full">
        <p className={`text-primary ${styles.subheading} mb-3`}>
          All Categories
        </p>
        <p className="w-[45%] mx-auto ">
          Gain comprehensive knowledge and skills through our expertly designed
          courses, tailored to enhance your learning experience.
        </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-10 gap-x-20">
        {...Array(6)
          .fill()
          .map((_, index) => {
            return (
              <CategoryCard
                key={index}
                ImageSrc="src/assets/Web_development.svg"
                title="Web development"
                NumberOfCourses="7"
              />
            );
          })}
      </div>
    </section>
  );
};

const PopularCourses = () => {
  const PopularCourseCard = ({
    title,
    description,
    ImageSrc,
    isBookmark = false,
    CourseDuration,
    NumberOfLectures,
  }) => {
    return (
      <div className="bg-white rounded-lg overflow-clip">
        <img src={ImageSrc} alt={ImageSrc} width="100%" />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <p className="text-[24px] font-bold">{title}</p>
            <CiBookmark size={30} color={isBookmark ? "white" : "blue"} />
          </div>
          <p className="text-[16px] my-8">{description}</p>
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
              <img src="src/assets/Lectures.svg" alt="Lectures.svg" />
              <span>{NumberOfLectures} Lectures</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <img src="src/assets/Duration.svg" alt="Duration.svg" />
              <span>{CourseDuration} Hours</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <section id="popularCourses" className="bg-[#0D9488] py-16">
      <div
        className={`${styles.section.replace(
          "h-screen",
          "h-fit"
        )} flex-col gap-32`}
      >
        <div className="text-center w-full">
          <p className={`text-white ${styles.subheading} mb-3`}>
            Our popular courses
          </p>
          <p className="w-[45%] mx-auto text-white">
            Unlock your potential with Our Best Course, where expert-led lessons
            meet practical skills. Whether you're a beginner or looking to
            enhance your knowledge, this course provides all the tools you need
            to succeed. Learn at your own pace, anytime, anywhere, and achieve
            your goals with confidence!
          </p>
        </div>
        <div className="grid grid-rows-2 gap-10">
          <div>
            <div className="mb-10">
              <p className={`${styles.subheading} text-white`}>
                Web Development
              </p>
              <div className="bg-gray-400 h-3 w-[15%] my-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-x-10">
              {/* {popularCoursesData.map((value, index) => {
                return (
                  <PopularCourseCard
                    key={index}
                    ImageSrc={value.ImageSrc}
                    title={value.Title}
                    description={value.description}
                    NumberOfLectures={value.NumberOfLectures}
                    CourseDuration={value.CourseDuration}
                  />
                );
              })} */}

              {...Array(3)
                .fill()
                .map((_, index) => {
                  return (
                    <PopularCourseCard
                      ImageSrc="src/assets/figma.svg"
                      Title="Review regularly"
                      description=" Revisit previous lessons to strengthen memory retention. This could be through re-reading notes, watching summary videos, or taking practice quizzes."
                    />
                  );
                })}
            </div>
          </div>
          <div>
            <div className="mb-10">
              <p className={`${styles.subheading} text-white`}>
                Web Development
              </p>
              <div className="bg-gray-400 h-3 w-[25%] my-2"></div>
            </div>
            <div className="grid grid-cols-3 gap-x-10">
              <PopularCourseCard
                ImageSrc="src/assets/figma.svg"
                title="UX/UI Design Course"
                description="UI and UX aim to create products that are not only visually appealing but also user-friendly and efficient to interagwgebhsvdbserw"
                NumberOfLectures={10}
                CourseDuration="1hr 30mins"
              />
              <PopularCourseCard
                ImageSrc="src/assets/figma.svg"
                title="UX/UI Design Course"
                description="UI and UX aim to create products that are not only visually appealing but also user-friendly and efficient to interagwgebhsvdbserw"
                NumberOfLectures={10}
                CourseDuration="1hr 30mins"
              />
              <PopularCourseCard
                ImageSrc="src/assets/figma.svg"
                title="UX/UI Design Course"
                description="UI and UX aim to create products that are not only visually appealing but also user-friendly and efficient to interagwgebhsvdbserw"
                NumberOfLectures={10}
                CourseDuration="1hr 30mins"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EducationTipSection = () => {
  const TipCard = ({ ImageSrc, Title, description }) => {
    return (
      <div className="w-[85%] bg-white shadow-md rounded-sm overflow-clip">
        <img src={ImageSrc} alt={ImageSrc} width="100%" />
        <div className="p-4">
          <p className="text-[24px] font-bold mb-2">{Title}</p>
          <p className="text-[16px]">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <section
      className={`${styles.section.replace(
        "justify-between",
        ""
      )} flex-col my-6 gap-36`}
    >
      <div>
        <p className={`my-8 ${styles.subheading}`}>Educational Tips & Tricks</p>
        <div className="grid grid-cols-3">
          {...Array(3)
            .fill()
            .map((_, index) => {
              return (
                <TipCard
                  ImageSrc="src/assets/figma.svg"
                  Title="Review regularly"
                  description=" Revisit previous lessons to strengthen memory retention. This could be through re-reading notes, watching summary videos, or taking practice quizzes."
                />
              );
            })}
        </div>
      </div>
      <div className="rounded-2xl text-black bg-[#0d948956] p-8 w-full">
        <p className="font-bold text-[40px] mb-10">
          Best languages course of SERKSA
        </p>
        <div className="grid grid-cols-5 gap-x-10 py-4">
          {...Array(5)
            .fill()
            .map((_, index) => {
              return (
                <img
                  src="src/assets/html.svg"
                  alt="figma.svg"
                  width={130}
                  height={130}
                  className="rounded-sm"
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
