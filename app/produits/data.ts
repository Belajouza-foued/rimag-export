// app/produits/data.ts

export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
  logo?: string;
  icon?: string;
};

export type Category = {
  id: string;
  label: string;
  shortLabel: string;
  description: string;
  icon: string;
  products: Product[];
};

export const categories: Category[] = [
  // =====================================================
  // 1. DATTES
  // =====================================================
 {
  id: "dattes",

  label: "products.categories.dattes.label",
  shortLabel: "products.categories.dattes.shortLabel",
  description: 
  "Dattes tunisiennes de qualité, soigneusement sélectionnées pour répondre aux exigences des marchés internationaux.",

  icon: "bi bi-flower1",

  products: [
    {
      id: "dattes-deglet-nour",

      name: "products.items.dattes.name",

      description:
        "products.items.dattes.description",

      image: "/images/date-1.jpg",

      logo: "/images/datte-2.avif",
    },
  ],
},

  // =====================================================
  // 2. HUILES D'OLIVE
  // =====================================================
  {
  id: "huiles",
  label: "products.categories.huiles.label",
  shortLabel: "products.categories.huiles.shortLabel",
  description: "",
  icon: "bi bi-droplet",

  products: [
    {
      id: "huile-olive-extra-vierge",
      name: "products.items.huile-olive-extra-vierge.name",
      description: "products.items.huile-olive-extra-vierge.description",
      image: "/images/extra-2.avif",
      logo: "/images/huile-extra.webp",
    },
  ],
},

  // =====================================================
  // 3. TOMATES
  // =====================================================
  {
    id: "tomates",
    label: "products.categories.tomates.label",
    shortLabel: "products.categories.tomates.shortLabel",
    icon: "bi bi-circle-fill",
    description:
      "products.categories.tomates.description",
    products: [
      {
        id: "tomates-tunisiennes",
        name: "products.items.tomates-tunisiennes.name",
        description:
          "products.items.tomates-tunisiennes.description",
        image: "/images/tomate.jpg",
           logo: "/images/tomate-1.avif", 
      },
    ],
  },

  // =====================================================
  // 5. BISCUITS
  // =====================================================
  {
    id: "biscuits",
    label: "products.categories.biscuits.label",
    shortLabel: "products.categories.biscuits.shortLabel",
    description:
      "products.categories.biscuits.description",
    icon: "bi bi-cookie",
    products: [
      {
        id: "biscuits-tunisiens",
        name: "products.items.biscuits-tunisiens.name",
        description:
          "products.items.biscuits-tunisiens.description",
        image: "/images/biscuit-1.avif",
           logo: "/images/biscuit-2.avif", 
        
      },
    ],
  },

  // =====================================================
  // 6. CHOCOLAT
  // =====================================================
{
  id: "chocolat",
  label: "products.categories.chocolat.label",
  shortLabel: "products.categories.chocolat.shortLabel",
  description: "products.categories.chocolat.description",
  icon: "bi bi-heart",

  products: [
    {
      id: "chocolat",
      name: "products.items.chocolat.name",
      description: "products.items.chocolat.description",
      image: "/images/chocolat.png",
      logo: "/images/chocolat-1.avif",
    },
  ],
},

  // =====================================================
  // 7. FROMAGES
  // =====================================================
  {
    id: "fromage",
    label: "products.categories.fromage.label",
    shortLabel: "products.categories.fromage.shortLabel",
    description:
      "products.categories.fromage.description",
    icon: "bi bi-hexagon",
    products: [
      {
        id: "fromage",
        name: "products.items.fromage.name",
        description:
          "products.items.fromage.description",
        image: "/images/fromage-3.avif",
           logo: "/images/fromage-1.avif", 
      },
    ],
  },

  // =====================================================
  // 8. LAIT
  // =====================================================
 {
  id: "lait",
  label: "products.categories.lait.label",
  shortLabel: "products.categories.lait.shortLabel",
  description: "products.categories.lait.description",
  icon: "bi bi-cup-straw",

  products: [
    {
      id: "lait",
      name: "products.items.lait.name",
      description: "products.items.lait.description",
      image: "/images/lait.jpg",
      logo: "/images/lait-1.avif",
    },
  ],
},

  // =====================================================
  // 9. PÂTES
  // =====================================================
  {
  id: "pates",
  label: "products.categories.pates.label",
  shortLabel: "products.categories.pates.shortLabel",
  description: "products.categories.pates.description",
  icon: "bi bi-egg",

  products: [
    {
      id: "pates-alimentaires",
      name: "products.items.pates-alimentaires.name",
      description: "products.items.pates-alimentaires.description",
      image: "/images/spaguetti-1.avif",
      logo: "/images/spaguetti.jpg",
    },
  ],
},

  // =====================================================
  // 10. RIZ
  // =====================================================
  {
  id: "riz",
  label: "products.categories.riz.label",
  shortLabel: "products.categories.riz.shortLabel",
  description: "products.categories.riz.description",
  icon: "bi bi-basket",

  products: [
    {
      id: "riz",
      name: "products.items.riz.name",
      description: "products.items.riz.description",
      image: "/images/riz-1.avif",
      logo: "/images/riz-4.avif",
    },
  ],
},

  // =====================================================
  // 11. FRITES
  // =====================================================
 {
  id: "frites",
  label: "products.categories.frites.label",
  shortLabel: "products.categories.frites.shortLabel",
  description: "products.categories.frites.description",
  icon: "bi bi-box",
  products: [
    {
      id: "frites-surgelees",
      name: "products.items.frites-surgelees.name",
      description: "products.items.frites-surgelees.description",
      image: "/images/frit.jpeg",
      logo: "/images/frit-3.avif",
    },
  ],
},

  // =====================================================
  // 12. POMMES DE TERRE
  // =====================================================
  {
  id: "pommes-de-terre",
  label: "products.categories.pommes-de-terre.label",
  shortLabel: "products.categories.pommes-de-terre.shortLabel",
  description: "products.categories.pommes-de-terre.description",
  icon: "bi bi-circle",
  products: [
    {
      id: "pommes-de-terre",
      name: "products.items.pommes-de-terre.name",
      description: "products.items.pommes-de-terre.description",
      image: "/images/pomme-1.avif",
      logo: "/images/pomme-2.avif",
    },
  ],
},

  // =====================================================
  // 13. POULET
  // =====================================================
{
  id: "poulet",
  label: "products.categories.poulet.label",
  shortLabel: "products.categories.poulet.shortLabel",
  description: "products.categories.poulet.description",
  icon: "bi bi-egg-fried",
  products: [
    {
      id: "poulet",
      name: "products.items.poulet.name",
      description: "products.items.poulet.description",
      image: "/images/poulet.webp",
      logo: "/images/chiken.webp",
    },
  ],
},

  // =====================================================
  // 14. MAYONNAISE
  // =====================================================
{
  id: "mayonnaise",
  label: "products.categories.mayonnaise.label",
  shortLabel: "products.categories.mayonnaise.shortLabel",
  description: "products.categories.mayonnaise.description",
  icon: "bi bi-droplet-half",
  products: [
    {
      id: "mayonnaise",
      name: "products.items.mayonnaise.name",
      description: "products.items.mayonnaise.description",
      image: "/images/mayonaise-2.avif",
      logo: "/images/mayonaise.webp",
    },
  ],
},

  // =====================================================
  // 15. MOUTARDE
  // =====================================================
{
  id: "moutarde",
  label: "products.categories.moutarde.label",
  shortLabel: "products.categories.moutarde.shortLabel",
  description: "products.categories.moutarde.description",
  icon: "bi bi-circle-half",
  products: [
    {
      id: "moutarde",
      name: "products.items.moutarde.name",
      description: "products.items.moutarde.description",
      image: "/images/moutarde.png",
      logo: "/images/moutarde-1.avif",
    },
  ],
},
{
  id: "produits-alimentaires",
  label: "products.categories.produits-alimentaires.label",
  shortLabel: "products.categories.produits-alimentaires.shortLabel",
  description: "products.categories.produits-alimentaires.description",
  icon: "bi bi-basket",
  products: [
    {
      id: "harissa",
      name: "products.items.harissa.name",
      description: "products.items.harissa.description",
      image: "/images/hrissa.avif",
      logo: "/images/hrissa-1.jpg",
    },
  ],
},
{
  id: "jus",
  label: "products.categories.jus.label",
  shortLabel: "products.categories.jus.shortLabel",
  description: "products.categories.jus.description",
  icon: "bi bi-cup-straw",

  products: [
    {
      id: "jus-de-fruits",
      name: "products.items.jus-de-fruits.name",
      description: "products.items.jus-de-fruits.description",
      image: "/images/jus-1.avif",
      logo: "/images/jus-2.avif",
    },
  ],
},
  // =====================================================
  // 16. HYGIÈNE
  // =====================================================
  
{
  id: "conserves-mer",
  label: "products.categories.conserves-mer.label",
  shortLabel: "products.categories.conserves-mer.shortLabel",
  description: "products.categories.conserves-mer.description",
  icon: "bi bi-water",

  products: [
    {
      id: "sardines",
      name: "products.items.sardines.name",
      description: "products.items.sardines.description",
      image: "/images/sardine-2.avif",
      logo: "/images/sardine.avif",
    },

    {
      id: "thon",
      name: "products.items.thon.name",
      description: "products.items.thon.description",
      image: "/images/thon.avif",
      logo: "/images/thon-2.avif",
    },
  ],
},


// =====================================================
// 17. PRODUITS ALIMENTAIRES
// =====================================================




// =====================================================
// 18. PRODUITS D'HYGIÈNE
// =====================================================

{
  id: "hygiene",
  label: "products.categories.hygiene.label",
  shortLabel: "products.categories.hygiene.shortLabel",
  description: "products.categories.hygiene.description",
  icon: "bi bi-droplet",

  products: [
    {
      id: "papier-hygienique",
      name: "products.items.papier-hygienique.name",
      description: "products.items.papier-hygienique.description",
      image: "/images/papier.avif",
      logo: "/images/pap-1.avif",
    },

    {
      id: "produits-nettoyage",
      name: "products.items.produits-nettoyage.name",
      description: "products.items.produits-nettoyage.description",
      image: "/images/nettoyage.avif",
      logo: "/images/hygiene-1.avif",
    },

    {
      id: "couches-bebe",
      name: "products.items.couches-bebe.name",
      description: "products.items.couches-bebe.description",
      image: "/images/couche-1.avif",
      logo: "/images/couche.avif",
    },
  ],
},


// =====================================================
// 19. FOURNITURES DE BUREAU
// =====================================================

{
  id: "fournitures-bureau",
  label: "products.categories.fournitures-bureau.label",
  shortLabel: "products.categories.fournitures-bureau.shortLabel",
  description: "products.categories.fournitures-bureau.description",
  icon: "bi bi-pencil-square",

  products: [
    {
      id: "cahiers",
      name: "products.items.cahiers.name",
      description: "products.items.cahiers.description",
      image: "/images/cahier-1.avif",
      logo: "/images/cahier.avif",
    },

    {
      id: "stylos",
      name: "products.items.stylos.name",
      description: "products.items.stylos.description",
      image: "/images/stylo.avif",
      logo: "/images/stylo-1.avif",
    },

    {
      id: "feutres",
      name: "products.items.feutres.name",
      description: "products.items.feutres.description",
      image: "/images/feutres.avif",
      logo: "/images/feutre-1.avif",
    },

    {
      id: "fournitures-scolaires",
      name: "products.items.fournitures-scolaires.name",
      description: "products.items.fournitures-scolaires.description",
      image: "/images/fourniture.avif",
      logo: "/images/fourniture-1.avif",
    },
  ],
},


// =====================================================
// 20. MATÉRIAUX DE CONSTRUCTION
// =====================================================

{
  id: "materiaux",
  label: "products.categories.materiaux.label",
  shortLabel: "products.categories.materiaux.shortLabel",
  description: "products.categories.materiaux.description",
  icon: "bi bi-bricks",

  products: [
    {
      id: "carrelage",
      name: "products.items.carrelage.name",
      description: "products.items.carrelage.description",
      image: "/images/carrelage.avif",
      logo: "/images/carrelage-2.avif",
    },

    {
      id: "outillage",
      name: "products.items.outillage.name",
      description: "products.items.outillage.description",
      image: "/images/materiel-batiment.avif",
      logo: "/images/materiel-batiment-1.avif",
    },

    {
      id: "ceramic",
      name: "products.items.ceramic.name",
      description: "products.items.ceramic.description",
      image: "/images/contruction.avif",
      logo: "/images/contruction-1.avif",
    },
  ],
},


// =====================================================
// 21. QUINCAILLERIE & ÉQUIPEMENTS
// =====================================================

];


// =====================================================
// TOTAL PRODUITS
// =====================================================

export const allProductsCount = categories.reduce(
  (total, category) => total + category.products.length,
  0
);