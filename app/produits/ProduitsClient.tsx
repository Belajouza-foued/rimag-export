"use client";

import { useMemo, useState } from "react";
import { categories, allProductsCount } from "./data";
import ProductTile from "./ProductTile";
import styles from "./produits.module.css";

export default function ProduitsClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCategories = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return categories
      .filter(
        (cat) =>
          activeCategory === "all" || cat.id === activeCategory
      )
      .map((cat) => ({
        ...cat,

        products: cat.products.filter((product) => {
          if (!searchTerm) return true;

          return (
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            cat.label.toLowerCase().includes(searchTerm)
          );
        }),
      }))
      .filter((cat) => cat.products.length > 0);
  }, [search, activeCategory]);

  const visibleProductsCount = filteredCategories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  const clearSearch = () => {
    setSearch("");
    setActiveCategory("all");
  };

  return (
    <>
      {/* =====================================================
          TOOLBAR
      ===================================================== */}
      <section className={styles.toolbar}>
        <div className="container">
          <div className={styles.toolbarInner}>
            {/* Recherche */}
            <div className={styles.search}>
              <i className="bi bi-search"></i>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Rechercher un produit..."
                aria-label="Rechercher un produit"
              />

              {search && (
                <button
                  type="button"
                  className={styles.searchClear}
                  onClick={() => setSearch("")}
                  aria-label="Effacer la recherche"
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>

            {/* Filtres */}
            <div className={styles.filters}>
              <button
                type="button"
                className={`${styles.filterChip} ${
                  activeCategory === "all" ? styles.active : ""
                }`}
                onClick={() => setActiveCategory("all")}
              >
                <i className="bi bi-grid"></i>
                Tous
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.filterChip} ${
                    activeCategory === cat.id ? styles.active : ""
                  }`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <i className={cat.icon}></i>
                  {cat.shortLabel}
                </button>
              ))}
            </div>

            {/* Compteur */}
            <div className={styles.count}>
              <strong>{visibleProductsCount}</strong>{" "}
              {visibleProductsCount > 1 ? "produits" : "produit"} /{" "}
              {allProductsCount}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATALOGUE
      ===================================================== */}
      <section className={styles.catalog}>
        <div className="container">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
              <section key={cat.id} id={cat.id} className={styles.category}>
                {/* Header catégorie */}
                <div className={styles.categoryHead}>
                  <div>
                    <h2>{cat.label}</h2>
                    <span>{cat.description}</span>
                  </div>
                </div>

                {/* Produits */}
                <div className={styles.grid}>
                  {cat.products.map((product, index) => (
                    <ProductTile
                      key={product.id}
                      product={product}
                      categoryLabel={cat.shortLabel}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            /* =================================================
               EMPTY STATE
            ================================================= */
            <div className={styles.empty}>
              <i className="bi bi-search"></i>

              <h3>Aucun produit trouvé</h3>

              <p>Aucun produit ne correspond à votre recherche.</p>

              <button type="button" onClick={clearSearch}>
                Réinitialiser la recherche
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
