import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full max-w-[800px] mx-auto mx-8 mt-6 px-6 py-4
             bg-[#022F1F]
             border border-[#004D32]
             rounded-xl
             flex items-center justify-between">

      
      {/* Logo */}
      <div className="flex items-center">
      <Link href="/">
        <Image 
          src="/JRLogoWhite.png" 
          alt="Logo" 
          width={40} 
          height={40}
        />
      </Link>
      </div>

      {/* Links */}
      <div className="flex gap-5 text-l text-white">
        <a href="/projects" className="hover:underline">Projects</a>
        <a href="/about" className="hover:underline">About me</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
