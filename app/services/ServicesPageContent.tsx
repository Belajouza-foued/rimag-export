"use client";

import Link from "next/link";
import { process } from "./data";
import ServiceList from "./ServiceList";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPageContent() {
  const { t } = useLanguage();

  return (
    <>
      {/* HERO */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero__content">
            <span className="services-hero__eyebrow">
              <i className="bi bi-gear-wide-connected"></i>
              {t("services.hero.eyebrow")}
            </span>

            <h1>
              {t("services.hero.title")}{" "}
              <span>{t("services.hero.titleHighlight")}</span>
            </h1>

            <p>{t("services.hero.description")}</p>

            <div className="services-breadcrumb">
              <Link href="/">{t("nav.home")}</Link>
              <span>/</span>
              <span>{t("nav.services")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServiceList />

      {/* PROCESSUS */}
      <section className="services-process">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              {t("services.process.label")}
            </span>

            <h2>
              {t("services.process.title")}{" "}
              <span>{t("services.process.titleHighlight")}</span>
            </h2>

            <p>{t("services.process.description")}</p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <div className="process-card" key={step.step}>
                <span className="process-card__step">
                  {step.step}
                </span>

                <div className="process-card__icon">
                  <i className={step.icon}></i>
                </div>

                <h3>{t(step.title)}</h3>

                <p>{t(step.text)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <div>
              <span className="section-label">
                {t("services.cta.label")}
              </span>

              <h2>{t("services.cta.title")}</h2>

              <p>{t("services.cta.description")}</p>
            </div>

            <Link href="/contact" className="btn-white-custom">
              {t("services.cta.button")}
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}