import styles from "@/styles/components/Contact.module.css";
import Button from "@/components/ui/Button";
import "@/styles/text-styles.css"; // Importe les styles globaux

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className="title">Contact</h2>
      <p className="text">
        Intéressé par une collaboration ou besoin d'informations supplémentaires
        ? N’hésitez pas à me contacter ! Je suis également à la recherche d’un
        CDI en mode hybride et ouvert aux opportunités.
      </p>
      <div className={styles.buttons}>
        {/* ✅ Utilisation de <a> pour ouvrir l'email */}
        <a href="mailto:techsysprogram@gmail.com">
          <Button variant="primary">Me Contacter</Button>
        </a>

        <Button
          variant="secondary"
          onClick={() =>
            window.open(
              "https://filedn.eu/lWmHm0zj5cX4lKsrCUMs4HR/techsysprogram/CV%20De%CC%81veloppeur%20Miguel%20Bellota.pdf",
              "_blank"
            )
          }
        >
          Voir Mon CV
        </Button>
      </div>
    </section>
  );
}
