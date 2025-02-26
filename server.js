require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { prisma } = require("./src/config/db"); // Import Prisma
const referralRoutes = require("./src/routes/referralRoutes"); // Import referral routes

const app = express();

// ✅ Middleware
app.use(cors({
  origin: "http://localhost:3000", // Allow frontend access
  credentials: true
}));
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// ✅ Debugging: Log server startup
console.log("📌 Server starting...");

// ✅ Test database connection before starting the server
(async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err);
    process.exit(1); // Exit process if DB fails
  }
})();

// ✅ Routes
app.use("/api/referrals", referralRoutes);

// ✅ Debugging: Log route registration
console.log("🚀 Routes registered: /api/referrals");

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
