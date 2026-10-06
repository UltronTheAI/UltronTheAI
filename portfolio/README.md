# Swaraj Puppalwar — Engineering Portfolio

> **Full-Stack Software Engineer focused on Developer Infrastructure**  
> Founder & CTO at [Lioran Group](https://lioran.group) / Lioran Developer Solutions

Live Portfolio: [swaraj.lioransolutions.com](https://swaraj.lioransolutions.com)

---

## Overview

This repository contains the personal engineering portfolio for **Swaraj Puppalwar**.

The site follows the **Sthashta Editorial Monochrome Design System** (`DESIGN.md`):
- Pure paper canvas (`#FFFFFF`) with deep ink typography (`#111111` / `#000000`).
- Hand-drawn technical SVG architecture diagrams and notebook sketches.
- Typography driven by **Inter**, **JetBrains Mono**, and **Comic Neue**.
- Zero gradient noise, zero generic badge walls, zero terminal gimmicks.

---

## Featured Infrastructure Tracks (LDS)

1. **LioranDB (Active / V2)**: Developer-first document database in Rust with custom storage engine, WAL, crash recovery, and B+ tree indexing.
2. **Lioran S3 / Lioran Bastion (V1 Pre-Alpha)**: Single-node self-hosted object storage engine in Rust with bounded streaming I/O, RocksDB metadata, and 100 GiB durability testing.
3. **Lioran Auth (Research)**: Self-hosted identity, Argon2id credential hashing, and scoped IAM engine.

---

## Tech Stack

- **Framework**: Next.js 16 (App Router, Server Components)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4 + `@tailwindcss/postcss`
- **Typography**: `next/font/google` (Inter, JetBrains Mono, Comic Neue)
- **Iconography**: `lucide-react`
- **Database / API**: MongoDB native driver (contact dispatch backend)

---

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to inspect the portfolio locally.
