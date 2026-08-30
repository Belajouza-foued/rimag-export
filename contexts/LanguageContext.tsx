"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "fr" | "en";

/* =====================================================
   DICTIONNAIRE DE TRADUCTIONS
   -----------------------------------------------------
   Pour l'instant, ne couvre que les textes fixes du
   Header (le contenu du catalogue produits reste en
   français, car il vient de data.ts).
===================================================== */

const translations = {
  fr: {
    topbarExport: "Export international",
    navHome: "Accueil",
    navAbout: "À propos",
    navServices: "Services",
    navProducts: "Produits",
    navContact: "Contact",
    navCta: "Demander un devis",
    dropdownAll: "Voir tous les produits",
    groupAgro: "Agroalimentaire",
    groupConstruction: "Matériaux de construction",
    groupHygiene: "Articles d'hygiène",
    groupSchool: "Scolaire & bureautique",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    heroExport: "Export alimentaire",
heroQuality: "Qualité & sélection",
heroInternational: "Commerce international",

heroTitle1: "Des produits de qualité",
heroAccent1: "pour le monde",
heroText1:
  "Exporia accompagne ses partenaires dans l’exportation de produits alimentaires et de grande consommation.",
heroProducts: "Découvrir nos produits",
heroContact: "Nous contacter",

heroTitle2: "Une sélection pensée",
heroAccent2: "pour vos marchés",
heroText2:
  "Huiles, conserves, produits alimentaires, produits laitiers et bien plus encore.",
heroViewProducts: "Voir les produits",

heroTitle3: "Votre partenaire",
heroAccent3: "pour l’export",
heroText3:
  "Une offre diversifiée et une approche professionnelle pour développer vos marchés.",
heroQuote: "Demander un devis",

heroSlide: "Diapositive",
heroPrevious: "Diapositive précédente",
heroNext: "Diapositive suivante",
exportLabel: "Commerce International",
exportTitle: "Votre partenaire",
exportAccent: " à l'international",
exportSubtitle:
  "Nous accompagnons les entreprises dans leurs opérations d’exportation, de logistique et de commerce international, de la recherche de fournisseurs jusqu’à la livraison.",

exportCard1Title: "Export",
exportCard1Text:
  "Développement des échanges commerciaux vers les marchés internationaux.",

exportCard2Title: "Maritime",
exportCard2Text:
  "Coordination des opérations maritimes et solutions adaptées au transport international.",

exportCard3Title: "Logistique",
exportCard3Text:
  "Organisation et suivi des flux de marchandises pour une chaîne logistique efficace.",

exportCard4Title: "Commerce B2B",
exportCard4Text:
  "Mise en relation entre fournisseurs, importateurs, distributeurs et partenaires.",
  introTitle: "Une passerelle entre",
introAccent: "produits & marchés",

introText1:
  "Exporia est spécialisée dans l’exportation et le commerce international de produits alimentaires et de grande consommation.",

introText2:
  "Nous proposons une gamme diversifiée destinée aux importateurs, distributeurs, grossistes et partenaires professionnels.",

introLink: "Découvrir Exporia",

introStat1Title: "Large gamme",
introStat1Text: "Produits alimentaires & FMCG",

introStat2Title: "Export",
introStat2Text: "Marchés nationaux & internationaux",

introStat3Title: "Qualité",
introStat3Text: "Sélection rigoureuse des produits",

introStat4Title: "Accompagnement",
introStat4Text: "Un partenaire à vos côtés",
/* =========================
   CATALOGUE PRODUITS
========================= */

catalogLabel: "Notre catalogue",

catalogTitle: "Découvrez nos",

catalogAccent: " produits",

catalogSubtitle:
  "Une gamme complète de produits sélectionnés pour répondre aux besoins des professionnels.",

catalogButton: "Voir tout le catalogue",

productsPrevious: "Produits précédents",

productsNext: "Produits suivants",

/* =========================
   PRODUITS
========================= */

productDates: "Dattes",
productDatesText: "Deglet Nour et variétés sélectionnées.",

productOils: "Huiles",
productOilsText: "Huiles alimentaires sélectionnées.",

productTomatoes: "Tomates & concentré",
productTomatoesText: "Conserves et concentrés de tomate.",

productBiscuits: "Biscuits",
productBiscuitsText: "Une sélection de produits sucrés.",

productChocolate: "Chocolat",
productChocolateText: "Tablettes, couverture et confiserie.",

productCheese: "Fromage",
productCheeseText: "Produits laitiers pour professionnels.",

productMilk: "Lait",
productMilkText: "Lait UHT, poudre et produits laitiers.",

productPasta: "Pâtes",
productPastaText: "Spaghetti et pâtes alimentaires.",

productRice: "Riz",
productRiceText: "Riz long grain et différentes variétés.",

productFries: "Frites",
productFriesText: "Produits de pomme de terre surgelés.",

productPotatoes: "Pomme de terre",
productPotatoesText: "Produits frais et transformés.",

productChicken: "Poulet",
productChickenText: "Volaille entière et découpes.",

productMayonnaise: "Mayonnaise",
productMayonnaiseText: "Sauces et accompagnements.",

productMustard: "Moutarde",
productMustardText: "Sauces et condiments.",

productTuna: "Thon",
productTunaText: "Produits de thon et sardines.",

productHygiene: "Hygiène",
productHygieneText: "Produits d'hygiène et d'entretien.",

productConstruction: "Construction",
productConstructionText: "Matériaux et fournitures de construction.",

productSupplies: "Fournitures",
productSuppliesText: "Fournitures scolaires et de bureau.",
/* =========================
   TÉMOIGNAGES
========================= */

reviewsLabel: "Témoignages",

reviewsTitle: "La confiance de nos",

reviewsAccent: " partenaires",

reviewsSubtitle:
  "Notre engagement repose sur la qualité du service, la réactivité et la confiance construite avec nos clients et partenaires à travers les marchés internationaux.",

reviewRole1: "Importateur — Afrique",

reviewText1:
  "Une excellente expérience professionnelle. L'équipe a assuré la coordination de notre opération avec beaucoup de sérieux et de réactivité. Nous apprécions particulièrement leur accompagnement du début jusqu'à la livraison.",

reviewRegionAfrica: "Afrique",

reviewRole2: "Distributeur — Europe",

reviewText2:
  "Un partenaire fiable pour nos opérations internationales. La communication est claire, les délais sont bien suivis et chaque étape logistique est coordonnée avec professionnalisme.",

reviewRegionEurope: "Europe",

reviewRole3: "Partenaire commercial — Golfe",

reviewText3:
  "Nous avons apprécié leur connaissance du commerce international et leur capacité à trouver des solutions adaptées à nos besoins. Une relation professionnelle que nous souhaitons développer dans la durée.",

reviewRegionGulf: "Pays du Golfe",

reviewRole4: "Importateur — Canada",

reviewText4:
  "Une équipe sérieuse et disponible. La gestion de nos échanges et la coordination du transport maritime ont été réalisées avec efficacité. Nous recommandons leur accompagnement.",

reviewRegionNorthAmerica: "Amérique du Nord",

reviewVerified: "Partenaire vérifié",

/* =========================
   STATISTIQUES
========================= */

reviewStatExperience: "Années d'expérience",

reviewStatContinents: "Continents",

reviewStatRelations: "Relations professionnelles",

reviewStatAvailability: "Disponibilité",
/* =========================
   FOOTER
========================= */

footerDescription:
  "Export et commerce international de produits alimentaires et de grande consommation. Votre partenaire fiable pour vos approvisionnements.",

footerNavigation: "Navigation",

footerProducts: "Nos produits",

footerViewAll: "Voir tout le catalogue",

footerContact: "Contact",

footerCountry: "Tunisie",

footerHours: "Lun – Ven, 9h – 18h",

footerRights: "Tous droits réservés.",

footerLegal: "Mentions légales",

footerPrivacy: "Politique de confidentialité",
/* =========================================================
   ABOUT PAGE
========================================================= */

aboutHeroEyebrow: "Qui sommes-nous",

aboutHeroTitle: "À propos d’",

aboutHeroText:
  "Depuis plus de 15 ans, Exporia connecte producteurs et marchés internationaux à travers une offre fiable de produits alimentaires et de grande consommation.",

aboutStoryImage1: "Équipe Exporia",
aboutStoryImage2: "Transport maritime Exporia",
aboutStoryImage3: "Logistique Exporia",

aboutExperience: "Ans d’expérience",

aboutStoryLabel: "Notre histoire",

aboutStoryTitle: "Un partenaire de confiance pour",

aboutStoryAccent: " vos échanges internationaux",

aboutStoryText1:
  "Exporia est née d’une conviction simple : le commerce international mérite des partenaires sérieux, réactifs et capables de sécuriser chaque étape, de la sélection du produit jusqu’à sa livraison.",

aboutStoryText2:
  "Nous accompagnons aujourd’hui des importateurs, distributeurs et grossistes à travers plusieurs continents, avec une gamme diversifiée couvrant l’agroalimentaire, l’hygiène, la construction et la papeterie.",

aboutStoryPoint1:
  "Sélection rigoureuse de fournisseurs et de produits",

aboutStoryPoint2:
  "Coordination logistique et maritime de bout en bout",

aboutStoryPoint3:
  "Accompagnement personnalisé pour chaque partenaire",

aboutStoryPoint4:
  "Présence sur les marchés africains, européens et du Golfe",

aboutStoryButton:
  "Discuter de votre projet",

/* =========================================================
   VALEURS
========================================================= */

aboutValuesLabel: "Notre raison d’être",

aboutValuesTitle: "Mission, vision",

aboutValuesAccent: "& valeurs",

aboutValuesSubtitle:
  "Trois piliers qui guident chacune de nos décisions et chacune de nos relations professionnelles.",

aboutMissionTitle: "Notre mission",

aboutMissionText:
  "Faciliter l’accès de nos partenaires à des produits de qualité, en garantissant fiabilité, traçabilité et respect des délais.",

aboutVisionTitle: "Notre vision",

aboutVisionText:
  "Devenir une référence du commerce international en Afrique et au-delà, reconnue pour son sérieux et sa capacité d’adaptation.",

aboutValuesCardTitle: "Nos valeurs",

aboutValuesCardText:
  "Transparence, réactivité et engagement durable envers chaque partenaire, à chaque étape de la collaboration.",

/* =========================================================
   TIMELINE
========================================================= */

aboutTimelineLabel: "Notre parcours",

aboutTimelineTitle: "Les grandes étapes",

aboutTimelineAccent: " de notre croissance",

timelineYearStart: "Débuts",

timelineTitleStart: "Création d’Exporia",

timelineTextStart:
  "Lancement de l’activité d’export avec une première gamme de produits agroalimentaires.",

timelineYearExpansion: "Expansion",

timelineTitleExpansion:
  "Ouverture à de nouveaux marchés",

timelineTextExpansion:
  "Développement des partenariats vers l’Afrique, l’Europe et les pays du Golfe.",

timelineYearDiversification: "Diversification",

timelineTitleDiversification:
  "Élargissement du catalogue",

timelineTextDiversification:
  "Ajout des gammes hygiène, construction et fournitures scolaires & bureautiques.",

timelineYearToday: "Aujourd’hui",

timelineTitleToday:
  "Un partenaire établi",

timelineTextToday:
  "Une équipe dédiée et un réseau de partenaires actifs sur plusieurs continents.",

/* =========================================================
   FAQ
========================================================= */

faqLabel: "Questions fréquentes",

faqTitle: "Ce que nos",

faqAccent: " partenaires",

faqTitleEnd: "demandent le plus",

faqSubtitle:
  "Retrouvez les réponses aux questions les plus posées par nos clients professionnels avant de démarrer une collaboration.",

faqQuestion1:
  "Quels types de produits proposez-vous à l’export ?",

faqAnswer1:
  "Nous exportons une large gamme de produits alimentaires (dattes, huile d’olive, tomates, pâtes, riz, produits laitiers...) ainsi que des produits d’hygiène, de construction et de fournitures scolaires et bureautiques, adaptés aux besoins des professionnels.",

faqQuestion2:
  "Travaillez-vous avec des grossistes et distributeurs ?",

faqAnswer2:
  "Oui, nous accompagnons des importateurs, distributeurs et grossistes à travers plusieurs continents, avec des conditionnements et des volumes adaptés à chaque type de partenaire professionnel.",

faqQuestion3:
  "Quels sont vos délais de traitement des commandes ?",

faqAnswer3:
  "Les délais varient selon le produit, le volume et la destination. Notre équipe étudie chaque demande individuellement pour proposer un calendrier réaliste, de la préparation à la livraison.",

faqQuestion4:
  "Proposez-vous un accompagnement logistique complet ?",

faqAnswer4:
  "Oui, nous coordonnons l’ensemble de la chaîne logistique : transport maritime, documentation douanière et suivi jusqu’à la livraison finale, pour sécuriser chaque étape de votre approvisionnement.",

faqQuestion5:
  "Comment demander un devis personnalisé ?",

faqAnswer5:
  "Il vous suffit de remplir notre formulaire de contact en précisant les produits et volumes souhaités. Notre équipe vous recontacte sous 24h ouvrées avec une proposition adaptée à votre besoin.",

faqImageAlt:
  "Partenariat professionnel avec Exporia",

faqBadgeTitle:
  "Une question ?",

faqBadgeText:
  "Notre équipe répond sous 24h ouvrées",  

  services: {
  hero: {
    eyebrow: "Ce que nous proposons",
    title: "Nos",
    titleHighlight: "services",
    description:
      "Un accompagnement complet, de la sélection des produits jusqu'à la livraison, pour sécuriser chaque étape de vos opérations internationales.",
  },

  service: "Service",

  items: {
    export: {
      title: "Export international",
      text:
        "Nous accompagnons les entreprises dans leurs opérations d'exportation en proposant des produits sélectionnés et adaptés aux exigences des marchés internationaux.",
      points: [
        "Sélection de produits adaptés",
        "Préparation des opérations d'export",
        "Coordination avec les fournisseurs",
        "Suivi des expéditions",
      ],
    },

    sourcing: {
      title: "Sourcing & sélection",
      text:
        "Nous recherchons des produits et fournisseurs fiables afin de répondre précisément aux besoins des importateurs, grossistes et distributeurs.",
      points: [
        "Recherche de fournisseurs",
        "Sélection des produits",
        "Vérification des besoins",
        "Solutions adaptées aux volumes",
      ],
    },

    logistique: {
      title: "Logistique",
      text:
        "Nous coordonnons les différentes étapes logistiques afin d'assurer une circulation fluide des marchandises, de la préparation jusqu'à la livraison.",
      points: [
        "Organisation du transport",
        "Coordination logistique",
        "Suivi des marchandises",
        "Gestion des différentes étapes",
      ],
    },

    maritime: {
      title: "Transport maritime",
      text:
        "Nous organisons et suivons les opérations de transport maritime pour faciliter l'expédition des marchandises vers leurs destinations internationales.",
      points: [
        "Organisation du fret maritime",
        "Coordination avec les transporteurs",
        "Suivi des départs",
        "Suivi des arrivées",
      ],
    },

    b2b: {
      title: "Commerce B2B",
      text:
        "Nous facilitons les échanges entre producteurs, fournisseurs, importateurs, grossistes et distributeurs professionnels.",
      points: [
        "Mise en relation commerciale",
        "Recherche de partenaires",
        "Développement de marchés",
        "Accompagnement commercial",
      ],
    },

    accompagnement: {
      title: "Accompagnement international",
      text:
        "Nous accompagnons nos partenaires dans leurs projets internationaux avec une approche personnalisée et orientée vers des relations commerciales durables.",
      points: [
        "Conseil personnalisé",
        "Suivi des opérations",
        "Communication avec les partenaires",
        "Accompagnement jusqu'à la livraison",
      ],
    },
  },

  process: {
    label: "Notre méthode",
    title: "Comment nous",
    titleHighlight: "travaillons",
    description:
      "Un processus clair et structuré, pensé pour sécuriser chaque étape de votre projet.",

    steps: [
      {
        title: "Analyse du besoin",
        text:
          "Nous identifions vos besoins, vos produits, vos volumes et vos marchés cibles.",
      },
      {
        title: "Sélection",
        text:
          "Nous recherchons les produits et partenaires correspondant aux exigences de votre projet.",
      },
      {
        title: "Préparation",
        text:
          "Nous coordonnons les documents et les différentes étapes nécessaires à l'opération.",
      },
      {
        title: "Expédition",
        text:
          "Nous suivons l'expédition et la coordination logistique jusqu'à la destination.",
      },
    ],
  },

  cta: {
    label: "Discutons de votre projet",
    title: "Prêt à démarrer votre prochaine opération ?",
    description:
      "Contactez-nous pour un accompagnement adapté à vos besoins et vos marchés cibles.",
    button: "Demander un devis",
  },
},
products: {
  categories: {
    dattes: {
      label: "Dattes tunisiennes",
      shortLabel: "Dattes",
      description:
        "Dattes tunisiennes Deglet Nour, sélectionnées avec soin pour leur qualité, leur goût et leur aptitude à l'exportation.",
    },

    huiles: {
      label: "Huiles d'olive",
      shortLabel: "Huiles",
      description:
        "Huile d'olive tunisienne extra vierge, issue d'olives soigneusement sélectionnées et destinée aux marchés internationaux.",
    },

    tomates: {
      label: "Tomates",
      shortLabel: "Tomates",
      description:
        "Tomates tunisiennes sélectionnées pour leur fraîcheur et leur qualité, adaptées aux besoins des importateurs et distributeurs.",
    },

    biscuits: {
      label: "Biscuits",
      shortLabel: "Biscuits",
      description:
        "Biscuits tunisiens sélectionnés pour leur qualité, leur goût et leur présentation, adaptés aux marchés internationaux.",
    },

    chocolat: {
      label: "Chocolat",
      shortLabel: "Chocolat",
      description:
        "Produits chocolatés sélectionnés pour leur qualité, leur goût et leur conditionnement, adaptés à l'exportation.",
    },

    fromage: {
      label: "Fromages",
      shortLabel: "Fromages",
      description:
        "Une sélection de fromages et produits fromagers choisis pour leur qualité, leur goût et leur régularité. Une gamme adaptée aux besoins des distributeurs, grossistes, hôtels, restaurants et professionnels de l'agroalimentaire, avec différents formats et conditionnements disponibles selon les exigences des marchés internationaux.",
    },

    lait: {
      label: "Produits laitiers",
      shortLabel: "Lait",
      description:
        "Une sélection de produits laitiers de qualité, adaptée aux besoins des distributeurs, importateurs et marchés internationaux.",
    },

    pates: {
      label: "Pâtes alimentaires",
      shortLabel: "Pâtes",
      description:
        "Des pâtes alimentaires de qualité, adaptées aux besoins des distributeurs, grossistes et marchés internationaux.",
    },

    riz: {
      label: "Riz",
      shortLabel: "Riz",
      description:
        "Une sélection de riz de qualité destinée aux importateurs, distributeurs et professionnels des marchés alimentaires internationaux.",
    },

    frites: {
      label: "Frites surgelées",
      shortLabel: "Frites",
      description:
        "Frites surgelées sélectionnées pour leur qualité, leur texture et leur régularité, adaptées à la restauration et à la distribution.",
    },

    "pommes-de-terre": {
      label: "Pommes de terre",
      shortLabel: "Pommes de terre",
      description:
        "Pommes de terre sélectionnées pour leur fraîcheur, leur qualité et leur bonne tenue pendant le transport.",
    },

    poulet: {
      label: "Poulet",
      shortLabel: "Poulet",
      description:
        "Produits de poulet sélectionnés selon des critères stricts de qualité, de fraîcheur et de conformité.",
    },

    mayonnaise: {
      label: "Mayonnaise",
      shortLabel: "Mayonnaise",
      description:
        "Mayonnaise sélectionnée pour sa qualité, sa texture et son goût, adaptée aux marchés de la distribution alimentaire.",
    },

    moutarde: {
      label: "Moutarde",
      shortLabel: "Moutarde",
      description:
        "Moutarde sélectionnée pour son goût et sa qualité, destinée aux distributeurs et importateurs internationaux.",
    },

    "produits-alimentaires": {
      label: "Harissa",
      shortLabel: "Alimentaire",
      description:
        "Une gamme de produits alimentaires tunisiens sélectionnés pour répondre aux besoins des distributeurs, importateurs, grossistes et professionnels de la restauration.",
    },

    jus: {
      label: "Jus de fruits",
      shortLabel: "Jus",
      description:
        "Une sélection de jus de fruits destinée aux distributeurs, importateurs, grossistes, hôtels, restaurants et professionnels de la grande distribution.",
    },

    "conserves-mer": {
      label: "Conserves de la mer",
      shortLabel: "Conserves",
      description:
        "Une sélection de produits de la mer conditionnés pour la distribution, les grossistes, la restauration et les marchés internationaux.",
    },

    hygiene: {
      label: "Produits d'hygiène",
      shortLabel: "Hygiène",
      description:
        "Une sélection de produits d'hygiène destinée aux distributeurs, grossistes, enseignes de la grande distribution et marchés internationaux.",
    },

    "fournitures-bureau": {
      label: "Fournitures de bureau et scolaires",
      shortLabel: "Bureau & Scolaire",
      description:
        "Une gamme de fournitures scolaires et de bureau destinée aux distributeurs, librairies, grossistes, entreprises et marchés internationaux.",
    },

    materiaux: {
      label: "Matériaux de construction",
      shortLabel: "Construction",
      description:
        "Une sélection de matériaux et produits destinés au secteur de la construction, aux distributeurs, négociants, entreprises et marchés internationaux.",
    },
  },

  items: {
    dattes: {
      name: "Dattes Deglet Nour",
      description:
        "Dattes tunisiennes Deglet Nour de qualité premium, calibrées et triées avec soin. Leur goût miellé caractéristique et leur conservation naturelle sont particulièrement recherchés par les importateurs et distributeurs sur les marchés internationaux, notamment en période de fêtes.",
    },

    "huile-olive-extra-vierge": {
      name: "Huile d'olive extra vierge",
      description:
        "Huile d'olive extra vierge tunisienne, extraite à froid pour préserver toutes ses qualités aromatiques et nutritionnelles. Elle se distingue par son goût fruité, sa faible acidité et une légère sensation poivrée en bouche, typique des meilleurs terroirs oléicoles tunisiens.",
    },

    "tomates-tunisiennes": {
      name: "Tomates tunisiennes",
      description:
        "Tomates tunisiennes cultivées dans des conditions optimales, sélectionnées pour leur fraîcheur, leur couleur homogène et leur bonne tenue au transport. Elles répondent aux exigences de qualité des marchés internationaux et conviennent aussi bien à la vente en frais qu'à la transformation industrielle.",
    },

    "biscuits-tunisiens": {
      name: "Biscuits",
      description:
        "Une sélection de biscuits fabriqués selon des standards de qualité rigoureux, disponibles en plusieurs références et formats de conditionnement. Adaptés aux réseaux de distribution, grossistes et enseignes à la recherche de produits fiables pour leurs rayons.",
    },

    chocolat: {
      name: "Chocolat",
      description:
        "Produits chocolatés sélectionnés pour leur qualité constante et leur bon rapport qualité-prix, disponibles dans différents formats. Une gamme adaptée aux besoins des distributeurs, grossistes et marchés internationaux.",
    },

    fromage: {
      name: "Fromages",
      description:
        "Une sélection de fromages et produits fromagers choisis pour leur qualité, leur goût et leur régularité. Une gamme adaptée aux besoins des distributeurs, grossistes, hôtels, restaurants et professionnels de l'agroalimentaire, avec différents formats et conditionnements disponibles selon les exigences des marchés internationaux.",
    },

    lait: {
      name: "Produits laitiers",
      description:
        "Une gamme de produits laitiers comprenant notamment du lait UHT et de la poudre de lait, sélectionnés pour leur qualité, leur régularité et leur bonne stabilité de conservation. Ces produits sont adaptés aux besoins des distributeurs, grossistes, importateurs, hôtels, restaurants et professionnels de l'agroalimentaire. Différents formats et conditionnements peuvent être proposés selon les volumes, les exigences logistiques et les spécificités des marchés internationaux.",
    },

    "pates-alimentaires": {
      name: "Pâtes alimentaires",
      description:
        "Une gamme de pâtes alimentaires fabriquées à partir de semoule de qualité, sélectionnées pour leur régularité, leur bonne tenue à la cuisson et leur qualité constante. Disponibles dans différents formats, formes et conditionnements, elles répondent aux besoins des distributeurs, grossistes, importateurs, hôtels, restaurants et professionnels de l'agroalimentaire. Des solutions de conditionnement adaptées peuvent être proposées selon les volumes et les exigences des marchés internationaux.",
    },

    riz: {
      name: "Riz",
      description:
        "Riz soigneusement sélectionné pour sa qualité, sa régularité et sa bonne tenue à la cuisson. Disponible en différentes variétés et conditionnements, il répond aux besoins des importateurs, distributeurs, grossistes, professionnels de la restauration et acteurs de l'agroalimentaire. Une offre adaptée à l'approvisionnement en volume et aux exigences des marchés internationaux.",
    },

    "frites-surgelees": {
      name: "Frites surgelées",
      description:
        "Frites de pommes de terre surgelées, prêtes à cuire, sélectionnées pour leur texture et leur régularité de calibrage.",
    },

    "pommes-de-terre": {
      name: "Pommes de terre",
      description:
        "Pommes de terre sélectionnées pour leur calibre homogène et leur bonne aptitude à la conservation longue durée.",
    },

    poulet: {
      name: "Poulet",
      description:
        "Produits de volaille contrôlés et calibrés selon les standards de qualité attendus par les professionnels.",
    },

    mayonnaise: {
      name: "Mayonnaise",
      description:
        "Mayonnaise et sauces d'accompagnement fabriquées selon des recettes constantes, disponibles en différents formats professionnels.",
    },

    moutarde: {
      name: "Moutarde",
      description:
        "Moutarde et condiments sélectionnés pour leur régularité gustative, proposés dans des conditionnements adaptés aux professionnels.",
    },

    harissa: {
      name: "Harissa tunisienne",
      description:
        "Harissa tunisienne préparée à partir de piments soigneusement sélectionnés, offrant un goût authentique et un profil épicé apprécié dans la cuisine tunisienne et internationale.",
    },

    "jus-de-fruits": {
      name: "Jus et boissons",
      description:
        "Une gamme de jus de fruits sélectionnés pour leur qualité, leur goût et leur fraîcheur, disponibles en différents parfums et formats.",
    },

    sardines: {
      name: "Sardines en conserve",
      description:
        "Sardines tunisiennes soigneusement sélectionnées et conditionnées pour préserver leur fraîcheur, leur goût et leurs qualités nutritionnelles.",
    },

    thon: {
      name: "Thon en conserve",
      description:
        "Thon de qualité sélectionné et conditionné avec soin afin de préserver sa texture, sa saveur et ses qualités naturelles.",
    },

    "papier-hygienique": {
      name: "Papier hygiénique",
      description:
        "Produits en papier destinés à l'hygiène quotidienne et aux besoins professionnels, avec différents formats et conditionnements.",
    },

    "Produits de nettoyage": {
      name: "Produits de nettoyage",
      description:
        "Une gamme de produits de nettoyage et d'entretien destinée aux particuliers et aux professionnels.",
    },

    "couches-bebe": {
      name: "Couches bébé",
      description:
        "Une gamme de couches bébé conçues pour offrir confort, douceur et protection au quotidien.",
    },

    cahiers: {
      name: "Cahiers et blocs-notes",
      description:
        "Une sélection de cahiers, blocs-notes et articles en papier adaptés aux besoins scolaires, professionnels et administratifs.",
    },

    stylos: {
      name: "Stylos et instruments d'écriture",
      description:
        "Une gamme d'instruments d'écriture comprenant stylos à bille, stylos gel et différents modèles destinés à l'usage scolaire et professionnel.",
    },

    feutres: {
      name: "Feutres et marqueurs",
      description:
        "Feutres, marqueurs et instruments de coloriage destinés aux écoles, bureaux et distributeurs.",
    },

    "fournitures-scolaires": {
      name: "Fournitures scolaires",
      description:
        "Une sélection d'articles scolaires comprenant accessoires d'écriture, classement, dessin et organisation.",
    },

    carrelage: {
      name: "Carrelage",
      description:
        "Une sélection de carrelages destinés aux projets résidentiels, commerciaux et professionnels.",
    },

    outillage: {
      name: "Outillage",
      description:
        "Une sélection d'outils et d'équipements destinés aux professionnels et aux particuliers pour les travaux de construction, rénovation et maintenance.",
    },

    ceramic: {
      name: "Céramique",
      description:
        "Une gamme d'accessoires destinés aux travaux de construction et de rénovation, sélectionnés pour répondre aux besoins des professionnels.",
    },
  },

  search: "Rechercher un produit...",
  clear: "Effacer la recherche",
  all: "Tous",
  product: "produit",
  products: "produits",
  noResults: "Aucun produit trouvé",
  noResultsDescription: "Aucun produit ne correspond à votre recherche.",
  reset: "Réinitialiser la recherche",
  readMore: "Lire la suite",
  readLess: "Lire moins",
  requestQuote: "Demander un devis",
},

  readMore: "Lire la suite",
readLess: "Lire moins",
requestQuote: "Demander un devis",
  search: "Rechercher un produit...",
  clear: "Effacer la recherche",
  all: "Tous",
  product: "produit",
   noResults: "Aucun produit trouvé",
  noResultsDescription:
    "Aucun produit ne correspond à votre recherche.",
  reset: "Réinitialiser la recherche",

  },
  en: {
    topbarExport: "International export",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProducts: "Products",
    navContact: "Contact",
    navCta: "Request a quote",
    dropdownAll: "View all products",
    groupAgro: "Food & Beverages",
    groupConstruction: "Construction materials",
    groupHygiene: "Hygiene products",
    groupSchool: "School & office supplies",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    heroExport: "Food Export",
heroQuality: "Quality & Selection",
heroInternational: "International Trade",

heroTitle1: "Quality products",
heroAccent1: "for global markets",
heroText1:
  "Exporia supports its partners in exporting food products and fast-moving consumer goods.",
heroProducts: "Discover our products",
heroContact: "Contact us",

heroTitle2: "A carefully selected range",
heroAccent2: "for your markets",
heroText2:
  "Oils, canned goods, food products, dairy products and much more.",
heroViewProducts: "View products",

heroTitle3: "Your trusted partner",
heroAccent3: "for export",
heroText3:
  "A diversified product range and a professional approach to help you develop your markets.",
heroQuote: "Request a quote",

heroSlide: "Slide",
heroPrevious: "Previous slide",
heroNext: "Next slide",
exportLabel: "International Trade",
exportTitle: "Your partner",
exportAccent: " in international trade",
exportSubtitle:
  "We support companies in their export, logistics and international trade operations, from supplier sourcing to delivery.",

exportCard1Title: "Export",
exportCard1Text:
  "Developing commercial exchanges and expanding business opportunities in international markets.",

exportCard2Title: "Maritime",
exportCard2Text:
  "Coordination of maritime operations and tailored solutions for international transportation.",

exportCard3Title: "Logistics",
exportCard3Text:
  "Organization and monitoring of goods flows for an efficient and reliable supply chain.",

exportCard4Title: "B2B Trade",
exportCard4Text:
  "Connecting suppliers, importers, distributors and business partners.",
  introTitle: "A bridge between",
introAccent: "products & markets",

introText1:
  "Exporia specializes in the export and international trade of food products and fast-moving consumer goods.",

introText2:
  "We offer a diversified range designed for importers, distributors, wholesalers and professional partners.",

introLink: "Discover Exporia",

introStat1Title: "Wide range",
introStat1Text: "Food products & FMCG",

introStat2Title: "Export",
introStat2Text: "Domestic & international markets",

introStat3Title: "Quality",
introStat3Text: "Careful product selection",

introStat4Title: "Support",
introStat4Text: "A partner by your side",
/* =========================
   PRODUCT CATALOG
========================= */

catalogLabel: "Our catalogue",

catalogTitle: "Discover our",

catalogAccent: " products",

catalogSubtitle:
  "A complete range of carefully selected products designed to meet the needs of professionals.",

catalogButton: "View full catalogue",

productsPrevious: "Previous products",

productsNext: "Next products",

/* =========================
   PRODUCTS
========================= */

productDates: "Dates",
productDatesText: "Deglet Nour and selected varieties.",

productOils: "Oils",
productOilsText: "Selected edible oils.",

productTomatoes: "Tomatoes & paste",
productTomatoesText: "Canned tomatoes and tomato paste.",

productBiscuits: "Biscuits",
productBiscuitsText: "A selection of sweet products.",

productChocolate: "Chocolate",
productChocolateText: "Chocolate bars, couverture and confectionery.",

productCheese: "Cheese",
productCheeseText: "Dairy products for professionals.",

productMilk: "Milk",
productMilkText: "UHT milk, milk powder and dairy products.",

productPasta: "Pasta",
productPastaText: "Spaghetti and pasta products.",

productRice: "Rice",
productRiceText: "Long-grain rice and different varieties.",

productFries: "French fries",
productFriesText: "Frozen potato products.",

productPotatoes: "Potatoes",
productPotatoesText: "Fresh and processed potato products.",

productChicken: "Chicken",
productChickenText: "Whole poultry and cuts.",

productMayonnaise: "Mayonnaise",
productMayonnaiseText: "Sauces and accompaniments.",

productMustard: "Mustard",
productMustardText: "Sauces and condiments.",

productTuna: "Tuna",
productTunaText: "Tuna and sardine products.",

productHygiene: "Hygiene",
productHygieneText: "Hygiene and cleaning products.",

productConstruction: "Construction",
productConstructionText: "Construction materials and supplies.",

productSupplies: "Supplies",
productSuppliesText: "School and office supplies.",
/* =========================
   REVIEWS
========================= */

reviewsLabel: "Testimonials",

reviewsTitle: "The trust of our",

reviewsAccent: " partners",

reviewsSubtitle:
  "Our commitment is built on service quality, responsiveness and the trust established with our clients and partners across international markets.",

reviewRole1: "Importer — Africa",

reviewText1:
  "An excellent professional experience. The team coordinated our operation with great professionalism and responsiveness. We particularly appreciated their support from the beginning through to delivery.",

reviewRegionAfrica: "Africa",

reviewRole2: "Distributor — Europe",

reviewText2:
  "A reliable partner for our international operations. Communication is clear, deadlines are closely monitored and every logistical step is coordinated professionally.",

reviewRegionEurope: "Europe",

reviewRole3: "Business Partner — Gulf",

reviewText3:
  "We appreciated their knowledge of international trade and their ability to find solutions adapted to our needs. A professional relationship that we look forward to developing over the long term.",

reviewRegionGulf: "Gulf Countries",

reviewRole4: "Importer — Canada",

reviewText4:
  "A serious and responsive team. The management of our exchanges and the coordination of maritime transport were handled efficiently. We highly recommend their support.",

reviewRegionNorthAmerica: "North America",

reviewVerified: "Verified partner",

/* =========================
   STATISTICS
========================= */

reviewStatExperience: "Years of experience",

reviewStatContinents: "Continents",

reviewStatRelations: "Professional relationships",

reviewStatAvailability: "Availability",
/* =========================
   FOOTER
========================= */

footerDescription:
  "International export and trade of food products and fast-moving consumer goods. Your reliable partner for sourcing and supply.",

footerNavigation: "Navigation",

footerProducts: "Our products",

footerViewAll: "View full catalogue",

footerContact: "Contact",

footerCountry: "Tunisia",

footerHours: "Mon – Fri, 9 AM – 6 PM",

footerRights: "All rights reserved.",

footerLegal: "Legal notice",

footerPrivacy: "Privacy policy",
/* =========================================================
   ABOUT PAGE
========================================================= */

aboutHeroEyebrow: "Who we are",

aboutHeroTitle: "About ",

aboutHeroText:
  "For over 15 years, Exporia has been connecting producers with international markets through a reliable range of food products and fast-moving consumer goods.",

aboutStoryImage1: "Exporia team",
aboutStoryImage2: "Exporia maritime transport",
aboutStoryImage3: "Exporia logistics",

aboutExperience: "Years of experience",

aboutStoryLabel: "Our story",

aboutStoryTitle: "A trusted partner for",

aboutStoryAccent: " your international trade",

aboutStoryText1:
  "Exporia was founded on a simple belief: international trade requires serious, responsive partners capable of securing every step, from product selection to final delivery.",

aboutStoryText2:
  "Today, we support importers, distributors and wholesalers across several continents, with a diversified range covering food products, hygiene, construction and stationery.",

aboutStoryPoint1:
  "Careful selection of suppliers and products",

aboutStoryPoint2:
  "End-to-end logistics and maritime coordination",

aboutStoryPoint3:
  "Personalized support for every partner",

aboutStoryPoint4:
  "Presence across African, European and Gulf markets",

aboutStoryButton:
  "Discuss your project",

/* =========================================================
   VALUES
========================================================= */

aboutValuesLabel: "Our purpose",

aboutValuesTitle: "Mission, vision",

aboutValuesAccent: "& values",

aboutValuesSubtitle:
  "Three pillars that guide every decision we make and every professional relationship we build.",

aboutMissionTitle: "Our mission",

aboutMissionText:
  "To facilitate our partners’ access to quality products while ensuring reliability, traceability and respect for delivery deadlines.",

aboutVisionTitle: "Our vision",

aboutVisionText:
  "To become a leading reference in international trade in Africa and beyond, recognized for our reliability and ability to adapt.",

aboutValuesCardTitle: "Our values",

aboutValuesCardText:
  "Transparency, responsiveness and long-term commitment to every partner throughout every stage of the collaboration.",

/* =========================================================
   TIMELINE
========================================================= */

aboutTimelineLabel: "Our journey",

aboutTimelineTitle: "Key milestones",

aboutTimelineAccent: " in our growth",

timelineYearStart: "Beginnings",

timelineTitleStart: "Exporia is founded",

timelineTextStart:
  "Launch of the export activity with an initial range of food products.",

timelineYearExpansion: "Expansion",

timelineTitleExpansion:
  "Entering new markets",

timelineTextExpansion:
  "Development of partnerships across Africa, Europe and the Gulf countries.",

timelineYearDiversification: "Diversification",

timelineTitleDiversification:
  "Expanding the catalogue",

timelineTextDiversification:
  "Addition of hygiene, construction and school & office supply product ranges.",

timelineYearToday: "Today",

timelineTitleToday:
  "An established partner",

timelineTextToday:
  "A dedicated team and an active network of partners across several continents.",

/* =========================================================
   FAQ
========================================================= */

faqLabel: "Frequently asked questions",

faqTitle: "What our",

faqAccent: " partners",

faqTitleEnd: "ask most often",

faqSubtitle:
  "Find answers to the questions most frequently asked by our professional clients before starting a collaboration.",

faqQuestion1:
  "What types of products do you export?",

faqAnswer1:
  "We export a wide range of food products (dates, olive oil, tomatoes, pasta, rice, dairy products...) as well as hygiene, construction and school and office supplies, adapted to professional needs.",

faqQuestion2:
  "Do you work with wholesalers and distributors?",

faqAnswer2:
  "Yes, we work with importers, distributors and wholesalers across several continents, with packaging and volumes adapted to each type of professional partner.",

faqQuestion3:
  "What are your order processing times?",

faqAnswer3:
  "Lead times vary depending on the product, volume and destination. Our team reviews each request individually to provide a realistic schedule from preparation through delivery.",

faqQuestion4:
  "Do you provide complete logistics support?",

faqAnswer4:
  "Yes, we coordinate the entire logistics chain, including maritime transport, customs documentation and tracking through to final delivery, helping secure every stage of your supply process.",

faqQuestion5:
  "How can I request a customized quote?",

faqAnswer5:
  "Simply fill out our contact form with the products and quantities you require. Our team will get back to you within one business day with a proposal tailored to your needs.",

faqImageAlt:
  "Professional partnership with Exporia",

faqBadgeTitle:
  "Have a question?",

faqBadgeText:
  "Our team responds within one business day",
  /*service*/

  services: {
    hero: {
      eyebrow: "What we offer",
      title: "Our",
      titleHighlight: "services",
      description:
        "Comprehensive support, from product selection to delivery, designed to secure every step of your international operations.",
    },

    service: "Service",

    items: {
      export: {
        title: "International Export",
        text:
          "We support companies in their export operations by providing selected products adapted to the requirements of international markets.",
        points: [
          "Selection of suitable products",
          "Export operation preparation",
          "Supplier coordination",
          "Shipment tracking",
        ],
      },

      sourcing: {
        title: "Sourcing & Selection",
        text:
          "We identify reliable products and suppliers to meet the specific needs of importers, wholesalers and professional distributors.",
        points: [
          "Supplier sourcing",
          "Product selection",
          "Needs assessment",
          "Solutions adapted to volumes",
        ],
      },

      logistique: {
        title: "Logistics",
        text:
          "We coordinate the different logistics stages to ensure the smooth movement of goods, from preparation to delivery.",
        points: [
          "Transport organization",
          "Logistics coordination",
          "Goods tracking",
          "Management of the different stages",
        ],
      },

      maritime: {
        title: "Maritime Transport",
        text:
          "We organize and monitor maritime transport operations to facilitate the shipment of goods to international destinations.",
        points: [
          "Sea freight organization",
          "Carrier coordination",
          "Departure tracking",
          "Arrival tracking",
        ],
      },

      b2b: {
        title: "B2B Trade",
        text:
          "We facilitate business exchanges between producers, suppliers, importers, wholesalers and professional distributors.",
        points: [
          "Business matchmaking",
          "Partner sourcing",
          "Market development",
          "Commercial support",
        ],
      },

      accompagnement: {
        title: "International Support",
        text:
          "We support our partners in their international projects through a personalized approach focused on building long-term business relationships.",
        points: [
          "Personalized advice",
          "Operations monitoring",
          "Partner communication",
          "Support through to delivery",
        ],
      },
    },

    // =========================
    // PROCESS
    // =========================

    process: {
      label: "Our approach",
      title: "How we",
      titleHighlight: "work",
      description:
        "A clear and structured process designed to secure every stage of your project.",

      steps: [
        {
          title: "Needs Analysis",
          text:
            "We identify your needs, products, volumes and target markets.",
        },
        {
          title: "Selection",
          text:
            "We find products and partners that match the requirements of your project.",
        },
        {
          title: "Preparation",
          text:
            "We coordinate the documents and different steps required for the operation.",
        },
        {
          title: "Shipment",
          text:
            "We monitor the shipment and logistics coordination through to the destination.",
        },
      ],
    },

    // =========================
    // CTA
    // =========================

    cta: {
      label: "Let's discuss your project",
      title: "Ready to start your next operation?",
      description:
        "Contact us for support tailored to your needs and target markets.",
      button: "Request a Quote",
    },
  },
products: {
  categories: {
    dattes: {
      label: "Tunisian Dates",
      shortLabel: "Dates",
         },

    huiles: {
      label: "Olive Oils",
      shortLabel: "Oils",
      description:
        "Tunisian extra virgin olive oil, made from carefully selected olives and intended for international markets.",
    },

    tomates: {
      label: "Tomatoes",
      shortLabel: "Tomatoes",
      description:
        "Tunisian tomatoes selected for their freshness and quality, suitable for the needs of importers and distributors.",
    },

    biscuits: {
      label: "Biscuits",
      shortLabel: "Biscuits",
      description:
        "Tunisian biscuits selected for their quality, taste and presentation, suitable for international markets.",
    },

    chocolat: {
      label: "Chocolate",
      shortLabel: "Chocolate",
      description:
        "High-quality Tunisian dates, carefully selected to meet the requirements of international markets.",
    },

    fromage: {
      label: "Cheese",
      shortLabel: "Cheese",
      description:
        "A selection of cheese and dairy products chosen for their quality, taste and consistency. A range designed to meet the needs of distributors, wholesalers, hotels, restaurants and food industry professionals, with different formats and packaging options available for international markets.",
    },

    lait: {
      label: "Dairy Products",
      shortLabel: "Dairy",
      description:
        "A selection of quality dairy products designed to meet the needs of distributors, importers and international markets.",
    },

    pates: {
      label: "Pasta",
      shortLabel: "Pasta",
      description:
        "Quality pasta products designed to meet the needs of distributors, wholesalers and international markets.",
    },

    riz: {
      label: "Rice",
      shortLabel: "Rice",
      description:
        "A selection of quality rice for importers, distributors and professionals in international food markets.",
    },

    frites: {
      label: "Frozen French Fries",
      shortLabel: "Fries",
      description:
        "Frozen French fries selected for their quality, texture and consistency, suitable for foodservice and distribution.",
    },

    "pommes-de-terre": {
      label: "Potatoes",
      shortLabel: "Potatoes",
      description:
        "Potatoes selected for their freshness, quality and good transportability.",
    },

    poulet: {
      label: "Chicken",
      shortLabel: "Chicken",
      description:
        "Chicken products selected according to strict quality, freshness and compliance standards.",
    },

    mayonnaise: {
      label: "Mayonnaise",
      shortLabel: "Mayonnaise",
      description:
        "Mayonnaise selected for its quality, texture and taste, suitable for food distribution markets.",
    },

    moutarde: {
      label: "Mustard",
      shortLabel: "Mustard",
      description:
        "Mustard selected for its taste and quality, intended for international distributors and importers.",
    },

    "produits-alimentaires": {
      label: "Harissa",
      shortLabel: "Food Products",
      description:
        "A range of Tunisian food products selected to meet the needs of distributors, importers, wholesalers and foodservice professionals.",
    },

    jus: {
      label: "Fruit Juices",
      shortLabel: "Juices",
      description:
        "A selection of fruit juices intended for distributors, importers, wholesalers, hotels, restaurants and large-scale retailers.",
    },

    "conserves-mer": {
      label: "Canned Seafood",
      shortLabel: "Canned Seafood",
      description:
        "A selection of seafood products packed for distribution, wholesalers, foodservice and international markets.",
    },

    hygiene: {
      label: "Hygiene Products",
      shortLabel: "Hygiene",
      description:
        "A selection of hygiene products intended for distributors, wholesalers, retailers and international markets.",
    },

    "fournitures-bureau": {
      label: "Office & School Supplies",
      shortLabel: "Office & School",
      description:
        "A range of school and office supplies intended for distributors, bookstores, wholesalers, companies and international markets.",
    },

    materiaux: {
      label: "Construction Materials",
      shortLabel: "Construction",
      description:
        "A selection of materials and products for the construction sector, distributors, traders, contractors and international markets.",
    },
  },

  items: {
    dattes: {
      name: "Deglet Nour Dates",
      description:
        "Premium Tunisian Deglet Nour dates, carefully graded and sorted. Their characteristic honey-like taste and natural shelf life are particularly appreciated by importers and distributors in international markets, especially during festive periods.",
    },

    "huile-olive-extra-vierge": {
      name: "Extra Virgin Olive Oil",
      description:
        "Tunisian extra virgin olive oil, cold-pressed to preserve all its aromatic and nutritional qualities. It is distinguished by its fruity taste, low acidity and subtle peppery sensation, typical of the finest Tunisian olive-growing regions.",
    },

    "tomates-tunisiennes": {
      name: "Tunisian Tomatoes",
      description:
        "Tunisian tomatoes grown under optimal conditions and selected for their freshness, uniform color and excellent transportability. They meet international quality requirements and are suitable for both fresh produce sales and industrial processing.",
    },

    "biscuits-tunisiens": {
      name: "Biscuits",
      description:
        "A selection of biscuits manufactured according to rigorous quality standards, available in several varieties and packaging formats. Suitable for distributors, wholesalers and retailers looking for reliable products.",
    },

    chocolat: {
      name: "Chocolate",
      description:
        "Chocolate products selected for their consistent quality and good value for money, available in different formats. A range designed for distributors, wholesalers and international markets.",
    },

    fromage: {
      name: "Cheese",
      description:
        "A carefully selected range of cheese and dairy products chosen for their quality, taste and consistent standards. Available in different formats and packaging options, our products are suitable for distributors, wholesalers, hotels, restaurants and food service professionals. This range is designed to meet the requirements of international markets and provide reliable solutions for professional food distribution.",
    },

    lait: {
      name: "Dairy Products",
      description:
        "A range of dairy products including UHT milk and milk powder, carefully selected for their quality, consistency and good shelf stability. These products are suitable for distributors, wholesalers, importers, hotels, restaurants and food industry professionals. Different formats and packaging options can be offered according to order volumes, logistical requirements and the specific needs of international markets.",
    },

    "pates-alimentaires": {
      name: "Pasta",
      description:
        "A range of pasta products made from quality semolina, carefully selected for their consistency, excellent cooking performance and reliable quality. Available in different shapes, formats and packaging options, the range is suitable for distributors, wholesalers, importers, hotels, restaurants and food industry professionals. Packaging solutions can be adapted according to order volumes and the specific requirements of international markets.",
    },

    riz: {
      name: "Rice",
      description:
        "Carefully selected rice known for its quality, consistency and excellent cooking performance. Available in different varieties and packaging options, it is suitable for importers, distributors, wholesalers, food service professionals and food industry operators. A reliable solution for bulk supply and the requirements of international markets.",
    },

    "frites-surgelees": {
      name: "Frozen French Fries",
      description:
        "Frozen, ready-to-cook French fries selected for their texture and consistent sizing.",
    },

    "pommes-de-terre": {
      name: "Potatoes",
      description:
        "Potatoes selected for their uniform size and good long-term storage properties.",
    },

    poulet: {
      name: "Chicken",
      description:
        "Chicken products inspected and graded according to quality standards expected by professional buyers.",
    },

    mayonnaise: {
      name: "Mayonnaise",
      description:
        "Mayonnaise and accompanying sauces manufactured according to consistent recipes and available in various professional formats.",
    },

    moutarde: {
      name: "Mustard",
      description:
        "Mustard and condiments selected for consistent taste and offered in packaging formats suitable for foodservice professionals.",
    },

    harissa: {
      name: "Tunisian Harissa",
      description:
        "Tunisian harissa made from carefully selected peppers, offering an authentic taste and a spicy profile appreciated in Tunisian and international cuisine.",
    },

    "jus-de-fruits": {
      name: "Juices & Beverages",
      description:
        "A range of fruit juices selected for their quality, taste and freshness, available in various flavors and formats.",
    },

    sardines: {
      name: "Canned Sardines",
      description:
        "Carefully selected Tunisian sardines packed to preserve their freshness, taste and nutritional qualities.",
    },

    thon: {
      name: "Canned Tuna",
      description:
        "Quality tuna carefully selected and packed to preserve its texture, flavor and natural qualities.",
    },

    "papier-hygienique": {
      name: "Toilet Paper",
      description:
        "Paper products intended for daily hygiene and professional needs, available in different formats and packaging options.",
    },

    "Produits de nettoyage": {
      name: "Cleaning Products",
      description:
        "A range of cleaning and maintenance products intended for households and professional users.",
    },

    "couches-bebe": {
      name: "Baby Diapers",
      description:
        "A range of baby diapers designed to provide comfort, softness and everyday protection.",
    },

    cahiers: {
      name: "Notebooks & Writing Pads",
      description:
        "A selection of notebooks, writing pads and paper products suitable for school, professional and administrative needs.",
    },

    stylos: {
      name: "Pens & Writing Instruments",
      description:
        "A range of writing instruments including ballpoint pens, gel pens and various models for school and professional use.",
    },

    feutres: {
      name: "Markers & Felt-tip Pens",
      description:
        "Markers, felt-tip pens and coloring instruments intended for schools, offices and distributors.",
    },

    "fournitures-scolaires": {
      name: "School Supplies",
      description:
        "A selection of school supplies including writing, filing, drawing and organization accessories.",
    },

    carrelage: {
      name: "Tiles",
      description:
        "A selection of tiles intended for residential, commercial and professional projects.",
    },

    outillage: {
      name: "Tools",
      description:
        "A selection of tools and equipment for professionals and individuals involved in construction, renovation and maintenance.",
    },

    ceramic: {
      name: "Ceramics",
      description:
        "A range of accessories for construction and renovation, selected to meet the needs of professionals.",
    },
  },

  search: "Search for a product...",
  clear: "Clear search",
  all: "All",
  product: "product",
  products: "products",
  noResults: "No products found",
  noResultsDescription: "No product matches your search.",
  reset: "Reset search",
  readMore: "Read more",
  readLess: "Read less",
  requestQuote: "Request a quote",
},
  },
} as const;

export type TranslationKey = keyof (typeof translations)["fr"];

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "exporia-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  /* Récupère la langue enregistrée au premier rendu client */
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "fr") {
      setLangState(saved);
    }
  }, []);

  const setLang = (next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

 const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");

const t = (key: string) => {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value ?? key;
};

return (
  <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
    {children}
  </LanguageContext.Provider>
);
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage doit être utilisé à l'intérieur de <LanguageProvider>");
  }
  return ctx;
}