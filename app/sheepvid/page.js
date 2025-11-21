import Image from "next/image";
import SheepVideo from "../../components/SheepVideo";
import Link from "next/link";

export default function Home() {
  return (

    <div className="relative h-screen w-full font-sans">
      {/* Top 70% - blue */}
      {/*<div className="absolute top-0 left-0 w-full h-[70vh] bg-[rgb(186,188,191)]"></div>*/}

      {/* Bottom 30% - sheep video */}
      <div className="relative h-screen w-full font-sans">
      <SheepVideo />
      {/* Image overlay and main heading stay here */}
      </div>

      <Link
        href="/sheep"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Go to Page 2
      </Link>
      <main className="absolute top-55 left-0 w-full flex flex-col items-end justify-center px-24">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-[rgb(100,100,300)]">
            Site in progress. Carry on lad.
        </h1>
      </main>
    </div>
  );
}
