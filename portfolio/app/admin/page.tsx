"use client";

import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, RefreshCw, KeyRound, Mail as MailIcon } from "lucide-react";

type Mail = {
  _id: string;
  name: string;
  email: string;
  description: string;
  createdAt: string;
};

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [storedKey, setStoredKey] = useState<string | null>(null);
  const [mails, setMails] = useState<Mail[]>([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMails = useCallback(async (p: number, authKey: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/admin?key=${authKey}&page=${p}`);
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      if (data.mails) {
        setMails((prev) => (p === 1 ? data.mails : [...prev, ...data.mails]));
      }
    } catch {
      setError("Invalid administrative key or connection failed.");
      localStorage.removeItem("ADMIN_KEY");
      setStoredKey(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("ADMIN_KEY");
    if (saved) {
      setStoredKey(saved);
      fetchMails(page, saved);
    }
  }, [page, fetchMails]);

  const saveKey = () => {
    if (!key.trim()) return;
    localStorage.setItem("ADMIN_KEY", key.trim());
    setStoredKey(key.trim());
  };

  const toggleSelect = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const selectAll = () => {
    if (selected.length === mails.length) {
      setSelected([]);
    } else {
      setSelected(mails.map((m) => m._id));
    }
  };

  const deleteSelected = async () => {
    if (selected.length === 0) return;

    await fetch("/api/admin", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ key: storedKey, ids: selected }),
    });

    setSelected([]);
    setPage(1);
    if (storedKey) fetchMails(1, storedKey);
  };

  // KEY AUTHENTICATION FORM
  if (!storedKey) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] p-4 text-[#111111]">
        <div className="w-full max-w-md sketch-card p-8 bg-[#FFFFFF] space-y-5">
          <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-[#111111] pb-2 border-b border-[#E5E5E5]">
            <KeyRound size={15} />
            <span>Administrative Dispatch Console</span>
          </div>

          <div className="space-y-1">
            <h2 className="text-xl font-bold text-[#000000] tracking-tight">
              Authentication Required
            </h2>
            <p className="text-xs text-[#666666]">
              Enter the secure administrative passphrase to inspect contact submissions.
            </p>
          </div>

          {error && (
            <div className="p-2.5 bg-[#FAFAFA] border border-[#111111] rounded text-xs text-[#111111]">
              {error}
            </div>
          )}

          <div className="space-y-1.5">
            <label className="font-mono text-xs font-semibold text-[#111111] block">
              Passphrase
            </label>
            <input
              type="password"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveKey()}
              placeholder="••••••••••••"
              className="w-full bg-[#FFFFFF] border border-[#111111] rounded px-3 py-2 text-sm text-[#111111] focus:outline-none focus:ring-1 focus:ring-[#111111]"
            />
          </div>

          <div className="pt-2 flex items-center justify-between">
            <Link
              href="/"
              className="font-mono text-xs text-[#666666] hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={12} />
              <span>Back to site</span>
            </Link>

            <button
              type="button"
              onClick={saveKey}
              className="sketch-btn-primary text-xs py-2 px-4"
            >
              Authenticate
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN DASHBOARD
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-[#111111]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Link href="/" className="font-mono text-xs text-[#666666] hover:underline flex items-center gap-1">
                <ArrowLeft size={12} />
                <span>Return to Portfolio</span>
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000000]">
              Dispatch Console // Messages
            </h1>
            <p className="font-mono text-xs text-[#666666]">
              {mails.length} message(s) loaded
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => storedKey && fetchMails(1, storedKey)}
              className="sketch-btn-secondary text-xs py-1.5 px-3"
            >
              <RefreshCw size={12} />
              <span>Refresh</span>
            </button>
            <button
              onClick={selectAll}
              className="sketch-btn-secondary text-xs py-1.5 px-3"
            >
              <span>{selected.length === mails.length ? "Deselect All" : "Select All"}</span>
            </button>
            <button
              onClick={deleteSelected}
              disabled={selected.length === 0}
              className="sketch-btn-primary text-xs py-1.5 px-3 disabled:opacity-40"
            >
              <Trash2 size={12} />
              <span>Delete Selected ({selected.length})</span>
            </button>
          </div>
        </div>

        {/* Message Grid */}
        {mails.length === 0 && !loading ? (
          <div className="sketch-card p-12 text-center bg-[#FFFFFF] space-y-2">
            <MailIcon size={32} className="mx-auto text-[#666666]" />
            <p className="font-mono text-sm text-[#444444]">No contact dispatches found.</p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mails.map((mail) => (
              <div
                key={mail._id}
                className="sketch-card p-5 bg-[#FFFFFF] flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 space-y-0.5">
                      <p className="font-bold text-base text-[#000000]">{mail.name}</p>
                      <a
                        href={`mailto:${mail.email}`}
                        className="font-mono text-xs text-[#666666] hover:underline block break-all"
                      >
                        {mail.email}
                      </a>
                    </div>

                    <input
                      type="checkbox"
                      checked={selected.includes(mail._id)}
                      onChange={() => toggleSelect(mail._id)}
                      className="mt-1 h-4 w-4 accent-[#111111]"
                    />
                  </div>

                  <p className="text-xs text-[#333333] leading-relaxed pt-2 border-t border-[#E5E5E5] break-words">
                    {mail.description}
                  </p>
                </div>

                <div className="font-mono text-[10px] text-[#888888] pt-2 border-t border-[#F0F0F0] flex items-center justify-between">
                  <span>{new Date(mail.createdAt).toLocaleDateString()}</span>
                  <span>{new Date(mail.createdAt).toLocaleTimeString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More Button */}
        {mails.length > 0 && (
          <div className="pt-6 text-center">
            <button
              onClick={() => setPage((prev) => prev + 1)}
              disabled={loading}
              className="sketch-btn-secondary text-xs py-2 px-6"
            >
              {loading ? "Loading..." : "Load More Messages"}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}