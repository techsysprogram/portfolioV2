"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import projectsData from "@/data/projects.json";
import styles from "@/styles/components/ProjectDetails.module.css";
import "@/styles/text-styles.css"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ProjectDetails() {
  const router = useRouter();
  const params = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (params?.id) {
      const foundProject = projectsData.find((p) => p.id.toString() === params.id);
      setProject(foundProject);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params]);

  if (!project) {
    return <p className={`${styles.error} text`}>Projet non trouvé.</p>;
  }

  const handleBackClick = () => {
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    router.push("/");

    setTimeout(() => {
      if (scrollPosition) {
        window.scrollTo({
          top: parseInt(scrollPosition, 10),
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <div className={styles.projectContainer}>
      <h1 className="title">{project.title}</h1>

      {project.images && project.images.length > 0 && (
        <Swiper
          className={styles.projectSwiper}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <Image
                src={image}
                alt={`Illustration ${index + 1}`}
                width={800}
                height={400}
                className={styles.projectImage}
                priority
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className={styles.descriptionContainer}>
        <p className="subtitle">{project.summary}</p>
        {Array.isArray(project.description) ? (
          project.description.map((paragraph, index) => (
            <p key={index} className="description">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="description">{project.description}</p>
        )}
      </div>

      {project.links && project.links.length > 0 && (
        <div className={styles.linksContainer}>
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              🔗 {project.linkNames && project.linkNames[index] ? project.linkNames[index] : `Voir le projet`}
            </a>
          ))}
        </div>
      )}

      <Button onClick={handleBackClick} variant="secondary">
        ⬅ Revenir aux projets
      </Button>
    </div>
  );
}
