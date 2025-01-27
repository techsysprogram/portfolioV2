import Image from "next/image";
import styles from "@/styles/components/Hero.module.css";
import "@/styles/text-styles.css"; // Importe les styles globaux

// ✅ Seulement les 4 meilleures stacks
const floatingIcons = [
  { id: 1, name: "Next.js", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/next-js_kzcyc2.svg", style: styles.iconNext },
  { id: 2, name: "React.js", image: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737735139/react-2_r1cjjd.svg", style: styles.iconReact },
];

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* ✅ Icônes flottantes (placées en arrière-plan) */}
      {floatingIcons.map((icon) => (
        <Image key={icon.id} src={icon.image} alt={icon.name} width={70} height={70} className={`${styles.floatingIcon} ${icon.style}`} />
      ))}

      <div className={styles.container}>
        {/* Image de profil */}
        <Image
          src="https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg"
          alt="Miguel Bellota"
          width={200}
          height={200}
          className={styles.image}
        />

        {/* Texte */}
        <div className={styles.textContainer}>
          <h1 className="title color-white">Miguel Bellota</h1>
          <p className="text color-white">
          Développeur Logiciel & Full Stack | Passionné par les technologies, je conçois des applications intuitives et agréables à utiliser pour offrir une expérience utilisateur optimale.
          </p>
        </div>
      </div>
    </header>
  );
}
