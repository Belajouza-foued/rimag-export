"use client";

export default function WhatsAppButton() {
  const phone = "21693244860";

  const message = encodeURIComponent(
    "Bonjour RIMAG EXPORT, je souhaite avoir plus d'informations sur vos produits."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contacter RIMAG EXPORT sur WhatsApp"
    >
      <i className="bi bi-whatsapp"></i>
          </a>
  );
}