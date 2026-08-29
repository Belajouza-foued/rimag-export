"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";

/* =====================================================
   CONFIGURATION EMAILJS
   -----------------------------------------------------
   Récupère ces 3 valeurs sur https://dashboard.emailjs.com
   (Email Services / Email Templates / Account > General)
   et mets-les dans un fichier .env.local à la racine :

   NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
===================================================== */

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.error(
        "EmailJS n'est pas configuré : vérifie ton fichier .env.local (NEXT_PUBLIC_EMAILJS_SERVICE_ID / TEMPLATE_ID / PUBLIC_KEY)."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus("success");
      formRef.current.reset();

      // Le message de succès disparaît après quelques secondes
      setTimeout(() => setStatus("idle"), 6000);
    } catch (error) {
      console.error("Erreur d'envoi EmailJS:", error);
      setStatus("error");
    }
  };

  return (
    <div className={styles.formCard}>
      <span className={styles.formLabel}>Formulaire de contact</span>
      <h2>Envoyez-nous un message</h2>
      <p>
        Remplissez le formulaire ci-dessous, notre équipe vous recontactera
        dans les plus brefs délais.
      </p>

      <form ref={formRef} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName">Prénom</label>
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
            <label htmlFor="lastName">Nom</label>
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

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
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
            <label htmlFor="phone">Téléphone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+216 XX XXX XXX"
              disabled={status === "sending"}
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Sujet</label>
          <select
            id="subject"
            name="subject"
            defaultValue=""
            disabled={status === "sending"}
          >
            <option value="" disabled>
              Choisissez un sujet
            </option>
            <option value="Demande de devis">Demande de devis</option>
            <option value="Question sur un produit">
              Question sur un produit
            </option>
            <option value="Devenir partenaire">Devenir partenaire</option>
            <option value="Autre">Autre</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Décrivez votre besoin..."
            required
            disabled={status === "sending"}
          ></textarea>
        </div>

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

        {/* MESSAGES DE STATUT */}
        {status === "success" && (
          <div className={`${styles.formStatus} ${styles.formStatusSuccess}`}>
            <i className="bi bi-check-circle-fill"></i>
            Votre message a bien été envoyé. Nous vous répondrons rapidement.
          </div>
        )}

        {status === "error" && (
          <div className={`${styles.formStatus} ${styles.formStatusError}`}>
            <i className="bi bi-exclamation-triangle-fill"></i>
            Une erreur est survenue lors de l&apos;envoi. Merci de réessayer
            ou de nous contacter directement par email.
          </div>
        )}
      </form>
    </div>
  );
}
