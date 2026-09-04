"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/app/produits/data";
import { useLanguage } from "@/contexts/LanguageContext";
import styles from "./Footer.module.css";

/* =========================================================
   CATÉGORIES MISES EN AVANT
========================================================= */

const featuredCategoryIds = [
  "dattes",
  "huiles",
  "hygiene",
  "materiaux",
  "fournitures-bureau",
];

const featuredCategories = featuredCategoryIds
  .map((id) =>
    categories.find((cat) => cat.id === id)
  )
  .filter(
    (cat): cat is (typeof categories)[number] =>
      Boolean(cat)
  );

/* =========================================================
   FOOTER
========================================================= */

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className="container">

        {/* =================================================
            BLOC PRINCIPAL
        ================================================= */}

        <div className={styles.grid}>

          {/* =================================================
              MARQUE
          ================================================= */}

          <div className={styles.brandCol}>

            <Link
              href="/"
              className={styles.brand}
            >
              <Image
                src="/images/exporia.png"
                alt="rimag export footer logo"
                width={56}
                height={56}
                className={styles.brandLogo}
              />

             <div className="rio-rimag">
    <span className="rimag-ri">RI</span>
    <span className="rimag-mag">MAG</span>
    </div>
            </Link>

            <p className={styles.brandText}>
              {t("footerDescription")}
            </p>

            {/* RÉSEAUX SOCIAUX */}

            <div className={styles.social}>

              <a
                href="#"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="#"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="#"
                aria-label="WhatsApp"
              >
                <i className="bi bi-whatsapp"></i>
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className={styles.col}>

            <h4>
              {t("footerNavigation")}
            </h4>

            <ul>

              <li>
                <Link href="/">
                  {t("navHome")}
                </Link>
              </li>

              <li>
                <Link href="/about">
                  {t("navAbout")}
                </Link>
              </li>

              <li>
                <Link href="/services">
                  {t("navServices")}
                </Link>
              </li>

              <li>
                <Link href="/produits">
                  {t("navProducts")}
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  {t("navContact")}
                </Link>
              </li>

            </ul>
          </div>

          {/* =================================================
              PRODUITS
          ================================================= */}

          <div className={styles.col}>

            <h4>
              {t("footerProducts")}
            </h4>

            <ul>

             {featuredCategories.map((cat) => (
  <li key={cat.id}>
    <Link href={`/produits#${cat.id}`}>
      {t(cat.shortLabel)}
    </Link>
  </li>
))}

              <li>
                <Link
                  href="/produits"
                  className={styles.viewAll}
                >
                  {t("footerViewAll")}

                  <i className="bi bi-arrow-right"></i>
                </Link>
              </li>

            </ul>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div className={styles.col}>

            <h4>
              {t("footerContact")}
            </h4>

            <ul className={styles.contactList}>

              {/* PAYS */}

              <li>
                <i className="bi bi-geo-alt-fill"></i>

                <span>
                  {t("footerCountry")}
                </span>
              </li>

              {/* TÉLÉPHONE */}

              <li>
                <i className="bi bi-telephone-fill"></i>

                <a href="tel:+21658860181">
                  +216 58 860 181
                </a>
              </li>

              {/* EMAIL */}

              <li>
                <i className="bi bi-envelope-fill"></i>

                <a href="mailto:contact@rimag.tn">
                  contact@rimag.tn
                </a>
              </li>

              {/* HORAIRES */}

              <li>
                <i className="bi bi-clock-fill"></i>

                <span>
                  {t("footerHours")}
                </span>
              </li>

            </ul>

            {/* CTA */}

            <Link
              href="/contact"
              className={styles.ctaBtn}
            >
              {t("navCta")}

              <i className="bi bi-arrow-right"></i>
            </Link>

          </div>
        </div>

        {/* =================================================
            BARRE DU BAS
        ================================================= */}

        <div className={styles.bottom}>

          <span>
            © {new Date().getFullYear()} RIMAG EXPORT.{" "}
            {t("footerRights")}
          </span>

          <div className={styles.bottomLinks}>

            <Link href="/contact">
              {t("footerLegal")}
            </Link>

            <Link href="/contact">
              {t("footerPrivacy")}
            </Link>

          </div>
        </div>

      </div>
    </footer>
  );
}