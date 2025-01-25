import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Désactive le double montage en développement
  experimental: {
    serverActions: {}, // ✅ Syntaxe correcte pour activer les actions serveur
  },
  images: {
    domains: [
      "res.cloudinary.com", // 🔥 Cloudinary
      "source.unsplash.com", // 🔥 Unsplash
    ],
  }
};

export default nextConfig;
