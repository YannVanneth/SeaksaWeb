"use client";

import { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedin, FaTelegram, FaGithub, FaFacebook } from "react-icons/fa";

const MemberData = [
  {
    tamnel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Rin Sanom",
    position: "Student from RUPP",
    image: "../src/assets/member/nom.png",
  },
  {
    tamnel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Yann Vanneth",
    position: "Student from RUPP",
    image: "../src/assets/member/neth.png",
  },
  {
    tamnel:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mach Mol",
    position: "Student from RUPP",
    image:
      "https://imgs.search.brave.com/PixY8_zgl8cU1m2y47bf0V-2jOluOmEHOR4564ScsUA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY0LzY3LzI3/LzM2MF9GXzY0Njcy/NzM2X1U1a3BkR3M5/a2VVbGw4Q1JRM3Az/WWFFdjJNNnFrVlk1/LmpwZw",
  },
];

const OurTeam = () => {
  const sliderRef = useRef(null);
  const keenSliderInstance = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderInstance.current = new KeenSlider(sliderRef.current, {
        loop: true,
        defaultAnimation: { duration: 750 },
        slides: { origin: "center", perView: 1, spacing: 24 },
        created(slider) {
          setCurrentSlide(slider.track.details.rel + 1);
          setTotalSlides(slider.slides.length);
        },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel + 1);
        },
      });
    }
    return () => keenSliderInstance.current?.destroy();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-40">
      <div className="mx-auto max-w-screen-xl text-center">
        <p className="text-lg md:text-xl text-secondary">TESTIMONIALS</p>
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-primary">
          Detail About Our Team
        </h2>
      </div>
      <div ref={sliderRef} className="keen-slider mt-8">
        {MemberData.map((member, index) => (
          <div key={index} className="keen-slider__slide">
            <div
              data-aos="zoom-out-left"
              className="flex flex-col md:flex-row items-center overflow-hidden rounded-lg bg-white shadow-lg p-6 md:p-8">
              <div className="flex w-40 h-40 md:w-72 md:h-72 items-center justify-center mb-4 md:mb-0">
                <img
                  alt={member.name}
                  src={member.image}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border border-gray-300"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center text-center md:text-left md:p-6">
                <blockquote className="text-sm md:text-lg text-gray-800">
                  {member.tamnel || "No description available."}
                </blockquote>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-blue-600">
                    {member.name}
                  </p>
                  <p className="text-sm text-red-500">{member.position}</p>
                </div>
                <ul className="flex justify-center md:justify-start mt-2 space-x-4 text-xl text-gray-600">
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://telegram.org"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaTelegram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <FaFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          aria-label="Previous slide"
          onClick={() => keenSliderInstance.current?.prev()}
          className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-blue-600 hover:text-white">
          &#9664;
        </button>
        <p className="w-16 text-center text-sm text-gray-700">
          {currentSlide} / {totalSlides}
        </p>
        <button
          aria-label="Next slide"
          onClick={() => keenSliderInstance.current?.next()}
          className="rounded-full bg-gray-100 p-2 text-gray-600 transition-colors hover:bg-blue-600 hover:text-white">
          &#9654;
        </button>
      </div>
    </section>
  );
};
export default OurTeam;
