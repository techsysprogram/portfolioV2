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
      "res.cloudinary.com", // 🔥 Cloudinary
      "source.unsplash.com", // 🔥 Unsplash
    ],
  },
  output: "standalone", // ✅ Mode standalone pour les services comme Northflank
};

export default nextConfig;
