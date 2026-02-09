"use client"
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle"
import { Terminal, Mail, NotebookPen } from 'lucide-react';



export default function Navbar() {
  return (
    <nav className="fixed top-6 left-3 right-3 z-50 max-w-[800px] mx-auto bg-[var(--color-bg)]/80 backdrop-blur-lg border border-[var(--color-border)] rounded-2xl flex items-center justify-between px-6 py-3 shadow-lg">

      {/* LOGO */}
      <div className="flex items-center rounded -mx-2">
      <Link href="/">
        <Image 
          src="/JRlogoWhite2.png" 
          alt="Logo with the letters J, R." 
          priority
          width={54} 
          height={54}
          style={{ filter: 'var(--logo-filter)' }}
        />
      </Link>
      </div>

      {/* LINKS */}
      <div className="flex gap-2 text-[19px] font-light text-[var(--color-accent)]">
        <a href="/work" className="flex items-center gap-2 px-1 py-2 rounded-lg hover:bg-[var(--color-border)]/50 transition-colors">
        <Terminal size={20} className="text-[var(--color-accent)]" />
          Work
        </a>
        <a href="/contact" className="flex items-center gap-2 px-1 py-2 rounded-lg hover:bg-[var(--color-border)]/50 transition-colors">
        <NotebookPen size={20} className="text-[var(--color-accent)]" />
          Chat
        </a>
        <div className="px-1 py-2 rounded-lg transition-colors">
          <ThemeToggle/>
        </div>
      </div>
    </nav>
  );
}