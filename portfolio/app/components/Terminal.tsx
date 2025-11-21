"use client";
import { useEffect, useRef, useState } from "react";

// =========================
// ✅ RESPONSIVE TERMINAL UI
// =========================

type Line = { text: string };

const banner = [
  "🚀 Swaraj Puppalwar | UltronTheAI",
  "Type 'help' to see available commands",
];

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>(banner.map((t) => ({ text: t })));
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState<number>(-1);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [lines]);

  const run = (cmd: string) => {
    const c = cmd.trim().toLowerCase();
    const out: string[] = [];
    if (!c) return;

    out.push(`ultron@portfolio:~$ ${cmd}`);

    switch (c) {
      case "help":
        out.push("Commands: help, me, age, description, stack, projects, socials, python, json, contact, clear");
        break;
      case "me":
      case "whoami":
        out.push("Swaraj Puppalwar, 17-year-old Full-Stack Developer");
        break;
      case "age":
        out.push("17");
        break;
      case "description":
        out.push(
          "Passionate about building scalable web and mobile apps with Node.js, Python, React, React Native, Next.js."
        );
        break;
      case "stack":
      case "skills":
        out.push("Frontend: React, React Native, Next.js, HTML, CSS, JavaScript");
        out.push("Backend: Node.js, Express.js, Python");
        out.push("Database: MongoDB, PostgreSQL");
        out.push("DevOps & Tools: Git, GitHub, Firebase, REST API, GraphQL");
        break;
      case "projects":
        out.push("Projects: view full cards below, sample links:");
        out.push("- Portfolio: https://ultron-the-ai.vercel.app/");
        out.push("- YouTube @proepiccoder: https://www.youtube.com/@proepiccoder");
        break;
      case "socials":
        out.push("Twitter: https://twitter.com/PuppalwarSwaraj");
        out.push("Instagram: https://www.instagram.com/pro_epic_programmer/");
        out.push("YouTube: https://www.youtube.com/@proepiccoder");
        out.push("Facebook: https://www.facebook.com/profile.php?id=100069476384181");
        break;
      case "python":
        out.push(`swaraj = {
  "name": "Swaraj Puppalwar",
  "age": 17,
  "role": "Full-Stack Developer",
  "skills": ["Node.js", "Python", "React", "React Native", "Next.js"],
  "interests": ["Web Development", "Mobile Apps", "AR/VR", "AI"]
}

print(f"Hello, I'm {swaraj['name']}! I'm a {swaraj['age']}-year-old {swaraj['role']} passionate about {', '.join(swaraj['interests'])}.")`);
        break;
      case "json":
        out.push(`{
  "name": "Swaraj Puppalwar",
  "age": 17,
  "role": "Full-Stack Developer",
  "skills": ["Node.js", "Python", "React", "React Native", "Next.js"],
  "interests": ["Web Development", "Mobile Apps", "AR/VR", "AI"]
}`);
        break;
      case "contact":
        out.push("Use the contact form below to reach me.");
        break;
      case "clear":
        setLines([]);
        return;
      default:
        out.push("Unknown command. Type 'help'.");
    }

    setLines((prev) => [...prev, ...out.map((t) => ({ text: t }))]);
  };

  const onSubmit = () => {
    run(input);
    setHistory((h) => [input, ...h]);
    setHIndex(-1);
    setInput("");
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = hIndex + 1;
      if (next < history.length) {
        setHIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = hIndex - 1;
      if (next >= 0) {
        setHIndex(next);
        setInput(history[next]);
      } else {
        setHIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950 shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2">
          <div className="flex items-center gap-2">
            <div className="size-3 rounded-full bg-red-500" />
            <div className="size-3 rounded-full bg-yellow-500" />
            <div className="size-3 rounded-full bg-green-500" />
          </div>
          <span className="text-xs text-zinc-400 hidden sm:block">Ultron Terminal</span>
        </div>

        {/* Terminal Output */}
        <div
          ref={listRef}
          className="h-64 sm:h-80 md:h-96 overflow-y-auto px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm text-zinc-200"
        >
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre-wrap leading-relaxed">
              {l.text}
            </div>
          ))}
        </div>

        {/* Input Section */}
        <div className="flex items-center gap-2 border-t border-zinc-800 px-3 sm:px-4 py-3 font-mono text-xs sm:text-sm">
          <span className="text-green-400 whitespace-nowrap hidden sm:block">
            ultron@portfolio:~$
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a command..."
            className="flex-1 bg-transparent outline-none text-zinc-200 placeholder:text-zinc-500"
          />
          <button
            onClick={onSubmit}
            className="px-3 py-1 text-xs rounded-md bg-zinc-800 hover:bg-zinc-700 transition text-zinc-200"
          >
            Run
          </button>
        </div>
      </div>

      {/* Mobile Hint */}
      <p className="mt-3 text-center text-xs text-zinc-500 sm:hidden">
        Tip: Try commands like <span className="text-green-400">help</span> or <span className="text-green-400">stack</span>
      </p>
    </div>
  );
}