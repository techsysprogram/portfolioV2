"use client";

import { useEffect, useState, useRef } from "react";
import projectsData from "@/data/projects.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/components/project/Projects.module.css";
import "@/styles/text-styles.css";
import Card from "@/components/project/CardProjet";
import { Swiper as SwiperClass } from "swiper/types";

export default function Projects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
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
      if (foundIndex !== -1) {
        setActiveProjectIndex(foundIndex);
      }
      sessionStorage.removeItem("lastViewedProjectId");
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && activeProjectIndex !== null) {
      setTimeout(() => {
        swiperRef.current?.slideTo(activeProjectIndex, 0);
        /* updateNavState(swiperRef.current); */
        updateNavState();
      }, 300);
    }
  }, [activeProjectIndex]);

  const updateNavState = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && !isBeginning) {
      swiperRef.current.slidePrev();
      setTimeout(updateNavState, 100);
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && !isEnd) {
      swiperRef.current.slideNext();
      setTimeout(updateNavState, 100);
    }
  };

  const handleProjectClick = (projectId: number) => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    sessionStorage.setItem("lastViewedProjectId", projectId.toString());
  };

  return (
    <section className={styles.projects} id="projects">
      <h2 className="title">Projets récents</h2>

      <div className={styles.sliderContainer}>
        {!isBeginning && (
          <button className={`${styles.arrowButton} ${styles.projectsPrev}`} onClick={handlePrevClick}>
            <ChevronLeft className={styles.arrowIcon} />
          </button>
        )}

        <Swiper
          ref={(node) => {
            if (node) swiperRef.current = node.swiper;
          }}
          className={styles.swiperWrapper}
          modules={[Navigation, Pagination]}
          navigation={false}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSlideChange={updateNavState}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            updateNavState();
          }}
        >
          {projectsData.map((project) => (
            <SwiperSlide key={project.id} onClick={() => handleProjectClick(project.id)}>
              <Card
                project={{
                  ...project,
                  link: project.links?.[0]?.url || "",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isEnd && (
          <button className={`${styles.arrowButton} ${styles.projectsNext}`} onClick={handleNextClick}>
            <ChevronRight className={styles.arrowIcon} />
          </button>
        )}
      </div>
    </section>
  );
}
