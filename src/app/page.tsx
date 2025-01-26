"use client";
import { useEffect } from "react"; // Ajoute l'import de useEffect
import { useTheme } from "@/context/ThemeProvider";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import MonParcours from "@/components/MonParcours";


export default function Home() {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Vérifie si une position de scroll est enregistrée
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem("scrollPosition"); // Nettoie après usage
    }
  }, []);

  return (
    <div className={isDarkMode ? "gradientBackgroundDark" : "gradientBackgroundLight"}>
      <div className="main-global">
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <MonParcours />
        <Contact />
      </div>
    </div>
  );
}
