import React from "react";

// ---------------------------------------------------------------------------
// HAND-DRAWN SKETCH SYSTEM (Light-mode Monochrome: Paper #FFFFFF / Ink #000000)
// Authentic technical notebook and systems architecture illustrations (Clean Geometry, No Circles)
// ---------------------------------------------------------------------------

export function DatabaseSketch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LioranDB Storage Engine & B+ Tree Architecture Diagram"
    >
      {/* Solid Canvas Base */}
      <rect width="540" height="280" fill="#FFFFFF" rx="6" />

      {/* Outer bounding frame - sketch style */}
      <rect
        x="6"
        y="6"
        width="528"
        height="268"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      {/* Label - Top Left */}
      <text x="24" y="32" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="600" fill="#111111" letterSpacing="0.8">
        LIORANDB // STORAGE ENGINE INTERNALS (V2)
      </text>

      {/* Ingestion Layer: gRPC Request */}
      <g transform="translate(24, 60)">
        <rect x="0" y="0" width="110" height="58" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="55" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="600" textAnchor="middle" fill="#111111">
          gRPC Transport
        </text>
        <text x="55" y="42" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          Unary / Sustained
        </text>
      </g>

      {/* Arrow from gRPC to Engine */}
      <path d="M 134 89 L 168 89" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="168,89 160,85 160,93" fill="#111111" />

      {/* WAL (Write-Ahead Log) Module */}
      <g transform="translate(170, 52)">
        <rect x="0" y="0" width="150" height="74" stroke="#111111" strokeWidth="2" fill="#FFFFFF" rx="4" />
        {/* offset double sketch border */}
        <rect x="3" y="3" width="144" height="68" stroke="#D0D0D0" strokeWidth="1" fill="none" rx="2" />
        <text x="75" y="22" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          WAL & RECOVERY
        </text>
        <line x1="12" y1="32" x2="138" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="75" y="46" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Append-only Commit Log
        </text>
        <text x="75" y="60" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Crash-safe fsync stream
        </text>
      </g>

      {/* MemTable Buffer */}
      <g transform="translate(350, 52)">
        <rect x="0" y="0" width="160" height="74" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="80" y="22" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          MEMTABLE & MVCC
        </text>
        <line x1="12" y1="32" x2="148" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="80" y="46" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Lock-free In-Memory Index
        </text>
        <text x="80" y="60" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Multi-Version Isolation
        </text>
      </g>

      {/* Connecting Arrow from WAL to MemTable */}
      <path d="M 320 89 L 348 89" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" />

      {/* Downward flush arrow */}
      <path d="M 430 128 L 430 156" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="430,156 426,148 434,148" fill="#111111" />
      <text x="442" y="146" fontFamily="var(--font-sketch, cursive)" fontSize="11" fill="#666666">
        flush / compact
      </text>

      {/* B+ Tree Disk Storage Engine - Bottom Section */}
      <g transform="translate(24, 160)">
        <rect x="0" y="0" width="486" height="100" stroke="#111111" strokeWidth="2" fill="#FFFFFF" rx="4" />
        <rect x="2" y="2" width="482" height="96" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 2" fill="none" />

        <text x="20" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" fill="#111111">
          PERSISTENT STORAGE ENGINE // B+ TREE & SECONDARY INDEXES
        </text>

        {/* Tree Root Node */}
        <g transform="translate(200, 36)">
          <rect x="0" y="0" width="86" height="24" stroke="#111111" strokeWidth="1.25" fill="#FAFAFA" rx="2" />
          <text x="43" y="16" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#111111">
            Root: [K1 | K2]
          </text>
        </g>

        {/* Tree Branches */}
        <path d="M 220 60 L 110 74" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 243 60 L 243 74" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M 266 60 L 376 74" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />

        {/* Leaf Nodes */}
        <g transform="translate(50, 74)">
          <rect x="0" y="0" width="115" height="20" stroke="#111111" strokeWidth="1.2" fill="#FFFFFF" rx="2" />
          <text x="57" y="14" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#111111">
            Leaf: Page 0x01A
          </text>
        </g>
        <g transform="translate(185, 74)">
          <rect x="0" y="0" width="115" height="20" stroke="#111111" strokeWidth="1.2" fill="#FFFFFF" rx="2" />
          <text x="57" y="14" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#111111">
            Leaf: Page 0x01B
          </text>
        </g>
        <g transform="translate(320, 74)">
          <rect x="0" y="0" width="115" height="20" stroke="#111111" strokeWidth="1.2" fill="#FFFFFF" rx="2" />
          <text x="57" y="14" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#111111">
            Leaf: Page 0x01C
          </text>
        </g>

        {/* Linked list arrow between leaves */}
        <path d="M 165 84 L 183 84" stroke="#111111" strokeWidth="1" strokeDasharray="2 1" />
        <path d="M 300 84 L 318 84" stroke="#111111" strokeWidth="1" strokeDasharray="2 1" />
      </g>
    </svg>
  );
}

export function StorageSketch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lioran S3 / Bastion Object Storage Architecture Diagram"
    >
      <rect width="540" height="280" fill="#FFFFFF" rx="6" />

      {/* Outer frame */}
      <rect
        x="6"
        y="6"
        width="528"
        height="268"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      {/* Label */}
      <text x="24" y="32" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="600" fill="#111111" letterSpacing="0.8">
        LIORAN BASTION // SINGLE-NODE OBJECT STORAGE & STREAMING I/O
      </text>

      {/* Client / SDK */}
      <g transform="translate(24, 60)">
        <rect x="0" y="0" width="115" height="80" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="57" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          @lioran/bastion
        </text>
        <line x1="10" y1="34" x2="105" y2="34" stroke="#E5E5E5" strokeWidth="1" />
        <text x="57" y="48" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          TypeScript SDK
        </text>
        <text x="57" y="62" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Byte-Range / Presign
        </text>
      </g>

      {/* Arrow */}
      <path d="M 140 100 L 175 100" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="175,100 167,96 167,104" fill="#111111" />
      <text x="157" y="92" fontFamily="var(--font-sketch, cursive)" fontSize="10" textAnchor="middle" fill="#666666">
        HTTP/REST
      </text>

      {/* Axum Server & Stream Router */}
      <g transform="translate(178, 52)">
        <rect x="0" y="0" width="160" height="96" stroke="#111111" strokeWidth="2" fill="#FFFFFF" rx="4" />
        <rect x="3" y="3" width="154" height="90" stroke="#E0E0E0" strokeWidth="1" fill="none" rx="2" />
        <text x="80" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          BASTION SERVER (RUST)
        </text>
        <line x1="12" y1="34" x2="148" y2="34" stroke="#111111" strokeWidth="0.75" />
        <text x="80" y="48" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Axum HTTP / Auth Guard
        </text>
        <text x="80" y="62" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Bounded Chunks (256 KiB)
        </text>
        <text x="80" y="78" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Disk Headroom Guardrails
        </text>
      </g>

      {/* Split arrows to Metadata and Object Storage */}
      <path d="M 338 80 L 372 70" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="372,70 363,68 367,75" fill="#111111" />

      <path d="M 338 120 L 372 130" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="372,130 367,125 363,132" fill="#111111" />

      {/* RocksDB Metadata Engine */}
      <g transform="translate(375, 42)">
        <rect x="0" y="0" width="140" height="60" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="70" y="22" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#111111">
          ROCKSDB METADATA
        </text>
        <text x="70" y="38" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Decoupled State Engine
        </text>
        <text x="70" y="50" fontFamily="var(--font-mono, monospace)" fontSize="8" textAnchor="middle" fill="#666666">
          Prefixes / Multipart State
        </text>
      </g>

      {/* Filesystem Payload Volume */}
      <g transform="translate(375, 114)">
        <rect x="0" y="0" width="140" height="60" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="70" y="22" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fontWeight="700" textAnchor="middle" fill="#111111">
          PAYLOAD STORAGE
        </text>
        <text x="70" y="38" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#333333">
          Atomic File Commits
        </text>
        <text x="70" y="50" fontFamily="var(--font-mono, monospace)" fontSize="8" textAnchor="middle" fill="#666666">
          Strict `fsync` Durability
        </text>
      </g>

      {/* Durability & Safety Banner - Bottom */}
      <g transform="translate(24, 192)">
        <rect x="0" y="0" width="492" height="68" stroke="#111111" strokeWidth="1.5" strokeDasharray="3 3" fill="#FAFAFA" rx="4" />
        <text x="20" y="22" fontFamily="var(--font-mono, monospace)" fontSize="9.5" fontWeight="700" fill="#111111">
          RELIABILITY BENCHMARK & DURABILITY SUITE
        </text>
        <text x="20" y="40" fontFamily="var(--font-sans, sans-serif)" fontSize="12" fill="#333333">
          • Durability tested on 100 GiB streaming workloads with intentional process crash/recovery cycles
        </text>
        <text x="20" y="56" fontFamily="var(--font-sans, sans-serif)" fontSize="12" fill="#666666">
          • Single-node pre-alpha architecture with zero in-memory payload buffering and Caddy automatic TLS
        </text>
      </g>
    </svg>
  );
}

export function IdentitySketch({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 540 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lioran Auth & Identity Infrastructure Flow Diagram"
    >
      <rect width="540" height="240" fill="#FFFFFF" rx="6" />

      {/* Frame */}
      <rect
        x="6"
        y="6"
        width="528"
        height="228"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      <text x="24" y="32" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="600" fill="#111111" letterSpacing="0.8">
        LIORAN AUTH // IDENTITY, CREDENTIALS & SESSION POLICY
      </text>

      {/* Step 1: Inbound Request */}
      <g transform="translate(24, 60)">
        <rect x="0" y="0" width="130" height="86" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="65" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          01 / CREDENTIAL
        </text>
        <line x1="12" y1="34" x2="118" y2="34" stroke="#E5E5E5" strokeWidth="1" />
        <text x="65" y="50" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#333333">
          Argon2id Hash
        </text>
        <text x="65" y="68" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Rate Limiter Guard
        </text>
      </g>

      {/* Connector */}
      <path d="M 155 103 L 195 103" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="195,103 187,99 187,107" fill="#111111" />

      {/* Step 2: Session & Cryptographic Token */}
      <g transform="translate(198, 60)">
        <rect x="0" y="0" width="144" height="86" stroke="#111111" strokeWidth="2" fill="#FFFFFF" rx="4" />
        <rect x="3" y="3" width="138" height="80" stroke="#D0D0D0" strokeWidth="1" fill="none" rx="2" />
        <text x="72" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          02 / TOKEN VAULT
        </text>
        <line x1="12" y1="34" x2="132" y2="34" stroke="#111111" strokeWidth="0.75" />
        <text x="72" y="50" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#333333">
          HMAC-SHA256 Signed
        </text>
        <text x="72" y="68" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Expiring Lease TTL
        </text>
      </g>

      {/* Connector */}
      <path d="M 343 103 L 383 103" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="383,103 375,99 375,107" fill="#111111" />

      {/* Step 3: Policy Enforcement */}
      <g transform="translate(386, 60)">
        <rect x="0" y="0" width="130" height="86" stroke="#111111" strokeWidth="1.75" fill="#FAFAFA" rx="4" />
        <text x="65" y="24" fontFamily="var(--font-mono, monospace)" fontSize="10" fontWeight="700" textAnchor="middle" fill="#111111">
          03 / SCOPED IAM
        </text>
        <line x1="12" y1="34" x2="118" y2="34" stroke="#E5E5E5" strokeWidth="1" />
        <text x="65" y="50" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#333333">
          Role-Based Access
        </text>
        <text x="65" y="68" fontFamily="var(--font-mono, monospace)" fontSize="8.5" textAnchor="middle" fill="#666666">
          Target System API
        </text>
      </g>

      {/* Note bottom */}
      <g transform="translate(24, 166)">
        <text x="0" y="16" fontFamily="var(--font-sketch, cursive)" fontSize="13" fill="#333333">
          * Research track: sovereign, self-hosted identity without cloud vendor lock-in.
        </text>
        <path d="M 0 22 Q 180 26 360 22" stroke="#111111" strokeWidth="0.75" fill="none" />
      </g>
    </svg>
  );
}

export function LioranEcosystemDiagram({ className = "w-full h-auto" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 680 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Lioran Group & LDS Developer Infrastructure Ecosystem Tree"
    >
      <rect width="680" height="340" fill="#FFFFFF" rx="6" />

      {/* Frame */}
      <rect
        x="6"
        y="6"
        width="668"
        height="328"
        stroke="#111111"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        fill="#FFFFFF"
        rx="6"
      />

      {/* Header */}
      <text x="28" y="34" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" fill="#111111" letterSpacing="0.8">
        ORGANIZATION & INFRASTRUCTURE HIERARCHY
      </text>

      {/* Level 1: Lioran Group */}
      <g transform="translate(240, 52)">
        <rect x="0" y="0" width="200" height="48" stroke="#111111" strokeWidth="2" fill="#FAFAFA" rx="4" />
        <rect x="2" y="2" width="196" height="44" stroke="#111111" strokeWidth="0.5" strokeDasharray="2 2" fill="none" rx="2" />
        <text x="100" y="22" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN GROUP
        </text>
        <text x="100" y="38" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#666666">
          Parent Technology Org (India)
        </text>
      </g>

      {/* Connecting line downward */}
      <path d="M 340 100 L 340 132" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="340,132 336,124 344,124" fill="#111111" />

      {/* Level 2: LDS */}
      <g transform="translate(200, 134)">
        <rect x="0" y="0" width="280" height="52" stroke="#111111" strokeWidth="2" fill="#FFFFFF" rx="4" />
        <text x="140" y="24" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN DEVELOPER SOLUTIONS (LDS)
        </text>
        <text x="140" y="42" fontFamily="var(--font-sans, sans-serif)" fontSize="10.5" textAnchor="middle" fill="#333333">
          Systems Engineering & Developer Infrastructure
        </text>
      </g>

      {/* Tree Split lines to 3 products */}
      <path d="M 340 186 L 340 216" stroke="#111111" strokeWidth="1.5" />
      <path d="M 120 216 L 560 216" stroke="#111111" strokeWidth="1.5" />
      
      {/* 3 drops */}
      <path d="M 120 216 L 120 236" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="120,236 116,228 124,228" fill="#111111" />

      <path d="M 340 216 L 340 236" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="340,236 336,228 344,228" fill="#111111" />

      <path d="M 560 216 L 560 236" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" />
      <polygon points="560,236 556,228 564,228" fill="#111111" />

      {/* Product 1: LioranDB */}
      <g transform="translate(30, 238)">
        <rect x="0" y="0" width="180" height="74" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="90" y="22" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORANDB
        </text>
        <line x1="12" y1="32" x2="168" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="90" y="46" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#333333">
          Rust Document Database
        </text>
        <text x="90" y="62" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          STATUS: ACTIVE / V2
        </text>
      </g>

      {/* Product 2: Lioran S3 / Bastion */}
      <g transform="translate(250, 238)">
        <rect x="0" y="0" width="180" height="74" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="90" y="22" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN S3 / BASTION
        </text>
        <line x1="12" y1="32" x2="168" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="90" y="46" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#333333">
          Self-Hosted Object Storage
        </text>
        <text x="90" y="62" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
          STATUS: V1 PRE-ALPHA
        </text>
      </g>

      {/* Product 3: Lioran Auth */}
      <g transform="translate(470, 238)">
        <rect x="0" y="0" width="180" height="74" stroke="#111111" strokeWidth="1.75" fill="#FFFFFF" rx="4" />
        <text x="90" y="22" fontFamily="var(--font-mono, monospace)" fontSize="11" fontWeight="700" textAnchor="middle" fill="#111111">
          LIORAN AUTH
        </text>
        <line x1="12" y1="32" x2="168" y2="32" stroke="#E5E5E5" strokeWidth="1" />
        <text x="90" y="46" fontFamily="var(--font-sans, sans-serif)" fontSize="10" textAnchor="middle" fill="#333333">
          Identity & Access Engine
        </text>
        <text x="90" y="62" fontFamily="var(--font-mono, monospace)" fontSize="9" textAnchor="middle" fill="#666666">
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
