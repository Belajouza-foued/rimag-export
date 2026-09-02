import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    } = body;

    // Vérification des champs obligatoires
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Champs obligatoires manquants.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Vérification SMTP
    await transporter.verify();

    const info = await transporter.sendMail({
      from: `"RIMAG EXPORT" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,

      subject: subject
        ? `RIMAG EXPORT - ${subject}`
        : "Nouveau message - RIMAG EXPORT",

      text: `
NOUVEAU MESSAGE DEPUIS LE SITE RIMAG EXPORT

Prénom : ${firstName}
Nom : ${lastName}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Sujet : ${subject || "Non renseigné"}

Message :
${message}
      `,

      html: `
        <h2>Nouveau message depuis le site RIMAG EXPORT</h2>

        <p><strong>Prénom :</strong> ${firstName}</p>
        <p><strong>Nom :</strong> ${lastName}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${
          phone || "Non renseigné"
        }</p>
        <p><strong>Sujet :</strong> ${
          subject || "Non renseigné"
        }</p>

        <hr />

        <h3>Message</h3>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    console.log("EMAIL ENVOYÉ :", info.messageId);
    console.log("RESPONSE SMTP :", info.response);

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error("ERREUR SMTP :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Impossible d'envoyer le message.",
      },
      { status: 500 }
    );
  }
}