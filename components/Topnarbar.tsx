"use client";

import React from "react";
import Image from "next/image";


const TopNavbar: React.FC = () => {
  return (
    <>
      <div className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Image
            src="/logo_burithai.jpeg"
            alt="Logo"
            width={200}
            height={100}
            className="w-25 h-15 object-cover"
          />
        </div>
        <div className="flex items-center space-x-10">
          <ul className="flex space-x-20">
            <li>
              <a href="/home" className="hover:text-yellow-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-300 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#product" className="hover:text-yellow-300 transition">
                Product
              </a>
            </li>
          </ul>
          <div className="flex space-x-4">
            <button>Sign in</button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center space-x-10 p-4 bg-gray-800 border-t-1">
        <div className="Categories p-2 outline-1 rounded-2xl">
          Categorie <p></p>
        </div>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="border border-white p-2 pr-16 rounded-2xl w-full focus:outline-none focus:ring-0 text-white bg-transparent"
            placeholder="Search something..."
          />
          <button className="absolute top-1/2 right-0 -translate-y-1/2 text-sm rounded-2xl">
            Go
          </button>
        </div>
      </div>
    </>
  );
};

export default TopNavbar;
