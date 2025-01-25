"use client";

import styles from "@/styles/components/CardProjet.module.css";
import Link from "next/link";
import Image from "next/image"; // ✅ Import utilisé correctement

interface Project {
  id: number | string;
  title: string;
  summary: string;
  description: string | string[];
  link: string;
  image?: string;
}

const CardProjet = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${project.id}`} className={styles.cardLink}>
        {project.image && project.image.trim() !== "" && (
          <div className={styles.imageContainer}>
            {/* ✅ Utilisation correcte de `next/image` */}
            <Image
              src={project.image}
              alt={project.title}
              width={300} // Ajuste selon ton design
              height={200} // Ajuste selon ton design
              className={styles.cardImage}
              priority // Charge l’image en priorité
            />
          </div>
        )}
        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardSummary}>{project.summary}</p>
        </div>
      </Link>
    </div>
  );
};

export default CardProjet;
