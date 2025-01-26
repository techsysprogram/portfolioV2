"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeProvider";
import { useRouter, usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Fonction pour scroller jusqu'à la section "Projets" avec un décalage
  const handleScrollToProjects = (event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();
    setIsMenuOpen(false);

    if (pathname === "/") {
      const projectsSection = document.getElementById("projects");
      const navbar = document.querySelector(`.${styles.navbar}`);

      if (projectsSection && navbar) {
        const navbarHeight = navbar.clientHeight + 20;
        window.scrollTo({
          top: projectsSection.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    } else {
      // Stocke dans sessionStorage pour scroller après le changement de page
      sessionStorage.setItem("scrollToProjects", "true");
      router.push("/");
    }
  };

  // ✅ Effet pour scroller automatiquement après un changement de page
  useEffect(() => {
    if (sessionStorage.getItem("scrollToProjects") === "true") {
      sessionStorage.removeItem("scrollToProjects");
      setTimeout(() => {
        const projectsSection = document.getElementById("projects");
        const navbar = document.querySelector(`.${styles.navbar}`);
        if (projectsSection && navbar) {
          const navbarHeight = navbar.clientHeight + 20;
          window.scrollTo({
            top: projectsSection.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }, 500); // Attendre un peu que la page charge avant de scroller
    }
  }, []);

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
          <NavLink href="/" onClick={handleScrollToProjects}>
            Projets
          </NavLink>
          <NavLink href="/testimonials">Avis</NavLink>
          <NavLink href="/posts">Posts</NavLink>
        </div>
        {/* Icônes des réseaux sociaux */}
        <div className={styles.socialLinks}>
          <NavLink
            href="https://www.linkedin.com/in/miguel-bellota-157144194/"
            external
          >
            <Image
              src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737820820/linkedin-icon_eg9yom.svg"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </NavLink>
          <NavLink href="https://github.com/techsysprogram" external>
            <Image
              src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737737364/github-icon-1_ck6fli.svg"
              alt="GitHub"
              width={24}
              height={24}
              style={{ filter: isDarkMode ? "invert(1)" : "none" }}
            />
          </NavLink>
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
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}>
        <NavLink href="/" onClick={() => setIsMenuOpen(false)}>
          Accueil
        </NavLink>
        <NavLink href="/" onClick={handleScrollToProjects}>
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

// 🔥 Composant NavLink amélioré pour gérer les liens internes et externes
function NavLink({
  href,
  children,
  onClick,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  external?: boolean;
}) {
  return external ? (
    <a
      href={href}
      className={styles.navLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  ) : (
    <Link href={href} className={styles.navLink} onClick={onClick}>
      {children}
    </Link>
  );
}
