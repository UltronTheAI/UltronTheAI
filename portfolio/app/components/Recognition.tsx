import React from "react";
import { RECOGNITION_DATA } from "../data/portfolioData";
import { HandDrawnUnderline } from "./SketchDrawings";
import { Newspaper, Trophy, Award, ExternalLink } from "lucide-react";

export default function Recognition() {
  const newspapers = RECOGNITION_DATA.filter((r) => r.type === "newspaper");
  const olympiads = RECOGNITION_DATA.filter((r) => r.type === "olympiad");
  const ecosystem = RECOGNITION_DATA.filter((r) => r.type === "ecosystem");

  return (
    <section id="recognition" className="py-16 md:py-20 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2 py-0.5 rounded">
              ARCHIVES & AWARDS
            </span>
            <span className="font-mono text-xs text-[#666666]">07 // RECOGNITION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
            Recognition & earlier work.
          </h2>

          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            Historical press features, competitive olympiads, and public open-source developer directory listings.
          </p>

          <div className="w-24 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* 3-Column Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Column 1: Press Coverage */}
          <div className="p-5 bg-[#FAFAFA] border border-[#111111] rounded shadow-[2px_2px_0px_#111111] space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#111111] pb-2 border-b border-[#E5E5E5]">
              <Newspaper size={14} />
              <span>Newspaper Features (2023)</span>
            </div>

            <ul className="space-y-3 text-xs text-[#333333]">
              {newspapers.map((item, idx) => (
                <li key={idx} className="space-y-0.5">
                  <span className="font-bold block text-[#000000]">
                    {item.outletOrOrg}
                  </span>
                  <p className="text-[#555555] italic">
                    &quot;{item.title}&quot;
                  </p>
                  <span className="font-mono text-[10px] text-[#888888] block">
                    Published: {item.dateOrRank}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Academic & Olympiads */}
          <div className="p-5 bg-[#FAFAFA] border border-[#111111] rounded shadow-[2px_2px_0px_#111111] space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#111111] pb-2 border-b border-[#E5E5E5]">
              <Trophy size={14} />
              <span>Olympiads & Competitions</span>
            </div>

            <ul className="space-y-3 text-xs text-[#333333]">
              {olympiads.map((item, idx) => (
                <li key={idx} className="space-y-0.5">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#000000]">{item.outletOrOrg}</span>
                    <span className="font-mono text-[10px] bg-[#FFFFFF] border border-[#111111] px-1 rounded">
                      {item.dateOrRank}
                    </span>
                  </div>
                  <p className="text-[#555555]">
                    {item.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Open Source & Public Registry */}
          <div className="p-5 bg-[#FAFAFA] border border-[#111111] rounded shadow-[2px_2px_0px_#111111] space-y-4">
            <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#111111] pb-2 border-b border-[#E5E5E5]">
              <Award size={14} />
              <span>Developer Registry</span>
            </div>

            <div className="space-y-3 text-xs text-[#333333]">
              {ecosystem.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold text-[#000000] block">{item.title}</span>
                  <p className="text-[#555555]">
                    {item.details}
                  </p>
                  <a
                    href="https://github.com/gayanvoice/top-github-users/blob/main/markdown/public_contributions/india.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-[11px] text-[#111111] hover:underline pt-1"
                  >
                    <span>View Public India List</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
