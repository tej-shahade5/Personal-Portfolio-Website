import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import gitHub from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import python from "../assets/python.png"
import jquery from "../assets/jquery.png"
import cpp from "../assets/c++.png"
import { Element } from 'react-scroll';

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-sky-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-[#4dc0b5]",
    },
    {
      id: 6,
      src: jquery,
      title: "jQuery",
      style: "shadow-[#0769ad]",
    },
    {
      id: 7,
      src: gitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-[#563d7c]",
    },
    {
      id: 9,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 10,
      src: cpp,
      title: "C++",
      style: "shadow-[#004482]",
    },
  ];

  return (
    <Element name='skills'>
    <div className="bg-gradient-to-b from-gray-800 to-black w-full h-full">
      <div className="max-w-screen-lg mx-auto px-4 py-20 flex flex-col justify-center w-full h-full text-[#fff]">
        <div>
          <p className="text-4xl font-bold border-b-2 border-gray-500 p-2 inline">
            Languages & tech
          </p>
          <p className="py-6 text-gray-400">These are the programming Languages & technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} text-gray-400 font-semibold`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Skills;
