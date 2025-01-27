import styles from "@/styles/components/About.module.css"; // Style spécifique au composant
import "@/styles/text-styles.css"; // Styles globaux

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className="title">À propos de moi</h2> {/* Titre stylisé */}
      <p className="text">
        <strong>Développeur passionné</strong>, je me forme continuellement afin
        d’offrir des solutions modernes, performantes et adaptées aux besoins
        des projets que j’accompagne. 🚀 Mon état d’esprit : Curiosité, rigueur
        et volonté de toujours progresser.
      </p>
      <p className="text">
        Autodidacte, J'ai transformé{" "}
        <span className="highlight">ma passion en métier il y a 5 ans</span>.
        J’ai affûté mes compétences en explorant diverses technologies et en
        suivant des formations, notamment chez{" "}
        <span className="highlight">Noa Forma</span>,{" "}
        <span className="highlight">Neobridge</span> et au{" "}
        <span className="highlight">Bootcamp Le Reacteur</span> en 2024.
      </p>
      <p className="text">
        Spécialisé dans le développement <strong>web & app</strong>,
        j’accorde une grande importance à{" "}
        <strong>
          l’expérience utilisateur, la performance et la scalabilité
        </strong>
        .
      </p>
      <p className="text">
        Toujours en veille sur les dernières tendances,{" "}
        <span className="highlight">
          mon objectif est d’offrir des solutions digitales
        </span>{" "}
        adaptées et innovantes.
      </p>
    </section>
  );
}
