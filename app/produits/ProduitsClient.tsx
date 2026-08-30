"use client";

import { useMemo, useState } from "react";
import { categories, allProductsCount } from "./data";
import ProductTile from "./ProductTile";
import styles from "./produits.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ProduitsClient() {
  const { t } = useLanguage();

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

          const productName = t(product.name);
          const productDescription = t(product.description);
          const categoryLabel = t(cat.label);

          return (
            productName.toLowerCase().includes(searchTerm) ||
            productDescription.toLowerCase().includes(searchTerm) ||
            categoryLabel.toLowerCase().includes(searchTerm)
          );
        }),
      }))
      .filter((cat) => cat.products.length > 0);
  }, [search, activeCategory, t]);

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

            {/* RECHERCHE */}
            <div className={styles.search}>
              <i className="bi bi-search"></i>

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder={t("products.search")}
                aria-label={t("products.search")}
              />

              {search && (
                <button
                  type="button"
                  className={styles.searchClear}
                  onClick={() => setSearch("")}
                  aria-label={t("products.clear")}
                >
                  <i className="bi bi-x"></i>
                </button>
              )}
            </div>

            {/* FILTRES */}
            <div className={styles.filters}>

              <button
                type="button"
                className={`${styles.filterChip} ${
                  activeCategory === "all"
                    ? styles.active
                    : ""
                }`}
                onClick={() => setActiveCategory("all")}
              >
                <i className="bi bi-grid"></i>

                {t("products.all")}
              </button>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`${styles.filterChip} ${
                    activeCategory === cat.id
                      ? styles.active
                      : ""
                  }`}
                  onClick={() =>
                    setActiveCategory(cat.id)
                  }
                >
                  <i className={cat.icon}></i>

                  {t(cat.shortLabel)}
                </button>
              ))}
            </div>

            {/* COMPTEUR */}
            <div className={styles.count}>
              <strong>{visibleProductsCount}</strong>{" "}

              {visibleProductsCount > 1
                ? t("products.products")
                : t("products.product")}{" "}

              / {allProductsCount}
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
              <section
                key={cat.id}
                id={cat.id}
                className={styles.category}
              >
                {/* HEADER CATÉGORIE */}
                <div className={styles.categoryHead}>
                  <div>

                    {/* TRADUCTION */}
                    <h2>{t(cat.label)}</h2>

                    {/* TRADUCTION */}
                    <span>
                      {t(cat.description)}
                    </span>

                  </div>
                </div>

                {/* PRODUITS */}
                <div className={styles.grid}>
                  {cat.products.map((product, index) => (
                    <ProductTile
                      key={product.id}
                      product={product}
                      categoryLabel={t(cat.shortLabel)}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            ))
          ) : (
            <div className={styles.empty}>
              <i className="bi bi-search"></i>

              <h3>
                {t("products.noResults")}
              </h3>

              <p>
                {t("products.noResultsDescription")}
              </p>

              <button
                type="button"
                onClick={clearSearch}
              >
                {t("products.reset")}
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
}