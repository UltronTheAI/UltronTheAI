import React from "react";

// ---------------------------------------------------------------------------
// HAND-DRAWN SKETCH SYSTEM (Light-mode Monochrome: Paper #FFFFFF / Ink #000000)
// Authentic technical notebook and systems architecture illustrations
// Generous padding, clean geometry, and crisp breaking dashed boundary lines
// ---------------------------------------------------------------------------

export function DatabaseSketch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LioranDB Storage Engine & B+ Tree Architecture Diagram"
    >
      {/* Outer bounding frame - breaking / dashed sketch style with generous padding */}
      <rect
        x="8"
        y="8"
        width="544"
        height="294"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      {/* Label - Top Left */}
      <text x="28" y="36" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="600" fill="#111111" letterSpacing="0.8">
        LIORANDB // STORAGE ENGINE INTERNALS (V2)
      </text>

      {/* Ingestion Layer: gRPC Request */}
      <g transform="translate(28, 58)">
        <rect x="0" y="0" width="112" height="62" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="56" y="26" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="600" textAnchor="middle" fill="#111111">
          gRPC Transport
        </text>
        <text x="56" y="44" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          Unary / Sustained
        </text>
      </g>

      {/* Arrow from gRPC to Engine */}
      <path d="M 140 89 L 174 89" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="174,89 166,85 166,93" fill="#111111" />

      {/* WAL (Write-Ahead Log) Module */}
      <g transform="translate(176, 52)">
        <rect x="0" y="0" width="154" height="74" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="77" y="22" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          WAL & RECOVERY
        </text>
        <line x1="12" y1="32" x2="142" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="77" y="46" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Append-only Commit Log
        </text>
        <text x="77" y="60" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Crash-safe fsync stream
        </text>
      </g>

      {/* MemTable Buffer */}
      <g transform="translate(358, 52)">
        <rect x="0" y="0" width="170" height="74" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="85" y="22" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          MEMTABLE & MVCC
        </text>
        <line x1="12" y1="32" x2="158" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="85" y="46" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Lock-free In-Memory Index
        </text>
        <text x="85" y="60" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Multi-Version Isolation
        </text>
      </g>

      {/* Connecting Arrow from WAL to MemTable */}
      <path d="M 330 89 L 356 89" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Downward flush arrow with clear spacing */}
      <path d="M 442 128 L 442 162" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="442,162 438,154 446,154" fill="#111111" />
      <text x="454" y="148" fontFamily="var(--font-sketch, cursive)" fontSize="11" fill="#666666">
        flush / compact
      </text>

      {/* B+ Tree Disk Storage Engine - Bottom Section with generous padding */}
      <g transform="translate(28, 168)">
        <rect x="0" y="0" width="504" height="114" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 2" fill="#FFFFFF" rx="4" />

        <text x="20" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" fill="#111111">
          PERSISTENT STORAGE ENGINE // B+ TREE & SECONDARY INDEXES
        </text>

        {/* Tree Root Node */}
        <g transform="translate(208, 36)">
          <rect x="0" y="0" width="88" height="24" stroke="#111111" strokeWidth="1.25" fill="#FAFAFA" rx="2" />
          <text x="44" y="16" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#111111">
            Root: [K1 | K2]
          </text>
        </g>

        {/* Tree Branches */}
        <path d="M 226 60 L 115 78" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 252 60 L 252 78" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 278 60 L 389 78" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leaf Nodes with ample bottom breathing room */}
        <g transform="translate(45, 78)">
          <rect x="0" y="0" width="125" height="22" stroke="#111111" strokeWidth="1.2" fill="#FFFFFF" rx="2" />
          <text x="62.5" y="15" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#111111">
            Leaf: Page 0x01A
          </text>
        </g>
        <g transform="translate(190, 78)">
          <rect x="0" y="0" width="125" height="22" stroke="#111111" strokeWidth="1.2" fill="#FFFFFF" rx="2" />
          <text x="62.5" y="15" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#111111">
            Leaf: Page 0x01B
          </text>
        </g>
        <g transform="translate(335, 78)">
          <rect x="0" y="0" width="125" height="22" stroke="#111111" strokeWidth="1.2" fill="#FFFFFF" rx="2" />
          <text x="62.5" y="15" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#111111">
            Leaf: Page 0x01C
          </text>
        </g>

        {/* Linked list arrow between leaves */}
        <path d="M 170 89 L 188 89" stroke="#111111" strokeWidth="1" strokeDasharray="2 1" />
        <path d="M 315 89 L 333 89" stroke="#111111" strokeWidth="1" strokeDasharray="2 1" />
      </g>
    </svg>
  );
}

export function StorageSketch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 310"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lioran S3 / Bastion Object Storage Architecture Diagram"
    >
      {/* Outer frame - breaking / dashed with generous padding */}
      <rect
        x="8"
        y="8"
        width="544"
        height="294"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      {/* Label */}
      <text x="28" y="36" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="600" fill="#111111" letterSpacing="0.8">
        LIORAN BASTION // SINGLE-NODE OBJECT STORAGE & STREAMING I/O
      </text>

      {/* Client / SDK */}
      <g transform="translate(28, 58)">
        <rect x="0" y="0" width="118" height="82" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="59" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          @lioran/bastion
        </text>
        <line x1="10" y1="34" x2="108" y2="34" stroke="#E5E5E5" strokeWidth="1" />
        <text x="59" y="48" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          TypeScript SDK
        </text>
        <text x="59" y="64" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Byte-Range / Presign
        </text>
      </g>

      {/* Arrow */}
      <path d="M 146 100 L 180 100" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="180,100 172,96 172,104" fill="#111111" />
      <text x="163" y="92" fontFamily="var(--font-sketch, cursive)" fontSize="10" textAnchor="middle" fill="#666666">
        HTTP/REST
      </text>

      {/* Axum Server & Stream Router */}
      <g transform="translate(182, 52)">
        <rect x="0" y="0" width="168" height="96" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="84" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          BASTION SERVER (RUST)
        </text>
        <line x1="12" y1="34" x2="156" y2="34" stroke="#111111" strokeWidth="0.75" />
        <text x="84" y="48" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Axum HTTP / Auth Guard
        </text>
        <text x="84" y="64" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Bounded Chunks (256 KiB)
        </text>
        <text x="84" y="80" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Disk Headroom Guardrails
        </text>
      </g>

      {/* Split arrows to Metadata and Object Storage */}
      <path d="M 350 80 L 382 70" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="382,70 373,68 377,75" fill="#111111" />

      <path d="M 350 120 L 382 130" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="382,130 377,125 373,132" fill="#111111" />

      {/* RocksDB Metadata Engine */}
      <g transform="translate(384, 42)">
        <rect x="0" y="0" width="148" height="60" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="74" y="22" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#111111">
          ROCKSDB METADATA
        </text>
        <text x="74" y="38" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Decoupled State Engine
        </text>
        <text x="74" y="50" fontFamily="var(--font-mono, monospace)" fontSize="8" textAnchor="middle" fill="#666666">
          Prefixes / Multipart State
        </text>
      </g>

      {/* Filesystem Payload Volume */}
      <g transform="translate(384, 114)">
        <rect x="0" y="0" width="148" height="60" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="74" y="22" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#111111">
          PAYLOAD STORAGE
        </text>
        <text x="74" y="38" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Atomic File Commits
        </text>
        <text x="74" y="50" fontFamily="var(--font-mono, monospace)" fontSize="8" textAnchor="middle" fill="#666666">
          Strict `fsync` Durability
        </text>
      </g>

      {/* Durability & Safety Banner - Bottom with generous padding */}
      <g transform="translate(28, 194)">
        <rect x="0" y="0" width="504" height="84" stroke="#111111" strokeWidth="1.5" strokeDasharray="4 2" fill="#FAFAFA" rx="4" />
        <text x="18" y="24" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fontWeight="700" fill="#111111" letterSpacing="0.5">
          RELIABILITY & DURABILITY BENCHMARK
        </text>
        <text x="18" y="45" fontFamily="var(--font-sans, sans-serif)" fontSize="10.5" fill="#333333">
          • Durability tested on 100 GiB streaming workloads with crash/recovery cycles
        </text>
        <text x="18" y="64" fontFamily="var(--font-sans, sans-serif)" fontSize="10.5" fill="#666666">
          • Single-node pre-alpha architecture with zero in-memory buffering & Caddy TLS
        </text>
      </g>
    </svg>
  );
}

export function IdentitySketch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 560 260"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lioran Auth & Identity Infrastructure Flow Diagram"
    >
      {/* Frame - breaking / dashed with generous padding */}
      <rect
        x="8"
        y="8"
        width="544"
        height="244"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      <text x="28" y="36" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="600" fill="#111111" letterSpacing="0.8">
        LIORAN AUTH // IDENTITY, CREDENTIALS & SESSION POLICY
      </text>

      {/* Step 1: Inbound Request */}
      <g transform="translate(28, 62)">
        <rect x="0" y="0" width="136" height="88" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="68" y="26" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          01 / CREDENTIAL
        </text>
        <line x1="12" y1="36" x2="124" y2="36" stroke="#E5E5E5" strokeWidth="1" />
        <text x="68" y="52" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#333333">
          Argon2id Hash
        </text>
        <text x="68" y="70" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Rate Limiter Guard
        </text>
      </g>

      {/* Connector */}
      <path d="M 164 106 L 200 106" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="200,106 192,102 192,110" fill="#111111" />

      {/* Step 2: Session & Cryptographic Token */}
      <g transform="translate(202, 62)">
        <rect x="0" y="0" width="152" height="88" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="76" y="26" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          02 / TOKEN VAULT
        </text>
        <line x1="12" y1="36" x2="140" y2="36" stroke="#111111" strokeWidth="0.75" />
        <text x="76" y="52" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#333333">
          HMAC-SHA256 Signed
        </text>
        <text x="76" y="70" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Expiring Lease TTL
        </text>
      </g>

      {/* Connector */}
      <path d="M 354 106 L 390 106" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="390,106 382,102 382,110" fill="#111111" />

      {/* Step 3: Policy Enforcement */}
      <g transform="translate(392, 62)">
        <rect x="0" y="0" width="140" height="88" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="70" y="26" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          03 / SCOPED IAM
        </text>
        <line x1="12" y1="36" x2="128" y2="36" stroke="#E5E5E5" strokeWidth="1" />
        <text x="70" y="52" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#333333">
          Role-Based Access
        </text>
        <text x="70" y="70" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Target System API
        </text>
      </g>

      {/* Note bottom */}
      <g transform="translate(28, 184)">
        <text x="0" y="16" fontFamily="var(--font-sketch, cursive)" fontSize="13" fill="#333333">
          * Research track: sovereign, self-hosted identity without cloud vendor lock-in.
        </text>
        <path d="M 0 24 Q 180 28 360 24" stroke="#111111" strokeWidth="0.75" fill="none" />
      </g>
    </svg>
  );
}

export function LioranEcosystemDiagram({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lioran Group & LDS Developer Infrastructure Ecosystem Tree"
    >
      {/* Frame - breaking / dashed with generous padding */}
      <rect
        x="8"
        y="8"
        width="684"
        height="344"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      {/* Header */}
      <text x="28" y="36" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" fill="#111111" letterSpacing="0.8">
        ORGANIZATION & INFRASTRUCTURE HIERARCHY
      </text>

      {/* Level 1: Lioran Group */}
      <g transform="translate(245, 50)">
        <rect x="0" y="0" width="210" height="50" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="105" y="24" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN GROUP
        </text>
        <text x="105" y="40" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#666666">
          Parent Technology Org (India)
        </text>
      </g>

      {/* Connecting line downward */}
      <path d="M 350 100 L 350 132" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="350,132 346,124 354,124" fill="#111111" />

      {/* Level 2: LDS */}
      <g transform="translate(205, 134)">
        <rect x="0" y="0" width="290" height="54" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="145" y="24" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN DEVELOPER SOLUTIONS (LDS)
        </text>
        <text x="145" y="42" fontFamily="var(--font-sans, sans-serif)" fontSize="10.5" textAnchor="middle" fill="#333333">
          Systems Engineering & Developer Infrastructure
        </text>
      </g>

      {/* Tree Split lines to 3 products */}
      <path d="M 350 188 L 350 218" stroke="#111111" strokeWidth="1.5" />
      <path d="M 128 218 L 572 218" stroke="#111111" strokeWidth="1.5" />
      
      {/* 3 drops */}
      <path d="M 128 218 L 128 238" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="128,238 124,230 132,230" fill="#111111" />

      <path d="M 350 218 L 350 238" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="350,238 346,230 354,230" fill="#111111" />

      <path d="M 572 218 L 572 238" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="572,238 568,230 576,230" fill="#111111" />

      {/* Product 1: LioranDB */}
      <g transform="translate(30, 240)">
        <rect x="0" y="0" width="195" height="80" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="97.5" y="24" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORANDB
        </text>
        <line x1="12" y1="36" x2="183" y2="36" stroke="#E5E5E5" strokeWidth="1" />
        <text x="97.5" y="50" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#333333">
          Rust Document Database
        </text>
        <text x="97.5" y="68" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          STATUS: ACTIVE / V2
        </text>
      </g>

      {/* Product 2: Lioran S3 / Bastion */}
      <g transform="translate(252, 240)">
        <rect x="0" y="0" width="195" height="80" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="97.5" y="24" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN S3 / BASTION
        </text>
        <line x1="12" y1="36" x2="183" y2="36" stroke="#E5E5E5" strokeWidth="1" />
        <text x="97.5" y="50" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#333333">
          Self-Hosted Object Storage
        </text>
        <text x="97.5" y="68" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          STATUS: V1 PRE-ALPHA
        </text>
      </g>

      {/* Product 3: Lioran Auth */}
      <g transform="translate(475, 240)">
        <rect x="0" y="0" width="195" height="80" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="97.5" y="24" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN AUTH
        </text>
        <line x1="12" y1="36" x2="183" y2="36" stroke="#E5E5E5" strokeWidth="1" />
        <text x="97.5" y="50" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#333333">
          Identity & Access Engine
        </text>
        <text x="97.5" y="68" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          STATUS: RESEARCH
        </text>
      </g>
    </svg>
  );
}

// Hand-drawn arrow component
export function HandDrawnArrow({ className = "w-16 h-6 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M 4 12 Q 35 7, 72 12"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M 64 6 L 73 12 L 63 18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Subtle hand-drawn underline
export function HandDrawnUnderline({ className = "w-full h-3 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="none">
      <path
        d="M 2 7 Q 50 11, 100 6 T 198 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Hand-drawn founder sketch (Rahul archetype) with clean angular lines
export function StickmanFounder({ className = "w-16 h-24 text-black" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Head */}
      <rect x="20" y="8" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.75" fill="#FFFFFF" />
      {/* Short messy hair strokes */}
      <path d="M 21 8 Q 26 5, 32 6 Q 36 7, 39 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Eyes & smile */}
      <rect x="25" y="15" width="2" height="2" fill="currentColor" />
      <rect x="33" y="15" width="2" height="2" fill="currentColor" />
      <path d="M 26 22 L 34 22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      {/* Body */}
      <line x1="30" y1="28" x2="30" y2="58" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Arms holding laptop */}
      <path d="M 30 36 L 18 46 L 28 46" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 30 36 L 42 46 L 32 46" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {/* Tiny Laptop */}
      <rect x="22" y="44" width="16" height="10" stroke="currentColor" strokeWidth="1.2" fill="#FAFAFA" rx="1" />
      {/* Legs */}
      <line x1="30" y1="58" x2="20" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="30" y1="58" x2="40" y2="84" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
