const medicineRoutes = require("express").Router();
const Medicine = require("../models/medicine.schema");
medicineRoutes.post("/", async (req, res, next) => {
  try {
    let body = req.body;
    let x = new Medicine(body);
    let data = await x.save();
    return res.jsonp({ error: false, data });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});
medicineRoutes.get("/", async (req, res, next) => {
  try {
    let records = await Medicine.find().sort({ name: 1 });
    return res.jsonp({ error: false, records });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});
medicineRoutes.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await Medicine.findByIdAndDelete(id);
  return res.json({ error: false, message: "OK", data });
});
module.exports = medicineRoutes;
