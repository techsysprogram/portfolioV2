"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/components/legal/Legal.module.css";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import "@/styles/text-styles.css"; // ✅ Ajout des styles globaux

export default function Confidentialite() {
  const router = useRouter();

  return (
    <div className={styles.legalContainer}>

      <h1 className="title">Politique de Confidentialité</h1>
      <p className="text">
        Nous respectons votre vie privée. Ce site est un simple portfolio et ne collecte aucune donnée personnelle.  
        Nous n’utilisons pas de cookies ni d'autres technologies de suivi.
      </p>
      <br/>

      <h2 className="subtitle">Données collectées</h2>
      <p className="text">
        Ce site ne collecte ni ne stocke aucune donnée utilisateur.  
        Nous ne suivons pas votre navigation et nous ne partageons aucune information avec des tiers.
      </p>

      <br/>
      <h2 className="subtitle">Cookies</h2>
      <p className="text">
        Ce site n'utilise aucun cookie.
      </p>
      <br/>

      <h2 className="subtitle">Contact</h2>
      <p className="text">
        Si vous avez des questions concernant cette politique, vous pouvez nous contacter à :  
        <br />
        <strong>Email :</strong> <a href="mailto:contact@techsysprogram.com" className="link">contact@techsysprogram.com</a>
      </p>

      <section className={styles.legalBackButton}>
        <Button onClick={() => router.back()} variant="secondary">
          <ArrowLeft size={20} /> Retour
        </Button>
      </section>
    </div>
  );
}
