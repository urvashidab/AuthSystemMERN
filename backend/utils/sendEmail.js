import transporter from "../config/mailer.js";

const sendEmail = async ({ to, subject, message, html }) => {
  try {
    await transporter.sendMail({
      from: `"Authentication Project" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      text: message,
      html: html || `<p>${message}</p>`,
    });
  } catch (error) {
    console.error("Email sending failed:", error.message);
    throw new Error("Email service failed");
  }
};

export default sendEmail;
