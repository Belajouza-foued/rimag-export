export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://rimag.tn/#organization",
    name: "RIMAG EXPORT",
    url: "https://rimag.tn",
    description:
      "RIMAG EXPORT est une entreprise tunisienne spécialisée dans l'exportation de produits alimentaires, l'approvisionnement B2B et le commerce international.",
    email: "contact@rimag.tn",
    logo: {
      "@type": "ImageObject",
      url: "https://rimag.tn/images/logo-rig.png",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
      addressLocality: "Sousse",
      addressRegion: "Sousse",
    },
    areaServed: "Worldwide",
    knowsAbout: [
      "Exportation de produits alimentaires",
      "Commerce international",
      "Approvisionnement B2B",
      "Produits alimentaires tunisiens",
      "Export alimentaire",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://rimag.tn/#website",
    url: "https://rimag.tn",
    name: "RIMAG EXPORT",
    description:
      "Exportateur tunisien de produits alimentaires et fournisseur B2B.",
    publisher: {
      "@id": "https://rimag.tn/#organization",
    },
    inLanguage: ["fr", "en"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}