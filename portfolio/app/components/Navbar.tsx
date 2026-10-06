"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Github, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Infrastructure", href: "#infrastructure" },
    { label: "Systems", href: "#systems" },
    { label: "About", href: "#about" },
    { label: "Lioran", href: "#lioran" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/90 backdrop-blur-md transition-all duration-200 ${
        scrolled ? "border-b border-[#111111] shadow-[0_1px_0_0_#111111]" : "border-b border-[#E5E5E5]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="#home"
          className="group flex items-baseline gap-2 text-[#111111] no-underline focus:outline-none"
        >
          <span className="font-bold tracking-tight text-base sm:text-lg">
            SWARAJ PUPPALWAR
          </span>
          <span className="hidden sm:inline font-mono text-[11px] text-[#666666] tracking-wider uppercase border border-[#E5E5E5] px-1.5 py-0.5 rounded">
            CTO @ Lioran
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-[13.5px] font-medium text-[#333333]">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#333333] hover:text-[#000000] hover:underline underline-offset-4 decoration-1 decoration-[#111111] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button: GitHub */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/UltronTheAI"
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-badge hover:bg-[#111111] hover:text-[#FFFFFF] transition-all cursor-pointer no-underline"
            title="GitHub: @UltronTheAI"
          >
            <Github size={13} />
            <span>@UltronTheAI</span>
            <ArrowUpRight size={11} className="opacity-60" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#111111] border border-[#111111] rounded hover:bg-[#FAFAFA] focus:outline-none"
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#111111] bg-[#FFFFFF] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[#111111] font-medium py-2 px-2 text-sm hover:bg-[#FAFAFA] rounded border-b border-[#F0F0F0]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="https://github.com/UltronTheAI"
              target="_blank"
              rel="noopener noreferrer"
              className="sketch-btn-secondary text-xs py-2 w-full justify-center"
            >
              <Github size={14} />
              <span>GitHub: @UltronTheAI</span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
