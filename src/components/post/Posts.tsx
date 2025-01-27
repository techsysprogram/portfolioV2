"use client";

import { useEffect, useState, useRef } from "react";
import postsData from "@/data/posts.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/components/post/Posts.module.css";
import "@/styles/text-styles.css";
import CardPost from "@/components/post/CardPost";
import { Swiper as SwiperClass } from "swiper/types";

export default function Posts() {
  const [activePostIndex, setActivePostIndex] = useState<number | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    const lastViewedPostId = sessionStorage.getItem("lastViewedPostId");
    const scrollPosition = sessionStorage.getItem("scrollPosition");

    if (scrollPosition) {
      window.scrollTo({ top: parseInt(scrollPosition, 10), behavior: "smooth" });
      sessionStorage.removeItem("scrollPosition");
    }

    if (lastViewedPostId) {
      const foundIndex = postsData.findIndex((p) => p.id === Number(lastViewedPostId));
      if (foundIndex !== -1) {
        setActivePostIndex(foundIndex);
      }
      sessionStorage.removeItem("lastViewedPostId");
    }
  }, []);

  useEffect(() => {
    if (swiperRef.current && activePostIndex !== null) {
      setTimeout(() => {
        swiperRef.current?.slideTo(activePostIndex, 0);
        updateNavState();
      }, 300);
    }
  }, [activePostIndex]);

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

  const handlePostClick = (postId: number) => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
    sessionStorage.setItem("lastViewedPostId", postId.toString());
  };

  return (
    <section className={styles.posts} id="posts">
      <h2 className="title">Mes Articles</h2>

      <div className={styles.sliderContainer}>
        {!isBeginning && (
          <button
            className={`${styles.arrowButton} ${styles.postsPrev}`}
            onClick={handlePrevClick}
          >
            <ChevronLeft className={styles.arrowIcon} />
          </button>
        )}

        <Swiper
          ref={(node) => {
            if (node) swiperRef.current = node.swiper;
          }}
          className={styles.swiperWrapper}
          modules={[Navigation, Pagination]}
          navigation={false} // Désactive la navigation automatique de Swiper
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
          {postsData.map((post) => (
            <SwiperSlide key={post.id} onClick={() => handlePostClick(post.id)}>
              <CardPost post={post} />
            </SwiperSlide>
          ))}
        </Swiper>

        {!isEnd && (
          <button
            className={`${styles.arrowButton} ${styles.postsNext}`}
            onClick={handleNextClick}
          >
            <ChevronRight className={styles.arrowIcon} />
          </button>
        )}
      </div>
    </section>
  );
}
