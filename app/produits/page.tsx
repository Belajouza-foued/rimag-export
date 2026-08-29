import ProduitsClient from "./ProduitsClient";
import styles from "./produits.module.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Produits | Exporia",
  description:
    "Découvrez les produits alimentaires tunisiens sélectionnés par Exporia pour l'export international.",
};

export default function ProduitsPage() {
  return (
    
    <main className={styles.productsPage}>

      {/* =====================================================
          HERO
      ===================================================== */}
      <Header/>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>

            <span className={styles.heroEyebrow}>
              <i className="bi bi-box-seam"></i>
              Explorer nos produits
            </span>

            <h1>
              Produits
              <br />
              <span>pour le marché international</span>
            </h1>

            <p>
              Découvrez notre sélection de produits alimentaires
              tunisiens destinés aux importateurs, grossistes
              et distributeurs internationaux.
            </p>

            <div className={styles.breadcrumb}>
              <a href="/">Accueil</a>
              <span>/</span>
              <span>Produits</span>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CATALOGUE
      ===================================================== */}
      <ProduitsClient />

    </main>
  );
}