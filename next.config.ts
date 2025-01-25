import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Désactive le double montage en développement
  experimental: {
    serverActions: true, // Active les actions serveur
  },
  future: {
    v7_startTransition: true, // Active React.startTransition
    v7_relativeSplatPath: true, // Active la nouvelle gestion des routes Next.js
  },
  images: {
    domains: [
      "res.cloudinary.com", // 🔥 Autorise Cloudinary
      "source.unsplash.com", // ✅ Autorise Unsplash
    ],
  },
};

export default nextConfig;
