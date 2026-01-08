"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle"


export default function Navbar() {
  return (
    <nav className="fixed top-6 left-3 right-4 z-50 max-w-[800px] mx-auto bg-[var(--color-bg)] backdrop-blur-sm border border-[var(--color-border)] rounded-2xl flex items-center justify-between px-6 py-4 shadow-lg">

      {/* LOGO */}
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

      {/* LINKS */}
      <div className="flex gap-4 text-xl font-light text-[var(--color-accent)]">
        <a href="/work" className="hover:underline">Work</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <ThemeToggle/>
      </div>
    </nav>
  );
}
