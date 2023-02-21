import React from "react";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="w-full h-full bg-gradient-to-b from-gray-800 to-black px-4 py-20 text-white">
        <div className="max-w-screen-lg w-full h-full mx-auto flex flex-col justify-center">
          <div>
            <p className="text-4xl font-bold inline border-b-2 border-gray-500">
              About
            </p>
          </div>
          <p className="text-xl mt-10">
          &emsp;&emsp;&emsp; Hello Everyone ! 👋 I'm a final year undergraduate student 👨‍🎓 pursing a Bachelor
            of Engineering in Computer Science from Nagpur University. I love
            building websites. That love teaches me HTML, CSS, JavaScript.
            Also, I learned Frontend framework like bootstrap, tailwind css,
            jQuery and ReactJs. I have worked upon all these technologies by
            building a lot of websites. I enjoy 😊 turning complex problems  into
            simple, beautiful and intuitive solutions. I can build websites for
            you so that it is functional, user-friendly and attractive ✨ as well.
          </p>
          <br />
          <p className="text-xl mb-6">
          &emsp;&emsp;&emsp; I have a good understanding of Data Structure and Algorithms. I have
            solved 300➕ coding questions on hackerrank, geeksforgeeks and
            leetcode, which gives me a good understanding of problem solving 🧠 and
            logic building.
          </p>

          <p className="text-xl">&emsp;&emsp;&emsp; Apart from all of these, I love reading, travelling and cycling.🚴‍♂️</p>
        </div>
      </div>
    </Element>
  );
};

export default About;
