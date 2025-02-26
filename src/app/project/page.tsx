import React from "react";
import Image from "next/image";
import rabbit from "@/app/image/rabbit.jpg";
import minimal from "@/app/image/minimal.jpg";
import weather from "@/app/image/weather.jpg";
import bickcyle from "@/app/image/bickcyle.jpg";
import fairy from "@/app/image/fairy.jpg";


export const project = () => {
  return (
    <>
      <span className="text-[50px] flex justify-center font-bold mb-[50px] text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text">
        Projects
      </span>
      <div className="flex items-center justify-center mb-[100px] bg-gray-800">
        <div
          // ref={projectsContainerRef}
          id="projects-container"
          className="flex gap-10 overflow-x-auto scrollbar-hide w-full max-w-[1200px] px-5  "
        >
          <div className="bg-gray-800 p-5 rounded-lg shadow-md min-w-[350px]  mb-[100px] border">
              <div className="">
                <div className=" w-[100%] h-[200px]">
                  <Image
                    src={rabbit}
                    alt="Profile"
                    className="w-full h-full object-cover bg-slate-600 rounded-lg"
                  />
                </div>

                <h3 className="text-purple-400 font-bold text-[20px] text-center mt-3">
                  Rabbit School NGO
                </h3>

                <p className="text-gray-400 text-sm mt-2 w-[300px] text-center">
                  This website will provide users with detailed information
                  about Rabbit School NGO, its mission, and its work in
                  supporting students with disabilities. Additionally, users
                  will have the opportunity to sponsor students, get in touch
                  with the organization, and contribute to its initiatives.
                </p>
              </div>

            <div className="flex justify-center mt-4">
              <a href="https://rabbit-school.vercel.app/">
                <button className="w-[100px] h-[30px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                  View
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-md min-w-[350px]  mb-[100px] border">
            <div className="">
              <div className=" w-[100%] h-[200px]">
                <Image
                  src={minimal}
                  alt="Profile"
                  className="w-full h-full object-cover bg-slate-600 rounded-lg"
                />
              </div>

              <h3 className="text-purple-400 font-bold text-[20px] text-center mt-3">
                Minimal blog template for creative expressions
              </h3>

              <p className="text-gray-400 text-sm mt-2 w-[300px] text-center">
                This type of template is perfect for writers, artists, and
                creators who want to showcase their work elegantly and
                professionally.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <a href="https://minimal-blog-beryl.vercel.app/">
                <button className="w-[100px] h-[30px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                  View
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-md min-w-[350px]  mb-[100px] border">
            <div className="">
              <div className=" w-[100%] h-[200px]">
                <Image
                  src={weather}
                  alt="Profile"
                  className="w-full h-full object-cover bg-slate-600 rounded-lg"
                />
              </div>

              <h3 className="text-purple-400 font-bold text-[20px] text-center mt-3">
                Phnom Penh Weather
              </h3>

              <p className="text-gray-400 text-sm mt-2 w-[300px] text-center">
                A small project that provides the weather forecast for Phnom
                Penh, covering three days: yesterday, today, and tomorrow.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <a href="https://pp-weather-azure.vercel.app/">
                <button className="w-[100px] h-[30px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                  View
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-md min-w-[350px]  mb-[100px] border">
            <div className="">
              <div className=" w-[100%] h-[200px]">
                <Image
                  src={bickcyle}
                  alt="Profile"
                  className="w-full h-full object-cover bg-slate-600 rounded-lg"
                />
              </div>

              <h3 className="text-purple-400 font-bold text-[20px] text-center mt-3">
                Selling Bicycle
              </h3>

              <p className="text-gray-400 text-sm mt-2 w-[300px] text-center">
                This project is a static website designed to showcase and sell
                bicycles. As your third project in your first year, it
                emphasizes clean design and clear presentation while providing
                essential product details. Below are some detailed aspects of
                the project:
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <a href="https://limsopheak16.github.io/Selling-Bicycle/">
                <button className="w-[100px] h-[30px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                  View
                </button>
              </a>
            </div>
          </div>

          <div className="bg-gray-800 p-5 rounded-lg shadow-md min-w-[350px]  mb-[100px] border">
            <div className="">
              <div className=" w-[100%] h-[200px]">
                <Image
                  src={fairy}
                  alt="Profile"
                  className="w-full h-full object-cover bg-slate-600 rounded-lg"
                />
              </div>

              <h3 className="text-purple-400 font-bold text-[20px] text-center mt-3">
                Fairly – Project Overview
              </h3>

              <p className="text-gray-400 text-sm mt-2 w-[300px] text-center">
                This project provides movie soundtracks along with brief story
                summaries related to "Fairly." The primary goal is to give users
                an immersive experience by offering background music and key
                highlights of selected films.
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <a href="https://fairy-phi.vercel.app/">
                <button className="w-[100px] h-[30px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                  View
                </button>
              </a>
            </div>
          </div>

          {/* <div className="bg-gray-800 p-5 rounded-lg shadow-md min-w-[350px]  mb-[100px] border">
            <div className="">
              <div className=" w-[100%] h-[200px]">
                <Image
                  src={rabbit}
                  alt="Profile"
                  className="w-full h-full object-cover bg-slate-600 rounded-lg"
                />
              </div>

              <h3 className="text-purple-400 font-bold text-[20px] text-center mt-3">
                Project Name
              </h3>

              <p className="text-gray-400 text-sm mt-2 w-[300px] text-center">
                An agriculture products website with a minimal design focuses on
                simplicity and clarity, ensuring that the products are presented
                in a clean and user-friendly way. Key features of a minimal
                agriculture products website include:
              </p>
            </div>

            <div className="flex justify-center mt-4">
              <button className="w-[100px] h-[30px] border-2 text-white flex justify-center items-center rounded-md transition-all duration-300 hover:bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
                View
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default project;
