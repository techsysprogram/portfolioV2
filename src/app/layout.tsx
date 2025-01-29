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
  description: "Portfolio développé avec Next.js et CSS pur",
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
