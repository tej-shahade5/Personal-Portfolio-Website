import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import TypeWriterEffect from "react-typewriter-effect";
import { Element } from "react-scroll";

const Home = () => {
  return (
    <Element name="home">
      <div className="h-full w-full bg-gradient-to-b from-black to-gray-800 pt-8 md:pt-20">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center h-full md:flex-row px-4 pt-14">
          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
          <div className="flex flex-col items-center md:items-start pb-5 h-full justify-start ml-0 md:ml-10 text-center md:text-start">
            <h3 className="text-2xl sm:text-4xl text-gray-400">
              Hey there ! ✌️
            </h3>
            <h2 className="text-4xl sm:text-6xl  text-gray-400">
              My name is {" "}
              <span className="bg-gradient-to-r from-[#02AABD] to-[#00CDAC] text-transparent bg-clip-text font-bold">
                Tejas Shahade
              </span>
            </h2>
            <h1 className="mt-5 text-gray-400 text-2xl">
              I'm {" "}
              <div className="bg-gradient-to-r from-[#02AABD] to-[#00CDAC] text-transparent bg-clip-text font-semibold">
                <TypeWriterEffect
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Final-year BE Student.",
                    "Web Developer.",
                    "DSA Enthusiast.",
                    "Open for SDE roles.",
                  ]}
                  multiTextDelay={2000}
                  typeSpeed={90}
                />
              </div>
            </h1>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-8 flex items-center rounded-md bg-gradient-to-r from-[#02AABD] to-[#00CDAC] cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 text-[#fff]">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
