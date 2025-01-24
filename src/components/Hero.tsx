import Image from "next/image";
import styles from "@/styles/components/Hero.module.css";
import "@/styles/text-styles.css"; // Importe les styles globaux

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        {/* Image à gauche */}
        <Image
          src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg"
          alt="Miguel Bellota"
          width={150}
          height={150}
          className={styles.image}
        />

        {/* Texte à droite */}
        <div className={styles.textContainer}>
          <h1 className="title color-white">Miguel Bellota</h1>
          <p className="text color-white">
            Développeur Logiciel & Full Stack | Fondateur de Techsysprogram
          </p>
        </div>
      </div>
    </header>
  );
}
