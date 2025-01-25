"use client";

import skillsData from "@/data/skills.json"; // Importe le fichier JSON
import styles from "@/styles/components/Skills.module.css"; // Import des styles
import "@/styles/text-styles.css"; // Importe les styles globaux
import Image from "next/image";

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2 className="title">Mes Compétences</h2>

      {/* Section des Frameworks */}
      <h3 className="subtitle">Frameworks & Librairies</h3>
      <div className={styles.skillsGrid}>
        {skillsData.frameworks.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <Image 
              src={skill.image} 
              alt={skill.name} 
              width={60}  // Largeur définie
              height={60} // Hauteur définie
              className={styles.skillImage} 
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Section des Langages */}
      <h3 className="subtitle">Langages de Programmation</h3>
      <div className={styles.skillsGrid}>
        {skillsData.languages.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <Image 
              src={skill.image} 
              alt={skill.name} 
              width={60} 
              height={60} 
              className={styles.skillImage} 
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Section Backend */}
      <h3 className="subtitle">Bases de Données & Backend</h3>
      <div className={styles.skillsGrid}>
        {skillsData.backend.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <Image 
              src={skill.image} 
              alt={skill.name} 
              width={60} 
              height={60} 
              className={styles.skillImage} 
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Section Outils & DevOps */}
      <h3 className="subtitle">Outils & DevOps</h3>
      <div className={styles.skillsGrid}>
        {skillsData.tools.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <Image 
              src={skill.image} 
              alt={skill.name} 
              width={60} 
              height={60} 
              className={styles.skillImage} 
            />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
