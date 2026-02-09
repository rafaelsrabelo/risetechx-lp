import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Dados obrigatórios ausentes." },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    SMTP_FROM,
    SMTP_TO,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !SMTP_TO) {
    return NextResponse.json(
      { error: "Configuração de e-mail ausente no servidor." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: SMTP_FROM,
    to: SMTP_TO,
    subject: "Novo contato pelo site",
    replyTo: email,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Telefone: ${phone || "-"}`,
      "",
      message,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
