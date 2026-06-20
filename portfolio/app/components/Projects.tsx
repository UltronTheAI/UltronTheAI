import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// ---------------- TYPES ----------------

type Project = {
  title: string;
  images: string[];
  tag: "public" | "private";
  description: string;
  startedAt: string;
  developmentTime: string;
  link?: string;
};

// ---------------- DATA ----------------

const projects: Project[] = [
  {
    title: "AiCompanion",
    images: ["/ai_com.png"],
    tag: "public",
    description: "Create and chat with AI companions — full-stack fun.",
    startedAt: "2025-06",
    developmentTime: "Ongoing",
    link: "https://github.com/UltronTheAI/AiCompanion",
  },
  {
    title: "MeetFound",
    images: ["/meet.png"],
    tag: "public",
    description: "Private offline CRM for founders networking.",
    startedAt: "2026-04",
    developmentTime: "Ongoing",
    link: "https://github.com/UltronTheAI/MeetFound",
  },
  {
    title: "Post-Acle",
    images: ["/postacle/1.jpeg", "/postacle/2.jpeg"],
    tag: "public",
    description: "My engineering blog — architecture notes, opinions, and memes.",
    startedAt: "2025-05",
    developmentTime: "Ongoing",
    link: "https://github.com/LioranGroupOfficial/PostAcle",
  },
  {
    title: "Vortexly",
    images: ["/vortexly/1.jpg", "/vortexly/2.jpg"],
    tag: "private",
    description: "Private social network for close friends (no algorithms, only vibes).",
    startedAt: "2025-03",
    developmentTime: "Ongoing",
  },
  {
    title: "Hushar Spreadsheet",
    images: ["/husharspreadsheet/1.jpeg"],
    tag: "private",
    description: "AI-powered spreadsheet for Zilla Parishad teachers. Real revenue, real users.",
    startedAt: "2025-07",
    developmentTime: "Ongoing",
  },
  {
    title: "LioranDB",
    images: ["/liorandb/1.png"],
    tag: "private",
    description: "In-house document DB — now being rewritten in Rust.",
    startedAt: "2025-08",
    developmentTime: "Ongoing",
    link: "https://github.com/LioranGroupOfficial/Liorandb",
  },
  {
    title: "eBook-Generator-AI-Agent",
    images: ["/ebookaura/1.jpeg"],
    tag: "public",
    description: "Agent that generates ebooks from prompts (lazy authors rejoice).",
    startedAt: "2025-05",
    developmentTime: "Maintenance",
    link: "https://github.com/UltronTheAI/eBook-Generator-AI-Agent",
  },
  {
    title: "AuthSystem",
    images: ["/auth_system.png"],
    tag: "public",
    description: "Secure authentication system with JWT and verification flows.",
    startedAt: "2025-06",
    developmentTime: "Stable",
    link: "https://github.com/UltronTheAI/AuthSystem",
  },
  {
    title: "DEAD-CORRIDOR",
    images: ["/dead_game.png"],
    tag: "public",
    description: "16-bit zombie side-scroller (because I sometimes miss pixels).",
    startedAt: "2026-02",
    developmentTime: "Completed",
    link: "https://github.com/UltronTheAI/DEAD-CORRIDOR",
  }
];

// ---------------- COMPONENT ----------------

export default function Projects() {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (galleryImages || activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [galleryImages, activeIndex]);

  const closeAll = () => {
    setGalleryImages(null);
    setActiveIndex(null);
  };

  const nextImage = () => {
    if (!galleryImages || activeIndex === null) return;
    setActiveIndex((prev) =>
      prev! + 1 >= galleryImages.length ? 0 : prev! + 1
    );
  };

  const prevImage = () => {
    if (!galleryImages || activeIndex === null) return;
    setActiveIndex((prev) =>
      prev! - 1 < 0 ? galleryImages.length - 1 : prev! - 1
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8 tracking-tight">Projects</h2>

      {/* FULLSCREEN IMAGE VIEW (MOBILE + DESKTOP) */}
      {galleryImages && activeIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={closeAll}
            className="absolute top-4 right-4 z-50 h-10 w-10 flex items-center justify-center rounded-full bg-zinc-800 text-white"
          >
            <X size={20} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-2 sm:left-6 z-40 p-2 bg-black/60 rounded-full text-white"
          >
            <ChevronLeft />
          </button>

          <div className="relative w-full max-w-sm sm:max-w-3xl h-[70vh] sm:h-[85vh] flex items-center justify-center">
            <Image
              src={galleryImages[activeIndex]}
              alt="Project Image"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
              priority
            />
          </div>

          <button
            onClick={nextImage}
            className="absolute right-2 sm:right-6 z-40 p-2 bg-black/60 rounded-full text-white"
          >
            <ChevronRight />
          </button>
        </div>
      )}

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group w-full flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg"
          >
            <div className="relative h-52 sm:h-60 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={p.images[0]}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button
                  onClick={() => {
                    setGalleryImages(p.images);
                    setActiveIndex(0);
                  }}
                  className="px-5 py-2 rounded-full bg-white text-zinc-900 text-sm font-medium"
                >
                  View Images
                </button>
              </div>

              <span
                className={`absolute top-3 left-3 text-xs font-medium uppercase rounded-full px-3 py-1 ${
                  p.tag === "public"
                    ? "bg-emerald-600/90"
                    : "bg-zinc-700/90"
                } text-white`}
              >
                {p.tag}
              </span>
            </div>

            <div className="p-5 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-zinc-400 line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>Started: {p.startedAt}</span>
                  <span>Dev: {p.developmentTime}</span>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm text-sky-400 hover:text-sky-300"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
