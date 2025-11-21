import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

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
    link: "https://github.com/YouthVibe/EbookAura",
  },
  {
    title: "Post-Acle",
    images: ["/postacle/1.jpeg", "/postacle/2.jpeg", "/postacle/3.jpeg", "/postacle/4.jpeg", "/postacle/5.jpeg"],
    tag: "public",
    description: "Post-Acle is a blog platform for sharing my thoughts and ideas.",
    startedAt: "2025-05",
    developmentTime: "1 month",
    link: "https://github.com/YouthVibe/PostAcle",
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
    description: "LioranDB is a lightweight, file-based database solution designed for simplicity and ease of use. It offers a command-line interface (CLI) for server management, user authentication, and CORS configuration, alongside a Node.js connector with a MongoDB-like API for seamless programmatic interaction.",
    startedAt: "2025-8",
    developmentTime: "Ongoing",
    link: "https://github.com/YouthVibe/LioranDB",
  }
];

// ---------------- COMPONENT ----------------

export default function Projects() {
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-3xl font-semibold mb-8 tracking-tight">Projects</h2>

      {/* FULLSCREEN GRID VIEW */}
      {galleryImages && !activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl bg-zinc-950 rounded-2xl p-5">
            <button
              onClick={() => setGalleryImages(null)}
              className="absolute top-4 right-4 z-50 flex items-center justify-center h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white"
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImage(img)}
                  className="relative h-48 sm:h-56 md:h-64 rounded-xl overflow-hidden cursor-pointer group"
                >
                  <Image
                    src={img}
                    alt="Project Image"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SINGLE IMAGE VIEW */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-3">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 flex items-center justify-center h-10 w-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-white"
          >
            <X size={20} />
          </button>

          <div className="relative w-full max-w-5xl h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden">
            <Image
              src={activeImage}
              alt="Full Image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* PROJECT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="group w-full h-[420px] flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950 shadow-lg hover:shadow-2xl transition"
          >
            {/* IMAGE PREVIEW */}
            <div className="relative h-48 w-full overflow-hidden rounded-t-2xl border-b border-zinc-800">
              <Image
                src={p.images[0]}
                alt={p.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 md:group-hover:scale-125 lg:group-hover:scale-150"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button
                  onClick={() => setGalleryImages(p.images)}
                  className="px-6 py-2 rounded-full bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-200"
                >
                  View all images
                </button>
              </div>

              <span
                className={`absolute top-3 left-3 text-xs font-medium uppercase tracking-wide rounded-full px-3 py-1 ${
                  p.tag === "public"
                    ? "bg-emerald-600/90"
                    : "bg-zinc-700/90"
                } text-white backdrop-blur`}
              >
                {p.tag}
              </span>
            </div>

            {/* CONTENT */}
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white tracking-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="space-y-3 mt-3">
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>Started: {p.startedAt}</span>
                  <span>Dev: {p.developmentTime}</span>
                </div>

                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm font-medium text-sky-400 hover:text-sky-300 transition"
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