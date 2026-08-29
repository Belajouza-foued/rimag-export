# Exporia — Next.js

Conversion du site statique (HTML/CSS/JS) en application Next.js (App Router),
avec le même design responsive et les mêmes animations :

- Header : navbar responsive avec menu burger + dropdown "Produits" (avec sous-menus)
- Hero : carousel automatique avec flèches et indicateurs
- Intro : section statique avec stats
- Carousel produits : défilement horizontal, nombre de cartes visibles adapté à la largeur d'écran
- Section Export : cartes avec animation "reveal" au scroll (IntersectionObserver)
- Reviews : témoignages + compteurs animés au scroll
- CTA + Footer

## Installation

```bash
npm install
```

## Lancer en développement

```bash
npm run dev
```

Puis ouvrir http://localhost:3000

## Build production

```bash
npm run build
npm run start
```

## Images

Toutes les images référencées dans le code (logo, produits, hero, etc.)
doivent être placées dans le dossier `public/images/` avec **exactement les
mêmes noms de fichiers** que dans le site d'origine, par exemple :

```
public/images/exporia.png
public/images/date-1.jpg
public/images/frit.jpeg
public/images/olives.jpg
public/images/huile-1.jpg
public/images/tomate.jpg
public/images/biscuit.jpeg
public/images/chocolat.png
public/images/fromage.jpeg
public/images/lait.jpg
public/images/pate.webp
public/images/riz.jpg
public/images/pomme-terre.webp
public/images/chiken.webp
public/images/mayonaise-1.avif
public/images/moutarde.png
public/images/nettoyage.avif
public/images/couche.avif
public/images/export.jpg
public/images/maritime.avif
public/images/logistic.jpg
public/images/commerce.jpg
public/images/export-2.avif
```

## Structure

```
app/
  layout.tsx      -> layout racine (fonts, Bootstrap, Bootstrap Icons, Font Awesome)
  globals.css      -> tout le CSS d'origine (adapté pour Next.js)
  page.tsx         -> page d'accueil, assemble tous les composants
components/
  Header.tsx
  Hero.tsx
  Intro.tsx
  ProductsCarousel.tsx
  ExportSection.tsx
  Reviews.tsx
  CTA.tsx
  Footer.tsx
public/
  images/          -> à compléter avec tes images
```

## Pages à créer

Le header/footer référencent des pages `/about`, `/services`, `/produits`,
`/contact`, ainsi que les catégories de produits (`/agroalimentaire`,
`/hygiene`, `/construction`, `/scolaire-bureautique`). Ces pages n'existaient
pas dans le HTML fourni (seule la page d'accueil `index.html` a été
transmise) : crée-les dans `app/about/page.tsx`, `app/services/page.tsx`,
etc. en suivant le même modèle que `app/page.tsx`.
