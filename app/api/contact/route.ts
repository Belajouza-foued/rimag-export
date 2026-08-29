import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

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
        {
          success: false,
          message: "Veuillez remplir les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

   const info = await transporter.sendMail({
  from: `"RIMAG - Site Web" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL,
  replyTo: email,

  subject:
    `RIMAG - ${subject || "Nouvelle demande"} - ${firstName} ${lastName}`,

  text: `
Nouvelle demande depuis le site RIMAG

Nom : ${firstName} ${lastName}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}
Sujet : ${subject || "Non renseigné"}

Message :
${message}
  `,
});

console.log("EMAIL ENVOYÉ :", info.messageId);
console.log("ACCEPTED :", info.accepted);
console.log("REJECTED :", info.rejected);

    return NextResponse.json({
      success: true,
      message: "Message envoyé avec succès.",
    });
  } catch (error) {
    console.error("Erreur API /api/contact :", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi du message.",
      },
      { status: 500 }
    );
  }
}