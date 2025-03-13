import styles from "@/styles/components/About.module.css"; // Style spécifique au composant
import "@/styles/text-styles.css"; // Styles globaux

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className="title">À propos de moi</h2> {/* Titre stylisé */}
      
      <p className="text">
        J’accompagne les entreprises dans la conception et la mise en place de{" "}
        <span className="highlight">solutions digitales performantes et sur mesure</span>. 🚀  
        Fort de plus de <strong>6 ans d’expérience</strong>, j’ai conçu des logiciels et applications web en m’appuyant sur des{" "}
        <strong>technologies modernes et des architectures robustes</strong>.
      </p>
      
      <p className="text">
        👨‍💻 <strong>Fondateur de TECHSYSPROGRAM</strong>, j’aide les entreprises à optimiser leurs processus et renforcer leur présence digitale{" "}
        avec des solutions <strong>évolutives, sécurisées et adaptées</strong> à leurs besoins spécifiques.
      </p>
      <br/>
  
    </section>
  );
}
