const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  gender: { type: String, default: "Female" },
  type: { type: String, default: "customer" },
},
{
    versionKey:false,
    timestamps:true
}
);

const User = mongoose.model("user",userSchema)
module.exports = User;
// User

// firstName (required)
// middleName (optional)
// lastName (required)
// age (required)
// email (required )
// address ( required )
// gender ( optional and should default to Female )
// type (optional and it can take value of customer or employee and if not provided then default to customer )
// createdAt (required)
// updatedAt (required)