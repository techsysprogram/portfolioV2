import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Désactive le double montage en développement
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Autorise tous les chemins sous ce domaine
      },
      /*
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**", // 🔥 Autorise tous les chemins sous Unsplash (si besoin)
      },
      */
    ],
  },
};

export default nextConfig;
