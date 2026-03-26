import React, { useState } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { StatsBar } from "./components/sections/StatsBar";
import { Features } from "./components/sections/Features";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Footer } from "./components/sections/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" dir="rtl">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <Hero />

      <StatsBar />

      <Features />

      <HowItWorks />

      <Footer />
    </div>
  );
}
