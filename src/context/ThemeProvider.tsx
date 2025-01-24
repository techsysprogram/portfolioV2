"use client";
import { createContext, useContext, useEffect, useState } from "react";

// 1️⃣ Création du contexte global
const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// 2️⃣ Provider qui stocke l'état du mode sombre
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null); // ✅ Empêche le flash blanc
  console.log("je suis là");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    console.log("Thème stocké :", storedTheme);
    
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      setIsDarkMode(false); // ✅ Définit un mode clair par défaut
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (isDarkMode === null) {
    return null; // ✅ Empêche l'affichage jusqu'à ce que le mode soit chargé
  }

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3️⃣ Hook personnalisé pour utiliser le contexte facilement
export function useTheme() {
  return useContext(ThemeContext);
}
