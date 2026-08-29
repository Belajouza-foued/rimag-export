import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata = {
  title: "Services | Exporia",
  description:
    "Découvrez les services d'Exporia : export, transport maritime, logistique, commerce B2B, sourcing et accompagnement à l'international.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />

      <ServicesPageContent />

      <Footer />
    </>
  );
}