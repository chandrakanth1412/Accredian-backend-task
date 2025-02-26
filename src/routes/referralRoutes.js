const express = require("express");
const { prisma } = require("../config/db");
const sendReferralEmail = require("../utils/mailer"); // Import mailer function

const router = express.Router();

// POST: Submit a referral
router.post("/", async (req, res) => {
  try {
    console.log("📥 Incoming Referral Data:", req.body);

    const { referrerName, referrerEmail, refereeName, refereeEmail, referralCode, courseName } = req.body;

    // Validation: Ensure all fields are provided
    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !referralCode || !courseName) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if referral already exists (avoid duplicates)
    

    // Insert into Database
    const referral = await prisma.referral.create({
      data: { referrerName, referrerEmail, refereeName, refereeEmail, referralCode, courseName },
    });

    // Send referral email only if referral is successfully saved
    await sendReferralEmail(referrerEmail, refereeEmail, referralCode, courseName);

    res.status(201).json({ message: "✅ Referral saved successfully!", referral });
  } catch (error) {
    console.error("❌ Error saving referral:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

// GET: Retrieve all referrals
router.get("/", async (req, res) => {
  try {
    const referrals = await prisma.referral.findMany();
    
    if (referrals.length === 0) {
      return res.status(404).json({ message: "No referrals found." });
    }

    res.json(referrals);
  } catch (error) {
    console.error("❌ Error fetching referrals:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

module.exports = router;
