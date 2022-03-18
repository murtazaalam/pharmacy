const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema(
  {
    customerName: { type: String, required: true },
    customerMobile: { type: String, required: true },
    medicines: { type: Array, default: [] },
    createdBy: { type: mongoose.Types.ObjectId, default: null, ref: "users" },
  },
  { timestamps: true, collection: "orders" }
);

module.exports = mongoose.model("orders", orderSchema);
