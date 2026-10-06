import React from "react";
import { LioranEcosystemDiagram, HandDrawnUnderline } from "./SketchDrawings";
import { ArrowUpRight, HardDrive, Database, KeyRound } from "lucide-react";

export default function LioranEcosystem() {
  return (
    <section id="lioran" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2 py-0.5 rounded">
              ORGANIZATION & ECOSYSTEM
            </span>
            <span className="font-mono text-xs text-[#666666]">05 // LIORAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            Building at Lioran.
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            I founded Lioran Group to build high-performance software and developer infrastructure. Through Lioran Developer Solutions (LDS), our engineering focus is directed toward sovereign database, storage, and security primitives.
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* Hand-drawn Hierarchy & Architecture Diagram */}
        <div className="sketch-card p-6 sm:p-8 bg-[#FFFFFF] space-y-8">
          
          <div className="w-full overflow-hidden">
            <LioranEcosystemDiagram className="w-full h-auto" />
          </div>

          {/* 3 Infrastructure Product Tracks Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#E5E5E5]">
            
            {/* LioranDB */}
            <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm text-[#000000]">
                  <Database size={15} />
                  <span>LioranDB</span>
                </div>
                <span className="font-mono text-[10px] bg-[#111111] text-[#FFFFFF] px-1.5 py-0.5 rounded">
                  Active / V2
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                Developer-first document database written in Rust with WAL, crash-recovery, and B+ tree storage.
              </p>
            </div>

            {/* Lioran S3 / Bastion */}
            <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm text-[#000000]">
                  <HardDrive size={15} />
                  <span>Lioran S3 (Bastion)</span>
                </div>
                <span className="font-mono text-[10px] bg-[#111111] text-[#FFFFFF] px-1.5 py-0.5 rounded">
                  V1 Pre-Alpha
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                Single-node object storage server in Rust with bounded streaming I/O and RocksDB metadata.
              </p>
            </div>

            {/* Lioran Auth */}
            <div className="p-4 bg-[#FAFAFA] border border-[#E5E5E5] rounded space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 font-bold text-sm text-[#000000]">
                  <KeyRound size={15} />
                  <span>Lioran Auth</span>
                </div>
                <span className="font-mono text-[10px] border border-[#111111] px-1.5 py-0.5 rounded">
                  Research
                </span>
              </div>
              <p className="text-xs text-[#555555] leading-relaxed">
                Self-hosted identity engine, Argon2id credential hashing, and scoped API tokens.
              </p>
            </div>

          </div>

          {/* Outbound Link Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#666666]">
            <span>ENGINEERED IN INDIA // DATA SOVEREIGNTY</span>
            <div className="flex items-center gap-4">
              <a
                href="https://lioran.group"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:underline flex items-center gap-1"
              >
                <span>lioran.group</span>
                <ArrowUpRight size={12} />
              </a>
              <a
                href="https://github.com/LioranGroupOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:underline flex items-center gap-1"
              >
                <span>GitHub: LioranGroupOfficial</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
