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
            <div className="flex space-x-4">
            <Link to="/home" className="text-gray-700 hover:text-blue-500 font-bold ">Home</Link>
           <Link to="/about" className="text-gray-700 hover:text-blue-500 font-bold">About</Link>
           <Link to="/services" className="text-gray-700 hover:text-blue-500 font-bold">Services</Link>
           <Link to="/Pricing" className="text-gray-700 hover:text-blue-500 font-bold">Pricing</Link>
           <Link to="/Contact" className="text-gray-700 hover:text-blue-500 font-bold">Contact</Link>
           <Link to="/pages" className="text-gray-700 hover:text-blue-500 font-bold">Pages</Link>
            </div>
           </nav>
        </div>
      </header>
    </div>
  );
};
          

export default LandingPage;
