import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Désactive le double montage en développement
  images: {
    domains: [
      "res.cloudinary.com" // 🔥 Cloudinary
      /* "source.unsplash.com", // 🔥 Unsplash */
    ],
  }
};

export default nextConfig;
