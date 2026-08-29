"use client";

import { useEffect, useRef, useState } from "react";

import {
  useLanguage,
  type TranslationKey,
} from "@/contexts/LanguageContext";

import styles from "./about.module.css";


/* =========================================================
   FAQ
========================================================= */

const faqs: {
  qKey: TranslationKey;
  aKey: TranslationKey;
}[] = [
  {
    qKey: "faqQuestion1",
    aKey: "faqAnswer1",
  },
  {
    qKey: "faqQuestion2",
    aKey: "faqAnswer2",
  },
  {
    qKey: "faqQuestion3",
    aKey: "faqAnswer3",
  },
  {
    qKey: "faqQuestion4",
    aKey: "faqAnswer4",
  },
  {
    qKey: "faqQuestion5",
    aKey: "faqAnswer5",
  },
];


/* =========================================================
   COMPONENT
========================================================= */

export default function AboutFaq() {

  const { t } = useLanguage();

  const [openIndex, setOpenIndex] =
    useState<number | null>(0);

  const imgRef =
    useRef<HTMLDivElement>(null);

  const [imgVisible, setImgVisible] =
    useState(false);


  /* =======================================================
     IMAGE ANIMATION
  ======================================================= */

  useEffect(() => {

    const el = imgRef.current;

    if (!el) return;

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {

              setImgVisible(true);

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.2,
        }
      );

    observer.observe(el);

    return () =>
      observer.disconnect();

  }, []);


  /* =======================================================
     JSX
  ======================================================= */

  return (

    <section className={styles.faqSection}>

      <div className="container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className={styles.sectionHeading}>

          <span className={styles.sectionLabel}>
            {t("faqLabel")}
          </span>

          <h2>

            {t("faqTitle")}

            <span>
              {" "}
              {t("faqAccent")}
            </span>

            {" "}

            {t("faqTitleEnd")}

          </h2>

          <p>
            {t("faqSubtitle")}
          </p>

        </div>


        {/* =================================================
            GRID
        ================================================= */}

        <div className={styles.faqGrid}>

          {/* =================================================
              COLONNE GAUCHE
          ================================================= */}

          <div className={styles.faqList}>

            {faqs.map((item, index) => {

              const isOpen =
                openIndex === index;

              return (

                <div
                  key={item.qKey}
                  className={`${styles.faqItem}${
                    isOpen
                      ? ` ${styles.faqItemOpen}`
                      : ""
                  }`}
                >

                  <button
                    type="button"
                    className={styles.faqQuestion}
                    onClick={() =>
                      setOpenIndex(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    aria-expanded={isOpen}
                  >

                    {t(item.qKey)}

                    <i className="bi bi-chevron-down"></i>

                  </button>


                  <div
                    className={
                      styles.faqAnswerWrap
                    }
                  >

                    <div
                      className={
                        styles.faqAnswer
                      }
                    >

                      <p>
                        {t(item.aKey)}
                      </p>

                    </div>

                  </div>

                </div>

              );

            })}

          </div>


          {/* =================================================
              COLONNE DROITE
          ================================================= */}

          <div
            ref={imgRef}
            className={`${styles.faqImageWrap}${
              imgVisible
                ? ` ${styles.faqImageVisible}`
                : ""
            }`}
          >

            {/* eslint-disable-next-line @next/next/no-img-element */}

            <img
              src="/images/commerce-1.avif"
              alt={t("faqImageAlt")}
            />


            <div
              className={
                styles.faqImageBadge
              }
            >

              <i className="bi bi-headset"></i>


              <div>

                <strong>
                  {t("faqBadgeTitle")}
                </strong>

                <span>
                  {t("faqBadgeText")}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}