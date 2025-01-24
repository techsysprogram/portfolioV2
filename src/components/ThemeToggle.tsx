"use client";
import { useTheme } from "@/context/ThemeProvider";
import { Sun, Moon } from "lucide-react";
import styles from "@/styles/components/ThemeToggle.module.css";

export default function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleDarkMode}
        aria-label="Changer le mode de thème"
      />
      <div className={styles.slider}>
        <Sun className={`${styles.icon} ${styles.sun}`} />
        <Moon className={`${styles.icon} ${styles.moon}`} />
      </div>
    </label>
  );
}
