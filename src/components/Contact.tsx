import styles from "@/styles/components/Contact.module.css";
import Button from "@/components/ui/Button";
import "@/styles/text-styles.css"; // Importe les styles globaux

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className="title">Contact</h2>
      <p className="text">
        Intéressé par une collaboration ou des informations supplémentaires ?
        Contactez-moi !
      </p>
      <div className={styles.buttons}>
        <Button
          variant="primary"
          onClick={() => (window.location.href = "mailto:votre@email.com")}
        >
          Me Contacter
        </Button>
        <Button
          variant="secondary"
          onClick={() => window.open("/cv/miguel-bellota-cv.pdf", "_blank")}
        >
          Télécharger Mon CV
        </Button>
      </div>
    </section>
  );
}
