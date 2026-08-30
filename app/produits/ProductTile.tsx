"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./produits.module.css";
import type { Product } from "./data";
import { useLanguage } from "@/contexts/LanguageContext";

type Props = {
  product: Product;
  categoryLabel: string;
  index: number;
};

const DESCRIPTION_LIMIT = 140;

export default function ProductTile({
  product,
  categoryLabel,
  index,
}: Props) {
  const { t } = useLanguage();

  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  /* ==========================================
     TRADUCTIONS
  ========================================== */

  const productName = t(product.name);
  const productDescription = t(product.description);

  const isLong =
    productDescription.length > DESCRIPTION_LIMIT;

  const displayText =
    !isLong || expanded
      ? productDescription
      : `${productDescription
          .slice(0, DESCRIPTION_LIMIT)
          .trim()}…`;

  return (
    <article
      ref={ref}
      id={product.id}
      className={`${styles.productTile}${
        visible ? ` ${styles.isVisible}` : ""
      }`}
      style={{
        transitionDelay: `${(index % 3) * 90}ms`,
      }}
    >

      {/* ==========================================
          IMAGE
      ========================================== */}

      <div
        className={
          product.image
            ? styles.productMedia
            : styles.productMediaIcon
        }
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={productName}
            className={styles.productImage}
          />
        ) : (
          <i className={product.icon}></i>
        )}

        {/* CATÉGORIE TRADUITE */}
        <span className={styles.productTag}>
          {categoryLabel}
        </span>
      </div>

      {/* ==========================================
          BODY
      ========================================== */}

      <div className={styles.productBody}>

        {product.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.logo}
            alt=""
            aria-hidden="true"
            className={styles.productBodyLogo}
          />
        )}

        {/* TITRE PRODUIT TRADUIT */}
        <h3>{productName}</h3>

        {/* DESCRIPTION TRADUITE */}
        <p className={styles.productDescription}>
          {displayText}

          {isLong && (
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() =>
                setExpanded((v) => !v)
              }
              aria-expanded={expanded}
            >
              {expanded
                ? t("products.readLess")
                : t("products.readMore")}
            </button>
          )}
        </p>

        {/* BOUTON TRADUIT */}
        <a
          href="/contact"
          className={styles.productCta}
        >
          {t("products.requestQuote")}

          <i className="bi bi-arrow-right"></i>
        </a>

      </div>
    </article>
  );
}