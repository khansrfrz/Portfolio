import React from "react";
import { HiCode } from "react-icons/hi";
import { Link } from "react-router-dom";

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
           <Link to="/home" className="text-gray-700 hover:text-blue-500">Home</Link>
           <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
           <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
           <Link to="/Pricing" className="text-gray-700 hover:text-blue-500">Pricing</Link>
           <Link to="/Contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
           <Link to="/pages" className="text-gray-700 hover:text-blue-500">Pages</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
