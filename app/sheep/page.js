import Image from "next/image";

export default function Home() {
  return (


<div className="relative h-screen w-full font-sans">
      {/* Top 70% - blue */}
      {/* Bottom 30% - sheep video */}
      <div className="absolute top-0 left-0 w-full h-[70vh] bg-gradient-to-b from-[rgb(186,188,191)] to-[rgb(136,198,191)]"></div>

      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-[rgb(100,200,100)]"></div>
      <div className="absolute bottom-0 left-0 w-full h-[31vh] bg-gradient-to-b from-[rgb(146,198,191)] to-[rgb(0,300,100)]"></div>

      {/* Image overlay and main heading stay here */}


      {/* Image filling the screen (optional overlay styling) */}
      <div className="absolute bottom-5 left-5 w-[400px] h-[300px] z-1">
      <Image
        src="/shep2.png"
        alt="lamb image"
        fill
        className="object-cover"
        priority
      />
    </div>
    <div className="absolute bottom-17 left-15 z-0">
      <h1 className="text-8xl bg-gradient-to-r from-[rgb(186,188,191)] via-[rgb(146,198,191)] to-[rgb(0,300,100)] bg-clip-text text-transparent"> gubworld. </h1>
    </div>
    </div>
  );
}
