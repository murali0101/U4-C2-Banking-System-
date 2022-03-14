const mongoose = require("mongoose");

const savings_accountSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    master_account_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "master_account",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const SavingsAccount = mongoose.model("savings_account", savings_accountSchema);
module.exports = SavingsAccount;

// SavingsAccount

// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// createdAt (required)
// updatedAt (required)
