"use client";

import { useEffect, useState, useRef } from "react";
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
import { Swiper as SwiperClass } from "swiper/types"; // ✅ Import du type correct

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const lastViewedProjectId = sessionStorage.getItem("lastViewedProjectId");
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo({ top: parseInt(scrollPosition, 10), behavior: "smooth" });
      sessionStorage.removeItem("scrollPosition");
    }

    if (lastViewedProjectId) {
      const foundIndex = projectsData.findIndex((p) => p.id === Number(lastViewedProjectId));
      console.log("ID projet trouvé:", lastViewedProjectId, "Index:", foundIndex);

      if (foundIndex !== -1) {
        setActiveProjectIndex(foundIndex);
      }
      sessionStorage.removeItem("lastViewedProjectId");
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && activeProjectIndex !== null) {
      setTimeout(() => {
        console.log("Déplacement vers index:", activeProjectIndex);
        swiperRef.current?.slideTo(activeProjectIndex, 0);
      }, 300); // Attente pour éviter l'effet reset sur mobile
    }
  }, [activeProjectIndex]);

  const handleProjectClick = (projectId: number) => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    sessionStorage.setItem("lastViewedProjectId", projectId.toString());
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
          ref={(node) => {
            if (node) swiperRef.current = node.swiper;
          }}
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
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (activeProjectIndex !== null) {
              console.log("Swiper prêt, déplacement vers:", activeProjectIndex);
              setTimeout(() => {
                swiper.slideTo(activeProjectIndex, 0);
              }, 300); // Attente pour éviter un reset sur mobile
            }
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
