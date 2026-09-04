"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <section className="intro-section">
      <div className="container">
        <div className="intro-grid">

          {/* =========================
              CONTENU
          ========================= */}

          <div className="intro-content">
            <span className="section-label">
              RIMAG EXPORT
            </span>

            <h2>
              {t("introTitle")}
              <span> {t("introAccent")}</span>
            </h2>

            <p>
              {t("introText1")}
            </p>

            <p>
              {t("introText2")}
            </p>

            <Link
              href="/about"
              className="text-link"
            >
              {t("introLink")}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* =========================
              STATISTIQUES
          ========================= */}

          <div className="intro-stats">

            <div className="stat-box">
              <i className="bi bi-box-seam"></i>

              <strong>
                {t("introStat1Title")}
              </strong>

              <span>
                {t("introStat1Text")}
              </span>
            </div>

            <div className="stat-box">
              <i className="bi bi-globe-europe-africa"></i>

              <strong>
                {t("introStat2Title")}
              </strong>

              <span>
                {t("introStat2Text")}
              </span>
            </div>

            <div className="stat-box">
              <i className="bi bi-shield-check"></i>

              <strong>
                {t("introStat3Title")}
              </strong>

              <span>
                {t("introStat3Text")}
              </span>
            </div>

            <div className="stat-box">
              <i className="bi bi-headset"></i>

              <strong>
                {t("introStat4Title")}
              </strong>

              <span>
                {t("introStat4Text")}
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}