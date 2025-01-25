import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // Désactive le double montage en développement
  // experimental: {
  //   serverActions: {},
  // },
  images: {
    domains: [
      "res.cloudinary.com", // 🔥 Cloudinary
      "source.unsplash.com", // 🔥 Unsplash
    ],
  }
};

export default nextConfig;
