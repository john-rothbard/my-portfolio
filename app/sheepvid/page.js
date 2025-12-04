import Image from "next/image";
import SheepVideo from "../../components/SheepVideo";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen w-full font-sans overflow-hidden">
      
      {/* video bg */}
      <SheepVideo />

      {/* blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/20 backdrop-blur-md"></div>

      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 text-center">
        <h1 className="text-3xl font-semibold leading-10 tracking-tight text-[rgb(100,100,300)]">
          Let's keep on going.
        </h1>
      </main>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          href="/sheep"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Go to Page 2
        </Link>
      </div>
    </div>
  );
}


