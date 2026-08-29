"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./produits.module.css";
import type { Product } from "./data";

type Props = {
  product: Product;
  categoryLabel: string;
  index: number;
};

/* Nombre de caractères affichés avant de proposer "Lire la suite" */
const DESCRIPTION_LIMIT = 140;

export default function ProductTile({ product, categoryLabel, index }: Props) {
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

  const isLong = product.description.length > DESCRIPTION_LIMIT;
  const displayText =
    !isLong || expanded
      ? product.description
      : `${product.description.slice(0, DESCRIPTION_LIMIT).trim()}…`;

  return (
    <article
      ref={ref}
      id={product.id}
      className={`${styles.productTile}${
        visible ? ` ${styles.isVisible}` : ""
      }`}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
    >
      {/* MEDIA — grande photo à gauche */}
      <div
        className={
          product.image ? styles.productMedia : styles.productMediaIcon
        }
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
          />
        ) : (
          <i className={product.icon}></i>
        )}

        <span className={styles.productTag}>{categoryLabel}</span>
      </div>

      {/* BODY — logo + titre + description + CTA */}
      <div className={styles.productBody}>
        {product.image && (
          // Petit logo/vignette du produit, au-dessus du titre
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.logo}
            alt=""
            aria-hidden="true"
            className={styles.productBodyLogo}
          />
        )}

        <h3>{product.name}</h3>

        <p className={styles.productDescription}>
          {displayText}
          {isLong && (
            <button
              type="button"
              className={styles.readMoreBtn}
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Lire moins" : "Lire la suite"}
            </button>
          )}
        </p>

        <a href="/contact" className={styles.productCta}>
          Demander un devis
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </article>
  );
}
