"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur bg-black/50 border-b border-zinc-800">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="text-zinc-100 font-semibold tracking-tight">
          UltronTheAI
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-zinc-300 hover:text-white">
              {it.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-zinc-700 text-zinc-200"
        >
          <span className="sr-only">Menu</span>
          {open ? "×" : "≡"}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/70">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col">
            {items.map((it) => (
              <a
                key={it.href}
                href={it.href}
                onClick={() => setOpen(false)}
                className="py-2 text-zinc-300 hover:text-white"
              >
                {it.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
