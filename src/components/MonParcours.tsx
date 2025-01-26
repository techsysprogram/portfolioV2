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
    id: 0,
    year: "Mai 2019 - Maintenant",
    title: "Freelance - Concepteur de logiciels sur mesure",
    company: "Techsysprogram",
    description:
      "Depuis 2019, je conçois des logiciels sur mesure pour différents clients. Mon travail s'adapte à des secteurs variés, allant du toilettage canin, à la gestion de stockage pour l'industrie, jusqu'à des jeux de plateforme et des jeux interactifs. Mon approche repose sur l'écoute des besoins des clients et la création de solutions innovantes adaptées à chaque domaine.",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737904717/bouton_ulmprm.png",
    skills: ["WinDev", "Python", "C++", "Arduino", "HFSQL"],
    qualities: ["Autonomie", "Adaptabilité", "Gestion de projet", "Innovation"],
  },
  {
    id: 2,
    year: "Octobre 2024 - Décembre 2024",
    title: "Bootcamp : Développeur Full Stack",
    company: "Le Reacteur",
    description:
      "J'ai suivi une formation intensive chez Le Reacteur, un bootcamp réputé spécialisé en React et React Native. J'ai développé plusieurs projets concrets en travaillant avec des technologies modernes et en appliquant les meilleures pratiques du développement web.",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737889435/le_reacteur_duorls.png",
    link: "https://www.lereacteur.io/",
    skills: [
      "React",
      "React Native",
      "serverless",
      "Integration",
      "Express",
      "Node.js",
      "MongoDB",
    ],
    qualities: ["Esprit analytique", "Polyvalence", "Adaptation Rapide"],
  },
  {
    id: 3,
    year: "Octobre 2022 - Novembre 2022",
    title: "Formation : Développement Web",
    company: "Noa Forma",
    description:
      "Une immersion complète dans le développement web, avec un focus sur la structuration des pages, l'interaction utilisateur et l'optimisation des performances.",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737889205/noafoma_xolatx.webp",
    skills: ["HTML5", "JavaScript", "CSS"],
    qualities: ["Autodiscipline", "Esprit logique", "Précision"],
  },

  {
    id: 4,
    year: "Janvier 2022 - Août 2022",
    title: "Formation : WordPress & PHP",
    company: "Neobridge",
    description:
      "J'ai suivi une formation approfondie en développement WordPress et PHP chez Neobridge, acquérant des compétences en gestion de CMS et développement backend.",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737889205/neobridget_oebhg5.jpg",
    link: "https://neobridge.com/",
    skills: ["WordPress", "PHP", "MySQL", "CSS", "JavaScript"],
    qualities: ["Autonomie", "Rigueur", "Créativité"],
  },
  {
    id: 5,
    year: "2021 - Maintenant",
    title: "Formation : Développeur Web, E-learning",
    company: "Autodidacte",
    description:
      "Je me forme de manière autodidacte depuis 2021 sur différentes plateformes telles que Frontend Mentor, OpenClassrooms et YouTube. J'ai suivi des formations payantes de développeurs réputés, ainsi que des YouTubers bien connus tels que Benjamin Code, Grafikart, Melvynx, et d'autres créateurs francophones, hispanophones et anglophones spécialisés en développement web.",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737892271/elearning_cuaw0p.jpg",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "TypeScript",
      "Tailwind",
      "NextJS",
    ],
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
    <section
      id="mon-parcours"
      className={`${styles.monParcours} ${isVisible ? styles.visible : ""}`}
    >
      <section>
        <h2 className="title">Mon Parcours</h2>
      </section>
      <div className={styles.parcoursContainer}>
        {experiences.map((exp) => (
          <div key={exp.id} className={styles.experience}>
            <div className={styles.logoContainer}>
              {exp.image && (
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={50}
                  height={50}
                  className={styles.logo}
                />
              )}
            </div>
            <div className={styles.details}>
              <p className="subtitle">{exp.year}</p>
              <h4 className="highlight">
                {exp.title}{" "}
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link"
                  >
                    - {exp.company}
                  </a>
                ) : (
                  <span className="highlight">- {exp.company}</span>
                )}
              </h4>
              <p className="text description">{exp.description}</p>
              <div className={styles.skills}>
                {exp.skills.map((skill, index) => (
                  <span key={index} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
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
