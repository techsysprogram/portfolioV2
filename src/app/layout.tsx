import type { Metadata } from "next";
import "@/styles/global.css"; // Style global
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeProvider"; // 🔥 Import du contexte global

//mettre en place la police "Lora" pour le site
import { Exo_2 } from 'next/font/google';
const exo2 = Exo_2({ subsets: ['latin'] });



export const metadata: Metadata = {
  title: "Miguel Bellota - Portfolio",
  description: "Portfolio développé avec Next.js et CSS",
  openGraph: {
    title: "Miguel Bellota - Portfolio",
    description: "Portfolio développé avec Next.js et CSS",
    url: "https://techsysprogram.com", 
    siteName: "Miguel Bellota - Portfolio",
    images: [
      {
        url: "https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg", 
        width: 1200,
        height: 630,
        alt: "Aperçu du portfolio de Miguel Bellota",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Miguel Bellota - Portfolio",
    description: "Portfolio développé avec Next.js et CSS",
    images: ["https://res.cloudinary.com/dshznc4xx/image/upload/v1737478718/MiguelPC_d1f2ux.jpg"], 
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={exo2.className}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <ThemeProvider> 
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
