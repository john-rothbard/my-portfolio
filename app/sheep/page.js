"use client";
import CloudsBackground from "../../components/CloudsBackground";

export default function Home() {
  return (
    <div className="relative h-screen w-full font-sans overflow-hidden">

      <CloudsBackground />

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#babcbe] via-[#92c6bf] to-[#00c864]">
          gubworld.
        </h1>
      </div>
    </div>
  );
}
