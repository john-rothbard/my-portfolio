import Image from "next/image";

export default function Home() {
  return (


<div className="relative h-screen w-full font-sans">
      {/* Top 70% - blue */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-[rgb(186,188,191)]"></div>

      {/* Bottom 30% - brown */}
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[rgb(153,130,114)]"></div>

      {/* Image filling the screen (optional overlay styling) */}
      <div className="relative w-full h-full">
        <Image
          src="/shep2.png"
          alt="lamb image"
          fill
          className="object-cover"
          priority
        />
      </div>
      <main className="absolute top-40.5 left-0 w-full h-full flex flex-col items-end justify-center px-24">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-black-50">
            Site in progress. Carry on lad.
        </h1>
      </main>
    </div>
  );
}
