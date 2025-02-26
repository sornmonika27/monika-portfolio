import React from "react";
// import htmlImage from "@/app/image/html.png";
import Image from "next/image";
import html from "@/app/image/html2.jpeg";
import css from "@/app/image/css1.png"
import js from "@/app/image/js.jpeg"
import trello from "@/app/image/trello.png"
import jira from "@/app/image/jira.png"
import tainwind from "@/app/image/tainwind css.png"
import figma from "@/app/image/figma.jpeg"
import postman from "@/app/image/postman.png"
import pgAdmin from "@/app/image/pgAdmin2.jpeg"
import mySql from "@/app/image/mySql.png"
import strapi from "@/app/image/strapi.png"
import mongose from "@/app/image/mongosess.png"
import node from "@/app/image/node.jpeg"
import react from "@/app/image/react.jpeg"
import next from "@/app/image/next.jpeg"
import vercel from "@/app/image/vercel.png"
import express from "@/app/image/express.png"
import ts from "@/app/image/ts.png"
import github from "@/app/image/github.png"
import docker from "@/app/image/docker.png"

// import  from "@/app/image"



export const skill = () => {
  return (
    <>
      <span className="text-[50px] flex justify-center font-bold mb-[50px]  text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text">
        Skills
      </span>

      <div className="flex gap-10 justify-center flex-wrap w-[80%] max-w-[1200px] mx-auto">
        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={html}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">HTML</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={css}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">CSS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={js}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">JS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={trello}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">TRELLO</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={jira}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">JIRA</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={tainwind}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">TAIWIND CSS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={figma}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">FIGMA</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={postman}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">POSTMEN</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
            <Image
              src={pgAdmin}
              alt="Profile"
              className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
            />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">PG ADMIN</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

         <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={mySql}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">MY SQL</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={strapi}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">STRAPI</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={mongose}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">MONGOES DB</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={node}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">NODE.JS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>


        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={react}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">REACT.JS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={next}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">NEXT.JS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={vercel}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">VERCEL</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={github}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">GITHUB</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={docker}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">DOCKER</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={ts}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">TYPESCRIT</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-[100px] h-[100px] flex justify-center items-center border-white border-5  relative p-1 rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500">
              <Image
                src={express}
                alt="Profile"
                className="w-full h-full rounded-lg shadow-lg bg-purple-400 border-4 border-transparent object-cover"
              />
          </div>

          <div className="text-center mt-2 w-[200px]">
            <h1 className="text-center text-gray-400 text-[20px]">EXPRESS</h1>
            <p className="w-[120px] h-[30px] text-white bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 lg:text-[15px] text-[20px] mt-2 flex justify-center items-center mx-auto rounded-lg border-2 border-white">
              MEDIUM
            </p>
          </div>
        </div>




        
      </div>

      <div className="flex justify-center mt-[200px]">
        <div className="w-[70%] border-b-4 border-transparent  rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-[length:100%_4px] bg-bottom"></div>
      </div>
    </>
  );
};

export default skill;
