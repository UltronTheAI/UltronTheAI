import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Github, Database, HardDrive, KeyRound, Server } from "lucide-react";
import { HERO_DATA } from "../data/portfolioData";
import { HandDrawnArrow } from "./SketchDrawings";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 border-b border-[#E5E5E5] bg-[#FFFFFF] overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Editorial Headline & Positioning (7 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2.5 py-1 rounded">
                {HERO_DATA.eyebrow}
              </span>
              <span className="inline-block w-1.5 h-1.5 bg-[#111111] animate-pulse" />
              <span className="font-mono text-[11px] text-[#666666]">India 🇮🇳</span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#000000] tracking-tight leading-[1.08]">
              Full-stack engineer building{" "}
              <span className="underline decoration-2 decoration-[#111111] underline-offset-4">
                developer infrastructure
              </span>
              .
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#333333] leading-relaxed max-w-2xl">
              {HERO_DATA.bio}
            </p>

            {/* Subtle Line */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-[#555555] bg-[#FAFAFA] border-l-2 border-[#111111] pl-3 py-1.5 rounded-r">
              <span>{HERO_DATA.subline}</span>
            </div>

            {/* Primary Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a href="#work" className="sketch-btn-primary">
                <span>View Selected Work</span>
                <ArrowDown size={15} />
              </a>

              <a
                href="https://github.com/UltronTheAI"
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-btn-secondary"
              >
                <Github size={15} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-[#666666]" />
              </a>

              <a
                href="https://lioran.group"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#555555] hover:text-[#000000] hover:underline px-2 py-2"
              >
                <span>Lioran Group</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href="#writing"
                className="inline-flex items-center gap-1 text-xs font-mono font-medium text-[#555555] hover:text-[#000000] hover:underline px-2 py-2"
              >
                <span>Writing</span>
                <ArrowDown size={12} />
              </a>
            </div>

            {/* Restrained technical sketch annotations */}
            <div className="pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center gap-4 text-xs font-mono text-[#666666]">
              <div className="flex items-center gap-1.5">
                <Database size={13} className="text-[#111111]" />
                <span>[ database engines ]</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HardDrive size={13} className="text-[#111111]" />
                <span>[ object storage ]</span>
              </div>
              <div className="flex items-center gap-1.5">
                <KeyRound size={13} className="text-[#111111]" />
                <span>[ identity & auth ]</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Server size={13} className="text-[#111111]" />
                <span>[ systems & APIs ]</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Portrait & Hand-drawn System Card (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-[280px]">
              
              {/* Sketch annotation arrow pointing to photo */}
              <div className="hidden sm:block absolute -top-8 -left-12 z-20">
                <div className="flex items-center gap-1 font-sketch text-sm text-[#444444] rotate-[-6deg]">
                  <span>Swaraj</span>
                  <HandDrawnArrow className="w-10 h-4 text-[#111111]" />
                </div>
              </div>

              {/* Sketched Frame around Portrait */}
              <div className="sketch-card p-2 bg-[#FFFFFF]">
                <div className="relative w-full h-[260px] bg-[#F5F5F5] rounded overflow-hidden border border-[#E5E5E5]">
                  <Image
                    src="/user.png"
                    alt="Swaraj Puppalwar — Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 260px, 280px"
                    className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Technical caption slip */}
                <div className="mt-2 pt-2 border-t border-[#111111] flex items-center justify-between font-mono text-[11px] text-[#333333]">
                  <span>SWARAJ PUPPALWAR</span>
                  <span className="text-[#666666]">RUST // TS</span>
                </div>
              </div>

              {/* Small Notebook Note Slip below */}
              <div className="mt-3 p-2.5 bg-[#FAFAFA] border border-[#111111] rounded shadow-[2px_2px_0px_#111111] text-xs space-y-1">
                <div className="flex items-center justify-between font-mono text-[10px] text-[#666666] uppercase">
                  <span>Current Focus</span>
                  <span>LDS / 2026</span>
                </div>
                <p className="font-sans text-xs text-[#222222] font-medium leading-tight">
                  Single-node object storage, B+ tree document storage, and sovereign devtools.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
