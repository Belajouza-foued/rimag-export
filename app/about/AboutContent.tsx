"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./about.module.css";

export default function AboutStory() {
  const { t } = useLanguage();

  return (
    <section className={styles.aboutStory}>
      <div className="container">
        <div className={styles.aboutStoryGrid}>

          {/* =================================================
              IMAGES
          ================================================= */}

          <div className={styles.aboutStoryImages}>

            {/* IMAGE PRINCIPALE AVEC HOVER */}

            <div className={styles.imgHover}>

              {/* IMAGE PRINCIPALE */}
              <img
                src="/images/export.jpg"
                alt={t("aboutStoryImage1")}
                className={styles.imgHoverBase}
              />

              {/* IMAGE AU HOVER */}
              <img
                src="/images/maritime.avif"
                alt={t("aboutStoryImage2")}
                className={styles.imgHoverSecond}
              />

            </div>

            {/* =================================================
                IMAGES SECONDAIRES
            ================================================= */}

            <div className={styles.imgStack}>

              <img
                src="/images/maritime.avif"
                alt={t("aboutStoryImage2")}
                className={`${styles.imgShort} ${styles.revealRight}`}
              />

              <img
                src="/images/logistic.jpg"
                alt={t("aboutStoryImage3")}
                className={`${styles.imgShort} ${styles.revealRight}`}
              />

            </div>

            {/* =================================================
                BADGE
            ================================================= */}

            <div className={styles.aboutStoryBadge}>

              <strong>15+</strong>

              <span>
                {t("aboutExperience")}
              </span>

            </div>

          </div>

          {/* =================================================
              CONTENU
          ================================================= */}

          <div className={styles.aboutStoryContent}>

            <span className={styles.sectionLabel}>
              {t("aboutStoryLabel")}
            </span>

            <h2>
              {t("aboutStoryTitle")}{" "}
              <span>
                {t("aboutStoryAccent")}
              </span>
            </h2>

            <p>
              {t("aboutStoryText1")}
            </p>

            <p>
              {t("aboutStoryText2")}
            </p>

            {/* =================================================
                LISTE
            ================================================= */}

            <ul className={styles.aboutStoryList}>

              <li>
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  {t("aboutStoryPoint1")}
                </span>
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  {t("aboutStoryPoint2")}
                </span>
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  {t("aboutStoryPoint3")}
                </span>
              </li>

              <li>
                <i className="bi bi-check-circle-fill"></i>

                <span>
                  {t("aboutStoryPoint4")}
                </span>
              </li>

            </ul>

            {/* =================================================
                BOUTON
            ================================================= */}

            <Link
              href="/contact"
              className={styles.btnPrimaryCustom}
            >
              {t("aboutStoryButton")}

              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}