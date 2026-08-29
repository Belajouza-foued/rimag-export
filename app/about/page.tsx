import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";
import AboutContent from "./AboutContent";

export const metadata = {
  title: "À propos | Exporia",
  description:
    "Découvrez Exporia, votre partenaire pour l’export et le commerce international de produits alimentaires et de grande consommation.",
};

export default function AboutPage() {
  return (
    <>
      <Header />

      <AboutContent />

      <CTA />

      <Footer />
    </>
  );
}