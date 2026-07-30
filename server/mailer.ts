import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export async function sendNewRequestNotification(data: {
  name: string;
  contact: string;
  message?: string | null;
  service?: string | null;
}) {
  const subject = `Новая заявка с сайта Финчек${data.service ? ` — ${data.service}` : ""}`;

  const text = [
    `Имя: ${data.name}`,
    `Контакт: ${data.contact}`,
    data.service ? `Услуга: ${data.service}` : null,
    data.message ? `\nСообщение:\n${data.message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    from: `"Финчек — сайт" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject,
    text,
  });
}
