const mongoose = require("mongoose");

const referralSchema = new mongoose.Schema({
  referrerName: { type: String, required: true },
  referrerEmail: { type: String, required: true },
  refereeName: { type: String, required: true },
  refereeEmail: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Referral", referralSchema);
