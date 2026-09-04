import Link from "next/link";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div>
            <span className="section-label">Travaillons ensemble</span>

            <h2>Vous recherchez un partenaire pour vos approvisionnements ?</h2>

            <p>
              Contactez RIMAG EXPORT pour discuter de vos besoins et obtenir une
              offre adaptée.
            </p>
          </div>

          <Link href="/contact" className="btn-white-custom">
            Demander un devis
            <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
