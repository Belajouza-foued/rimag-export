"use client";

import { useEffect, useRef } from "react";
import { services } from "./data";
import styles from "./services.module.css";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServiceList() {
  const rootRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const root = rootRef.current;

    if (!root) return;

    const elements = root.querySelectorAll(`.${styles.svcAnim}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.servicesList} ref={rootRef}>
      <div className="container">
        {services.map((service, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={service.id}
              id={service.id}
              className={`${styles.serviceRow} ${
                reversed ? styles.reverse : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className={`${styles.visual} ${styles.svcAnim} ${
                  reversed ? styles.fromRight : styles.fromLeft
                }`}
              >
                <div className={styles.serviceImage}>
                  <img
                    src={service.image}
                    alt={t(service.title)}
                  />

                  <div className={styles.imageOverlay}></div>

                  {/* NUMÉRO */}
                  <span className={styles.number}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* ICÔNE */}
                  <div className={styles.imageIcon}>
                    <i className={service.icon}></i>
                  </div>
                </div>
              </div>

              {/* TEXTE */}
              <div
                className={`${styles.content} ${styles.svcAnim} ${
                  reversed ? styles.fromLeft : styles.fromRight
                }`}
                style={{
                  transitionDelay: "180ms",
                }}
              >
                <span className={styles.label}>
                  {t("services.service")}{" "}
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h2>{t(service.title)}</h2>

                <p>{t(service.text)}</p>

                <ul className={styles.points}>
                  {service.points.map((point) => (
                    <li key={point}>
                      <i className="bi bi-check-circle-fill"></i>

                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}