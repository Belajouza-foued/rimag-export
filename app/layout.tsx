import type { Metadata } from "next";
import { LanguageProvider } from "@/contexts/LanguageContext";
import StructuredData from "@/components/StructuredData";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rimag.tn"),

  title: {
    default: "RIMAG EXPORT | Exportateur de produits alimentaires tunisiens",
    template: "%s | RIMAG EXPORT",
  },

  description:
    "RIMAG EXPORT est une entreprise tunisienne spécialisée dans l'exportation de produits alimentaires, l'approvisionnement B2B et le commerce international.",

  keywords: [
    "RIMAG EXPORT",
  "export alimentaire Tunisie",
  "exportateur produits alimentaires Tunisie",
  "produits alimentaires tunisiens",
  "fournisseur alimentaire Tunisie",
  "export produits alimentaires",
  "commerce international Tunisie",
  "importateurs alimentaires",
  "grossistes alimentaires",
  "Tunisian food exporter",
  "Tunisian food products",
  "Tunisian food supplier",
  "B2B food supplier",
  ],

  authors: [
    {
      name: "RIMAG EXPORT",
    },
  ],

  creator: "RIMAG EXPORT",
  publisher: "RIMAG EXPORT",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "fr_TN",
    url: "https://rimag.tn",
    siteName: "RIMAG EXPORT",
    title: "RIMAG EXPORT | Exportateur de produits alimentaires tunisiens",
    description:
      "RIMAG EXPORT accompagne les importateurs, grossistes et distributeurs dans l'export de produits alimentaires depuis la Tunisie.",
  },

  twitter: {
    card: "summary_large_image",
    title: "RIMAG EXPORT | Exportateur de produits alimentaires tunisiens",
    description:
      "Produits alimentaires tunisiens, exportation et approvisionnement B2B.",
  },

  alternates: {
    canonical: "https://rimag.tn",
  },

  category: "International Trade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
      </head>

  <body>
  <StructuredData />

  <LanguageProvider>
    {children}
  </LanguageProvider>
  <WhatsAppButton/>
</body>
    </html>
  );
}