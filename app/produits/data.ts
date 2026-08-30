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
    label: "Frites surgelées",
    shortLabel: "Frites",
    description:
      "Frites de pommes de terre sélectionnées, adaptées aux professionnels de la restauration et aux réseaux de distribution.",
    icon: "bi bi-box",
    products: [
      {
        id: "frites-surgelees",
        name: "Frites surgelées",
        description:
          "Frites de pommes de terre surgelées, prêtes à cuire, sélectionnées pour leur texture et leur régularité de calibrage. Un produit adapté aux professionnels de la restauration rapide et traditionnelle, ainsi qu'aux réseaux de distribution.",
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
    label: "Pommes de terre",
    shortLabel: "Pommes de terre",
    description:
      "Pommes de terre sélectionnées pour leur qualité et leur conservation, destinées aux marchés professionnels et internationaux.",
    icon: "bi bi-circle",
    products: [
      {
        id: "pommes-de-terre",
        name: "Pommes de terre",
        description:
          "Pommes de terre sélectionnées pour leur calibre homogène et leur bonne aptitude à la conservation longue durée. Adaptées aux besoins des marchés professionnels, de la transformation agroalimentaire et de l'exportation.",
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
    label: "Poulet",
    shortLabel: "Poulet",
    description:
      "Produits de volaille sélectionnés selon les besoins des professionnels, distributeurs et marchés d'exportation.",
    icon: "bi bi-egg-fried",
    products: [
      {
        id: "poulet",
        name: "Poulet",
        description:
          "Produits de volaille (poulet entier et découpes) contrôlés et calibrés selon les standards de qualité attendus par les professionnels. Une offre flexible adaptée aux volumes de la restauration, de la distribution et de l'export.",
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
    label: "Mayonnaise",
    shortLabel: "Mayonnaise",
    description:
      "Mayonnaise destinée aux professionnels de la restauration, aux distributeurs et aux marchés alimentaires internationaux.",
    icon: "bi bi-droplet-half",
    products: [
      {
        id: "mayonnaise",
        name: "Mayonnaise",
        description:
          "Mayonnaise et sauces d'accompagnement fabriquées selon des recettes constantes, disponibles en différents formats professionnels. Une solution pratique pour les acteurs de la restauration et de la distribution alimentaire.",
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
    label: "Moutarde",
    shortLabel: "Moutarde",
    description:
      "Moutarde de qualité adaptée aux professionnels de l'agroalimentaire, aux distributeurs et aux marchés internationaux.",
    icon: "bi bi-circle-half",
    products: [
      {
        id: "moutarde",
        name: "Moutarde",
        description:
          "Moutarde et condiments sélectionnés pour leur régularité gustative, proposés dans des conditionnements adaptés aux professionnels de l'agroalimentaire, aux distributeurs et à l'export.",
        image: "/images/moutarde.png",
           logo: "/images/moutarde-1.avif", 
      },
    ],
  },
{
  id: "produits-alimentaires",
  label: "Harissa",
  shortLabel: "Alimentaire",
  description:
    "Une gamme de produits alimentaires tunisiens sélectionnés pour répondre aux besoins des distributeurs, importateurs, grossistes et professionnels de la restauration.",
  icon: "bi bi-basket",

  products: [
    {
      id: "harissa",
          name: "Harissa tunisienne",
      description:
        "Harissa tunisienne préparée à partir de piments soigneusement sélectionnés, offrant un goût authentique, une texture caractéristique et un profil épicé apprécié dans la cuisine tunisienne et internationale. Disponible en différents conditionnements adaptés à la distribution et à l'export.",
      image: "/images/hrissa.avif",
      logo: "/images/hrissa-1.jpg",
    },
    
  ],
},
{
  id: "jus",
  label: "Jus de fruits",
  shortLabel: "Jus",
  description:
    "Une sélection de jus de fruits destinée aux distributeurs, importateurs, grossistes, hôtels, restaurants et professionnels de la grande distribution. Des produits adaptés aux différents marchés et aux besoins de l'export international.",

  icon: "bi bi-cup-straw",

  products: [
    {
      id: "jus-de-fruits",
      name: "Jus et Boissons",
      description:
        "Une gamme de jus de fruits sélectionnés pour leur qualité, leur goût et leur fraîcheur. Disponibles en différents parfums et formats selon les besoins des marchés, ces produits sont adaptés à la grande distribution, aux grossistes, aux hôtels, aux restaurants et aux professionnels de la restauration. Les conditionnements peuvent être adaptés aux exigences des importateurs et aux différents marchés internationaux.",

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
  label: "Conserves de la mer",
  shortLabel: "Conserves de la mer",
  description:
    "Une sélection de produits de la mer conditionnés pour la distribution, les grossistes, la restauration et les marchés internationaux.",
  icon: "bi bi-water",

  products: [
    {
      id: "sardines",
      name: "Sardines en conserve",
      description:
        "Sardines tunisiennes soigneusement sélectionnées et conditionnées pour préserver leur fraîcheur, leur goût et leurs qualités nutritionnelles. Disponibles dans différents formats et présentations selon les besoins des importateurs, distributeurs et marchés internationaux.",
      image: "/images/sardine-2.avif",
      logo: "/images/sardine.avif",
    },

    {
      id: "thon",
      name: "Thon en conserve",
      description:
        "Thon de qualité sélectionné et conditionné avec soin afin de préserver sa texture, sa saveur et ses qualités naturelles. Une solution adaptée à la grande distribution, aux grossistes, aux professionnels de la restauration et aux marchés d'exportation.",
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
  label: "Produits d'hygiène",
  shortLabel: "Hygiène",
  description:
    "Une sélection de produits d'hygiène destinée aux distributeurs, grossistes, enseignes de la grande distribution et marchés internationaux.",
  icon: "bi bi-droplet",

  products: [
    {
      id: "papier-hygienique",
      name: "Papier hygiénique",
      description:
        "Produits en papier destinés à l'hygiène quotidienne et aux besoins professionnels. Différents formats, conditionnements et niveaux de qualité peuvent être proposés pour répondre aux exigences des distributeurs, grossistes, hôtels, restaurants et marchés internationaux.",
      image: "/images/papier.avif",
      logo: "/images/pap-1.avif",
    },

    {
      id: "Produits de nettoyage",
      name: "Produits de nettoyage",
      description:
        "Une gamme de produits de nettoyage et d'entretien destinée aux particuliers et aux professionnels. Des solutions adaptées à l'entretien des surfaces, des locaux et des espaces professionnels, avec différents formats et conditionnements selon les besoins des distributeurs et importateurs.",
      image: "/images/nettoyage.avif",
      logo: "/images/nettoyage-logo.avif",
    },
     {
  id: "couches-bebe",
  name: "Couches bébé",
  description:
    "Une gamme de couches bébé conçues pour offrir confort, douceur et protection au quotidien. Des produits adaptés aux besoins des distributeurs, grossistes, pharmacies, enseignes de grande distribution et importateurs. Disponibles en différentes tailles et conditionnements selon les exigences des marchés, avec une sélection pensée pour assurer une bonne absorption, un ajustement confortable et une protection adaptée aux besoins des bébés.",
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
  label: "Fournitures de bureau et scolaires",
  shortLabel: "Bureau & Scolaire",
  description:
    "Une gamme de fournitures scolaires et de bureau destinée aux distributeurs, librairies, grossistes, entreprises et marchés internationaux.",
  icon: "bi bi-pencil-square",

  products: [
    {
      id: "cahiers",
      name: "Cahiers et blocs-notes",
      description:
        "Une sélection de cahiers, blocs-notes et articles en papier adaptés aux besoins scolaires, professionnels et administratifs. Différents formats, nombres de pages et présentations peuvent être proposés selon les exigences des distributeurs et des marchés.",
      image: "/images/cahier-1.avif",
      logo: "/images/cahier.avif",
    },

    {
      id: "stylos",
      name: "Stylos et instruments d'écriture",
      description:
        "Une gamme d'instruments d'écriture comprenant stylos à bille, stylos gel et différents modèles destinés à l'usage scolaire, administratif et professionnel. Des références adaptées à la distribution en volume et aux besoins des grossistes.",
      image: "/images/stylo.avif",
      logo: "/images/stylo-1.avif",
    },

    {
      id: "feutres",
      name: "Feutres et marqueurs",
      description:
        "Feutres, marqueurs et instruments de coloriage destinés aux écoles, bureaux, commerces spécialisés et distributeurs. Une sélection de références adaptées aux différents usages et aux besoins des marchés professionnels.",
      image: "/images/feutres.avif",
      logo: "/images/feutre-1.avif",
    },

    {
      id: "fournitures-scolaires",
      name: "Fournitures scolaires",
      description:
        "Une sélection d'articles scolaires comprenant accessoires d'écriture, classement, dessin et organisation. Des produits destinés aux librairies, distributeurs, grossistes et enseignes spécialisées.",
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
  label: "Materiaux de construction",
  shortLabel: "Construction",
  description:
    "Une sélection de matériaux et produits destinés au secteur de la construction, aux distributeurs, négociants, entreprises et marchés internationaux.",
  icon: "bi bi-bricks",

  products: [
    {
      id: "carrelage",
      name: "Carrelage",
      description:
        "Une sélection de carrelages destinés aux projets résidentiels, commerciaux et professionnels. Différents formats, designs, finitions et usages peuvent être proposés afin de répondre aux besoins des distributeurs, négociants et professionnels du bâtiment.",
      image: "/images/carrelage.avif",
      logo: "/images/carrelage-2.avif",
    },
    {
      id: "outillage",
      name: "Outillage",
      description:
        "Une sélection d'outils et d'équipements destinés aux professionnels et aux particuliers pour les travaux de construction, de rénovation, de maintenance et d'entretien.",
      image: "/images/materiel-batiment.avif",
      logo: "/images/materiel-batiment-1.avif",
    },
    {
      id: "ceramic",
      name: "ceramic",
      description:
        "Une gamme d'accessoires destinés aux travaux de construction et de rénovation. Des produits sélectionnés pour répondre aux besoins des professionnels, distributeurs et négociants spécialisés.",
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