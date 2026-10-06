import React from "react";
import { TECHNICAL_ARTICLES } from "../data/portfolioData";
import { HandDrawnUnderline } from "./SketchDrawings";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export default function Writing() {
  return (
    <section id="writing" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FFFFFF] border border-[#111111] px-2 py-0.5 rounded">
              TECHNICAL WRITING & AUDITS
            </span>
            <span className="font-mono text-xs text-[#666666]">06 // WRITING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            Writing from the engine room.
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            I believe in documenting technical decisions, benchmark saturation profiles, and systems architectures in public. Here is a curated selection of recent engineering essays.
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* Editorial Article Rows */}
        <div className="divide-y divide-[#E5E5E5] border-y border-[#111111] bg-[#FFFFFF]">
          {TECHNICAL_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-8 hover:bg-[#FAFAFA] transition-colors group flex flex-col md:flex-row md:items-start justify-between gap-6"
            >
              {/* Left Column: Metadata & Category */}
              <div className="md:w-56 shrink-0 space-y-2">
                <span className="sketch-badge text-[10.5px]">
                  {article.category}
                </span>

                <div className="flex flex-col text-xs font-mono text-[#666666] space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    <span>{article.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Center / Main Column: Title & Abstract */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-[#000000] tracking-tight group-hover:underline underline-offset-4 decoration-1 decoration-[#111111]">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#000000] flex items-baseline justify-between gap-2"
                  >
                    <span>{article.title}</span>
                    <ArrowUpRight
                      size={16}
                      className="text-[#888888] group-hover:text-[#000000] transition-colors shrink-0"
                    />
                  </a>
                </h3>

                <p className="text-xs sm:text-sm text-[#555555] font-medium leading-relaxed">
                  {article.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  {article.summary}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Blog publication link */}
        <div className="mt-8 flex items-center justify-between font-mono text-xs text-[#666666]">
          <span>ENGINEERING DISPATCHES FROM POST-ACLE & REPOSITORIES</span>
          <a
            href="https://github.com/LioranGroupOfficial/PostAcle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#111111] hover:underline flex items-center gap-1"
          >
            <span>Read all notes on Post-Acle</span>
            <ArrowUpRight size={12} />
          </a>
        </div>

      </div>
    </section>
  );
}
