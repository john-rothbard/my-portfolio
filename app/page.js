"use client";
import Image from "next/image";
import Link from "next/link";
import MarqueeChip from "../components/MarqueeChip"
import ProjectModal from "../components/ProjectModal";
import { useState, useEffect } from "react";



export default function Home() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      title: "0-1 seismic simulation software",
      image: "/placeholder.jpeg",
    },
    {
      title: "Songvert – Apple Music → Spotify converter",
      image: "/placeholder.jpeg",
    },
    {
      title: "CIFAR-10 Neural Network (70%+ accuracy)",
      image: "/placeholder.jpeg",
    },
    {
      title: "Unix Shell (ICS 53)",
      image: "/placeholder.jpeg",
    },
  ];

  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (


    <div className="relative min-h-screen w-full flex flex-col bg-my-gradient overflow-x-hidden">


      {/* HI AND ABOUT ME */}
      <div className="relative z-30 max-w-[800px] mx-auto px-4 top-30">

        {/* image + heading */}
        <div className="flex flex-row items-start gap-4">

          {/* image */}
          <div className="flex-shrink-0 w-[140px] h-[140px] md:w-[200px] md:h-[200px]">
            <Image
              src="/hi.jpeg"
              alt="My Face"
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col">

            {/* Heading */}
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 mb-2">
              Hey! I'm John.
            </h1>


            {/* Paragraph ON DESKTOP */}
            <p className="hidden md:block text-xl text-gray-700">
              I'm a software developer who's wildly interested in all things tech.
              I especially love the creative intersections of code and art. My dream
              is to create something that benefits the world, and then create another,
              and another.
            </p>
          </div>
        </div>

        {/* Paragraph ON MOBILE */} {/*Need to fix this, this is redundant.*/}
        <br></br>
        <h2 className="block md:hidden text-lg text-gray-800 font-bold">About me</h2>
        <p className="block md:hidden text-xl text-gray-700 mt-3">
          I'm a software developer who's wildly interested in all things tech.
          I especially love the creative intersections of code and art. My dream
          is to create something that benefits the world, and then create another,
          and another.
        </p>

      </div>

      {/*SHEEP*/}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] z-1">

        <Image
          src="/shep2.png"
          alt="lamb image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-11 left-2.5 z-0 max-w-[350px]">
        <h1 className="text-8xl bg-gradient-to-l from-[rgb(136,198,191)] via-[rgb(33,300,147)] to-[rgb(160,160,190)] bg-clip-text text-transparent"> hello world.... </h1>
      </div>

      {/* WORKS SECTION */}
      <div className="relative z-30 w-full max-w-[800px] mx-auto px-4 py-20 mt-10">

        <h2 className="text-xl mb-4 text-gray-700">
          Please consider the following:
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((proj, i) => (
            <div
            key={i}
            onClick={() => setActiveProject(proj.title)}
            className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[0.99]"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />


              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black/40 backdrop-blur-sm flex items-center px-4">
                <p className="text-white text-xl font-semibold">{proj.title}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-30 max-w-[800px] mx-auto px-0 py-8 flex flex-col md:flex-row gap-3 justify-left">

          {/* Last little buttons*/}
          <a
            href="/projects"
            className="bg-blue-600 text-white text-center py-2 px-6 rounded-0xl w-full md:w-[200px] hover:bg-blue-700 transition"
          >
            See all work
          </a>

          {/* More about me button */}
          <a
            href="/about"
            className="bg-gray-200 text-gray-800 text-center py-2 px-6 rounded-0xl w-full md:w-[200px] hover:bg-gray-300 transition"
          >
            More about me
          </a>

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

