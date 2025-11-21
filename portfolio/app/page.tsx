"use client";
import Navbar from "./components/Navbar";
import Terminal from "./components/Terminal";
import { isAndroid } from "./utils/device";
import { useEffect, useState } from "react";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);

  useEffect(() => {
    setShowTerminal(!isAndroid());
  }, []);

  return (
    <div className="bg-black text-zinc-200 font-sans">
      <Navbar />
      <section id="home" className="pt-20">
        {showTerminal && <Terminal />}
      </section>
      <section id="about" className="py-20">
        <About />
      </section>
      <section id="projects" className="py-20">
        <Projects />
      </section>
      <section id="contact" className="py-20">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}
