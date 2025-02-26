const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("✅ Database Connected Successfully!");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    throw error;
  }
};

module.exports = { prisma, connectDB };
