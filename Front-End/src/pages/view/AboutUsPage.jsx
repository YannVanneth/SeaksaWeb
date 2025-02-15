import React, { useEffect } from "react";
import { NumberTicker } from "../../components/ui/NumberTicker";
import OurTeam from "../../components/about/OurTeam";
import { IconCloud } from "../../components/ui/IconCloud";
import AOS from "aos";
import "aos/dist/aos.css";
import { InteractiveHoverButton } from "../../components/ui/InteractiveHoverButton";
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    {
      name: "Offices worldwide",
      value: (
        <NumberTicker
          value={30}
          className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-primary "
        />
      ),
      text: "+",
    },

    {
      name: "Full-time colleagues",
      value: (
        <NumberTicker
          value={50}
          className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-primary"
        />
      ),
      text: "+",
    },
    {
      name: "Hours per week",
      value: (
        <NumberTicker
          value={100}
          className="whitespace-pre-wrap text-ml font-medium tracking-tighter text-primary"
        />
      ),
      text: "+",
    },
    { name: "Paid time off", value: "Unlimited" },
  ];
  return (
    <div className=" dark:bg-primaryDark">
      <section className="flex flex-wrap mx-4 px-14 lg:mx-32 ">
        <div className="container w-full lg:w-[50%] m-auto order-2 lg:order-1 text-center lg:text-left">
          <h1
            data-aos="fade-down-right"
            className="text-primary text-3xl font-bold"
          >
            About Us
          </h1>
          <div data-aos="fade-right" className="mt-4">
            <p className="text-xl text-secondary font-bold">
              WHY SHOULD YOU CHOOSE US?
            </p>
            <h2 className="text-2xl lg:text-5xl pl-4 border-l-4 lg:border-l-8 border-secondary text-secondary font-bold text-left">
              SEAKSA
            </h2>
            <p className="text-gray-700 dark:text-textDark text-lg lg:text-2xl mt-4">
              Education is the most powerful weapon which you can use to change
              the world. So <span className="text-primary">SEAKSA</span>{" "}
              providing the best opportunities to Get a Lots Of Skill from Us.
            </p>
          </div>
          <InteractiveHoverButton
            data-aos="fade-up-right"
            children="Join Us "
            className="mt-2 bg-primary text-white rounded-md"
          />
        </div>
        <div
          data-aos="fade-left"
          className="w-full lg:w-[50%] order-1 lg:order-2 flex justify-center lg:justify-end "
        >
          <IconCloud images={images} />
        </div>
      </section>
      <section></section>
      <section>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <img
            alt=""
            src="../src/assets/typing.jpg"
            className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center blur-sm "
          />
          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                data-aos="fade-down-right"
                className="text-5xl font-semibold tracking-tight text-primary sm:text-7xl"
              >
                Work with us
              </h2>
              <p
                data-aos="fade-right"
                className="mt-8 text-pretty text-lg font-medium text-black sm:text-xl/8 dark:text-textDark"
              >
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat.
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <div
                data-aos="fade-right"
                className="grid grid-cols-1 gap-x-8 gap-y-6 text-base/7 font-semibold text-black sm:grid-cols-2 md:flex lg:gap-x-10"
              >
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="dark:text-textDark text-black"
                  >
                    {link.name} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
              <dl
                data-aos="fade-up"
                className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
              >
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse gap-1">
                    <dt className=" text-secondary text-lg font-bold dark:text-textDark">
                      {stat.name}
                    </dt>
                    <dd className="text-4xl  tracking-tight text-primary font-bold">
                      {stat.value}
                      {stat.text}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
      <main className="w-full px-4 py-16 sm:px-6 lg:px-36">
        {/* Features Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold">
              <span className="text-primary">Our </span>
              <span className="dark:text-textDark">Features</span>
            </h2>
            <p className="mt-4 text-muted-foreground dark:text-textDark">
              This very extraordinary feature, can make learning activities more
              efficient
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Background Blur Effect */}
              <div className="bg-primary/10 absolute -top-8 -left-8 w-32 h-32 rounded-full blur-3xl" />

              {/* Card Container */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid">
                  {/* Full-Width Image */}
                  <div className="relative w-full h-64 md:h-80">
                    <img
                      src="../src/assets/about/call.png"
                      alt="Teacher in a video call"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                      6 more members
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-semibold dark:text-textDark">
                A <span className="text-primary">user interface</span> designed
                <br />
                for the classroom
              </h3>
              <div className="space-y-6">
                {[
                  {
                    text: "Teachers don't get lost in the grid view and have a dedicated podium space.",
                  },
                  {
                    text: "TA's and presenters can be moved to the front of the class.",
                  },
                  {
                    text: "Teachers can easily see all students and class data at one time.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 dark:text-textDark"
                  >
                    <div className="size-6 rounded bg-muted flex items-center justify-center">
                      <div className="size-2 rounded-full bg-primary" />
                    </div>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-textDark">
                <span className="text-primary">Tools</span> For Teachers
                <br />
                And Learners
              </h2>
              <p className="text-muted-foreground dark:text-textDark">
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>
            <div className="relative">
              <div className="bg-primary/10 absolute -bottom-8 -right-8 w-32 h-32 rounded-full blur-3xl" />
              <img
                src="../src/assets/about/stugril.png"
                alt="Student with books and materials"
                className="relative rounded-xl h-[500px]"
              />
            </div>
          </div>
        </section>

        {/* Assessment Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold dark:text-textDark">
                  True or false? This play takes place in Italy
                </h4>
                <img
                  src="../src/assets/about/thur.png"
                  alt="Venice cityscape with gondola"
                  className="rounded-lg h-[400px]"
                />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-textDark">
                Assessments,
                <br />
                <span className="text-primary">Quizzes</span>, Tests
              </h2>
              <p className="text-muted-foreground dark:text-textDark">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>
        </section>

        {/* Class Management Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-textDark">
                <span className="text-primary">Class Management</span>
                <br />
                Tools for Educators
              </h2>
              <p className="text-muted-foreground dark:text-textDark">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="size-8 rounded-full bg-yellow-400 flex items-center justify-center text-white">
                        ★
                      </div>
                      <span className="font-semibold">GradeBook</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Rin Sanom.",
                        score: 100,
                        img: "../src/assets/member/nom.png",
                      },
                      {
                        name: "Yann Vanneth.",
                        score: 85,
                        img: "../src/assets/member/neth.png",
                      },
                      {
                        name: "Michael R.",
                        score: 75,
                        img: "../src/assets/member/neth.png",
                      },
                    ].map((student, i) => (
                      <div key={i} className="flex items-center gap-4 ">
                        {student.img && (
                          <img
                            src={student.img}
                            alt={student.name}
                            className="size-16 object-cover rounded-full"
                          />
                        )}
                        <div className="flex-1">
                          <span className="font-semibold">{student.name}</span>
                          <div className="h-2 rounded-full bg-muted overflow-hidden mt-1">
                            <div
                              className="h-full bg-primary"
                              style={{ width: `${student.score}%` }}
                            />
                          </div>
                        </div>
                        <span className="font-semibold">{student.score}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-primary text-white rounded-lg py-2">
                    Export
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* One-on-One Section */}
        <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Private Discussion</h4>
                  <div className="">
                    <img
                      src="../src/assets/about/image.png"
                      className=" rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold dark:text-textDark">
                One-on-One
                <br />
                <span className="text-primary">Discussions</span>
              </h2>
              <p className="text-muted-foreground dark:text-textDark">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </section>
      </main>
      <OurTeam />
    </div>
  );
}
