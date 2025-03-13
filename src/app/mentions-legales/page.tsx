"use client";

import { useRouter } from "next/navigation";
import styles from "@/styles/components/legal/Legal.module.css";
import Button from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";
import "@/styles/text-styles.css"; // ✅ Ajout des styles globaux

export default function MentionsLegales() {
  const router = useRouter();

  return (
    <div className={styles.legalContainer}>

      <h1 className="title">Mentions Légales</h1>
      <p className="text">
        Conformément aux dispositions des articles 6-III et 19 de la Loi pour la Confiance dans l’Économie Numérique (LCEN), nous informons les visiteurs du site des informations suivantes :
      </p>

      <br/>
      <h2 className="subtitle">Éditeur du site</h2>
      <p className="text">
        <strong>Nom de l'entreprise :</strong> TECHSYSPROGRAM  
        <br />
        <strong>Forme juridique :</strong> SASU (Société par Actions Simplifiée Unipersonnelle)  
        <br />
        <strong>Adresse du siège social :</strong> 1690 Chemin de Camperdut, 81600 Montans, France  
        <br />
        <strong>SIREN :</strong> 928 423 649  
        <br />
        <strong>Numéro de TVA intracommunautaire :</strong> FR58928423649  
        <br />
        <strong>Directeur de la publication :</strong> Victor Miguel Bellota Rivera  
      </p>

      <br/>
      <h2 className="subtitle">Hébergement du site</h2>
      <p className="text">
        Ce site est hébergé par <strong>Northflank Ltd.</strong>
        <br />
        <strong>Adresse du siège social :</strong> 20-22 Wenlock Road, London, England, N1 7GU  
        <br />
        <strong>Numéro d'enregistrement :</strong> 11918540  
        <br />
        <strong>Site Web :</strong> <a href="https://northflank.com" target="_blank" rel="noopener noreferrer" className="link">northflank.com</a>  
      </p>

      <br/>
      <h2 className="subtitle">Contact</h2>
      <p className="text">
        Pour toute question ou demande, vous pouvez nous contacter par email à :  
        <br />
        <strong>Email :</strong> <a href="mailto:contact@techsysprogram.com" className="link">contact@techsysprogram.com</a>
      </p>

      <br/>
      <section className={styles.legalBackButton}>
        <Button onClick={() => router.back()} variant="secondary">
          <ArrowLeft size={20} /> Retour
        </Button>
      </section>
    </div>
  );
}
