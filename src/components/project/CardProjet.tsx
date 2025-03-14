import styles from "@/styles/components/project/CardProjet.module.css";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: number | string;
  title: string;
  summary: string;
  description: string | string[];
  link: string;
  images?: string[]; // 🔥 Correction : `images` est un tableau
}

const CardProjet = ({ project }: { project: Project }) => {
  return (
    <div className={styles.card}>
      {/* ✅ Vérification si `images` existe et contient au moins une image */}
      {project.images && project.images.length > 0 && (
        <div className={styles.imageContainer}>
          <Link href={`/projects/${project.id}`} className={styles.cardLink}>
            {/* ✅ Utilisation correcte de `next/image` */}
            <Image
              src={project.images[0]} // 🔥 Correction : on prend la première image
              alt={project.title}
              width={300} // ✅ Remplace `layout="responsive"`
              height={200} // ✅ Ajout de la hauteur pour éviter l'erreur
              className={styles.cardImage}
              /* loading="eager"  */
            />
          </Link>
        </div>
      )}
      <div className={styles.cardContent}>
        <Link href={`/projects/${project.id}`} className={styles.cardLink}>
          <h3 className={styles.cardTitle}>{project.title}</h3>
          <p className={styles.cardSummary}>{project.summary}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardProjet;
