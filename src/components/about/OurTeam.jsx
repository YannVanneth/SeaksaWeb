import { Avatar } from "flowbite-react";
import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const OurTeam = () => {
  useEffect(() => {
    // Import KeenSlider dynamically
    import("https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/+esm").then(
      (KeenSlider) => {
        const keenSlider = new KeenSlider.default(
          "#keen-slider",
          {
            loop: true,
            slides: {
              origin: "center",
              perView: 1.25,
              spacing: 16,
            },
            breakpoints: {
              "(min-width: 1024px)": {
                slides: {
                  origin: "auto",
                  perView: 1.5,
                  spacing: 32,
                },
              },
            },
          },
          []
        );

        const keenSliderPrevious = document.getElementById(
          "keen-slider-previous"
        );
        const keenSliderNext = document.getElementById("keen-slider-next");

        const keenSliderPreviousDesktop = document.getElementById(
          "keen-slider-previous-desktop"
        );
        const keenSliderNextDesktop = document.getElementById(
          "keen-slider-next-desktop"
        );

        keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
        keenSliderNext.addEventListener("click", () => keenSlider.next());

        keenSliderPreviousDesktop.addEventListener("click", () =>
          keenSlider.prev()
        );
        keenSliderNextDesktop.addEventListener("click", () =>
          keenSlider.next()
        );
      }
    );
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="bg-gray-50 dark:bg-primaryDark">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16"
        >
          <div className="max-w-xl text-start ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-textDark sm:text-4xl">
              Meet Our Teams
            </h2>

            <p className="mt-4 text-gray-700 dark:text-textDark">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-secondary p-4 text-secondary transition hover:bg-secondary hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-secondary p-4 text-secondary transition hover:bg-secondary hover:text-white"
              >
                <svg
                  className="size-5 rtl:rotate-180"
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
          <div data-aos="fade-left" className="-mx-6 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white dark:bg-secondaryDark p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <Avatar
                          img="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                          alt="avatar of Jese"
                          rounded
                        />
                        <div className="text-left">
                          <div className="font-medium text-secondary dark:text-textDark">
                            Rin Sanom
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Team Leader
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-700 dark:text-textDark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas veritatis illo placeat harum porro optio fugit
                        a culpa sunt id.
                      </p>
                      <ul className="flex p-3 pl-0 space-x-4 text-xl text-gray-600 dark:text-textDark">
                        <li>
                          <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://telegram.org"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTelegram />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-textDark sm:mt-6">
                    &mdash; Front-End / Back-End Devoloper
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white dark:bg-secondaryDark p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <Avatar
                          img="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                          alt="avatar of Jese"
                          rounded
                        />
                        <div className="text-left">
                          <div className="font-medium text-secondary dark:text-textDark">
                            Yann Vanneth
                          </div>
                          <div className="text-sm text-gray-500 dark:text-textDark">
                            Member
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-700 dark:text-textDark">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas veritatis illo placeat harum porro optio fugit
                        a culpa sunt id.
                      </p>
                      <ul className="flex p-3 pl-0 space-x-4 text-xl text-gray-600 dark:text-textDark">
                        <li>
                          <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://telegram.org"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTelegram />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-textDark sm:mt-6">
                    &mdash; Front-End / Back-End Devoloper
                  </footer>
                </blockquote>
              </div>
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white dark:bg-secondaryDark p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="mt-4">
                      <div className="flex items-center gap-4">
                        <Avatar
                          img="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg"
                          alt="avatar of Jese"
                          rounded
                        />
                        <div className="text-left">
                          <div className="font-medium text-secondary dark:text-textDark">
                            Mach Mol
                          </div>
                          <div className="text-sm text-gray-500 dark:text-textDark">
                            Member
                          </div>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-700 dark:text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptas veritatis illo placeat harum porro optio fugit
                        a culpa sunt id.
                      </p>
                      <ul className="flex p-3 pl-0 space-x-4 text-xl text-gray-600 dark:text-textDark">
                        <li>
                          <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedin />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://telegram.org"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTelegram />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaGithub />
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebook />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <footer className="mt-4 text-sm font-medium text-gray-700 dark:text-textDark sm:mt-6">
                    &mdash; Front-End Devoloper
                  </footer>
                </blockquote>
              </div>
              {/* Repeat the above block for more slides */}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-secondary p-4 text-secondary transition hover:bg-secondary hover:text-white"
          >
            <svg
              className="size-5 -rotate-180 transform"
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

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border  border-secondary p-4 text-secondary transition hover:bg-secondary    hover:text-white"
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
    </section>
  );
};

export default OurTeam;
