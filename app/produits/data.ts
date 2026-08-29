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
    label: "Dattes tunisiennes",
    shortLabel: "Dattes",
    description:
      "Dattes tunisiennes Deglet Nour, sélectionnées avec soin pour leur qualité, leur goût et leur aptitude à l'exportation.",
    icon: "bi bi-flower1",
    products: [
      {
        id: "dattes-deglet-nour",
        name: "Dattes Deglet Nour",
        description:
          "Dattes tunisiennes Deglet Nour de qualité premium, calibrées et triées avec soin.son goût miellé caractéristique et sa conservation naturelle, particulièrement recherché par les importateurs et distributeurs sur les marchés internationaux, notamment en période de fêtes.",
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
    label: "Huiles d'olive",
    shortLabel: "Huiles",
    description:
      "Huile d'olive tunisienne extra vierge, issue d'olives soigneusement sélectionnées et destinée aux marchés internationaux.",
    icon: "bi bi-droplet",
    products: [
      {
        id: "huile-olive-extra-vierge",
        name: "Huile d'olive extra vierge",
        description:
          "Huile d'olive extra vierge tunisienne, extraite à froid pour préserver toutes ses qualités aromatiques et nutritionnelles. Elle se distingue par son goût fruité, sa faible acidité et une légère sensation poivrée en bouche, typique des meilleurs terroirs oléicoles tunisiens. Un produit naturellement apprécié pour ses qualités gustatives et nutritionnelles, qui répond aux exigences des distributeurs, importateurs, grossistes et professionnels de la restauration à la recherche d'un produit tunisien premium destiné aux marchés internationaux.",
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
    label: "Tomates",
    shortLabel: "Tomates",
    icon: "bi bi-circle-fill",
    description:
      "Tomates tunisiennes sélectionnées pour leur fraîcheur et leur qualité, adaptées aux besoins des importateurs et distributeurs.",
    products: [
      {
        id: "tomates-tunisiennes",
        name: "Tomates tunisiennes",
        description:
          "Tomates tunisiennes cultivées dans des conditions optimales, sélectionnées pour leur fraîcheur, leur couleur homogène et leur bonne tenue au transport. Elles répondent aux exigences de qualité des marchés internationaux et conviennent aussi bien à la vente en frais qu'à la transformation industrielle.",
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
    label: "Biscuits",
    shortLabel: "Biscuits",
    description:
      "Biscuits de qualité adaptés aux marchés internationaux, avec différentes références destinées aux distributeurs et grossistes.",
    icon: "bi bi-cookie",
    products: [
      {
        id: "biscuits-tunisiens",
        name: "Biscuits",
        description:
          "Une sélection de biscuits tunisiens fabriqués selon des standards de qualité rigoureux, disponibles en plusieurs références et formats de conditionnement. Adaptés aux réseaux de distribution, grossistes et enseignes à la recherche de produits fiables pour leurs rayons.",
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
    label: "Chocolat",
    shortLabel: "Chocolat",
    description:
      "Une sélection de produits chocolatés de qualité, adaptée aux besoins des distributeurs et aux marchés internationaux.",
    icon: "bi bi-heart",
    products: [
      {
        id: "chocolat",
        name: "Chocolat",
        description:
          "Produits chocolatés sélectionnés pour leur qualité constante et leur bon rapport qualité-prix, disponibles dans différents formats. Une gamme pensée pour répondre aux besoins de distribution en volume tout en garantissant une expérience gustative appréciée des consommateurs finaux.",
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
    label: "Fromages",
    shortLabel: "Fromages",
    description:
      "Sélection de fromages et produits fromagers destinée aux professionnels, distributeurs et marchés internationaux.",
    icon: "bi bi-hexagon",
    products: [
      {
        id: "fromage",
        name: "Fromages",
        description:
          "Une sélection de produits fromagers choisis pour leur qualité et leur régularité, adaptée aux besoins de la restauration, de la distribution et de l'export. Conditionnements variés disponibles selon les volumes recherchés par nos partenaires professionnels.",
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
    label: "Produits laitiers",
    shortLabel: "Lait",
    description:
      "Produits laitiers sélectionnés pour leur qualité et adaptés aux besoins des distributeurs et importateurs.",
    icon: "bi bi-cup-straw",
    products: [
      {
        id: "lait",
        name: "Produits laitiers",
        description:
          "Gamme de produits laitiers (lait UHT, poudre de lait) sélectionnés pour leur qualité et leur stabilité de conservation. Une offre pensée pour répondre aux exigences logistiques des marchés professionnels et de la distribution à grande échelle.",
        image: "/images/lait.jpg",
         logo: "/images/lait-1.avif", // ← nouveau, optionnel,
      },
    ],
  },

  // =====================================================
  // 9. PÂTES
  // =====================================================
  {
    id: "pates",
    label: "Pâtes alimentaires",
    shortLabel: "Pâtes",
    description:
      "Pâtes alimentaires de qualité, adaptées à la distribution et aux marchés internationaux avec différentes possibilités de conditionnement.",
    icon: "bi bi-egg",
    products: [
      {
        id: "pates-alimentaires",
        name: "Pâtes alimentaires",
        description:
          "Pâtes alimentaires fabriquées à partir de semoule de qualité, disponibles dans plusieurs formats et grammages. Un produit de base incontournable pour les distributeurs et grossistes, avec des options de conditionnement adaptées à l'export.",
        image: "/images/spaguetti-1.avif",
         logo: "/images/spaguetti.jpg",  // ← nouveau, optionnel
      },
    ],
  },

  // =====================================================
  // 10. RIZ
  // =====================================================
  {
    id: "riz",
    label: "Riz",
    shortLabel: "Riz",
    description:
      "Riz sélectionné pour sa qualité et adapté aux besoins des importateurs, grossistes et distributeurs alimentaires.",
    icon: "bi bi-basket",
    products: [
      {
        id: "riz",
        name: "Riz",
        description:
          "Riz sélectionné pour sa qualité constante et sa bonne tenue à la cuisson, disponible en plusieurs variétés et conditionnements. Une référence fiable pour les importateurs, grossistes et distributeurs alimentaires recherchant un approvisionnement régulier.",
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