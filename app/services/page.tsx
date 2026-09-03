import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesPageContent from "./ServicesPageContent";

export const metadata = {
  title: "Services | RIMAG EXPORT",
  description:
    "Découvrez les services de RIMAG EXPORT : export, transport maritime, logistique, commerce B2B, sourcing et accompagnement à l'international.",
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