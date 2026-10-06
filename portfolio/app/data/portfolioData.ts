export type ProjectStatus = "Active / V2" | "V1 Pre-Alpha" | "Research" | "Production / Live" | "Stable" | "Completed" | "Experiment";

export type ProjectTier = "featured-infra" | "selected-product" | "experiment";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  tier: ProjectTier;
  status: ProjectStatus;
  statusNote?: string;
  period: string;
  primaryRole: string;
  whatItIs: string;
  whyItExists: string;
  whatSwarajEngineered: string[];
  technicalChallenges: string[];
  stack: string[];
  githubUrl?: string;
  docsUrl?: string;
  liveUrl?: string;
  images?: string[];
  diagramType?: "database" | "storage" | "auth" | "none";
  iconName?: string;
}

export interface EngineeringAreaItem {
  number: string;
  title: string;
  description: string;
  topics: string[];
  keyTools: string[];
}

export interface TechnicalArticle {
  id: string;
  title: string;
  subtitle: string;
  publishedDate: string;
  readTime: string;
  category: "Storage" | "Databases" | "Systems & Concurrency" | "Reliability";
  summary: string;
  url: string;
}

export interface MediaRecognitionItem {
  type: "newspaper" | "olympiad" | "ecosystem";
  title: string;
  outletOrOrg: string;
  dateOrRank: string;
  details: string;
}

export const HERO_DATA = {
  eyebrow: "SWARAJ PUPPALWAR / SOFTWARE ENGINEER",
  headline: "Full-stack engineer building developer infrastructure.",
  bio: "I'm Swaraj Puppalwar, a software engineer and Founder & CTO at Lioran Group. I build databases, storage systems, backend platforms and full-stack products, primarily with Rust and TypeScript.",
  subline: "Currently building infrastructure at Lioran Developer Solutions.",
  primaryActions: [
    { label: "View Selected Work", href: "#work", primary: true },
    { label: "GitHub", href: "https://github.com/UltronTheAI", external: true },
  ],
  secondaryLinks: [
    { label: "Lioran Group", href: "https://lioran.group", external: true },
    { label: "LDS Infrastructure", href: "#lioran" },
    { label: "Writing", href: "#writing" },
    { label: "Engineering Story", href: "#about" },
  ],
};

export const CURRENTLY_BUILDING: ProjectItem[] = [
  {
    id: "liorandb",
    title: "LioranDB",
    subtitle: "Developer-First Document Database in Rust",
    tier: "featured-infra",
    status: "Active / V2",
    statusNote: "V2 Core Engine in Rust",
    period: "2025 — Present",
    primaryRole: "Creator & Lead Systems Architect",
    whatItIs: "A developer-first document database developed in Rust with custom storage engines, lock-free concurrency, MVCC, and high-throughput gRPC wire protocols.",
    whyItExists: "Built to provide predictable local-first and self-hosted document storage that eliminates multi-layer ORM tax and delivers bare-metal predictability.",
    whatSwarajEngineered: [
      "Engineered append-only Write-Ahead Logging (WAL) with strict crash consistency and deterministic replay recovery.",
      "Implemented in-memory MemTable and on-disk B+ Tree storage engine for indexed key lookups.",
      "Designed gRPC unary and streaming request pathways with zero-overhead binary protobuf transport.",
      "Developed official TypeScript/JavaScript driver SDK (@lioran/ldb-driver) providing MongoDB-compatible collection APIs.",
      "Engineered the sustained-write InsertMany pipeline tested against high-throughput document ingestion.",
    ],
    technicalChallenges: [
      "Mitigating JSON parse/stringify saturation on unary point-read pathways by decoupling proto serialization.",
      "Balancing Tokio blocking pool threads with discrete semaphore read/write admission barriers to prevent thread exhaustion.",
      "Guaranteeing atomic page split durability in the on-disk B+ tree without lock tearing.",
    ],
    stack: ["Rust", "Tokio", "gRPC / Tonic", "Protobuf", "B+ Trees", "WAL", "TypeScript SDK"],
    githubUrl: "https://github.com/LioranGroupOfficial/Liorandb",
    diagramType: "database",
    images: ["/liorandb/1.png"],
  },
  {
    id: "lioran-s3",
    title: "Lioran S3 / Lioran Bastion",
    subtitle: "High-Performance Self-Hosted Object Storage Engine in Rust",
    tier: "featured-infra",
    status: "V1 Pre-Alpha",
    statusNote: "Pre-Alpha Launched October 2026",
    period: "2026 — Present",
    primaryRole: "Creator & Lead Systems Architect",
    whatItIs: "A single-node, self-hosted object storage server and media engine engineered in Rust, providing S3-style bucket/object semantics, bounded streaming I/O, RocksDB metadata persistence, and HMAC-SHA256 presigned URLs.",
    whyItExists: "Engineered to offer complete data sovereignty and predictable high-throughput storage for applications needing self-hosted object management without cloud egress overhead.",
    whatSwarajEngineered: [
      "Built multi-crate modular workspace: bastion-server (Axum), bastion-object (I/O), bastion-metadata (RocksDB), and bastion-protocol.",
      "Implemented bounded-memory chunked streaming (256 KiB fixed buffers) that streams arbitrary payload sizes without RAM buffering.",
      "Engineered RFC 9110 / RFC 7233 partial HTTP byte-range request handlers for resumable downloads and media scrubbing.",
      "Architected RocksDB-backed decoupled metadata store with secondary indexes for prefix queries and multipart upload states.",
      "Designed cryptographic HMAC-SHA256 expiring presigned URL generation and Argon2id basic auth with mandatory rotation.",
      "Conducted 100 GiB durability workloads with strict fsync boundaries and simulated process crash/recovery verifications.",
      "Developed the official TypeScript client library (@lioran/bastion) and Docker Compose + Caddy automatic TLS deployment.",
    ],
    technicalChallenges: [
      "Eliminating memory leaks during multi-gigabyte multipart uploads by enforcing bounded buffer reuse.",
      "Enforcing strict disk low-watermark headroom guards (512 MiB floor) to reject mutating writes before host disk exhaustion.",
      "Coordinating atomic filesystem file commits with transactional RocksDB metadata state updates.",
    ],
    stack: ["Rust", "Axum", "RocksDB", "Tokio", "HMAC-SHA256", "Argon2id", "TypeScript SDK", "Docker & Caddy"],
    githubUrl: "https://github.com/LioranGroupOfficial/LioranBastion-Rust",
    diagramType: "storage",
  },
  {
    id: "lioran-auth",
    title: "Lioran Auth",
    subtitle: "Sovereign Identity & Access Infrastructure",
    tier: "featured-infra",
    status: "Research",
    statusNote: "Foundational LDS Track",
    period: "2026 — Present",
    primaryRole: "Systems Research & Design",
    whatItIs: "A self-hosted authentication, credential vault, and scoped IAM engine being researched as part of the LDS developer infrastructure ecosystem.",
    whyItExists: "To provide a standalone, developer-owned authentication system that prevents third-party user data lock-in while maintaining strict cryptographic safety.",
    whatSwarajEngineered: [
      "Researched Argon2id password hashing parameters and token lifecycle architectures.",
      "Designed zero-trust session management using cryptographically signed lease tokens.",
      "Formulated fine-grained scoped API token specifications for multi-tenant service isolation.",
    ],
    technicalChallenges: [
      "Designing low-latency token revocation verification without introducing a centralized database bottleneck.",
      "Balancing password hashing compute overhead with DDoS resistance using rate-limiting token buckets.",
    ],
    stack: ["Rust", "Argon2id", "JWT / HMAC", "Token Lifecycle", "IAM"],
    diagramType: "auth",
  },
];

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "meetfound",
    title: "MeetFound",
    subtitle: "Private Offline CRM for Founders & Operators",
    tier: "selected-product",
    status: "Production / Live",
    period: "2026",
    primaryRole: "Full-Stack Architect & Developer",
    whatItIs: "An offline-first private relationship manager and CRM purpose-built for founders, operators, and builders to record meeting notes, connection history, and deal pipelines without cloud data tracking.",
    whyItExists: "Existing CRMs are bloated SaaS platforms that leak sensitive investor and customer notes to third-party clouds.",
    whatSwarajEngineered: [
      "Engineered offline-first local state management with zero-latency full-text note search.",
      "Designed clean, keyboard-first contact logging interfaces and relationship categorization.",
      "Implemented exportable encrypted backups and localized JSON/SQLite sync pipelines.",
    ],
    technicalChallenges: [
      "Maintaining instantaneous search query performance across thousands of local contact notes.",
      "Designing conflict-free reconciliation for offline record modifications.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "IndexedDB / SQLite", "Offline-First"],
    githubUrl: "https://github.com/UltronTheAI/MeetFound",
    images: ["/meet.png"],
    iconName: "Users",
  },
  {
    id: "hushar-spreadsheet",
    title: "Hushar Spreadsheet",
    subtitle: "AI-Powered Localized Spreadsheet for Education",
    tier: "selected-product",
    status: "Production / Live",
    statusNote: "Paying School Customers",
    period: "2025 — Present",
    primaryRole: "Sole Creator & Full-Stack Engineer",
    whatItIs: "An intelligent spreadsheet and tabular data management tool designed specifically for Zilla Parishad school teachers across regional India, translating Hindi/Marathi natural language into complex formulas and data reports.",
    whyItExists: "Rural teachers spend hundreds of administrative hours manually tabulating student marks, attendance, and welfare scheme distributions on complex Excel formulas they struggle to write.",
    whatSwarajEngineered: [
      "Built localized prompt-to-formula parser translating vernacular Hindi prompts into accurate mathematical expressions.",
      "Designed responsive tabular grid with automatic government report template exports.",
      "Shipped production MVP that onboarded paying schools and active teachers.",
    ],
    technicalChallenges: [
      "Handling regional linguistic nuances and domain-specific educational terminology in LLM prompt pipelines.",
      "Ensuring sub-100ms calculation speeds on low-end hardware common in rural schools.",
    ],
    stack: ["React", "TypeScript", "Node.js", "LLM APIs", "Tabular Engine", "Tailwind CSS"],
    images: ["/husharspreadsheet/1.jpeg"],
    iconName: "Table",
  },
  {
    id: "aicompanion",
    title: "AiCompanion",
    subtitle: "Customizable Conversational AI Persona Platform",
    tier: "selected-product",
    status: "Stable",
    period: "2025",
    primaryRole: "Full-Stack Engineer",
    whatItIs: "A full-stack conversational application allowing users to create, configure, and interact with specialized AI agent companions with persistent memory and unique personality prompts.",
    whyItExists: "Built as an exploration into agentic conversation state, memory persistence, and streaming multi-turn LLM architectures.",
    whatSwarajEngineered: [
      "Implemented streaming SSE (Server-Sent Events) chat interface for instantaneous response rendering.",
      "Designed persona configuration matrix allowing dynamic temperature, system prompt, and tone adjustments.",
      "Integrated vector memory stores for context retrieval across prolonged sessions.",
    ],
    technicalChallenges: [
      "Managing token window budgeting while retaining long-term character consistency across dialogue turns.",
    ],
    stack: ["Next.js", "TypeScript", "LangChain", "Vector DB", "Tailwind CSS"],
    githubUrl: "https://github.com/UltronTheAI/AiCompanion",
    images: ["/ai_com.png"],
    iconName: "Bot",
  },
  {
    id: "postacle",
    title: "Post-Acle",
    subtitle: "Engineering Publication & Deep Systems Blog",
    tier: "selected-product",
    status: "Production / Live",
    period: "2025 — Present",
    primaryRole: "Creator & Writer",
    whatItIs: "An editorial publishing platform and technical blog where Swaraj documents systems engineering teardowns, storage internals, Rust performance audits, and architecture decisions.",
    whyItExists: "To maintain an open, transparent 'engine room' log of engineering breakthroughs, benchmark saturation analysis, and lessons learned building databases.",
    whatSwarajEngineered: [
      "Engineered lightweight Markdown/MDX rendering pipeline with syntax highlighting and LaTeX equation support.",
      "Designed clean editorial typographic layouts prioritizing readability and code inspection.",
    ],
    technicalChallenges: [
      "Zero-overhead static page generation with sub-second page loads.",
    ],
    stack: ["Next.js", "MDX", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/LioranGroupOfficial/PostAcle",
    images: ["/postacle/1.jpeg", "/postacle/2.jpeg", "/postacle/3.jpeg", "/postacle/4.jpeg", "/postacle/5.jpeg"],
    iconName: "BookOpen",
  },
  {
    id: "authsystem",
    title: "AuthSystem",
    subtitle: "Secure Hardened Authentication Platform",
    tier: "selected-product",
    status: "Stable",
    period: "2025",
    primaryRole: "Backend Engineer",
    whatItIs: "A modular, security-hardened authentication microservice featuring JWT lifecycle management, cryptographic password hashing, email verification, and rate-limiting middleware.",
    whyItExists: "Created as an internal reusable authentication engine to secure multiple products across the Lioran ecosystem.",
    whatSwarajEngineered: [
      "Implemented dual-token architecture (short-lived access JWT + secure httpOnly refresh tokens).",
      "Integrated brute-force protection with IP-based sliding window rate limiters.",
      "Engineered automated email verification and password reset token workflows.",
    ],
    technicalChallenges: [
      "Preventing timing attacks on password validation by using constant-time string comparisons.",
    ],
    stack: ["Node.js", "Express", "TypeScript", "JWT", "Bcrypt", "MongoDB", "Redis"],
    githubUrl: "https://github.com/UltronTheAI/AuthSystem",
    images: ["/auth_system.png"],
    iconName: "ShieldCheck",
  },
  {
    id: "ebook-aura",
    title: "Vasuki / eBook-Generator-AI",
    subtitle: "Autonomous Research & Structured eBook Pipeline",
    tier: "selected-product",
    status: "Completed",
    period: "2025",
    primaryRole: "AI Systems Engineer",
    whatItIs: "An autonomous agentic pipeline that conducts iterative web/document research on technical topics and generates structured, multi-chapter publications in formatted PDF and EPUB formats.",
    whyItExists: "Built to automate technical knowledge synthesis and multi-source document collation into comprehensive instructional booklets.",
    whatSwarajEngineered: [
      "Architected multi-stage agent pipeline: Outline Generator → Researcher → Section Writer → Formatter.",
      "Built automated PDF rendering engine with proper table of contents, footers, and code styling.",
    ],
    technicalChallenges: [
      "Preventing hallucination drift across consecutive chapters by feeding chapter summaries back into the global context.",
    ],
    stack: ["Python", "LangChain", "OpenAI APIs", "ReportLab", "Node.js"],
    githubUrl: "https://github.com/UltronTheAI/eBook-Generator-AI-Agent",
    images: ["/ebookaura/1.jpeg", "/ebookaura/2.jpeg", "/ebookaura/3.jpeg", "/ebookaura/4.jpeg", "/ebookaura/5.jpeg"],
    iconName: "FileText",
  },
];

export const OTHER_EXPERIMENTS: ProjectItem[] = [
  {
    id: "vortexly",
    title: "Vortexly",
    subtitle: "Private Social & Media Platform",
    tier: "experiment",
    status: "Experiment",
    period: "2025",
    primaryRole: "Full-Stack Developer",
    whatItIs: "A private chronological media-sharing network built for close circles, eliminating algorithmic ranking in favor of chronological feeds and direct media sharing.",
    whyItExists: "A distraction-free social experiment focused on genuine real-time interactions.",
    whatSwarajEngineered: ["Full-stack mobile/web application with media uploads and real-time activity streams."],
    technicalChallenges: ["Optimizing media compression and low-latency feed updates."],
    stack: ["React Native / Expo", "Node.js", "Express", "MongoDB"],
    images: ["/vortexly/1.jpg", "/vortexly/2.jpg", "/vortexly/3.jpg", "/vortexly/4.jpg", "/vortexly/5.jpg"],
    iconName: "Share2",
  },
  {
    id: "dead-corridor",
    title: "DEAD-CORRIDOR",
    subtitle: "16-Bit Zombie Side-Scroller Game",
    tier: "experiment",
    status: "Completed",
    period: "2026",
    primaryRole: "Game Developer",
    whatItIs: "A 16-bit retro zombie survival side-scroller arcade game featuring custom sprite rendering, physics collision detection, and wave management in raw JavaScript canvas.",
    whyItExists: "Built as a pure algorithmic exercise in game loop optimization and collision math.",
    whatSwarajEngineered: ["Custom 60 FPS 2D game loop, physics engine, and sprite animation controller."],
    technicalChallenges: ["Zero-lag frame updates using double buffering in HTML5 canvas."],
    stack: ["JavaScript", "HTML5 Canvas", "Web Audio API"],
    githubUrl: "https://github.com/UltronTheAI/DEAD-CORRIDOR",
    images: ["/dead_game.png"],
    iconName: "Gamepad2",
  },
];

export const ENGINEERING_AREAS: EngineeringAreaItem[] = [
  {
    number: "01",
    title: "Infrastructure & Systems",
    description: "Designing the core storage and execution primitives that modern web applications take for granted. Focused on durability, memory bounds, and low-level data layouts.",
    topics: [
      "Custom Storage Engines",
      "Document Databases & MVCC",
      "Object Storage & Bounded Streaming",
      "Write-Ahead Logging (WAL) & Crash Recovery",
      "B+ Tree Indexing & Page Allocators",
      "Decoupled RocksDB Metadata Stores",
      "Single-Node & Distributed Fundamentals",
    ],
    keyTools: ["Rust", "RocksDB", "Axum", "gRPC / Tonic", "Tokio"],
  },
  {
    number: "02",
    title: "Backend Engineering",
    description: "Architecting resilient, high-throughput backend services and APIs with deterministic failure modes, cryptographic auth, and observability.",
    topics: [
      "gRPC & Binary Protobuf Contracts",
      "High-Performance REST APIs",
      "Authentication & Identity (Argon2id, HMAC, JWT)",
      "Concurrency & Async Runtimes",
      "Prometheus Observability & Latency Auditing",
      "Data Modeling & Query Optimization",
      "Rate Limiting & Admission Control",
    ],
    keyTools: ["Rust", "TypeScript", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    number: "03",
    title: "Full-Stack Product Engineering",
    description: "Building fast, functional, and deeply polished user interfaces. Combining modern React architectures with robust backend integrations.",
    topics: [
      "Next.js App Router & Server Components",
      "React 19 & State Architectures",
      "Offline-First Data Sync (IndexedDB / SQLite)",
      "Developer Dashboards & Tooling",
      "Accessible Design Systems & Editorial Typography",
      "LLM Agent Pipelines & Streaming UIs",
    ],
    keyTools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    number: "04",
    title: "Operations & Reliability",
    description: "Deploying and managing production systems with strict disk safety guardrails, automated TLS, containerization, and reproducible infrastructure.",
    topics: [
      "Docker & Compose Orchestration",
      "Linux System Administration",
      "Reverse Proxies (Caddy, Nginx)",
      "Automatic TLS & Hardened Production Profiles",
      "100 GiB Durability & Crash Testing",
      "Disk Low-Watermark Headroom Protection",
    ],
    keyTools: ["Docker", "Linux / Bash", "Caddy", "CI/CD", "Prometheus"],
  },
];

export const TECHNICAL_ARTICLES: TechnicalArticle[] = [
  {
    id: "bastion-architecture",
    title: "Architecture of a Self-Hosted Rust Storage Server: Bounded Streaming & RocksDB Metadata",
    subtitle: "A deep look into how Lioran Bastion handles multi-gigabyte objects with fixed 256 KiB buffers and decoupled state persistence.",
    publishedDate: "October 2026",
    readTime: "8 min read",
    category: "Storage",
    summary: "How we eliminated RAM buffering during multi-part ingestion, implemented RFC 9110 byte ranges, and structured RocksDB secondary indexes for single-node object storage.",
    url: "https://github.com/LioranGroupOfficial/LioranBastion-Rust/blob/main/ARCHITECTURE.md",
  },
  {
    id: "grpc-read-path-saturation",
    title: "Why Point Reads Saturate: Dissecting JSON Overhead and Semaphores in gRPC Systems",
    subtitle: "An audit of the LioranDB gRPC r0.1 read path, tracking the exact cost of 6 JSON stringify/parse passes per unary point read.",
    publishedDate: "September 2026",
    readTime: "11 min read",
    category: "Databases",
    summary: "Static inspection of tonic connection concurrency, Tokio spawn_blocking pool allocations, and the architectural path to sub-millisecond point reads.",
    url: "https://github.com/LioranGroupOfficial/Liorandb",
  },
  {
    id: "durability-fsync-testing",
    title: "Crash Durability in Practice: 100 GiB Workload Testing with Strict fsync Boundaries",
    subtitle: "Validating single-node storage resilience under simulated hardware power cut and sudden process SIGKILL.",
    publishedDate: "August 2026",
    readTime: "7 min read",
    category: "Reliability",
    summary: "Comparing strict fsync flush semantics against balanced OS writeback caching during high-IOPS write streams, and auditing WAL replay correctness.",
    url: "https://github.com/LioranGroupOfficial/LioranBastion-Rust",
  },
  {
    id: "multipart-pipeline-rust",
    title: "Designing Resumable Multipart Ingestion with Zero In-Memory Buffering",
    subtitle: "Engineering chunked uploads, atomic disk assembly, and expiring HMAC-SHA256 presigned URLs in Axum.",
    publishedDate: "July 2026",
    readTime: "9 min read",
    category: "Systems & Concurrency",
    summary: "Building an atomic multipart pipeline that guarantees zero credential leakage and atomic file promotion upon completion.",
    url: "https://github.com/LioranGroupOfficial/PostAcle",
  },
];

export const RECOGNITION_DATA: MediaRecognitionItem[] = [
  {
    type: "newspaper",
    title: "Swaraj's High Rise in Computers!",
    outletOrOrg: "Nagpur Post",
    dateOrRank: "23 May 2023",
    details: "Featured for exceptional programming aptitude and early software engineering achievements in English regional press.",
  },
  {
    type: "newspaper",
    title: "स्वराजची संगणक क्षेत्रात उंच भरारी",
    outletOrOrg: "Navarashtra (Chandrapur Edition)",
    dateOrRank: "23 May 2023",
    details: "Regional newspaper feature highlighting computer science projects and independent technical development.",
  },
  {
    type: "newspaper",
    title: "'स्वराज'ची संगणकात गगनभरारी",
    outletOrOrg: "Tarun Bharat (Purva Vidarbha Edition)",
    dateOrRank: "29 May 2023",
    details: "State-level Marathi publication covering software development milestones and competitive programming.",
  },
  {
    type: "olympiad",
    title: "Cyber Olympiad — State Rank 1",
    outletOrOrg: "State Cyber Olympiad",
    dateOrRank: "State Rank 1",
    details: "Secured first rank in Maharashtra state-level computer science & algorithmic testing.",
  },
  {
    type: "olympiad",
    title: "Crest Cyber Olympiad — Western Region Rank 17",
    outletOrOrg: "Crest Olympiad",
    dateOrRank: "Regional Rank 17",
    details: "Ranked 17th across the Western Region in computer systems and logical problem solving.",
  },
  {
    type: "olympiad",
    title: "International Computer & Mathematics Olympiads",
    outletOrOrg: "ICO & IMO",
    dateOrRank: "State Rank 30",
    details: "Ranked 30th in Maharashtra state across both International Computer Olympiad and International Mathematics Olympiad.",
  },
  {
    type: "ecosystem",
    title: "Top Indian GitHub Active Developers Directory",
    outletOrOrg: "Open Source Directory",
    dateOrRank: "Public Listing",
    details: "Listed in the verified directory of top active Indian open-source contributors and developers.",
  },
];

export const ABOUT_STORY = {
  headline: "From building applications to engineering the layers beneath them.",
  paragraphs: [
    "I started programming early, fascinated by how code turns logic into tangible systems. For several years, I built full-stack applications, interactive tools, and web platforms—learning the realities of user workflows, latency, and client-side complexity.",
    "Over time, my curiosity naturally migrated lower down the software stack. I found myself asking: What happens when an application calls write()? How does a database guarantee durability when the power abruptly dies? How do storage systems stream multi-gigabyte files without exhausting server RAM?",
    "Today, my primary focus is understanding and building the foundational infrastructure applications normally outsource: databases, object storage engines, authentication infrastructure, and systems tooling. I write primarily in Rust for systems-level predictability and performance, paired with TypeScript for client ergonomics and developer tools.",
    "I founded Lioran Group and lead engineering at Lioran Developer Solutions (LDS). Our long-term mission is building high-performance, developer-first infrastructure rooted in data sovereignty—engineered directly from India.",
  ],
  principles: [
    { title: "Systems > Gimmicks", text: "A clean storage engine with verified fsync durability matters infinitely more than flashy UI animations or buzzword-laden pitch decks." },
    { title: "Understand Every Layer", text: "True engineering reliability comes from understanding the kernel I/O, serialization overhead, memory buffers, and wire protocols underneath your framework." },
    { title: "Data Sovereignty", text: "Developers and organizations should have the power to run their own databases, storage, and auth without being hostage to cloud lock-in or unpredictable egress billing." },
  ],
};

export const CONTACT_DATA = {
  headline: "Let's talk systems.",
  copy: "Interested in developer infrastructure, backend systems, databases, Rust, or building ambitious software? I'm always open to thoughtful conversations, technical debates, and engineering collaborations.",
  email: "coderswaraj@gmail.com",
  github: "https://github.com/UltronTheAI",
  orgGithub: "https://github.com/LioranGroupOfficial",
  twitter: "https://twitter.com/PuppalwarSwaraj",
  location: "India 🇮🇳",
};
