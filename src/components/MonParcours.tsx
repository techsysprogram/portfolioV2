import Image from "next/image";
import styles from "@/styles/components/MonParcours.module.css";
import "@/styles/text-styles.css";
import { useEffect, useState } from "react";
import experiencesData from "@/data/experiences.json";

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

export default function MonParcours() {
  const [isVisible, setIsVisible] = useState(false);


  // Trier les posts par ID décroissant
  const sortedExperiences = [...experiencesData].sort((a, b) => b.id - a.id);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("parcours");
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
      id="parcours"
      className={`${styles.monParcours} ${isVisible ? styles.visible : ""}`}
    >
      <section>
        <h2 className="title">Mon Parcours</h2>
      </section>
      <div className={styles.parcoursContainer}>
        {sortedExperiences.map((exp: Experience) => (
          <div key={exp.id} className={styles.experience}>
            <div className={styles.logoContainer}>
              {exp.image && (
                <Image
                  src={exp.image}
                  alt={exp.company}
                  width={50}
                  height={50}
                  className={styles.logo}
                  /* loading="eager"  */
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
