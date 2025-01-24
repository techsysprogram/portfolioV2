"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle"; // ✅ Correction du nom du fichier
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "@/styles/components/Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            Miguel Bellota
          </Link>
        </div>
        <ThemeToggle /> {/* ✅ Ajout du switch mode sombre */}
        {/* Menu Desktop */}
        <div className={styles.menu}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/projects">Projets</NavLink>
          <NavLink href="/testimonials">Avis</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </div>
        {/* Icône du menu mobile */}
        <div
          className={styles.menuMobile}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={styles.icon} />
          ) : (
            <Menu className={styles.icon} />
          )}
        </div>
      </div>

      {/* ✅ Menu Mobile Déroulant */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
          Accueil
        </NavLink>
        <NavLink href="/projects" onClick={() => setIsMenuOpen(false)}>
          Projets
        </NavLink>
        <NavLink href="/testimonials" onClick={() => setIsMenuOpen(false)}>
          Avis
        </NavLink>
        <NavLink href="/posts" onClick={() => setIsMenuOpen(false)}>
          Posts
        </NavLink>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link href={href} className={styles.navLink} onClick={onClick}>
      {children}
    </Link>
  );
}
