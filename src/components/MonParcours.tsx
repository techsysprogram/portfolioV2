import Image from "next/image";
import styles from "@/styles/components/MonParcours.module.css";
import "@/styles/text-styles.css";
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
    year: "2021 - Maintenant",
    title: "Formation : Développeur Web, E-learning",
    company: "Autodidacte",
    description:
      "Je me forme de manière autodidacte depuis 2021 sur différentes plateformes telles que Frontend Mentor, OpenClassrooms et YouTube. J'ai suivi des formations payantes de développeurs réputés, ainsi que des YouTubers bien connus tels que Benjamin Code, Grafikart, Melvynx, et d'autres créateurs francophones, hispanophones et anglophones spécialisés en développement web.",
    image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737892271/elearning_cuaw0p.jpg",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "TypeScript", "Tailwind, NextJS"],
    qualities: ["Autonomie", "Curiosité"],
  },
  {
    id: 2,
    year: "octobre 2024 - Decembre 2024",
    title: "Bootcamp : Développeur Full Stack",
    company: "Le Reacteur",
    description:
      "J'ai suivi une formation intense chez Le Reacteur, un bootcamp spécialisé en React et React Native. J'ai travaillé sur plusieurs projets utilisant différentes stacks et créé une application full stack inspirée de grandes groupes.",
    image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737889435/le_reacteur_duorls.png",
    link: "https://www.lereacteur.io/",
    skills: ["React", "React Native", "HTML", "CSS", "JavaScript", "Node.js", "Express"],
    qualities: ["Capacité d'apprentissage rapide", "Adaptabilité", "Créativité"],
  },
  {
    id: 3,
    year: "Octobre 2022 - Novembre 2022",
    title: "Formation : Développement Web",
    company: "Noa Forma",
    description:
      "Une formation immersive en développement web, mettant l'accent sur HTML, CSS et JavaScript.",
    image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737889205/noafoma_xolatx.webp",
    link: "",
    skills: ["HTML", "CSS", "JavaScript"],
    qualities: ["Autonomie", "Esprit critique", "Précision"],
  },
  {
    id: 4,
    year: "Janvier 2022 - Août 2022",
    title: "Formation : WordPress & PHP",
    company: "Neobridge",
    description:
      "J'ai suivi une formation approfondie en développement WordPress et PHP chez Neobridge, acquérant des compétences en gestion de CMS et développement backend.",
    image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737889205/neobridget_oebhg5.jpg",
    link: "https://neobridge.com/",
    skills: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
    qualities: ["Autonomie", "Rigueur", "Créativité"],
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
      <h2 className="title">Formations récents</h2>
      <div className={styles.parcoursContainer}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.experience}>
            <div className={styles.logoContainer}>
              {exp.image && <Image src={exp.image} alt={exp.company} width={50} height={50} className={styles.logo} />}
            </div>
            <div className={styles.details}>
              <p className="subtitle">{exp.year}</p>
              <h3 className="highlight">
                {exp.title} {exp.link ? (
                  <a href={exp.link} target="_blank" rel="noopener noreferrer" className="link">
                    - {exp.company}
                  </a>
                ) : (
                  <span className="highlight">- {exp.company}</span>
                )}
              </h3>
              <p className="text description">{exp.description}</p>
              <div className={styles.skills}>
                {exp.skills.map((skill, index) => (
                  <span key={index} className={styles.skillBadge}>{skill}</span>
                ))}
              </div>
              <div className={styles.qualities}>
                {exp.qualities.map((quality, index) => (
                  <span key={index} className={styles.qualityBadge}>{quality}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
