"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import projectsData from "@/data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/components/Projects.module.css";
import "@/styles/text-styles.css";
import Card from "@/components/CardProjet";

export default function Projects() {
  const router = useRouter();
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const swiperRef = useRef<any>(null); // 🔥 Référence pour Swiper

  useEffect(() => {
    // 🔥 Récupérer l'ID du dernier projet consulté
    const lastViewedProjectId = sessionStorage.getItem("lastViewedProjectId");

    if (lastViewedProjectId) {
      const foundIndex = projectsData.findIndex((p) => p.id.toString() === lastViewedProjectId);
      if (foundIndex !== -1) {
        setActiveProjectIndex(foundIndex); // 🔥 Définit le projet actif
      }
      sessionStorage.removeItem("lastViewedProjectId"); // Nettoie après usage
    }

    // 🔥 Restaurer la position du scroll
    const scrollPosition = sessionStorage.getItem("scrollPosition");
    if (scrollPosition) {
      window.scrollTo({ top: parseInt(scrollPosition, 10), behavior: "smooth" });
      sessionStorage.removeItem("scrollPosition");
    }
  }, []);

  useEffect(() => {
    // 🔥 Une fois Swiper monté, on le déplace vers le bon projet
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(activeProjectIndex, 0); // 🔥 Déplace le slider immédiatement
    }
  }, [activeProjectIndex]);

  const handleProjectClick = (projectId: number) => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    router.push(`/projects/${projectId}`);
  };

  return (
    <section className={styles.projects} id="projects">
      <h2 className="title">Projets récents</h2>

      <div className={styles.sliderContainer}>
        {/* Flèche gauche */}
        <button className={`${styles.arrowButton} swiper-button-prev`}>
          <ChevronLeft className={styles.arrowIcon} />
        </button>

        {/* Slider Swiper */}
        <Swiper
          ref={swiperRef} // 🔥 Ajout de la référence Swiper
          className={styles.swiperWrapper}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id} onClick={() => handleProjectClick(project.id)}>
              <Card
                project={{
                  ...project,
                  link: project.links?.[0] || "",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Flèche droite */}
        <button className={`${styles.arrowButton} swiper-button-next`}>
          <ChevronRight className={styles.arrowIcon} />
        </button>
      </div>
    </section>
  );
}
