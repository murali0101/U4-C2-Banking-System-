const mongoose = require("mongoose");

const fixed_accountSchema = new mongoose.Schema(
  {
    account_number: { type: Number, required: true, unique: true },
    balance: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    startDate: { type: String, required: true },
    maturityDate: { type: String, required: true },
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

const FixedAccount = mongoose.model("fixed_account", fixed_accountSchema);
module.exports =  FixedAccount;

// FixedAccount

// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// startDate ( required )
// maturityDate (required )
// createdAt (required)
// updatedAt (required)