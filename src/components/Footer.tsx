import styles from "@/styles/components/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>
        © {new Date().getFullYear()} Miguel Bellota - Tous droits réservés.
      </p>
      
      <div className={styles.links}>
        <Link href="/mentions-legales" className={styles.link}>Mentions Légales</Link>
        <Link href="/confidentialite" className={styles.link}>Politique de Confidentialité</Link>
      </div>
    </footer>
  );
}
