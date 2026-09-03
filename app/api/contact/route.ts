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
console.log("SMTP_FROM =", process.env.SMTP_FROM);
console.log("SMTP_TO =", process.env.SMTP_TO);
console.log("SMTP_USER =", process.env.SMTP_USER);
  const info = await transporter.sendMail({
  from: `"RIMAG EXPORT" <${process.env.SMTP_FROM}>`,
  to: process.env.SMTP_TO,
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