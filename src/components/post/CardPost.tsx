import styles from "@/styles/components/post/CardPost.module.css";
import Link from "next/link";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  summary: string;
  images?: string[]; // 🔥 Adapté pour gérer plusieurs images
}

const CardPost = ({ post }: { post: Post }) => {
  return (
    <div className={styles.card}>
      {/* ✅ Vérification si `images` existe et contient au moins une image */}
      {post.images && post.images.length > 0 && (
        <div className={styles.imageContainer}>
          <Link href={`/posts/${post.id}`} className={styles.cardLink}>
            <Image
              src={post.images[0]} // 🔥 Correction : utilisation de la première image
              alt={post.title}
              width={300} 
              height={200} 
              className={styles.cardImage}
            />
          </Link>
        </div>
      )}
      <div className={styles.cardContent}>
        <Link href={`/posts/${post.id}`} className={styles.cardLink}>
          <h3 className={styles.cardTitle}>{post.title}</h3>
          <p className={styles.cardSummary}>{post.summary}</p>
        </Link>
      </div>
    </div>
  );
};

export default CardPost;
