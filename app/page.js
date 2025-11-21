"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "../components/ProjectModal";
import { useState } from "react";



export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  return (


    <div className="relative h-screen w-full font-sans bg-blue-500">

      {/* GRADIENT BACKGROUND STUFF */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-[rgb(186,188,191)] to-[rgb(136,198,191)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[rgb(100,200,100)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[31vh] bg-gradient-to-b from-[rgb(146,198,191)] to-[rgb(0,300,100)]"></div>

      {/* HI AND ABOUT ME */}
      <div className="relative z-30 max-w-[800px] mx-auto px-4 flex items-center gap-8 top-20">
        {/* MY FACE */}
        <div className="flex-shrink-0 w-[200px] h-[200px]">
          <Image
            src="/hi.jpeg"
            alt="My Face"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Right: About me */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Hi! I'm John.</h1>
          <p className="text-lg text-gray-700">
            I'm a software developer who's wildly interested in all things tech. I especially love the creative intersections of code and art. My dream is to create something that benefits the world, and then create another, and another.
          </p>
        </div>
      </div>

      {/* Image overlay and main heading stay here */}


      {/* Image filling the screen (optional overlay styling) */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] z-1">

        <Image
          src="/shep2.png"
          alt="lamb image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-11 left-0 z-0 max-w-[500px]">
        <h1 className="text-8xl bg-gradient-to-l from-[rgb(136,198,191)] via-[rgb(146,198,191)] to-[rgb(186,188,191)] bg-clip-text text-transparent"> hello world. </h1>
      </div>

      {/* WORKS SECTION */}
      <div className="relative z-30 max-w-[800px] mx-auto px-4 py-20 mt-10">
        <h2 className="text-2xl mb-6 text-gray-700">
          Please consider the following:
        </h2>

        {/* Clickable project card */}
        <div
          onClick={() => setActiveProject("0-1 seismic simulation software")}
          className="relative w-full h-[280px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
        >
          {/* main image */}
          <Image
            src="/placeholder.jpeg"
            alt="Project Preview"
            width={800}
            height={280}
            className="object-cover w-full h-full"
          />

          {/* bezel */}
          <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black/40 backdrop-blur-sm flex items-center px-4">
            <p className="text-white text-xl font-semibold">
              0-1 seismic simulation software
            </p>
          </div>
        </div>


      </div>
      {activeProject && (
        <ProjectModal
          title={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </div>


  );

}

