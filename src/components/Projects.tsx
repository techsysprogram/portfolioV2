"use client";

import { useRouter } from "next/navigation";
import projectsData from "@/data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/components/Projects.module.css"; // Import des styles
import "@/styles/text-styles.css"; // Importe les styles globaux
import Card from "@/components/CardProjet";

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (projectId: number) => {
    // Stocke la position actuelle du scroll
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());

    // Navigue vers la page du projet
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
              <Card project={project} />
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
