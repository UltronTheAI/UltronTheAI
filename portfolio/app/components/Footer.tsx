import React from "react";
import { ArrowUp, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FFFFFF] text-[#111111] py-14 border-t-2 border-[#111111]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#E5E5E5]">
          
          {/* Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <span className="font-bold text-base tracking-tight block">
              SWARAJ PUPPALWAR
            </span>
            <p className="text-xs text-[#555555] leading-relaxed max-w-sm">
              Full-Stack Software Engineer & Founder/CTO at Lioran Group. Building databases, object storage, and developer infrastructure in Rust & TypeScript.
            </p>
            <div className="flex items-center gap-2 pt-1 font-mono text-[11px] text-[#666666]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#111111]" />
              <span>Engineered in India 🇮🇳</span>
            </div>
          </div>

          {/* Navigation Links (4 cols) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-2">
              <span className="font-bold uppercase text-[#111111] block">Index</span>
              <ul className="space-y-1.5 text-[#555555]">
                <li><a href="#home" className="hover:text-[#000000] hover:underline">00 / Top</a></li>
                <li><a href="#infrastructure" className="hover:text-[#000000] hover:underline">01 / Infra</a></li>
                <li><a href="#work" className="hover:text-[#000000] hover:underline">02 / Work</a></li>
                <li><a href="#systems" className="hover:text-[#000000] hover:underline">03 / Systems</a></li>
              </ul>
            </div>
            <div className="space-y-2">
              <span className="font-bold uppercase text-[#111111] block">Sections</span>
              <ul className="space-y-1.5 text-[#555555]">
                <li><a href="#about" className="hover:text-[#000000] hover:underline">04 / About</a></li>
                <li><a href="#lioran" className="hover:text-[#000000] hover:underline">05 / Lioran</a></li>
                <li><a href="#writing" className="hover:text-[#000000] hover:underline">06 / Writing</a></li>
                <li><a href="#contact" className="hover:text-[#000000] hover:underline">08 / Contact</a></li>
              </ul>
            </div>
          </div>

          {/* External & Quick Back to Top (3 cols) */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <a
              href="#home"
              className="sketch-btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <ArrowUp size={12} />
            </a>

            <div className="flex items-center gap-3 text-[#111111]">
              <a
                href="https://github.com/UltronTheAI"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://twitter.com/PuppalwarSwaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="mailto:coderswaraj@gmail.com"
                className="hover:opacity-70"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & System Status */}
        <div className="pt-6 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#666666]">
          <span>© {currentYear} Swaraj Puppalwar. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span>DESIGN: EDITORIAL MONOCHROME</span>
            <span>SYSTEMS: ONLINE</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
