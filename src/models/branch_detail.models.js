const mongoose = require("mongoose");

const branch_detailSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    IFSC: { type: String, required: true },
    MICR: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const BranchDetail = mongoose.model("branch_detail", branch_detailSchema);
module.exports = BranchDetail;
// BranchDetail

// name (required)
// address (required)
// IFSC (required and string)
// MICR (required and number )
// createdAt (required)
// updatedAt (required)
