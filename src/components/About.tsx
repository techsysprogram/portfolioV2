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
      <h3 className="subtitle">💡 Mes compétences clés</h3>
      
      <ul className="text">
        <li><strong>Développement Fullstack</strong> : Next.js, React, Node.js, Express</li>
        <li><strong>Concepteur de logiciels</strong> : Windev, HFSQL, WebDev, GDS</li>
        <li><strong>Mise en place de Web Services</strong> performants et sécurisés</li>
        <li><strong>Sécurisation des données</strong> avec AES-256 🔐</li>
        <li><strong>Optimisation</strong> de la scalabilité et des performances</li>
        <li><strong>Hébergement</strong> sur serveur mutualisé ou privé, selon le trafic et les besoins</li>
        <li><strong>Gestion des bases de données</strong> : HFSQL, MySQL, PostgreSQL, MongoDB</li>
        <li><strong>Développement et intégration d’API</strong> REST et SOAP</li>
        <li><strong>Intégration d’outils SaaS</strong> : Stripe, MailerLite, Cloudinary...</li>
        <li><strong>Automatisation et scripting</strong> avec Python et WLangage</li>
        <li><strong>Automatisation électronique</strong> : Arduino, cartes relais, capteurs, commandes à distance</li>
        <li><strong>Développement de solutions de contrôle</strong> : communication entre PC et systèmes embarqués</li>
        <li><strong>Traduction automatique</strong> pour des applications multilingues</li>
        <li><strong>Documentation technique</strong> complète & accompagnement personnalisé</li>
      </ul>

    
    </section>
  );
}
