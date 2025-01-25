"use client";

import { useState } from "react";
import { useTheme } from "@/context/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>
            Portfolio
          </Link>
        </div>
        <ThemeToggle />
        {/* Menu Desktop */}
        <div className={styles.menu}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/projects">Projets</NavLink>
          <NavLink href="/testimonials">Avis</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </div>
        {/* Icônes des réseaux sociaux */}
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/miguel-bellota-157144194/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
          >
            <Image
              src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737820820/linkedin-icon_eg9yom.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://github.com/techsysprogram"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialIcon} ${styles.githubIcon}`}
          >
            <Image
              src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737737364/github-icon-1_ck6fli.svg"
              alt="GitHub"
              width={24}
              height={24}
              style={{ filter: isDarkMode ? "invert(1)" : "none" }}
            />
          </a>
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

      {/* Menu Mobile Déroulant */}
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
