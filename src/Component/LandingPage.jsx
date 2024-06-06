import React from "react";
import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";
import resumeImage from "../assets/Resume.pdf";
import coverImage from "../assets/pfp.png";

const LandingPage = () => {
  return (
    <div>
      <header className=" bg-gray-300 shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <HiCode className="h-7 w-7" />
            <span className="ml-2 text-xl font-bold">SARFARAZ KHAN</span>
          </div>
          <nav>
            <div className="flex space-x-4">
              <Link
                to="/home"
                className="text-gray-700 hover:text-blue-500 font-bold  px-4"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-500 font-bold px-4"
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-500 font-bold px-4"
              >
                Services
              </Link>
              <Link
                to="/Pricing"
                className="text-gray-700 hover:text-blue-500 font-bold px-4"
              >
                Pricing
              </Link>
              <Link
                to="/Contact"
                className="text-gray-700 hover:text-blue-500 font-bold px-4"
              >
                Contact
              </Link>
              <Link
                to={resumeImage}
                alt="Profile"
                className="hidden md:inline-block bg-blue-500 text-white px-4 rounded-md"
              >
                Download CV
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className=" conatainer mx-auto px-4 py-20">
        <div className=" flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className=" text-blue-500">
              Hey There
              <span role="img" aria-label="waving hand">
                👋
              </span>{" "}
              I am{" "}
            </p>
            <h1 className="text-4xl font-bold mb-2">Sarfaraz Khan</h1>
            <h2 className=" text-gray-600 mb-4">
              Professional Frontend Developer
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
              voluptate, aut corrupti quos voluptates nam quam nesciunt pariatur
              eius delectus id, vero eum quod dolore? Eaque aut a consequuntur
              eligendi.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Contact Me
              </a>
              <a
                href="#"
                className="bg-gray-900 text-white px-4 py-2 rounded-md"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={coverImage} alt="Profile" className="h-80 rounded-full" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
