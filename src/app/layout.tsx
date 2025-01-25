import type { Metadata } from "next";
import "@/styles/global.css"; // Style global
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeProvider"; // 🔥 Import du contexte global

export const metadata: Metadata = {
  title: "Miguel Bellota - Portfolio",
  description: "Portfolio développé avec Next.js et CSS pur",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
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
