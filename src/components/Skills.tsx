"use client";

import styles from "@/styles/components/Skills.module.css"; // Import des styles
import "@/styles/text-styles.css"; // Importe les styles globaux

// Liste des Frameworks et Librairies
const frameworksData = [
  { id: 1, name: "Next.js", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/next-js_kzcyc2.svg" },
  { id: 2, name: "React.js", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/react-2_r1cjjd.svg" },
  { id: 3, name: "React Native", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735140/react-native-1_xuuzub.svg" },
  { id: 4, name: "Vite.js", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737737082/vitejs_truws3.svg" },
  { id: 5, name: "Tailwind CSS", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739133/tailwind-css-2_asb5a9.svg" },
  { id: 6, name: "GraphQL", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739710/graphql-logo-2_ezfxbg.svg" },
];

// Liste des Langages
const languagesData = [
  { id: 10, name: "TypeScript", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735575/typescript_hvam14.svg" },
  { id: 11, name: "JavaScript", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737737084/logo-javascript_iap4mj.svg" },
  { id: 12, name: "CSS", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737737084/css-3_mdttxf.svg" },
  { id: 13, name: "HTML", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739135/html-1_t7dfoa.svg" },
  { id: 14, name: "Python", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737737083/python-5_aqquxl.svg" },
  { id: 24, name: "WinDev", image: "https://res.cloudinary.com/dshznc4xx/image/upload/c_crop,ar_1:1/v1737736515/windev_wedm8y.png" },
  { id: 25, name: "C++", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737740033/c_x3chkb.svg" },
];

// Liste Bases de données & Backend
const backendData = [
  { id: 15, name: "MongoDB", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/mongodb-icon-1_lceztg.svg" },
  { id: 16, name: "Node.js", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735140/nodejs-2_jb5fqs.svg" },
  { id: 17, name: "Express", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/express-109_dpusg1.svg" },
];

// Liste des Outils & DevOps
const toolsData = [
  { id: 18, name: "Git & GitHub", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737737364/github-icon-1_ck6fli.svg" },
  { id: 19, name: "Docker", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739134/docker_e3v0qv.svg" },
  { id: 20, name: "Netlify & Vercel", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739132/netlify_hhywhh.svg" },
  { id: 21, name: "Expo", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739130/expo-1_tjsh1y.svg" },
  { id: 22, name: "Arduino", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737739131/arduino-1_nkm4o8.svg" },
  { id: 23, name: "OAuth & JWT", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737740381/jwt-3_ghqqwx.svg" },
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2 className="title">Mes Compétences</h2>

      {/* Section des Frameworks */}
      <h3 className="subtitle">Frameworks & Librairies</h3>
      <div className={styles.skillsGrid}>
        {frameworksData.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <img src={skill.image} alt={skill.name} className={styles.skillImage} />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Section des Langages */}
      <h3 className="subtitle">Langages de Programmation</h3>
      <div className={styles.skillsGrid}>
        {languagesData.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <img src={skill.image} alt={skill.name} className={styles.skillImage} />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Section Backend */}
      <h3 className="subtitle">Bases de Données & Backend</h3>
      <div className={styles.skillsGrid}>
        {backendData.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <img src={skill.image} alt={skill.name} className={styles.skillImage} />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Section Outils & DevOps */}
      <h3 className="subtitle">Outils & DevOps</h3>
      <div className={styles.skillsGrid}>
        {toolsData.map((skill) => (
          <div key={skill.id} className={styles.skillCard}>
            <img src={skill.image} alt={skill.name} className={styles.skillImage} />
            <p className={styles.skillName}>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}