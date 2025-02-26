"use client"; // 👈 Add this at the top

import Typewriter from "typewriter-effect";
import React from "react";
import Image from "next/image";
import Monika from "@/app/image/ka.jpg"; // Importing the image correctly

const About = () => {
  return (
    <div className="mt-[150px]">
      {/* <div className="text-7xl text-center mb-[80px] mt-[100px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("Welcome to my portfolio!").start();
          }}
          options={{
            // delay: 50,
            // autoStart: true,
            // loop: true,
          }}
        />
      </div> */}
      <div className="flex items-center justify-center">
        <div className="w-[20%] h-auto">
          <div className="w-full h-auto mx-auto">
            <div
              className="relative w-full h-[400px] rounded-lg shadow-lg text-center flex items-center justify-center 
                     after:absolute after:inset-0 after:border-[8px] after:border-purple-800  after:animate-pulse "
            >
              <Image
                src={Monika}
                alt="Profile"
                className="w-full h-[400px]  shadow-lg border-5 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="w-[50%] ml-[100px]">
          <div className="mb-10 w-[10%] border-b-4 border-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:100%_4px] bg-bottom block"></div>

          <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text">
            HI, THERE!
          </h1>

          <h2 className="text-3xl text-white mt-4">
            I'm <span className="text-purple-500 font-semibold">Monika</span>, a
            Web & Mobile App Developer.
          </h2>
        
          <div className="text-lg text-white mt-4">
          <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString("I'm a second-year student at PSE Institute, majoring in Web and Mobile App Development. My goal is to become a professional  developer in the future. I am always here to help solve problems and improve my skills along the way. I am passionate about coding, eager to learn new technologies, and dedicated to building user-friendly and efficient applications. I believe in continuous learning and collaboration to create impactful digital solutions.").start();
          }}
          options={{
            // delay: 50,
            // autoStart: true,
            // loop: true,
          }}
        />
          </div>
          <div className="flex gap-4 mt-10">
            <a
              href="https://docs.google.com/document/d/1hKdAxT1eI5KHQ_X04GJD73fW3rb7t39h/edit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="w-[100px] h-[40px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 
      hover:border-white active:border-purple-500 active:bg-transparent"
              >
                View My CV
              </button>
            </a>

            <button
              className="w-[100px] h-[40px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 
      hover:border-white active:border-purple-500 active:bg-transparent"
            >
              <a href="#project" className="">
                Projects
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[200px]">
        {" "}
        {/* Reduced bottom margin */}
        <div className="w-[70%] border-b-4 border-transparent rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:100%_4px] bg-bottom"></div>
      </div>
    </div>
  );
};

export default About;
