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
    title: "Vortexly",
    images: ["/vortexly/1.jpg", "/vortexly/2.jpg", "/vortexly/3.jpg", "/vortexly/4.jpg", "/vortexly/5.jpg"],
    tag: "private",
    description: "Social media platform for connecting with friends and family.",
    startedAt: "2025-3",
    developmentTime: "2 month",
  },
  {
    title: "eBookAura",
    images: ["/ebookaura/1.jpeg", "/ebookaura/2.jpeg", "/ebookaura/3.jpeg", "/ebookaura/4.jpeg", "/ebookaura/5.jpeg"],
    tag: "public",
    description: "eBookAura is a platform for reading e-books and managing your reading library.",
    startedAt: "2025-4",
    developmentTime: "1.5 months",
    link: "https://github.com/LioranGroups/EbookAura",
  },
  {
    title: "Post-Acle",
    images: ["/postacle/1.jpeg", "/postacle/2.jpeg", "/postacle/3.jpeg", "/postacle/4.jpeg", "/postacle/5.jpeg"],
    tag: "public",
    description: "Post-Acle is a blog platform for sharing my thoughts and ideas.",
    startedAt: "2025-05",
    developmentTime: "1 month",
    link: "https://github.com/LioranGroups/PostAcle",
  },
  {
    title: "Hushar Spreadsheet",
    images: ["/husharspreadsheet/1.jpeg"],
    tag: "private",
    description: "Hushar Spreadsheet is a AI powered spreadsheet application for Z.P. teachers to make there life easier.",
    startedAt: "2025-7",
    developmentTime: "Ongoing",
  },
  {
    title: "LioranDB",
    images: ["/liorandb/1.png"],
    tag: "public",
    description: "LioranDB is a lightweight, file-based database solution designed for simplicity and ease of use.",
    startedAt: "2025-8",
    developmentTime: "Ongoing",
    link: "https://github.com/LioranGroups/LioranDB",
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
