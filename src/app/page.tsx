"use client";
import { useTheme } from "@/context/ThemeProvider"; // 🔥 Utilise le contexte
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills"; // Import du composant

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
        <Skills /> 
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
