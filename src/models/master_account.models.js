const mongoose = require("mongoose");

const master_accountSchema = new mongoose.Schema(
  {
    balance: { type: Number, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    branch_detail_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "branch_detail",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const MasterAccount = mongoose.model("master_account", master_accountSchema);
module.exports = MasterAccount;
// MasterAccount;
// balance (required) This is the total balance that the person has in the bank
// createdAt (required)
// updatedAt (required)