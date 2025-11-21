export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-zinc-400 flex items-center justify-between">
        <span>© {new Date().getFullYear()} Swaraj Puppalwar</span>
        <span>Built with Intelligence 💀</span>
      </div>
    </footer>
  );
}
