"use client";

import { useRef, useState } from "react";
import styles from "./contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus("sending");

    const formData = new FormData(formRef.current);

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
        throw new Error(
          result.message || "Erreur lors de l'envoi"
        );
      }

      setStatus("success");

      formRef.current.reset();

      setTimeout(() => {
        setStatus("idle");
      }, 6000);
    } catch (error) {
      console.error(
        "Erreur formulaire contact :",
        error
      );

      setStatus("error");
    }
  };

  return (
    <div className={styles.formCard}>
      <span className={styles.formLabel}>
        Formulaire de contact
      </span>

      <h2>Envoyez-nous un message</h2>

      <p>
        Remplissez le formulaire ci-dessous, notre équipe
        vous recontactera dans les plus brefs délais.
      </p>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
      >
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

            <span>
              Votre message a bien été envoyé.
              Nous vous répondrons rapidement.
            </span>
          </div>
        )}

        {/* ERREUR */}
        {status === "error" && (
          <div
            className={`${styles.formStatus} ${styles.formStatusError}`}
          >
            <i className="bi bi-exclamation-triangle-fill"></i>

            <span>
              Une erreur est survenue lors de l&apos;envoi.
              Merci de réessayer ou de nous contacter
              directement par email.
            </span>
          </div>
        )}
      </form>
    </div>
  );
}
