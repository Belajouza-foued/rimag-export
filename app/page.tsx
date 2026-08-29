import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import ProductsCarousel from "@/components/ProductsCarousel";
import ExportSection from "@/components/ExportSection";
import Reviews from "@/components/Reviews";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <ProductsCarousel />
      <ExportSection />
      <Reviews />
      <CTA />
      <Footer />
    </>
  );
}
