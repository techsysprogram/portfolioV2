/* import { useState } from "react"; */ // ✅ Correction : Import useState
import Button from "./ui/Button";
import styles from "@/styles/components/ui/Card.module.css"; // ✅ Correction : Utilisation correcte de "styles"

interface Project {
  id: number | string;
  title: string;
  summary: string;
  description: string | string[];
  link: string;
  image: string;
}


const CardProjet = ({ project }: { project: Project }) => {
  /* const [open, setOpen] = useState(false); */

  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.cardTitle}>{project.title}</h3>
        <p className={styles.cardSummary}>{project.summary}</p>
        {/* <Button onClick={() => setOpen(true)} variant="simple"> */}
        <Button variant="simple">
          Voir plus
        </Button>
      </div>
    </div>
  );
};

export default CardProjet;
