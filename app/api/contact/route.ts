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

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { message: "Champs obligatoires manquants." },
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

    // Vérification de la connexion SMTP
    await transporter.verify();

  const info = await transporter.sendMail({
  from: "contact@rimag.tn",
  to: "foued.belajouza@gmail.com",
  subject: "TEST RIMAG - Formulaire",
  text: "Ceci est un test envoyé depuis le formulaire RIMAG.",
});

console.log("EMAIL ENVOYÉ :", info.messageId);
console.log("RESPONSE SMTP :", info.response);

    console.log("EMAIL ENVOYÉ :", info.messageId);

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