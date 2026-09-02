"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const slides = [
     {
      image: "/images/export-rimag.avif",
      alt: "Rimag export for trading",
      eyebrowIcon: "bi bi-award",
      eyebrow: t("heroRimag"),
     title: (
  <>
  <div className="riomag">
    <span className="rimag-yellow">RI</span>
    <span className="rimag-white">MAG</span></div>
  </>
),
titleAccent: t("heroAccent20"),
      text: t("heroText20"),
      actions: (
        <Link
          href="/produits"
          className="btn-primary-custom"
        >
          {t("heroViewProducts")}
          <i className="bi bi-arrow-right"></i>
        </Link>
      ),
    },
    {
      image: "/images/date-1.jpg",
      alt:
        "Dattes tunisiennes destinées à l'export",
      eyebrowIcon: "bi bi-globe2",
      eyebrow: t("heroExport"),
      title: t("heroTitle1"),
      titleAccent: t("heroAccent1"),
      text: t("heroText1"),
      actions: (
        <>
          <Link
            href="/produits"
            className="btn-primary-custom"
          >
            {t("heroProducts")}
            <i className="bi bi-arrow-right"></i>
          </Link>

          <Link
            href="/contact"
            className="btn-outline-custom"
          >
            {t("heroContact")}
          </Link>
        </>
      ),
    },

    {
      image: "/images/frit.jpeg",
      alt: "Produits alimentaires destinés à l'export",
      eyebrowIcon: "bi bi-award",
      eyebrow: t("heroQuality"),
      title: t("heroTitle2"),
      titleAccent: t("heroAccent2"),
      text: t("heroText2"),
      actions: (
        <Link
          href="/produits"
          className="btn-primary-custom"
        >
          {t("heroViewProducts")}
          <i className="bi bi-arrow-right"></i>
        </Link>
      ),
    },
    
    {
      image: "/images/olives.jpg",
      alt: "Produits alimentaires pour le commerce international",
      eyebrowIcon: "bi bi-box-seam",
      eyebrow: t("heroInternational"),
      title: t("heroTitle3"),
      titleAccent: t("heroAccent3"),
      text: t("heroText3"),
      actions: (
        <Link
          href="/contact"
          className="btn-primary-custom"
        >
          {t("heroQuote")}
          <i className="bi bi-arrow-right"></i>
        </Link>
      ),
    },
  ];

  const [active, setActive] = useState(0);

  const timerRef =
    useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setActive(
      (index + slides.length) % slides.length
    );
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActive(
        (prev) => (prev + 1) % slides.length
      );
    }, 6000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [slides.length]);

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <article
          key={slide.image}
          className={`hero-slide${
            i === active ? " active" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.image}
            alt={slide.alt}
          />

          <div className="hero-slide__overlay"></div>

          <div className="container hero-slide__container">
            <div className="hero-content">
              <span className="hero-eyebrow">
                <i
                  className={slide.eyebrowIcon}
                ></i>

                {slide.eyebrow}
              </span>

              <h1>
                {slide.title}
                <span>{slide.titleAccent}</span>
              </h1>

              <p>{slide.text}</p>

              <div className="hero-actions">
                {slide.actions}
              </div>
            </div>
          </div>
        </article>
      ))}

      {/* INDICATORS */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${
              i === active ? " active" : ""
            }`}
            aria-label={`${t("heroSlide")} ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* ARROWS */}
      <button
        className="hero-arrow hero-arrow--prev"
        aria-label={t("heroPrevious")}
        onClick={() => goTo(active - 1)}
      >
        <i className="bi bi-arrow-left"></i>
      </button>

      <button
        className="hero-arrow hero-arrow--next"
        aria-label={t("heroNext")}
        onClick={() => goTo(active + 1)}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </section>
  );
}