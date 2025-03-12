import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "@/styles/components/Hero.module.css";
import "@/styles/text-styles.css";

const floatingIcons = [
  {
    id: 1,
    name: "Next.js",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/next-js_kzcyc2.svg",
    style: styles.iconNext,
  },
  {
    id: 2,
    name: "React.js",
    image:
      "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/react-2_r1cjjd.svg",
    style: styles.iconReact,
  },
];

export default function Hero() {
  const [profileImage, setProfileImage] = useState(
    "https://res.cloudinary.com/dshznc4xx/image/upload/a_hflip/v1738228843/MiguelPC_mfdchi.jpg"
  );

  // Fonction optimisée avec useCallback
  const updateImage = useCallback(() => {
    setProfileImage(
      window.innerWidth <= 768
        ? "https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg"
        : "https://res.cloudinary.com/dshznc4xx/image/upload/a_hflip/v1738228843/MiguelPC_mfdchi.jpg"
    );
  }, []);

  useEffect(() => {
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, [updateImage]);

  return (
    <header className={styles.hero}>
      {/* Icônes flottantes avec animation */}
      {floatingIcons.map((icon) => (
        <Image
          key={icon.id}
          src={icon.image}
          alt={`Icône de ${icon.name}`}
          width={70}
          height={70}
          className={`${styles.floatingIcon} ${icon.style}`}
          priority
        />
      ))}

      <div className={styles.container}>
        <Image
          src={profileImage}
          alt="Photo de Miguel Bellota, développeur"
          width={200}
          height={200}
          priority
          className={styles.image}
        />

        <div className={styles.textContainer}>
          <h1 className="title color-white">
            Créateur de logiciels & d’applications web sur mesure
          </h1>
          <p className="text color-white">
            Développeur Logiciel & Full Stack | J’accompagne les entreprises
            dans la conception de solutions digitales performantes, évolutives
            et sécurisées. Mon objectif : offrir des applications intuitives et
            optimisées pour une expérience utilisateur fluide.
          </p>
        </div>
      </div>
    </header>
  );
}
