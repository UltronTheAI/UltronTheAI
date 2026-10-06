"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Github,
  ArrowUpRight,
  Users,
  Table,
  Bot,
  BookOpen,
  ShieldCheck,
  FileText,
  Share2,
  Gamepad2,
  Images as GalleryIcon,
} from "lucide-react";
import { SELECTED_PROJECTS, OTHER_EXPERIMENTS } from "../data/portfolioData";
import { HandDrawnUnderline } from "./SketchDrawings";

// Helper to render lucide icon by name
function ProjectIcon({ name, className = "w-5 h-5 text-black" }: { name?: string; className?: string }) {
  switch (name) {
    case "Users":
      return <Users className={className} />;
    case "Table":
      return <Table className={className} />;
    case "Bot":
      return <Bot className={className} />;
    case "BookOpen":
      return <BookOpen className={className} />;
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "FileText":
      return <FileText className={className} />;
    case "Share2":
      return <Share2 className={className} />;
    case "Gamepad2":
      return <Gamepad2 className={className} />;
    default:
      return <BookOpen className={className} />;
  }
}

export default function SelectedWork() {
  const [activeGallery, setActiveGallery] = useState<{ title: string; images: string[]; index: number } | null>(null);

  useEffect(() => {
    if (activeGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [activeGallery]);

  const nextImage = () => {
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      index: (activeGallery.index + 1) % activeGallery.images.length,
    });
  };

  const prevImage = () => {
    if (!activeGallery) return;
    setActiveGallery({
      ...activeGallery,
      index: (activeGallery.index - 1 + activeGallery.images.length) % activeGallery.images.length,
    });
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FFFFFF] border border-[#111111] px-2 py-0.5 rounded">
              FULL-STACK & PRODUCT SYSTEMS
            </span>
            <span className="font-mono text-xs text-[#666666]">02 // SELECTED WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            Selected engineering work.
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            Beyond storage engines, I engineer complete full-stack applications, offline tools, conversational AI agents, and localized products. Each project is built around real architectural requirements.
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* FULLSCREEN IMAGE INSPECTION MODAL                                 */}
        {/* ----------------------------------------------------------------- */}
        {activeGallery && (
          <div className="fixed inset-0 z-50 bg-[#000000]/90 backdrop-blur-sm flex items-center justify-center p-4">
            {/* Top Bar with Title & Close */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-50">
              <div className="bg-[#111111] text-[#FFFFFF] px-3 py-1 rounded font-mono text-xs border border-[#333333]">
                <span>{activeGallery.title}</span>
                <span className="ml-2 text-[#999999]">
                  [{activeGallery.index + 1} / {activeGallery.images.length}]
                </span>
              </div>

              <button
                type="button"
                onClick={() => setActiveGallery(null)}
                className="p-2 bg-[#FFFFFF] text-[#000000] rounded hover:bg-[#E5E5E5] transition focus:outline-none"
                aria-label="Close Gallery"
              >
                <X size={20} />
              </button>
            </div>

            {/* Prev Button */}
            {activeGallery.images.length > 1 && (
              <button
                type="button"
                onClick={prevImage}
                className="absolute left-3 sm:left-6 z-40 p-3 bg-[#FFFFFF] text-[#000000] rounded border border-[#111111] hover:bg-[#E5E5E5] transition shadow-[2px_2px_0px_#111111] focus:outline-none"
                aria-label="Previous Image"
              >
                <ChevronLeft size={22} />
              </button>
            )}

            {/* Active Image */}
            <div className="relative w-full max-w-4xl h-[70vh] sm:h-[80vh] flex items-center justify-center">
              <Image
                src={activeGallery.images[activeGallery.index]}
                alt={`${activeGallery.title} preview`}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 85vw"
              />
            </div>

            {/* Next Button */}
            {activeGallery.images.length > 1 && (
              <button
                type="button"
                onClick={nextImage}
                className="absolute right-3 sm:right-6 z-40 p-3 bg-[#FFFFFF] text-[#000000] rounded border border-[#111111] hover:bg-[#E5E5E5] transition shadow-[2px_2px_0px_#111111] focus:outline-none"
                aria-label="Next Image"
              >
                <ChevronRight size={22} />
              </button>
            )}
          </div>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* TIER 2: SELECTED FULL-STACK PRODUCTS (Detailed Editorial Spreads) */}
        {/* ----------------------------------------------------------------- */}
        <div className="space-y-10 mb-20">
          {SELECTED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="sketch-card p-6 sm:p-8 bg-[#FFFFFF] space-y-6"
            >
              {/* Project Card Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-[#E5E5E5]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ProjectIcon name={project.iconName} className="w-5 h-5 text-[#111111]" />
                    <h3 className="text-xl sm:text-2xl font-bold text-[#000000] tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#555555]">
                    {project.subtitle}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="sketch-badge-filled">
                    <span>{project.status}</span>
                  </span>
                  {project.statusNote && (
                    <span className="sketch-badge bg-[#FAFAFA]">
                      <span>{project.statusNote}</span>
                    </span>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sketch-btn-secondary text-xs py-1.5 px-2.5"
                    >
                      <Github size={13} />
                      <span>Code</span>
                      <ArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </div>

              {/* Main 2-Column Content Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visual / Screenshot / Preview Frame (5 cols) */}
                <div className="lg:col-span-5 space-y-3">
                  {project.images && project.images.length > 0 ? (
                    <div
                      onClick={() =>
                        setActiveGallery({
                          title: project.title,
                          images: project.images!,
                          index: 0,
                        })
                      }
                      className="group relative h-52 sm:h-60 w-full rounded border border-[#111111] bg-[#FAFAFA] overflow-hidden cursor-pointer shadow-[2px_2px_0px_#111111]"
                    >
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      />

                      {/* Click overlay with gallery indicator */}
                      <div className="absolute inset-0 bg-[#000000]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-[#FFFFFF] text-xs font-mono font-medium">
                        <GalleryIcon size={16} />
                        <span>Inspect Screenshot{project.images.length > 1 ? `s (${project.images.length})` : ""}</span>
                      </div>

                      {project.images.length > 1 && (
                        <div className="absolute bottom-2 right-2 bg-[#111111]/80 text-[#FFFFFF] font-mono text-[10px] px-2 py-0.5 rounded border border-[#333333]">
                          {project.images.length} images
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Fallback Hand-drawn Architectural Box if no screenshot */
                    <div className="h-48 w-full rounded border border-[#111111] bg-[#FAFAFA] p-4 flex flex-col justify-between">
                      <div className="flex items-center justify-between font-mono text-[11px] text-[#666666]">
                        <span>[ ARCHITECTURAL OVERVIEW ]</span>
                        <ProjectIcon name={project.iconName} className="w-4 h-4 text-[#111111]" />
                      </div>
                      <p className="font-sans text-xs text-[#333333] leading-relaxed">
                        {project.whatItIs}
                      </p>
                      <div className="font-mono text-[10px] text-[#666666]">
                        STATUS: {project.status.toUpperCase()}
                      </div>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span key={item} className="sketch-badge text-[10px]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Details (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* What it is & Why it exists */}
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                      Overview & Intent
                    </h4>
                    <p className="text-sm text-[#333333] leading-relaxed">
                      {project.whatItIs}
                    </p>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      <strong className="text-[#333333]">Why it exists:</strong> {project.whyItExists}
                    </p>
                  </div>

                  {/* What Swaraj Engineered */}
                  <div className="space-y-1.5">
                    <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                      What I Engineered
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#333333]">
                      {project.whatSwarajEngineered.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#111111] font-bold mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Challenges */}
                  {project.technicalChallenges.length > 0 && (
                    <div className="p-3 bg-[#FAFAFA] border-l-2 border-[#111111] rounded-r space-y-1 text-xs text-[#555555]">
                      <span className="font-mono font-bold text-[#111111] block">
                        Technical Challenge Solved:
                      </span>
                      {project.technicalChallenges.map((challenge, cIdx) => (
                        <p key={cIdx}>→ {challenge}</p>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* TIER 3: OTHER EXPERIMENTS & EARLIER WORK                          */}
        {/* ----------------------------------------------------------------- */}
        <div className="pt-10 border-t border-[#E5E5E5] space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-[#111111] tracking-tight">
              Other experiments & standalone projects.
            </h3>
            <p className="text-sm text-[#666666]">
              Smaller utility tools, media engines, and games created as focused algorithmic experiments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {OTHER_EXPERIMENTS.map((exp) => (
              <div
                key={exp.id}
                className="sketch-card p-5 bg-[#FFFFFF] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <ProjectIcon name={exp.iconName} className="w-4 h-4 text-[#111111]" />
                      <h4 className="text-base font-bold text-[#000000]">
                        {exp.title}
                      </h4>
                    </div>
                    <span className="sketch-badge text-[10px]">
                      {exp.status}
                    </span>
                  </div>

                  <p className="text-xs text-[#444444] leading-relaxed">
                    {exp.whatItIs}
                  </p>

                  {exp.images && exp.images.length > 0 && (
                    <button
                      type="button"
                      onClick={() =>
                        setActiveGallery({
                          title: exp.title,
                          images: exp.images!,
                          index: 0,
                        })
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-[#111111] hover:underline"
                    >
                      <GalleryIcon size={13} />
                      <span>View Screenshot</span>
                    </button>
                  )}
                </div>

                <div className="pt-3 border-t border-[#E5E5E5] flex items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="font-mono text-[9.5px] text-[#666666] bg-[#FAFAFA] border border-[#E5E5E5] px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.githubUrl && (
                    <a
                      href={exp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#111111] hover:underline flex items-center gap-1"
                    >
                      <span>Code</span>
                      <ArrowUpRight size={11} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
