import Image from "next/image";
import styles from "@/styles/components/MonParcours.module.css";
import "@/styles/text-styles.css"; // Styles globaux
import { useEffect, useState } from "react";

interface Experience {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
  image?: string;
  link?: string;
  skills: string[];
  qualities: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    year: "2023 - Présent",
    title: "Formation : Développeur Full Stack",
    company: "Le Reacteur",
    description:
      "J'ai suivi une formation intense chez Le Reacteur, un bootcamp spécialisé en React et React Native. J'ai travaillé sur plusieurs projets utilisant différentes stacks et créé une application full stack inspirée d'une grande entreprise de fast-food.",
    image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737854485/Reacteur_Logo.svg",
    link: "https://www.lereacteur.io/",
    skills: ["React", "React Native", "HTML", "CSS", "JavaScript", "Node.js", "Express"],
    qualities: ["Capacité d'apprentissage rapide", "Adaptabilité", "Créativité"],
  },
  {
    id: 2,
    year: "Janvier 2024 - Maintenant",
    title: "Formation : Développeur Web",
    company: "Autodidacte",
    description:
      "Je me forme de manière autodidacte sur différentes plateformes telles que Frontend Mentor, OpenClassrooms, YouTube et des formations payantes de développeurs tels que Traversy Media.",
    image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737854485/autodidacte-icon.svg",
    link: "",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind"],
    qualities: ["Autonomie", "Curiosité"],
  },
];

export default function MonParcours() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("mon-parcours");
      if (section) {
        const { top } = section.getBoundingClientRect();
        if (top < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="mon-parcours" className={`${styles.monParcours} ${isVisible ? styles.visible : ""}`}>
      <h2 className="title">Mon Parcours</h2>

      <div className={styles.parcoursContainer}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.experience}>
            {/* Logo de l'entreprise */}
            <div className={styles.logoContainer}>
              {exp.image && <Image src={exp.image} alt={exp.company} width={50} height={50} className={styles.logo} />}
            </div>

            {/* Détails de l'expérience */}
            <div className={styles.details}>
              <p className={styles.year}>{exp.year}</p>
              <h3 className={styles.title}>
                {exp.title}{" "}
                {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className={styles.company}>
                    - {exp.company}
                  </a>
                ) : (
                  <span className={styles.company}>- {exp.company}</span>
                )}
              </h3>
              <p className={styles.description}>{exp.description}</p>

              {/* Compétences */}
              <div className={styles.skills}>
                {exp.skills.map((skill, index) => (
                  <span key={index} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>

              {/* Qualités */}
              <div className={styles.qualities}>
                {exp.qualities.map((quality, index) => (
                  <span key={index} className={styles.qualityBadge}>
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
