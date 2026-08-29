"use client";

import { useEffect } from "react";
import { useLanguage, type TranslationKey } from "@/contexts/LanguageContext";

/* =========================================================
   DONNÉES DES CARTES
========================================================= */

const cards: {
  n: string;
  img: string;
  alt: string;
  icon: string;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}[] = [
  {
    n: "01",
    img: "/images/export.jpg",
    alt: "Commerce international",
    icon: "bi bi-globe-americas",
    titleKey: "exportCard1Title",
    textKey: "exportCard1Text",
  },

  {
    n: "02",
    img: "/images/maritime.avif",
    alt: "Transport maritime",
    icon: "bi bi-water",
    titleKey: "exportCard2Title",
    textKey: "exportCard2Text",
  },

  {
    n: "03",
    img: "/images/logistic.jpg",
    alt: "Logistique internationale",
    icon: "bi bi-box-seam",
    titleKey: "exportCard3Title",
    textKey: "exportCard3Text",
  },

  {
    n: "04",
    img: "/images/commerce-2.avif",
    alt: "Commerce B2B",
    icon: "bi bi-handshake",
    titleKey: "exportCard4Title",
    textKey: "exportCard4Text",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function ExportSection() {
  const { t } = useLanguage();

  /* =======================================================
     ANIMATION AU SCROLL
  ======================================================= */

  useEffect(() => {
    const els = document.querySelectorAll(".export-reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");

            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    els.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section className="export-section">
      {/* Overlay */}
      <div className="export-overlay"></div>

      <div className="container">
        {/* =================================================
            TITRE
        ================================================= */}

        <div className="export-heading export-reveal">
          <span className="export-label">
            <i className="bi bi-globe2"></i>

            {t("exportLabel")}
          </span>

          <h2 className="export-title">
            {t("exportTitle")}

            <span>{t("exportAccent")}</span>
          </h2>

          <p className="export-subtitle">
            {t("exportSubtitle")}
          </p>
        </div>

        {/* =================================================
            CARTES
        ================================================= */}

        <div className="row g-4 mt-5">
          {cards.map((card) => (
            <div
              className="col-lg-3 col-md-6 col-12"
              key={card.n}
            >
              <article className="export-card export-reveal">
                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="export-card__image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={card.img}
                    alt={card.alt}
                  />

                  <div className="export-card__number">
                    {card.n}
                  </div>
                </div>

                {/* =========================================
                    CONTENU
                ========================================= */}

                <div className="export-card__content">
                  {/* ICON */}
                  <div className="export-card__icon">
                    <i className={card.icon}></i>
                  </div>

                  {/* TITRE */}
                  <h3>{t(card.titleKey)}</h3>

                  {/* DESCRIPTION */}
                  <p>{t(card.textKey)}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}