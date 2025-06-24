import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendNotificationEmail = async ({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) => {
  try {
    await resend.emails.send({
      from: "noreply@yourdomain.com",
      to,
      subject,
      text,
    });
  } catch (err) {
    console.error("❌ Email илгээхэд алдаа гарлаа:", err);
  }
};
