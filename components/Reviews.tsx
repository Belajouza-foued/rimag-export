"use client";

import { useEffect, useRef } from "react";
import {
  useLanguage,
  type TranslationKey,
} from "@/contexts/LanguageContext";

/* =========================================================
   TÉMOIGNAGES
========================================================= */

const reviews: {
  name: string;
  roleKey: TranslationKey;
  side: string;
  textKey: TranslationKey;
  regionKey: TranslationKey;
}[] = [
  {
    name: "Ahmed B.",
    roleKey: "reviewRole1",
    side: "review-left",
    textKey: "reviewText1",
    regionKey: "reviewRegionAfrica",
  },
  {
    name: "Marc D.",
    roleKey: "reviewRole2",
    side: "review-right",
    textKey: "reviewText2",
    regionKey: "reviewRegionEurope",
  },
  {
    name: "Mohamed A.",
    roleKey: "reviewRole3",
    side: "review-left",
    textKey: "reviewText3",
    regionKey: "reviewRegionGulf",
  },
  {
    name: "John M.",
    roleKey: "reviewRole4",
    side: "review-right",
    textKey: "reviewText4",
    regionKey: "reviewRegionNorthAmerica",
  },
];

/* =========================================================
   STATISTIQUES
========================================================= */

const stats: {
  value: number;
  labelKey: TranslationKey;
}[] = [
  {
    value: 15,
    labelKey: "reviewStatExperience",
  },
  {
    value: 5,
    labelKey: "reviewStatContinents",
  },
  {
    value: 100,
    labelKey: "reviewStatRelations",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Reviews() {
  const { t } = useLanguage();

  const rootRef = useRef<HTMLDivElement>(null);

  /* =======================================================
     ANIMATIONS + COMPTEURS
  ======================================================= */

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    /* =====================================================
       REVEAL
    ===================================================== */

    const revealEls =
      root.querySelectorAll(".reveal-review");

    const revealObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(
                "is-visible"
              );

              revealObserver.unobserve(
                entry.target
              );
            }
          });
        },
        {
          threshold: 0.15,
        }
      );

    revealEls.forEach((el) => {
      revealObserver.observe(el);
    });

    /* =====================================================
       COMPTEURS
    ===================================================== */

    const counters =
      root.querySelectorAll<HTMLElement>(
        "[data-counter]"
      );

    const counterObserver =
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const el =
              entry.target as HTMLElement;

            const target = parseInt(
              el.dataset.counter || "0",
              10
            );

            const duration = 1500;

            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min(
                (now - start) / duration,
                1
              );

              el.textContent = String(
                Math.floor(
                  progress * target
                )
              );

              if (progress < 1) {
                requestAnimationFrame(tick);
              } else {
                el.textContent =
                  String(target);
              }
            };

            requestAnimationFrame(tick);

            counterObserver.unobserve(
              el
            );
          });
        },
        {
          threshold: 0.4,
        }
      );

    counters.forEach((el) => {
      counterObserver.observe(el);
    });

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  /* =======================================================
     JSX
  ======================================================= */

  return (
    <section
      className="reviews-section"
      ref={rootRef}
    >
      <div className="reviews-bg"></div>

      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="reviews-heading reveal-review">

          <span className="section-label">
            <i className="bi bi-chat-quote"></i>

            {t("reviewsLabel")}
          </span>

          <h2>
            {t("reviewsTitle")}
            <span>
              {" "}
              {t("reviewsAccent")}
            </span>
          </h2>

          <p>
            {t("reviewsSubtitle")}
          </p>

        </div>

        {/* =================================================
            TÉMOIGNAGES
        ================================================= */}

        <div className="reviews-grid">

          {reviews.map((r) => (
            <article
              className={`review-card ${r.side} reveal-review`}
              key={r.name}
            >

              {/* =========================================
                  TOP
              ========================================= */}

              <div className="review-top">

                <div className="review-avatar">
                  <i className="bi bi-person-fill"></i>
                </div>

                <div>
                  <h3>{r.name}</h3>

                  <span>
                    {t(r.roleKey)}
                  </span>
                </div>

                <div
                  className="review-stars"
                  aria-label="5 étoiles"
                >
                  ★★★★★
                </div>

              </div>

              {/* =========================================
                  QUOTE
              ========================================= */}

              <div className="review-quote">
                <i className="bi bi-quote"></i>
              </div>

              {/* =========================================
                  TEXTE
              ========================================= */}

              <p className="review-text">
                {t(r.textKey)}
              </p>

              {/* =========================================
                  FOOTER
              ========================================= */}

              <div className="review-footer">

                <span>
                  <i className="bi bi-check-circle-fill"></i>

                  {t("reviewVerified")}
                </span>

                <span>
                  <i className="bi bi-globe2"></i>

                  {t(r.regionKey)}
                </span>

              </div>

            </article>
          ))}

        </div>

        {/* =================================================
            STATISTIQUES
        ================================================= */}

        <div className="reviews-stats reveal-review">

          {stats.map((s) => (
            <div
              className="review-stat"
              key={s.labelKey}
            >
              <strong
                data-counter={s.value}
              >
                0
              </strong>

              <span>
                {t(s.labelKey)}
              </span>
            </div>
          ))}

          {/* =========================
              DISPONIBILITÉ
          ========================= */}

          <div className="review-stat">

            <strong>24/7</strong>

            <span>
              {t("reviewStatAvailability")}
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}