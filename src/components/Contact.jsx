import React from "react";
import { IoIosSend } from "react-icons/io";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div name="contact" className="w-full h-full bg-gradient-to-b from-black to-gray-800 text-white">
        <div className="flex flex-col px-4 py-20 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-6">
            <p className="text-4xl font-bold inline border-b-2 border-gray-500">
              Contact
            </p>
            <p className="py-6 text-gray-400">
              Submit the form below to get in touch with me
            </p>
          </div>
          <div className="flex flex-col md:flex-row ">
            <div className="flex flex-col w-full md:w-1/2 mb-6 md:mb-0">
              <iframe
                className="rounded-md h-96 md:h-full"
                title="Google map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.161383777581!2d78.58491938711246!3d20.74425196886115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd47f3da0608397%3A0xea5fa3da431510a4!2sShri%20Shankarprasad%20Agnihotri%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1676729318865!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <form
              action="https://getform.io/f/73e22c26-a506-4a54-b452-fd29fdb17912"
              method="POST"
              className="flex flex-col w-full md:w-1/2 ml-0 md:ml-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-3 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-gray-400"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="my-4 p-3 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-gray-400"
              />
              <textarea
                name="message"
                rows="8"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none placeholder:text-gray-400"
                placeholder="Enter your message"
              ></textarea>
              <button className="text-white bg-gradient-to-r from-[#02AABD] to-[#00CDAC] px-12 py-3 mt-6 mx-auto flex rounded-md duration-300 w-full justify-center ">
                <span>
                  <IoIosSend size={22} className="mr-1" />
                </span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
