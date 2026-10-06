import React from "react";
import { Database, HardDrive, KeyRound, ArrowUpRight, Github, CheckSquare, Shield, Cpu, Activity } from "lucide-react";
import { CURRENTLY_BUILDING } from "../data/portfolioData";
import { DatabaseSketch, StorageSketch, IdentitySketch, HandDrawnUnderline } from "./SketchDrawings";

export default function CurrentlyBuilding() {
  const liorandb = CURRENTLY_BUILDING.find((p) => p.id === "liorandb")!;
  const lioranS3 = CURRENTLY_BUILDING.find((p) => p.id === "lioran-s3")!;
  const lioranAuth = CURRENTLY_BUILDING.find((p) => p.id === "lioran-auth")!;

  return (
    <section id="infrastructure" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2 py-0.5 rounded">
              LDS CORE TRACKS
            </span>
            <span className="font-mono text-xs text-[#666666]">01 // INFRASTRUCTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            Currently building infrastructure.
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            At Lioran Developer Solutions, I am engineering foundational developer infrastructure layers in Rust—focusing on data durability, bounded-memory streaming, and sovereign self-hosted systems.
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* TRACK 1: LIORANDB (Active / V2)                                    */}
        {/* ----------------------------------------------------------------- */}
        <div className="mb-16 border-2 border-[#111111] rounded-lg p-6 sm:p-8 bg-[#FFFFFF] shadow-[3px_3px_0px_#111111]">
          {/* Header Bar */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#111111]">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <Database size={22} className="text-[#000000]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight">
                  {liorandb.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-[#444444]">
                {liorandb.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="sketch-badge-filled">
                <Activity size={12} />
                <span>{liorandb.status}</span>
              </span>
              <span className="sketch-badge">
                <span>{liorandb.period}</span>
              </span>
              {liorandb.githubUrl && (
                <a
                  href={liorandb.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn-secondary text-xs py-1.5 px-3"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
            </div>
          </div>

          {/* Body Grid: Architecture Diagram (Left) & Technical Notes (Right) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Architecture Diagram */}
            <div className="lg:col-span-7 space-y-4">
              <div className="border border-[#111111] rounded overflow-hidden bg-[#FAFAFA]">
                <DatabaseSketch className="w-full h-auto" />
              </div>

              <div className="font-mono text-[11px] text-[#666666] flex items-center justify-between px-1">
                <span>ARCHITECTURE: STORAGE ENGINE & B+ TREE INDEXING</span>
                <span>RUST / TOKIO</span>
              </div>
            </div>

            {/* Technical Highlights & Systems Challenges */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                  What I Engineered
                </h4>
                <ul className="space-y-2 text-sm text-[#333333]">
                  {liorandb.whatSwarajEngineered.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#111111] font-bold text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-1.5">
                  <Cpu size={13} />
                  <span>Technical Constraints & Optimization</span>
                </h4>
                <ul className="space-y-1.5 text-xs text-[#555555] leading-relaxed">
                  {liorandb.technicalChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#111111] font-mono">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {liorandb.stack.map((tech) => (
                  <span key={tech} className="sketch-badge text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* TRACK 2: LIORAN S3 / LIORAN BASTION (V1 Pre-Alpha)                 */}
        {/* ----------------------------------------------------------------- */}
        <div className="mb-16 border-2 border-[#111111] rounded-lg p-6 sm:p-8 bg-[#FFFFFF] shadow-[3px_3px_0px_#111111]">
          {/* Header Bar */}
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#111111]">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <HardDrive size={22} className="text-[#000000]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight">
                  {lioranS3.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-[#444444]">
                {lioranS3.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="sketch-badge-filled">
                <Shield size={12} />
                <span>{lioranS3.status}</span>
              </span>
              <span className="sketch-badge">
                <span>Oct 2026 Launch</span>
              </span>
              {lioranS3.githubUrl && (
                <a
                  href={lioranS3.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sketch-btn-secondary text-xs py-1.5 px-3"
                >
                  <Github size={13} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} />
                </a>
              )}
            </div>
          </div>

          {/* Body Grid: Architecture Diagram (Left) & Technical Notes (Right) */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Architecture Diagram */}
            <div className="lg:col-span-7 space-y-4">
              <div className="border border-[#111111] rounded overflow-hidden bg-[#FAFAFA]">
                <StorageSketch className="w-full h-auto" />
              </div>

              <div className="font-mono text-[11px] text-[#666666] flex items-center justify-between px-1">
                <span>ARCHITECTURE: AXUM HTTP / ROCKSDB / STREAMING VOLUMES</span>
                <span>SINGLE-NODE PRE-ALPHA</span>
              </div>
            </div>

            {/* Technical Highlights & Systems Challenges */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] mb-2">
                  What I Engineered
                </h4>
                <ul className="space-y-2 text-sm text-[#333333]">
                  {lioranS3.whatSwarajEngineered.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#111111] font-bold text-xs mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] flex items-center gap-1.5">
                  <CheckSquare size={13} />
                  <span>Durability & Scope Honest Note</span>
                </h4>
                <p className="text-xs text-[#555555] leading-relaxed">
                  Lioran Bastion is currently engineered as a single-node self-hosted storage engine with embedded RocksDB state, bounded 256 KiB stream buffers, and strict fsync commit modes. Durability was validated against 100 GiB continuous streaming workloads and intentional process crash/recovery tests. Not a distributed cluster.
                </p>
              </div>

              {/* Stack tags */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {lioranS3.stack.map((tech) => (
                  <span key={tech} className="sketch-badge text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* TRACK 3: LIORAN AUTH (Research / Upcoming)                         */}
        {/* ----------------------------------------------------------------- */}
        <div className="border-2 border-[#111111] rounded-lg p-6 sm:p-8 bg-[#FFFFFF] shadow-[3px_3px_0px_#111111]">
          <div className="flex flex-wrap items-start justify-between gap-4 pb-6 border-b border-[#111111]">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <KeyRound size={22} className="text-[#000000]" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#000000] tracking-tight">
                  {lioranAuth.title}
                </h3>
              </div>
              <p className="text-sm font-medium text-[#444444]">
                {lioranAuth.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="sketch-badge">
                <span>{lioranAuth.status}</span>
              </span>
              <span className="font-mono text-xs text-[#666666]">
                Foundational Research
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <div className="border border-[#111111] rounded overflow-hidden bg-[#FAFAFA]">
                <IdentitySketch className="w-full h-auto" />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <p className="text-sm text-[#333333] leading-relaxed">
                {lioranAuth.whatItIs}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Core Engineering Directives
                </h4>
                <ul className="space-y-1.5 text-xs text-[#555555]">
                  {lioranAuth.whatSwarajEngineered.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#111111] font-mono">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-1.5">
                {lioranAuth.stack.map((tech) => (
                  <span key={tech} className="sketch-badge text-[10px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
