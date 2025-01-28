"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/components/Review.module.css";
import reviews from "@/data/review.json";
import { Swiper as SwiperClass } from "swiper/types";
import "@/styles/text-styles.css"; // Styles globaux

export default function Review() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);

  const updateNavState = () => {
    if (swiperRef.current) {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }
  };

  if (!reviews || reviews.length === 0) return <p>Aucun avis disponible.</p>;

  return (
    <section className={styles.reviewSection} id="reviews">
      <div className={styles.sliderContainer}>
      <h2 className="title">Avis des clients</h2>
        {!isBeginning && (
          <button className={`${styles.arrowButton} ${styles.reviewPrev}`} onClick={() => swiperRef.current?.slidePrev()}>
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
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className={styles.reviewCard}>
                <div className={styles.reviewStars}>{"★".repeat(review.rating)}</div>
                <p className="text">{review.reviewText}</p>
                <p className="subtitle">{review.user}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {!isEnd && (
          <button className={`${styles.arrowButton} ${styles.reviewNext}`} onClick={() => swiperRef.current?.slideNext()}>
            <ChevronRight className={styles.arrowIcon} />
          </button>
        )}
      </div>
    </section>
  );
}
