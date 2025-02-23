import { useState, useEffect } from "react";
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

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setProfileImage(
          "https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg"
        );
      } else {
        setProfileImage(
          "https://res.cloudinary.com/dshznc4xx/image/upload/a_hflip/v1738228843/MiguelPC_mfdchi.jpg"
        );
      }
    };

    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  return (
    <header className={styles.hero}>
      {floatingIcons.map((icon) => (
        <Image
          key={icon.id}
          src={icon.image}
          alt={icon.name}
          width={70}
          height={70}
          className={`${styles.floatingIcon} ${icon.style}`}
        />
      ))}

      <div className={styles.container}>
        <Image
          src={profileImage}
          alt="Miguel Bellota"
          width={200}
          height={200}
          priority
          className={styles.image}
        />

        <div className={styles.textContainer}>
          <h1 className="title color-white">Miguel Bellota</h1>
          <p className="text color-white">
            Développeur Logiciel & Full Stack | Passionné par les technologies,
            je conçois des applications intuitives et agréables à utiliser pour
            offrir une expérience utilisateur optimale.
          </p>
        </div>
      </div>
    </header>
  );
}
