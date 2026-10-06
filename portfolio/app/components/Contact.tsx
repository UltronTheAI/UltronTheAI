"use client";

import React, { useState } from "react";
import { Mail, Github, Twitter, MapPin, Send, CheckSquare, AlertTriangle, ArrowUpRight } from "lucide-react";
import { CONTACT_DATA } from "../data/portfolioData";
import { HandDrawnUnderline } from "./SketchDrawings";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      console.error("Contact submit error:", err);
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Failed to deliver message. Please reach out via email directly.";
      setErrorMessage(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#E5E5E5]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111] bg-[#FAFAFA] border border-[#111111] px-2 py-0.5 rounded">
              COMMUNICATIONS
            </span>
            <span className="font-mono text-xs text-[#666666]">08 // CONTACT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#000000]">
            {CONTACT_DATA.headline}
          </h2>

          <p className="text-base sm:text-lg text-[#444444] leading-relaxed">
            {CONTACT_DATA.copy}
          </p>

          <div className="w-32 pt-1">
            <HandDrawnUnderline className="text-[#111111]" />
          </div>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Functional Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="sketch-card p-6 sm:p-8 bg-[#FFFFFF] space-y-5"
            >
              <div className="space-y-1 pb-2 border-b border-[#E5E5E5]">
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111]">
                  Direct Dispatch
                </h3>
                <p className="text-xs text-[#666666]">
                  Messages are sent directly to Swaraj&apos;s mailbox.
                </p>
              </div>

              {/* Status Alert */}
              {status === "success" && (
                <div className="p-3 bg-[#FAFAFA] border-2 border-[#111111] rounded flex items-center gap-2.5 text-xs text-[#111111]">
                  <CheckSquare size={16} className="text-[#111111]" />
                  <span>Message recorded successfully. Thank you for reaching out.</span>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 bg-[#FAFAFA] border-2 border-[#111111] rounded flex items-start gap-2.5 text-xs text-[#111111]">
                  <AlertTriangle size={16} className="text-[#111111] shrink-0 mt-0.5" />
                  <div>
                    <span>{errorMessage}</span>
                    <span className="block mt-1">
                      Direct email: <a href={`mailto:${CONTACT_DATA.email}`} className="font-bold underline">{CONTACT_DATA.email}</a>
                    </span>
                  </div>
                </div>
              )}

              {/* Form Fields */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="font-mono text-xs font-semibold text-[#111111]">
                  Name / Organization
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Linus Torvalds"
                  className="w-full bg-[#FFFFFF] border border-[#111111] rounded px-3.5 py-2 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="font-mono text-xs font-semibold text-[#111111]">
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full bg-[#FFFFFF] border border-[#111111] rounded px-3.5 py-2 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111]"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-msg" className="font-mono text-xs font-semibold text-[#111111]">
                  Message / Technical Scope
                </label>
                <textarea
                  id="contact-msg"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your systems, questions, or ideas..."
                  className="w-full bg-[#FFFFFF] border border-[#111111] rounded px-3.5 py-2 text-sm text-[#111111] placeholder:text-[#999999] focus:outline-none focus:ring-1 focus:ring-[#111111] resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="sketch-btn-primary w-full justify-center disabled:opacity-50"
              >
                <Send size={14} />
                <span>{loading ? "Dispatching..." : "Send Dispatch"}</span>
              </button>
            </form>
          </div>

          {/* Direct Contact Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="sketch-card p-6 bg-[#FAFAFA] space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#111111] pb-2 border-b border-[#E5E5E5]">
                Direct Channels
              </h3>

              <div className="space-y-3">
                <a
                  href={`mailto:${CONTACT_DATA.email}`}
                  className="flex items-center gap-3 p-3 bg-[#FFFFFF] border border-[#111111] rounded hover:shadow-[2px_2px_0px_#111111] transition-all no-underline text-[#111111]"
                >
                  <Mail size={16} className="text-[#111111] shrink-0" />
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-[#666666] uppercase block">Email</span>
                    <span className="font-mono text-xs font-medium">{CONTACT_DATA.email}</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#888888]" />
                </a>

                <a
                  href={CONTACT_DATA.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFFFF] border border-[#111111] rounded hover:shadow-[2px_2px_0px_#111111] transition-all no-underline text-[#111111]"
                >
                  <Github size={16} className="text-[#111111] shrink-0" />
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-[#666666] uppercase block">Personal GitHub</span>
                    <span className="font-mono text-xs font-medium">github.com/UltronTheAI</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#888888]" />
                </a>

                <a
                  href={CONTACT_DATA.orgGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFFFF] border border-[#111111] rounded hover:shadow-[2px_2px_0px_#111111] transition-all no-underline text-[#111111]"
                >
                  <Github size={16} className="text-[#111111] shrink-0" />
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-[#666666] uppercase block">Organization GitHub</span>
                    <span className="font-mono text-xs font-medium">github.com/LioranGroupOfficial</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#888888]" />
                </a>

                <a
                  href={CONTACT_DATA.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-[#FFFFFF] border border-[#111111] rounded hover:shadow-[2px_2px_0px_#111111] transition-all no-underline text-[#111111]"
                >
                  <Twitter size={16} className="text-[#111111] shrink-0" />
                  <div className="flex-1">
                    <span className="font-mono text-[10px] text-[#666666] uppercase block">X / Twitter</span>
                    <span className="font-mono text-xs font-medium">@PuppalwarSwaraj</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#888888]" />
                </a>
              </div>
            </div>

            {/* Location / Sovereignty Box */}
            <div className="p-4 bg-[#FFFFFF] border border-[#E5E5E5] rounded flex items-center justify-between text-xs text-[#555555]">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-[#111111]" />
                <span className="font-mono">Location: India</span>
              </div>
              <span className="font-mono text-[11px] text-[#888888]">
                UTC +05:30 (IST)
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}