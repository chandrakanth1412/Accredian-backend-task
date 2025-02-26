const nodemailer = require("nodemailer");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const sendReferralEmail = async (referrerEmail, refereeEmail, referralCode, courseName) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: refereeEmail,
      subject: "🎉 You've been referred to join our course!",
      html: `
        <h2>Hey ${refereeEmail}!</h2>
        <p>Your friend <strong>${referrerEmail}</strong> has referred you to the <strong>${courseName}</strong> course.</p>
        <p>Use this referral code: <strong>${referralCode}</strong> to get a special discount!</p>
        <p>Don't miss out on this opportunity!</p>
        <br/>
        <p>Best Regards,</p>
        <p>Team Accredian</p>
      `,
    };

    // Send Email
    await transporter.sendMail(mailOptions);
    console.log("✅ Referral email sent successfully!");

    // Log email details in the database
    await prisma.emailLog.create({
      data: {
        toEmail: refereeEmail,
        subject: mailOptions.subject,
        content: mailOptions.html,
      },
    });

    console.log("📩 Email log saved to database!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = sendReferralEmail;
