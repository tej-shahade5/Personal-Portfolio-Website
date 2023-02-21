import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={25} />
        </>
      ),
      href: "https://www.linkedin.com/in/tejas-shahade-956b30223",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={25} />
        </>
      ),
      href: "https://github.com/tej-shahade5",
    },
    {
      id: 3,
      child: (
        <>
          <SiLeetcode size={25} />
        </>
      ),
      href: "https://leetcode.com/tej-shahade5/",
    },
    {
      id: 4,
      child: (
        <>
          <SiGeeksforgeeks size={25} />
        </>
      ),
      href: "https://auth.geeksforgeeks.org/user/tejasshahade5",
      style: "rounded-br-md",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto:tejasshahade5@gmail.com",
    },
    {
      id: 6,
      child: (
        <>
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "https://drive.google.com/file/d/1UefCshhnQJyCc3774oww-mT_IhwFQ40v/view?usp=drivesdk",
    },
  ];

  return (
    <div>
      <div className="text-white bg-gradient-to-b from-gray-800 to-black">
        <div className="flex flex-col text-center px-6 py-10 text-2xl sm:text-4xl font-bold lg:hidden">
          <p>Let's build something amazing together.</p>
          <p className="text-1xl sm:text-2xl pt-3 text-gray-400">Connect and start conversion.</p>
        </div>
        <div>
          <ul className="flex flex-row justify-center items-center lg:hidden">
            {links.map(({ id, child, href }) => (
              <li key={id} className="p-2">
                <a href={href} target="_blank" rel="noreferrer">
                  {child}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-center py-8 text-gray-400">@Made with ❤️ by tejas</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
