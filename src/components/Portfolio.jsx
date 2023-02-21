import React from "react";
import websiteUi from "../assets/portfolio/websiteUi.png";
import snakeGame from "../assets/portfolio/snakeGame.png";
import jsDocumentation from "../assets/portfolio/jsDocumentation.png";
import freeCodeCamp from "../assets/portfolio/freeCodeCamp.png";
import productBuilding from "../assets/portfolio/productBuilding.png";
import simonGame from "../assets/portfolio/simonGame.png";
import { Element } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: websiteUi,
      projectName: "Movie Website UI",
      liveLink: "https://effortless-kitten-754053.netlify.app/",
      codeLink: "https://github.com/tej-shahade5/Movie-Website-UI",
    },
    {
      id: 2,
      src: simonGame,
      projectName: "Simon Game",
      liveLink: "https://visionary-starship-5049fe.netlify.app/",
      codeLink: "https://github.com/tej-shahade5/Simon-Game",
    }, 
    {
      id: 3,
      src: productBuilding,
      projectName: "Product Building UI",
      liveLink: "",
      codeLink: "https://github.com/tej-shahade5/Product-Landing-Page",
    },
    {
      id: 4,
      src: jsDocumentation,
      projectName: "JS Documentation",
      liveLink: "",
      codeLink: "https://github.com/tej-shahade5/Documentation-Page",
    },
    {
      id: 5,
      src: freeCodeCamp,
      projectName: "FreecodeCamp Website",
      liveLink: "https://earnest-yeot-1b2db8.netlify.app/",
      codeLink: "https://github.com/tej-shahade5/FreeCodeCamp-Clone",
    },
    {
      id: 6,
      src: snakeGame,
      projectName: "Snake Game",
      liveLink: "",
      codeLink: "https://github.com/tej-shahade5/Snake-Game-",
      
    },
  ];

  return (
    <Element name="portfolio">
      <div className="bg-gradient-to-b from-black to bg-gray-800 w-full h-full text-white px-4 py-20">
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-2 border-gray-500">
              Portfolio
            </p>
            <p className="py-6 mb-6 text-gray-400">
              Check out some of my work right here
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src, projectName,liveLink,codeLink}) => (
              <div key={id} className="shadow-md shadow-black rounded-lg">
                <h3 className="p-2 text-center text-gray-400 text-2xl">
                  {projectName}
                </h3>
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-around">
                  <button className="px-5 py-2 m-3 duration-200 hover:bg-gradient-to-r from-[#02AABD] to-[#00CDAC] text-gray-400 hover:text-white rounded-md">
                    <a href={liveLink} target="_blank" without rel="noreferrer">Demo</a>
                  </button>
                  <button className="px-5 py-2 m-3 duration-200 hover:bg-gradient-to-r from-[#02AABD] to-[#00CDAC]  text-gray-400 hover:text-white rounded-md">
                    <a href={codeLink} target="_blank" without rel="noreferrer">Code</a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Portfolio;
