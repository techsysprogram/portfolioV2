"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import postsData from "@/data/posts.json";
import "@/styles/text-styles.css";
import styles from "@/styles/components/post/PostDetails.module.css";
import { ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

interface Post {
  id: number;
  title: string;
  content: string[];
  images: string[]; // ✅ Modifié pour gérer plusieurs images
  videos?: string[];
  links?: { name: string; url: string }[];
}

export default function PostDetails() {
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (postId) {
      const foundPost = postsData.find((p) => p.id.toString() === postId) || null;
      setPost(foundPost);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [postId]);

  const handleBackClick = () => {
    sessionStorage.setItem("lastViewedPostId", postId);
    router.push("/");
  };

  if (!post) {
    return <p className={`${styles.error} text`}>Article non trouvé.</p>;
  }

  return (
    <div className={styles.postContainer}>
      <section>
        <Button onClick={handleBackClick} variant="secondary">
          <ArrowLeft size={20} /> Retour aux articles
        </Button>
      </section>
      
      <h1 className="title">{post.title}</h1>

      {/* ✅ Swiper pour afficher plusieurs images */}
      {post.images && post.images.length > 0 && (
        <Swiper
          className={styles.postSwiper}
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {post.images.map((image, index) => (
            <SwiperSlide key={index} className={styles.swiperSlide}>
              <Image
                src={image}
                alt={`Illustration ${index + 1}`}
                width={800}
                height={400}
                className={styles.postImage}
                loading="eager" 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className={styles.contentContainer}>
        {post.content.map((paragraph, index) => (
          <p key={index} className="description">
            {paragraph}
          </p>
        ))}
      </div>

      {/* ✅ Intégration des vidéos si présentes */}
      {post.videos && post.videos.length > 0 && (
        <div className={styles.videoContainer}>
          {post.videos.map((videoUrl, index) => (
            <iframe
              key={index}
              width="100%"
              height="400"
              src={videoUrl}
              title={`Vidéo ${index + 1}`}
              allowFullScreen
              className={styles.video}
            ></iframe>
          ))}
        </div>
      )}

      {/* ✅ Ajout des liens si présents */}
      {post.links && post.links.length > 0 && (
        <div className={styles.linksContainer}>
          {post.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              🔗 {link.name}
            </a>
          ))}
        </div>
      )}

      <section className={styles.sectionBackButton}>
        <Button onClick={handleBackClick} variant="secondary">
          <ArrowLeft size={20} /> Retour aux articles
        </Button>
      </section>
    </div>
  );
}
