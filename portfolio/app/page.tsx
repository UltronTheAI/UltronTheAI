import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CurrentlyBuilding from "./components/CurrentlyBuilding";
import SelectedWork from "./components/SelectedWork";
import EngineeringDepth from "./components/EngineeringDepth";
import EngineeringStory from "./components/EngineeringStory";
import LioranEcosystem from "./components/LioranEcosystem";
import Writing from "./components/Writing";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#111111] font-sans antialiased selection:bg-[#111111] selection:text-[#FFFFFF]">
      {/* Editorial Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 00 / Hero Section (No terminal gimmick) */}
        <Hero />

        {/* 01 / Currently Building Infrastructure (LDS Tracks: LioranDB, Lioran S3, Lioran Auth) */}
        <CurrentlyBuilding />

        {/* 02 / Selected Engineering Work (Tier 2 Products + Tier 3 Experiments + Gallery) */}
        <SelectedWork />

        {/* 03 / Engineering Depth ("What I work on" - 4 quadrants) */}
        <EngineeringDepth />

        {/* 04 / Engineering Story ("About" - Journey from apps to infrastructure) */}
        <EngineeringStory />

        {/* 05 / Building at Lioran (Ecosystem hierarchy & products) */}
        <LioranEcosystem />

        {/* 06 / Writing from the Engine Room (Technical teardowns & audits) */}
        <Writing />

        {/* 07 / Recognition & Earlier Work (Newspapers, Olympiads, Registry) */}
        <Recognition />

        {/* 08 / Contact ("Let's talk systems") */}
        <Contact />
      </main>

      {/* Editorial Footer */}
      <Footer />
    </div>
  );
}
