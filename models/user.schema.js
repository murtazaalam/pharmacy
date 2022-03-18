const mongoose = require("mongoose");
const User =new  mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    role: { type: String, enum: ["MANAGER", "SALES"], default: "SALES" },
    dob: { type: Date, default: null },
    experience: { type: Number, default: 0 },
    password: { type: String, required: true },
    userName: { type: String, unique: true, required: true },
  },
  { timeStamps: true, collection: "users" }
);

module.exports = mongoose.model("users", User);
