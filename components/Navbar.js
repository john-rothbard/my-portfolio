import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-3 right-4 z-50 max-w-[800px] mx-auto
    bg-white/30 backdrop-blur-sm border border-white/100 
    rounded-2xl flex items-center justify-between px-6 py-4 shadow-md">

      
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
      <div className="flex gap-4 text-xl font-light text-white">
        <a href="/work" className="hover:underline">Work</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </nav>
  );
}
