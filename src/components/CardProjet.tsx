import Button from "./ui/Button";
import styles from "@/styles/components/ui/Card.module.css";
import Link from "next/link";

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
      <Link href={`/projects/${project.id}`} passHref>
        {project.image && project.image.trim() !== "" && (
          <div className={styles.imageContainer}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.cardImage}
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
