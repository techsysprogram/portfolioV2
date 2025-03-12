"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import projectsData from "@/data/projects.json";
import styles from "@/styles/components/project/ProjectDetails.module.css";
import "@/styles/text-styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

interface Project {
  id: number | string;
  title: string;
  summary: string;
  description: string | string[];
  links: { name: string; url: string }[]; // ✅ Nouveau format des liens
  images: string[];
}

export default function ProjectDetails() {
  const router = useRouter();
  const params = useParams();
  const projectId = params.id as string;
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    if (projectId) {
      const foundProject = projectsData.find((p) => p.id.toString() === projectId) || null;
      setProject(foundProject);
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [projectId]);

  if (!project) {
    return <p className={`${styles.error} text`}>Projet non trouvé.</p>;
  }

  const handleBackClick = () => {
    sessionStorage.setItem("lastViewedProjectId", projectId);
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    router.push("/");
    setTimeout(() => {
      if (scrollPosition) {
        window.scrollTo({
          top: parseInt(scrollPosition, 10),
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className={styles.projectContainer}>
      <section>
        <Button onClick={handleBackClick} variant="secondary">
          <ArrowLeft size={20} /> Revenir aux projets
        </Button>
      </section>

      <h1 className="title">{project.title}</h1>

      {/* Swiper Carousel */}
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
                /* loading="eager"  */
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

      {/* ✅ Affichage des liens */}
      {project.links && project.links.length > 0 && (
        <div className={styles.linksContainer}>
          <h2 className="subtitle">Liens du projet</h2>
          {project.links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="link">
              🔗 {link.name}
            </a>
          ))}
        </div>
      )}

      <section className={styles.sectionBackButton}>
        <Button onClick={handleBackClick} variant="secondary">
          <ArrowLeft size={20} /> Revenir aux projets
        </Button>
      </section>
    </div>
  );
}
