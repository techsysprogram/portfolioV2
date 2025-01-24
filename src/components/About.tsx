import styles from "@/styles/components/About.module.css"; // Garde le style spécifique
import "@/styles/text-styles.css"; // Importe les styles globaux

export default function About() {
    return (
      <section className={styles.about}>
        <h2 className="title">À propos</h2> {/* Utilise la classe globale */}
        <p className="text">
          Développeur passionné avec 6 ans d'expérience en développement logiciel et web.
          Je conçois des applications performantes et des sites modernes, en combinant
          design intuitif et technologies de pointe.
        </p>
      </section>
    );
  }
