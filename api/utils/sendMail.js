import nodemailer from "nodemailer";

const sendMail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  let html;

  html = `
<div style="
  font-family: Arial, sans-serif; 
  background-color: #f3f4f6; 
  padding: 2rem; 
  text-align: center;
  color: #333;
">
  <div style="
    max-width: 600px; 
    margin: auto; 
    background-color: #ffffff; 
    border-radius: 1rem; 
    padding: 2.5rem; 
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  ">

    <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">Zentora</h1>
    <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem; color: #1f2937;">Activate Your Account</h2>

    <!-- Greeting -->
    <p style="font-size: 1rem; margin-bottom: 1rem;">
    Hello 
    <b>${options.name || "there"}</b>
    ,</p>

    <p style="font-size: 1rem; color: #4b5563; line-height: 1.6; margin-bottom: 2rem;">
      Thank you for registering on our marketplace! Click the button below to verify your email and activate your account.
    </p>

    <a href="${options.activationUrl}" 
    style="display: inline-block; background: linear-gradient(90deg, #f472b6, #3b82f6); color: #ffffff; padding: 0.75rem 2rem; border-radius: 0.5rem; text-decoration: none; font-weight: bold; font-size: 1.2rem;">
      Activate Account
    </a>

    <p style="margin-top: 2rem; font-size: 0.85rem; color: #9ca3af;">
      If you did not register, you can safely ignore this email.
    </p>
  </div>
</div>
`;

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.text || options.message,
    html,
  };

  await transporter.sendMail(mailOptions);
};

export default sendMail;
