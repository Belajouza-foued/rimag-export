"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories as allProductCategories } from "@/app/produits/data";
import { useLanguage, type TranslationKey } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

/* =====================================================
   GROUPES DU MENU PRODUITS
   -----------------------------------------------------
   labelKey pointe vers une clé du dictionnaire de
   traduction (contexts/LanguageContext.tsx), résolue au
   moment du rendu selon la langue active. Les noms de
   produits/catégories eux-mêmes viennent de data.ts et
   restent en français (catalogue non traduit).
===================================================== */

type MenuGroup = {
  icon: string;
  labelKey: TranslationKey;
  categoryIds?: string[];
  productCategoryId?: string;
};

const menuGroups: MenuGroup[] = [
  {
    icon: "fa-solid fa-wheat-awn",
    labelKey: "groupAgro",
    categoryIds: [
      "dattes",
      "huiles",
      "tomates",
      "biscuits",
      "chocolat",
      "fromage",
      "lait",
      "pates",
      "riz",
      "frites",
      "pommes-de-terre",
      "poulet",
      "mayonnaise",
      "moutarde",
      "produits-alimentaires",
      "jus",
      "conserves-mer",
    ],
  },
  {
    icon: "fa-solid fa-building",
    labelKey: "groupConstruction",
    productCategoryId: "materiaux",
  },
  {
    icon: "fa-solid fa-pump-soap",
    labelKey: "groupHygiene",
    productCategoryId: "hygiene",
  },
  {
    icon: "fa-solid fa-pen-ruler",
    labelKey: "groupSchool",
    productCategoryId: "fournitures-bureau",
  },
];

/* =====================================================
   CONSTRUCTION DU MENU (indépendant de la langue)
===================================================== */

const productCategoriesBase = menuGroups.map((group) => {
  if (group.categoryIds) {
    return {
      icon: group.icon,
      labelKey: group.labelKey,
      items: group.categoryIds
        .map((id) => allProductCategories.find((category) => category.id === id))
        .filter(
          (category): category is (typeof allProductCategories)[number] =>
            Boolean(category)
        )
        .map((category) => ({
          href: `/produits#${category.id}`,
          label: category.label,
        })),
    };
  }

  if (group.productCategoryId) {
    const category = allProductCategories.find(
      (item) => item.id === group.productCategoryId
    );

    return {
      icon: group.icon,
      labelKey: group.labelKey,
      items:
        category?.products.map((product) => ({
          href: `/produits#${product.id}`,
          label: product.name,
        })) ?? [],
    };
  }

  return { icon: group.icon, labelKey: group.labelKey, items: [] };
});

/* =====================================================
   HEADER
===================================================== */

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const { t } = useLanguage();

  const closeMenu = () => {
    setNavOpen(false);
    setProductsOpen(false);
    setOpenSubmenu(null);
  };

  const toggleProducts = (e: React.MouseEvent) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setProductsOpen((value) => !value);
    }
  };

  const toggleSubmenu = (e: React.MouseEvent, labelKey: string) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      setOpenSubmenu((value) => (value === labelKey ? null : labelKey));
    }
  };

  return (
    <header className="site-header">
      {/* =====================================================
          TOP BAR
      ===================================================== */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar__content">
            <div className="top-bar__left">
              <span className="globe-hover">
                <i className="bi bi-globe2"></i>
                {t("topbarExport")}
              </span>

              <span>
                <i className="bi bi-envelope"></i>
                contact@exporia.com
              </span>
            </div>

            <div className="top-bar__right">
              <a href="#" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#" aria-label="WhatsApp">
                <i className="bi bi-whatsapp"></i>
              </a>

              {/* Sélecteur de langue — desktop (caché <768px avec le top-bar) */}
              <LanguageSwitcher variant="desktop" />
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="navbar">
        <div className="container">
          {/* LOGO */}
          <Link href="/" className="brand" onClick={closeMenu}>
            <div className="brand__logo">
              <Image
                src="/images/rimag.png"
                alt="Exporia"
                width={80}
                height={80}
                priority
              />
            </div>

            <div className="brand__name">
              <span className="brand__food">Import</span>
              <span className="brand__nordo">Export</span>
            </div>
          </Link>

          {/* MOBILE BUTTON */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label={navOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={navOpen}
            onClick={() => setNavOpen((value) => !value)}
          >
            <i
              className={navOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
            ></i>
          </button>

          {/* =================================================
              NAVIGATION
          ================================================= */}
          <ul className={`nav-links ${navOpen ? "is-open" : ""}`}>
            <li>
              <Link href="/" onClick={closeMenu}>
                {t("navHome")}
              </Link>
            </li>

            <li>
              <Link href="/about" onClick={closeMenu}>
                {t("navAbout")}
              </Link>
            </li>

            <li>
              <Link href="/services" onClick={closeMenu}>
                {t("navServices")}
              </Link>
            </li>

            {/* =================================================
                PRODUITS
            ================================================= */}
            <li className={`dropdown ${productsOpen ? "is-open" : ""}`}>
              <Link href="/produits" onClick={toggleProducts}>
                {t("navProducts")}
                <i className="fa fa-chevron-down"></i>
              </Link>

              <ul className="dropdown-menu">
                {productCategoriesBase.map((category) => (
                  <li
                    key={category.labelKey}
                    className={`dropdown-submenu ${
                      openSubmenu === category.labelKey ? "is-open" : ""
                    }`}
                  >                   
                                          
                     <a href="#"
                      onClick={(e) => toggleSubmenu(e, category.labelKey)}
                    >
                      <i className={category.icon}></i>
                      <span>{t(category.labelKey)}</span>
                      <i className="fa fa-chevron-right submenu-arrow"></i>
                    </a>

                    <ul className="dropdown-submenu-menu">
                      {category.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} onClick={closeMenu}>
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}

                <li className="dropdown-all-products">
                  <Link href="/produits" onClick={closeMenu}>
                    <i className="fa-solid fa-boxes-stacked"></i>
                    {t("dropdownAll")}
                    <i className="fa fa-arrow-right"></i>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/contact" onClick={closeMenu}>
                {t("navContact")}
              </Link>
            </li>

            {/* Sélecteur de langue — mobile uniquement
                (le top-bar, où vit la version desktop, est
                masqué en dessous de 768px) */}
            <li className="nav-lang-item">
              <LanguageSwitcher variant="mobile" />
            </li>
          </ul>

          {/* CTA */}
          <Link href="/contact" className="navbar__cta" onClick={closeMenu}>
            {t("navCta")}
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </nav>
    </header>
  );
}