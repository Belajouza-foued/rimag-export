"use client";

import Link from "next/link";
import AboutFaq from "./AboutFaq";

import {
  useLanguage,
  type TranslationKey,
} from "@/contexts/LanguageContext";

import styles from "./about.module.css";

const timelineItems: {
  icon: string;
  yearKey: TranslationKey;
  titleKey: TranslationKey;
  textKey: TranslationKey;
}[] = [
  {
    icon: "bi bi-flag",
    yearKey: "timelineYearStart",
    titleKey: "timelineTitleStart",
    textKey: "timelineTextStart",
  },
  {
    icon: "bi bi-globe2",
    yearKey: "timelineYearExpansion",
    titleKey: "timelineTitleExpansion",
    textKey: "timelineTextExpansion",
  },
  {
    icon: "bi bi-boxes",
    yearKey: "timelineYearDiversification",
    titleKey: "timelineTitleDiversification",
    textKey: "timelineTextDiversification",
  },
  {
    icon: "bi bi-graph-up-arrow",
    yearKey: "timelineYearToday",
    titleKey: "timelineTitleToday",
    textKey: "timelineTextToday",
  },
];

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.aboutHero}>
        <div className="container">
          <div className={styles.aboutHeroContent}>
            <span className={styles.aboutHeroEyebrow}>
              <i className="bi bi-building"></i>
              {t("aboutHeroEyebrow")}
            </span>

            <h1>
              {t("aboutHeroTitle")}
              <span>Exporia</span>
            </h1>

            <p>
              {t("aboutHeroText")}
            </p>

            <div className={styles.aboutBreadcrumb}>
              <Link href="/">
                {t("navHome")}
              </Link>

              <span>/</span>

              <span>
                {t("navAbout")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          STORY
      ===================================================== */}

      <section className={styles.aboutStory}>
        <div className="container">
          <div className={styles.aboutStoryGrid}>

            {/* IMAGES */}

            <div className={styles.aboutStoryImages}>

              <img
                src="/images/export.jpg"
                alt={t("aboutStoryImage1")}
                className={`${styles.imgTall} ${styles.revealLeft}`}
              />

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

              <div className={styles.aboutStoryBadge}>
                <strong>15+</strong>

                <span>
                  {t("aboutExperience")}
                </span>
              </div>

            </div>

            {/* CONTENU */}

            <div className={styles.aboutStoryContent}>

              <span className={styles.sectionLabel}>
                {t("aboutStoryLabel")}
              </span>

              <h2>
                {t("aboutStoryTitle")}
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

              <ul className={styles.aboutStoryList}>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  {t("aboutStoryPoint1")}
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  {t("aboutStoryPoint2")}
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  {t("aboutStoryPoint3")}
                </li>

                <li>
                  <i className="bi bi-check-circle-fill"></i>
                  {t("aboutStoryPoint4")}
                </li>

              </ul>

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

      {/* =====================================================
          VALEURS
      ===================================================== */}

      <section className={styles.aboutValues}>
        <div className="container">

          <div className={styles.sectionHeading}>

            <span className={styles.sectionLabel}>
              {t("aboutValuesLabel")}
            </span>

            <h2>
              {t("aboutValuesTitle")}
              <span>
                {t("aboutValuesAccent")}
              </span>
            </h2>

            <p>
              {t("aboutValuesSubtitle")}
            </p>

          </div>

          <div className={styles.aboutValuesGrid}>

            {/* MISSION */}

            <div className={styles.valueCard}>

              <div className={styles.valueCardIcon}>
                <i className="bi bi-bullseye"></i>
              </div>

              <h3>
                {t("aboutMissionTitle")}
              </h3>

              <p>
                {t("aboutMissionText")}
              </p>

            </div>

            {/* VISION */}

            <div className={styles.valueCard}>

              <div className={styles.valueCardIcon}>
                <i className="bi bi-binoculars"></i>
              </div>

              <h3>
                {t("aboutVisionTitle")}
              </h3>

              <p>
                {t("aboutVisionText")}
              </p>

            </div>

            {/* VALEURS */}

            <div className={styles.valueCard}>

              <div className={styles.valueCardIcon}>
                <i className="bi bi-gem"></i>
              </div>

              <h3>
                {t("aboutValuesCardTitle")}
              </h3>

              <p>
                {t("aboutValuesCardText")}
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          TIMELINE
      ===================================================== */}

      <section className={styles.aboutTimeline}>
        <div className="container">

          <div className={styles.sectionHeading}>

            <span className={styles.sectionLabel}>
              {t("aboutTimelineLabel")}
            </span>

            <h2>
              {t("aboutTimelineTitle")}
              <span>
                {t("aboutTimelineAccent")}
              </span>
            </h2>

          </div>

          <div className={styles.timeline}>

            {timelineItems.map((item) => (
              <Timeline
                key={item.yearKey}
                icon={item.icon}
                year={t(item.yearKey)}
                title={t(item.titleKey)}
                text={t(item.textKey)}
              />
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FAQ
      ===================================================== */}

      <AboutFaq />
    </>
  );
}


/* =========================================================
   TIMELINE COMPONENT
========================================================= */

function Timeline({
  icon,
  year,
  title,
  text,
}: {
  icon: string;
  year: string;
  title: string;
  text: string;
}) {
  return (
    <div className={styles.timelineItem}>

      <div className={styles.timelineDot}>
        <i className={icon}></i>
      </div>

      <span className={styles.timelineYear}>
        {year}
      </span>

      <h3>
        {title}
      </h3>

      <p>
        {text}
      </p>

    </div>
  );
}