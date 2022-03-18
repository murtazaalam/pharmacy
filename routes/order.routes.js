const orderRoutes = require("express").Router();
const Orders = require("../models/order.schema");
orderRoutes.post("/", async (req, res, next) => {
  try {
    let body = req.body;
    let x = new Orders(body);
    let data = await x.save();
    return res.json({ error: false, order: data });
  } catch (e) {
    // throw new Error(e);
    return res.status(400).jsonp({ error: true, message: e.message });
  }
});
orderRoutes.get("/", async (req, res, next) => {
  try {
    let records = await Orders.find().sort({ createdAt: -1 });
    return res.json({ error: false, order: records });

  } catch (e) {
    // throw new Error(e);
    return res.status(400).jsonp({ error: true, message: e.message });
  }
});
module.exports = orderRoutes;
