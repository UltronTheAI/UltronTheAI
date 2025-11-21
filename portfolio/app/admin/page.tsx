"use client";
import { useEffect, useState } from "react";

// ===============================
// TYPES
// ===============================
type Mail = {
  _id: string;
  name: string;
  email: string;
  description: string;
  createdAt: string;
};

// ===============================
// ADMIN PAGE
// ===============================
export default function AdminPage() {
  const [key, setKey] = useState("");
  const [storedKey, setStoredKey] = useState<string | null>(null);
  const [mails, setMails] = useState<Mail[]>([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("ADMIN_KEY");
    if (saved) setStoredKey(saved);
  }, []);

  useEffect(() => {
    if (storedKey) fetchMails(page);
  }, [storedKey, page]);

  const fetchMails = async (p: number) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin?key=${storedKey}&page=${p}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      if (data.mails) {
        setMails(prev => (p === 1 ? data.mails : [...prev, ...data.mails]));
      }
    } catch (err: any) {
      setError("Invalid key or failed to load data");
      localStorage.removeItem("ADMIN_KEY");
      setStoredKey(null);
    } finally {
      setLoading(false);
    }
  };

  const saveKey = () => {
    if (!key.trim()) return;
    localStorage.setItem("ADMIN_KEY", key.trim());
    setStoredKey(key.trim());
  };

  const toggleSelect = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selected.length === mails.length) {
      setSelected([]);
    } else {
      setSelected(mails.map(m => m._id));
    }
  };

  const deleteSelected = async () => {
    if (selected.length === 0) return;

    await fetch("/api/admin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: storedKey, ids: selected })
    });

    setSelected([]);
    setPage(1);
    fetchMails(1);
  };

  // ===============================
  // KEY INPUT SCREEN
  // ===============================
  if (!storedKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
        <div className="w-full max-w-sm rounded-2xl bg-zinc-900 border border-zinc-800 p-6 shadow-xl">
          <h2 className="text-xl font-semibold mb-4 text-zinc-100">🔐 Admin Access</h2>
          <p className="text-sm text-zinc-400 mb-4">Enter your secure admin key to continue</p>
          {error && <p className="text-red-400 text-sm mb-2">{error}</p>}
          <input
            value={key}
            onChange={e => setKey(e.target.value)}
            className="w-full rounded-md bg-zinc-950 border border-zinc-700 px-3 py-2 text-zinc-200 outline-none focus:border-sky-600"
            placeholder="Admin key"
          />
          <button
            onClick={saveKey}
            className="mt-4 w-full bg-sky-600 hover:bg-sky-500 transition py-2 rounded-md text-white font-medium"
          >
            Verify & Enter
          </button>
        </div>
      </div>
    );
  }

  // ===============================
  // ADMIN DASHBOARD
  // ===============================
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-2xl font-bold">📬 Message Dashboard</h1>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={selectAll}
              className="bg-zinc-800 px-3 py-1 rounded-md text-sm hover:bg-zinc-700"
            >
              {selected.length === mails.length ? "Unselect All" : "Select All"}
            </button>
            <button
              onClick={deleteSelected}
              disabled={selected.length === 0}
              className="bg-red-600 px-3 py-1 rounded-md text-sm disabled:opacity-40"
            >
              Delete ({selected.length})
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {mails.map(mail => (
            <div
              key={mail._id}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4 shadow"
            >
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  checked={selected.includes(mail._id)}
                  onChange={() => toggleSelect(mail._id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg">{mail.name}</p>
                  <p className="text-sm text-zinc-400 break-all">{mail.email}</p>
                </div>
              </div>
              <p className="mt-3 text-zinc-300 text-sm leading-relaxed break-words">
                {mail.description}
              </p>
              <p className="mt-3 text-xs text-zinc-500">
                {new Date(mail.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setPage(prev => prev + 1)}
            className="bg-zinc-800 hover:bg-zinc-700 px-6 py-2 rounded-full text-sm"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    </div>
  );
}