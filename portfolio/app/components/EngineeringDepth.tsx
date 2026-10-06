import React from "react";
import { ENGINEERING_AREAS } from "../data/portfolioData";
import { HandDrawnUnderline } from "./SketchDrawings";
import { Code2 } from "lucide-react";

export default function EngineeringDepth() {
  return (
    <section id="systems" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2 py-0.5 rounded">
              CORE CAPABILITIES
            </span>
            <span className="font-mono text-xs text-[#666666]">03 // SYSTEMS DEPTH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            What I work on.
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            I specialize in the bridge between high-performance systems engineering and full-stack product delivery. My primary languages are Rust for predictability and low-level durability, and TypeScript for application ergonomics.
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* Primary Languages Showcase */}
        <div className="mb-12 p-5 bg-[#FAFAFA] border-2 border-[#111111] rounded-lg shadow-[2px_2px_0px_#111111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
              <Code2 size={16} />
              <span>Primary Production Languages</span>
            </div>
            <p className="text-sm text-[#444444]">
              Systems code is written in Rust; full-stack products and driver SDKs are written in TypeScript.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="sketch-card px-4 py-2 bg-[#FFFFFF] text-center">
              <span className="font-mono text-base font-bold text-[#000000]">RUST</span>
              <span className="block font-mono text-[10px] text-[#666666]">Systems / Infra</span>
            </div>
            <div className="sketch-card px-4 py-2 bg-[#FFFFFF] text-center">
              <span className="font-mono text-base font-bold text-[#000000]">TYPESCRIPT</span>
              <span className="block font-mono text-[10px] text-[#666666]">Full-Stack / SDKs</span>
            </div>
          </div>
        </div>

        {/* 4-Quadrant Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENGINEERING_AREAS.map((area) => (
            <div
              key={area.number}
              className="sketch-card p-6 sm:p-7 bg-[#FFFFFF] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                {/* Header with Number & Title */}
                <div className="pb-4 border-b border-[#E5E5E5] flex items-baseline justify-between">
                  <span className="font-mono text-sm font-bold text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2 py-0.5 rounded">
                    {area.number}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight">
                    {area.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {area.description}
                </p>

                {/* Topics / Focus Areas */}
                <div className="space-y-1.5 pt-2">
                  <span className="font-mono text-[11px] font-semibold text-[#666666] uppercase block">
                    Engineering Themes:
                  </span>
                  <ul className="space-y-1 text-xs text-[#222222]">
                    {area.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2">
                        <span className="text-[#111111] font-mono">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key Tools & Technologies */}
              <div className="pt-4 border-t border-[#E5E5E5] space-y-1.5">
                <span className="font-mono text-[10px] text-[#666666] uppercase block">
                  Key Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {area.keyTools.map((tool) => (
                    <span
                      key={tool}
                      className="font-mono text-[10.5px] font-medium bg-[#FAFAFA] text-[#111111] border border-[#111111] px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
