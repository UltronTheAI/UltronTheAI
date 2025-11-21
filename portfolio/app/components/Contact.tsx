"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-zinc-100">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* FORM */}
        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-xl border border-zinc-800 bg-zinc-950 p-6"
        >
          <div>
            <label className="text-sm text-zinc-400">Your Name</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-sky-600"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@email.com"
              className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-sky-600"
            />
          </div>

          <div>
            <label className="text-sm text-zinc-400">Message</label>
            <textarea
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your idea..."
              rows={5}
              className="mt-1 w-full rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 outline-none focus:border-sky-600 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-sky-600 py-2 text-white font-medium transition hover:bg-sky-500 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* {status === "success" && (
            <p className="text-green-400 text-sm">✅ Message sent successfully</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm">❌ Failed to send message</p>
          )} */}
        </form>

        {/* SIDE INFO */}
        <div className="space-y-4 text-zinc-300">
          <h3 className="text-xl font-semibold">Let's build something impactful 🚀</h3>
          <p className="text-zinc-400 leading-relaxed">
            Have an idea, collaboration, or just want to say hi? Drop your message and I’ll
            get back to you as soon as possible.
          </p>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-5">
            <p className="text-sm text-zinc-400">You can also reach me via</p>
            <p className="font-medium">Email: coderswaraj@gmail.com</p>
            <p className="font-medium">Location: India 🇮🇳</p>
          </div>
        </div>
      </div>
    </div>
  );
}