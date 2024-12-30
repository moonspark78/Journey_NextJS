"use client";

import Image from "next/image";
import React from "react";
import Tilt from "react-parallax-tilt";
import { FaBriefcase } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="pt-16 pb-16">
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12 iten-center mx-auto w-[80%]">
        {/* Image */}
        <Tilt>
          <div className="flex justify-center">
            <Image src="/images/f.png" alt="image" width={1000} height="1000" />
          </div>
        </Tilt>
        {/* Text Content */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaBriefcase className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">
              Premium learning experience
            </h1>
          </div>
          {/* Main Heading  */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-800 font-bold mt-8 md:leading-[3rem]
           lg:leading-[3.5rem]">
              Providing amazing online courses.
          </h1>
          <div className="mt-8 mb-6">
            <h1 className="text-lg md:text-xl text-black text-opacity-70 font-semibold">
              Master the skills that matter most in todays workforce.
            </h1>
            <p className="text-sm md:text-base text-black text-opacity-60 mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Quas quaerat possimus commodi asperiores beatae rerum consectetur iusto omnis illo maxime.
            </p>
          </div>
          <div className="mt-8 mb-6">
            <h1 className="text-lg md:text-xl text-black text-opacity-70 font-semibold">
              Incrase your learning skills.
            </h1>
            <p className="text-sm md:text-base text-black text-opacity-60 mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Quas quaerat possimus commodi asperiores beatae rerum consectetur iusto omnis illo maxime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
