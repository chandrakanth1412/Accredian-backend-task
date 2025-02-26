require("dotenv").config(); // Load environment variables
const sendReferralEmail = require("./mailer");

const testEmail = async () => {
  await sendReferralEmail(
    "your-email@gmail.com", // Replace with your email
    "recipient@example.com", // Replace with a test recipient email
    "TEST123", // Sample referral code
    "Full Stack Development" // Sample course name
  );
};

testEmail();
