"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  useLanguage,
  type TranslationKey,
} from "@/contexts/LanguageContext";

/* =========================================================
   PRODUITS
========================================================= */

const products: {
  n: string;
  href: string;
  img: string;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}[] = [
  {
    n: "01",
    href: "/produits#dattes",
    img: "/images/date-1.jpg",
    titleKey: "productDates",
    textKey: "productDatesText",
  },
  {
    n: "02",
    href: "/produits#huile",
    img: "/images/huile-1.jpg",
    titleKey: "productOils",
    textKey: "productOilsText",
  },
  {
    n: "03",
    href: "/produits#tomate",
    img: "/images/tomate.jpg",
    titleKey: "productTomatoes",
    textKey: "productTomatoesText",
  },
  {
    n: "04",
    href: "/produits#biscuits",
    img: "/images/biscuit.jpeg",
    titleKey: "productBiscuits",
    textKey: "productBiscuitsText",
  },
  {
    n: "05",
    href: "/produits#chocolat",
    img: "/images/chocolat.png",
    titleKey: "productChocolate",
    textKey: "productChocolateText",
  },
  {
    n: "06",
    href: "/produits#fromage",
    img: "/images/fromage.jpeg",
    titleKey: "productCheese",
    textKey: "productCheeseText",
  },
  {
    n: "07",
    href: "/produits#lait",
    img: "/images/lait.jpg",
    titleKey: "productMilk",
    textKey: "productMilkText",
  },
  {
    n: "08",
    href: "/produits#pates",
    img: "/images/pate.webp",
    titleKey: "productPasta",
    textKey: "productPastaText",
  },
  {
    n: "09",
    href: "/produits#riz",
    img: "/images/riz.jpg",
    titleKey: "productRice",
    textKey: "productRiceText",
  },
  {
    n: "10",
    href: "/produits#frites",
    img: "/images/frit.jpeg",
    titleKey: "productFries",
    textKey: "productFriesText",
  },
  {
    n: "11",
    href: "/produits#pomme-de-terre",
    img: "/images/pomme-terre.webp",
    titleKey: "productPotatoes",
    textKey: "productPotatoesText",
  },
  {
    n: "12",
    href: "/produits#poulet",
    img: "/images/chiken.webp",
    titleKey: "productChicken",
    textKey: "productChickenText",
  },
  {
    n: "13",
    href: "/produits#mayonnaise",
    img: "/images/mayonaise-1.avif",
    titleKey: "productMayonnaise",
    textKey: "productMayonnaiseText",
  },
  {
    n: "14",
    href: "/produits#moutarde",
    img: "/images/moutarde.png",
    titleKey: "productMustard",
    textKey: "productMustardText",
  },
  {
    n: "15",
    href: "/produits#thon",
    img: "/images/thon-1.avif",
    titleKey: "productTuna",
    textKey: "productTunaText",
  },
  {
    n: "16",
    href: "/produits#hygiene",
    img: "/images/nettoyage.avif",
    titleKey: "productHygiene",
    textKey: "productHygieneText",
  },
  {
    n: "17",
    href: "/produits#construction",
    img: "/images/contruction-1.avif",
    titleKey: "productConstruction",
    textKey: "productConstructionText",
  },
  {
    n: "18",
    href: "/produits#fournitures",
    img: "/images/fourniture.avif",
    titleKey: "productSupplies",
    textKey: "productSuppliesText",
  },
];

/* =========================================================
   NOMBRE DE PRODUITS VISIBLES
========================================================= */

function useVisibleCount() {
  const [count, setCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;

      if (w <= 576) {
        setCount(1);
      } else if (w <= 768) {
        setCount(2);
      } else if (w <= 1100) {
        setCount(3);
      } else {
        setCount(4);
      }
    };

    update();

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("resize", update);
    };
  }, []);

  return count;
}

/* =========================================================
   COMPONENT
========================================================= */

export default function ProductsCarousel() {
  const { t } = useLanguage();

  const visible = useVisibleCount();

  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  const trackRef = useRef<HTMLDivElement>(null);

  const maxIndex = Math.max(
    0,
    products.length - visible
  );

  /* =======================================================
     CORRIGER L'INDEX APRÈS REDIMENSIONNEMENT
  ======================================================= */

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  /* =======================================================
     CALCUL DU DÉPLACEMENT
  ======================================================= */

  useEffect(() => {
    const recompute = () => {
      const track = trackRef.current;

      const card =
        track?.querySelector<HTMLElement>(
          ".product-card"
        );

      if (!track || !card) return;

      const gap = 20;

      setOffset(
        index * (card.offsetWidth + gap)
      );
    };

    recompute();

    window.addEventListener("resize", recompute);

    return () => {
      window.removeEventListener(
        "resize",
        recompute
      );
    };
  }, [index, visible]);

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const prev = () => {
    setIndex((i) => Math.max(0, i - 1));
  };

  const next = () => {
    setIndex((i) =>
      Math.min(maxIndex, i + 1)
    );
  };

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section
      className="products-section"
      id="produits"
    >
      <div className="container">

        {/* =================================================
            TITRE
        ================================================= */}

        <div className="section-heading">

          <span className="section-label">
            {t("catalogLabel")}
          </span>

          <h2>
            {t("catalogTitle")}
            <span> {t("catalogAccent")}</span>
          </h2>

          <p>
            {t("catalogSubtitle")}
          </p>

        </div>

        {/* =================================================
            CAROUSEL
        ================================================= */}

        <div className="products-carousel">

          {/* PREVIOUS */}

          <button
            type="button"
            className="carousel-arrow carousel-arrow--prev"
            aria-label={t("productsPrevious")}
            onClick={prev}
            disabled={index === 0}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          {/* WINDOW */}

          <div className="carousel-window">

            <div
              className="carousel-track"
              ref={trackRef}
              style={{
                transform: `translateX(-${offset}px)`,
              }}
            >

              {products.map((p) => (
                <article
                  className="product-card"
                  key={p.n}
                >
                  <Link href={p.href}>

                    {/* IMAGE */}

                    <div className="product-card__image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.img}
                        alt={t(p.titleKey)}
                      />
                    </div>

                    {/* CONTENT */}

                    <div className="product-card__content">

                      <span>
                        {p.n}
                      </span>

                      <h3>
                        {t(p.titleKey)}
                      </h3>

                      <p>
                        {t(p.textKey)}
                      </p>

                    </div>

                  </Link>
                </article>
              ))}

            </div>
          </div>

          {/* NEXT */}

          <button
            type="button"
            className="carousel-arrow carousel-arrow--next"
            aria-label={t("productsNext")}
            onClick={next}
            disabled={index === maxIndex}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

        {/* =================================================
            BOUTON CATALOGUE
        ================================================= */}

        <div className="products-cta">

          <Link
            href="/produits"
            className="btn-primary-custom"
          >
            {t("catalogButton")}

            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>

      </div>
    </section>
  );
}