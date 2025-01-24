"use client";
import { useTheme } from "@/context/ThemeProvider"; // 🔥 Utilise le contexte
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  const { isDarkMode } = useTheme(); // 🔥 Accède au mode sombre

  return (
    <div
      className={
        isDarkMode ? "gradientBackgroundDark" : "gradientBackgroundLight"
      }
    >
      <div className="main-global">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
