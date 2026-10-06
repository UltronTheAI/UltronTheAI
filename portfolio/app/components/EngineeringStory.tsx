import React from "react";
import { ABOUT_STORY } from "../data/portfolioData";
import { HandDrawnUnderline, StickmanFounder } from "./SketchDrawings";
import { Layers } from "lucide-react";

export default function EngineeringStory() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FFFFFF] border border-[#111111] px-2 py-0.5 rounded">
              BACKGROUND & PHILOSOPHY
            </span>
            <span className="font-mono text-xs text-[#666666]">04 // ABOUT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            Engineering story.
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            {ABOUT_STORY.headline}
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* Narrative & Principles Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="sketch-card p-6 sm:p-8 bg-[#FFFFFF] space-y-4 text-sm sm:text-base text-[#333333] leading-relaxed">
              {ABOUT_STORY.paragraphs.map((para, idx) => (
                <p key={idx}>
                  {para}
                </p>
              ))}
            </div>

            {/* Subtle note on Lioran Group */}
            <div className="p-4 bg-[#FFFFFF] border border-[#111111] rounded flex items-start gap-3 shadow-[2px_2px_0px_#111111]">
              <Layers size={18} className="text-[#111111] shrink-0 mt-0.5" />
              <div className="text-xs text-[#444444] leading-relaxed">
                <strong className="text-[#111111] font-mono block mb-0.5">
                  LEADERSHIP & ARCHITECTURE
                </strong>
                As Founder & CTO at Lioran Group, I lead system architecture, product roadmaps, and low-level engine implementations across our developer infrastructure suite.
              </div>
            </div>
          </div>

          {/* Core Principles & Sketched Founder (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                Engineering Principles
              </h3>

              {ABOUT_STORY.principles.map((principle, pIdx) => (
                <div
                  key={pIdx}
                  className="sketch-card p-4 sm:p-5 bg-[#FFFFFF] space-y-1.5"
                >
                  <h4 className="text-sm font-bold text-[#000000] flex items-center gap-2">
                    <span className="font-mono text-xs text-[#666666]">
                      0{pIdx + 1} {"//"}
                    </span>
                    <span>{principle.title}</span>
                  </h4>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {principle.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Sketched Founder Note Box */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="font-sketch text-sm text-[#222222]">
                  &quot;Understanding the layers beneath the runtime.&quot;
                </span>
                <span className="font-mono text-[10px] text-[#888888] block">
                  — Swaraj Puppalwar
                </span>
              </div>
              <StickmanFounder className="w-12 h-18 text-[#111111] shrink-0" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
