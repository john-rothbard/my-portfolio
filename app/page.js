"use client";
import Image from "next/image";
import Link from "next/link";
import ProjectModal from "../components/ProjectModal";
import { useState, useEffect } from "react";
import projects from "@/data/projects";




export default function Home() {
  const [activeProject, setActiveProject] = useState(null);


  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "auto";
  }, [activeProject]);

  return (


    <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden transition-colors duration-200 selection:bg-[var(--color-border)]"
    style={{background: "var(--page-bg)"}}>


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
              className="rounded-lg object-cover border border-[var(--color-border)]"
            />
          </div>

          {/* right side */}
          <div className="flex-1 flex flex-col">

            {/* Heading */}
            <h1 className="text-4xl md:text-4xl font-bold text-[var(--color-text)] mb-2 transition-colors duration-200">
              Hey! I'm John.
            </h1>




            {/* Paragraph ON DESKTOP */}
            <p className="hidden md:block text-xl text-[var(--color-muted)]">
              I'm a software developer who's wildly interested in all things tech.
              I especially love the creative intersections of code and art. My dream
              is to create something that benefits the world, and then create another,
              and another.
            </p>
          </div>
        </div>

        {/* BLURBS FOR MOBILE ONLY */}
        <div className="flex flex-col items-left gap-3 mt-4 md:hidden">

          {/* Software Developer */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[var(--color-card)] rounded-md text-[var(--color-text)]/70 text-sm font-medium max-w-[220px] w-max">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
            </svg>
            Software Developer
          </div>

          {/* LA-Based */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[var(--color-card)] rounded-md text-[var(--color-text)]/70 text-sm font-medium max-w-[180px] w-max">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s7-7.117 7-12a7 7 0 10-14 0c0 4.883 7 12 7 12z" />
            </svg>
            LA-Based (for now)
          </div>

          {/* Open for work */}
          <div className="flex items-center gap-2 px-3 py-1 bg-[var(--color-card)] rounded-md text-[var(--color-text)]/70 text-sm font-medium max-w-[160px] w-max">
            Open for work
          </div>

        </div>


        {/* Paragraph ON MOBILE */} {/*Need to fix this, this is redundant.*/}
        <br></br>
        <h2 className="block md:hidden text-lg text-[var(--color-text)] font-bold">About me</h2>
        <p className="block md:hidden text-xl text-[var(--color-muted)] mt-3">
          I'm a software developer who's wildly interested in all things tech.
          I especially love the creative intersections of code and art. My dream
          is to create something that benefits the world, and then create another,
          and another.
        </p>

      </div>

      {/*SHEEP*/}
      <div className="absolute bottom-0 left-0 w-[400px] h-[300px] z-1 opacity-30 lg:opacity-100">

        <Image
          src="/shep2.png"
          alt="lamb image"
          fill
          className="object-cover hue-rotate-[-5deg]"
          priority
        />
      </div>
      <div className="absolute bottom-11 left-2.5 z-0 max-w-[350px]">
        <h1 className="hidden lg:block text-8xl bg-gradient-to-t from-[#3F9B0B] to-[#89CFF0] bg-clip-text text-transparent"> hello world.... </h1>
      </div>

      {/* WORKS SECTION */}
      <div className="relative z-30 w-full max-w-[800px] mx-auto px-4 pt-20 mt-10">

        <h2 className="text-xl mb-4 text-[var(--color-text)]">
          Please consider the following:
        </h2>

        <div className="flex flex-col gap-8">
          {projects.map((proj, i) => (
            <div
              key={i}
              onClick={() => setActiveProject(proj)}
              className="relative w-full h-[250px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 hover:scale-[0.99] border border-[var(--color-border)]"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
              />

              {/* Overlay with title and subheading */}
              <div className="absolute bottom-0 left-0 w-full h-[30%] bg-[var(--color-card)] flex flex-col justify-center px-6 transition-colors duration-200">
                <p className="text-[var(--color-text)] text-xl font-semibold">{proj.title}</p>
                <p className="text-[var(--color-muted)] text-sm">2025</p>
                <p className="text-[var(--color-muted)] text-sm mt-2 hidden md:block">{proj.subtitle}</p> {/* new subheading */}
              </div>
            </div>
          ))}
        </div>


        <div className="relative z-30 max-w-[800px] mx-auto px-0 py-8 flex flex-col md:flex-row gap-3 justify-left">

          {/*BOTTOM SECTION*/}
          <a
            href="/work"
            className="bg-[var(--color-card)] text-[var(--color-text)] text-center py-2 px-6 rounded-0xl w-full border border-[var(--color-border)] md:w-[200px] hover:bg-[var(--color-border)] transition-colors duration-200"
          >
            See all work
          </a>

          {/* More about me button */}
          <a
            href="/about"
            className="bg-[var(--color-card)] text-[var(--color-text)] text-center py-2 px-6 rounded-0xl w-full border border-[var(--color-border)] md:w-[200px] hover:bg-[var(--color-border)] transition-colors duration-200"
          >
            More about me
          </a>

        </div>


        {/* email */}
        <div className="flex items-center gap-2 justify-center md:justify-start mt-4 text-[var(--color-muted)]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[var(--color-accent)]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
          </svg>
          <h3 className="text-xl text-[var(--color-accent)]">
            jbrothbard@gmail.com
          </h3>
        </div>


        <div className="-mx-2 border-t border-[var(--color-border)]/60 my-5" />


        <div className="md:-mx-2 relative z-30 w-full max-w-[800px] py-5 pb-16 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between gap-4 text-gray-300">

          {/* copyright */}
          <div className="flex items-center gap-2 text-m text-[var(--color-muted)]">
            <span>Built by John Rothbard with Next.js and Tailwind</span>
          </div>

          {/* icon linkd */}
          <div className="md:-mx-3 flex items-center gap-4 text-[var(--color-accent)]">
            {/* github */}
            <a href="https://github.com/john-rothbard" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.729.082-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.762-1.604-2.665-.3-5.467-1.334-5.467-5.933 0-1.31.468-2.381 1.235-3.222-.123-.303-.536-1.522.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.654.242 2.873.12 3.176.77.841 1.233 1.912 1.233 3.222 0 4.61-2.807 5.63-5.48 5.923.43.371.813 1.102.813 2.222v3.293c0 .322.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* resume */}
            <Link href="/resume" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm0 2v18h12V8h-5V3H6z" />
              </svg>
            </Link>

            {/* linkedin */}
            <a href="https://linkedin.com/in/johnrothbard" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75 1.75.783 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.5c0-1.378-1.122-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v5.5h-3v-10h3v1.5c.801-1.08 2.093-1.5 3.25-1.5 2.481 0 4.5 2.019 4.5 4.5v5.5z" />
              </svg>
            </a>
          </div>

        </div>
      </div>



      {/*listens for whenever project gets clicked n updates the modal*/}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

    </div>


  );

}

