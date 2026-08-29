"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Erreur d'envoi");
      }

      setStatus("success");
      form.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 6000);
    } catch (error) {
      console.error("Erreur formulaire contact :", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>
              <i className="bi bi-envelope"></i>
              Parlons de votre projet
            </span>

            <h1>
              Contactez <span>Exporia</span>
            </h1>

            <p>
              Une question, un besoin d&apos;approvisionnement ou un projet
              d&apos;export ? Notre équipe vous répond rapidement.
            </p>

            <div className={styles.breadcrumb}>
              <Link href="/">Accueil</Link>
              <span>/</span>
              <span>Contact</span>
            </div>
          </div>
        </div>
      </section>

      {/* INFO CARDS */}
      <section className={styles.infoStrip}>
        <div className="container">
          <div className={styles.infoGrid}>

            <div className={styles.infoCard}>
              <div className={styles.infoCard__icon}>
                <i className="bi bi-geo-alt-fill"></i>
              </div>

              <div>
                <h3>Adresse</h3>
                <p>Tunisie</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCard__icon}>
                <i className="bi bi-telephone-fill"></i>
              </div>

              <div>
                <h3>Téléphone</h3>
                <p>+216 XX XXX XXX</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoCard__icon}>
                <i className="bi bi-envelope-fill"></i>
              </div>

              <div>
                <h3>Email</h3>
                <p>contact@rimag.tn</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IMAGE + FORMULAIRE */}
      <section className={styles.mainSection}>
        <div className="container">
          <div className={styles.grid}>

            {/* IMAGE */}
            <div className={styles.imageWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/contact-2.avif"
                alt="Contact Exporia"
              />

              <div className={styles.imageOverlay}></div>

              <div className={styles.imageBadge}>
                <span>
                  <i className="bi bi-headset"></i>
                  Disponible 24/7
                </span>

                <h3>Une équipe à votre écoute</h3>

                <p>
                  Nous répondons à vos demandes d&apos;export et de
                  partenariat sous 24h ouvrées.
                </p>
              </div>
            </div>

            {/* FORMULAIRE */}
            <div className={styles.formCard}>

              <span className={styles.formLabel}>
                Formulaire de contact
              </span>

              <h2>Envoyez-nous un message</h2>

              <p>
                Remplissez le formulaire ci-dessous, notre équipe vous
                recontactera dans les plus brefs délais.
              </p>

              <form onSubmit={handleSubmit}>

                {/* PRÉNOM + NOM */}
                <div className={styles.formRow}>

                  <div className={styles.formGroup}>
                    <label htmlFor="firstName">
                      Prénom
                    </label>

                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Votre prénom"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="lastName">
                      Nom
                    </label>

                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder="Votre nom"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                </div>

                {/* EMAIL + TÉLÉPHONE */}
                <div className={styles.formRow}>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      Email
                    </label>

                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="vous@exemple.com"
                      required
                      disabled={status === "sending"}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      Téléphone
                    </label>

                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+216 XX XXX XXX"
                      disabled={status === "sending"}
                    />
                  </div>

                </div>

                {/* SUJET */}
                <div className={styles.formGroup}>

                  <label htmlFor="subject">
                    Sujet
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    defaultValue=""
                    disabled={status === "sending"}
                  >
                    <option value="" disabled>
                      Choisissez un sujet
                    </option>

                    <option value="Demande de devis">
                      Demande de devis
                    </option>

                    <option value="Question sur un produit">
                      Question sur un produit
                    </option>

                    <option value="Devenir partenaire">
                      Devenir partenaire
                    </option>

                    <option value="Autre">
                      Autre
                    </option>
                  </select>

                </div>

                {/* MESSAGE */}
                <div className={styles.formGroup}>

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Décrivez votre besoin..."
                    required
                    disabled={status === "sending"}
                  ></textarea>

                </div>

                {/* BOUTON */}
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      Envoi en cours...
                      <i className="bi bi-arrow-repeat"></i>
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <i className="bi bi-arrow-right"></i>
                    </>
                  )}
                </button>

                {/* SUCCÈS */}
                {status === "success" && (
                  <div
                    className={`${styles.formStatus} ${styles.formStatusSuccess}`}
                  >
                    <i className="bi bi-check-circle-fill"></i>

                    Votre message a bien été envoyé.
                    Nous vous répondrons rapidement.
                  </div>
                )}

                {/* ERREUR */}
                {status === "error" && (
                  <div
                    className={`${styles.formStatus} ${styles.formStatusError}`}
                  >
                    <i className="bi bi-exclamation-triangle-fill"></i>

                    Une erreur est survenue lors de l&apos;envoi.
                    Merci de réessayer ou de nous contacter
                    directement par email.
                  </div>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}