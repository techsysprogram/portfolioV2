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

  // Fonction pour scroller avec décalage
  const handleScroll = (sectionId: string, event?: React.MouseEvent<HTMLAnchorElement>) => {
    if (event) event.preventDefault();
    setIsMenuOpen(false);

    if (pathname === "/") {
      const section = document.getElementById(sectionId);
      const navbar = document.querySelector(`.${styles.navbar}`);

      if (section && navbar) {
        const navbarHeight = navbar.clientHeight + 20;
        window.scrollTo({
          top: section.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    } else {
      sessionStorage.setItem(`scrollTo${sectionId}`, "true");
      router.push("/");
    }
  };

  // Effet pour scroller après changement de page
  useEffect(() => {
    ["projects", "posts", "parcours", "contact"].forEach((sectionId) => {
      if (sessionStorage.getItem(`scrollTo${sectionId}`) === "true") {
        sessionStorage.removeItem(`scrollTo${sectionId}`);
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          const navbar = document.querySelector(`.${styles.navbar}`);
          if (section && navbar) {
            const navbarHeight = navbar.clientHeight + 20;
            window.scrollTo({
              top: section.offsetTop - navbarHeight,
              behavior: "smooth",
            });
          }
        }, 500);
      }
    });
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logo}>Portfolio</Link>
        </div>
        <ThemeToggle />
        <div className={styles.menu}>
          <NavLink href="/">Accueil</NavLink>
          <NavLink href="/" onClick={(e) => handleScroll("posts", e as React.MouseEvent<HTMLAnchorElement>)}>Posts</NavLink>
          <NavLink href="/" onClick={(e) => handleScroll("projects", e as React.MouseEvent<HTMLAnchorElement>)}>Projets</NavLink>
          <NavLink href="/" onClick={(e) => handleScroll("parcours", e as React.MouseEvent<HTMLAnchorElement>)}>Parcours</NavLink>
          <NavLink href="/" onClick={(e) => handleScroll("contact", e as React.MouseEvent<HTMLAnchorElement>)}>Contact</NavLink>
        </div>
        <div className={styles.socialLinks}>
          <NavLink href="https://www.linkedin.com/in/miguel-bellota-157144194/" external>
            <Image src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737820820/linkedin-icon_eg9yom.svg" alt="LinkedIn" width={24} height={24} />
          </NavLink>
          <NavLink href="https://github.com/techsysprogram" external>
            <Image src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737737364/github-icon-1_ck6fli.svg" alt="GitHub" width={24} height={24} style={{ filter: isDarkMode ? "invert(1)" : "none" }} />
          </NavLink>
        </div>
        <div className={styles.menuMobile} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className={styles.icon} /> : <Menu className={styles.icon} />}
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}>
        <NavLink href="/" onClick={() => setIsMenuOpen(false)}>Accueil</NavLink>
        <NavLink href="/" onClick={(e) => handleScroll("posts", e as React.MouseEvent<HTMLAnchorElement>)}>Posts</NavLink>
        <NavLink href="/" onClick={(e) => handleScroll("projects", e as React.MouseEvent<HTMLAnchorElement>)}>Projets</NavLink>
        <NavLink href="/" onClick={(e) => handleScroll("parcours", e as React.MouseEvent<HTMLAnchorElement>)}>Parcours</NavLink>
        <NavLink href="/" onClick={(e) => handleScroll("contact", e as React.MouseEvent<HTMLAnchorElement>)}>Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children, onClick, external = false }: { href: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void; external?: boolean }) {
  return external ? (
    <a href={href} className={styles.navLink} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={styles.navLink} onClick={onClick}>{children}</Link>
  );
}
