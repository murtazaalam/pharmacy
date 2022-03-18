const mongoose = require("mongoose");
const MedicineSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    manufacture: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    discount: { type: Number, required: true },
  },
  { timestamps: true, collection: "medicine" }
);

module.exports = mongoose.model("medicine",MedicineSchema)