const authRoutes = require("express").Router();
const { managerPermission, salesPermission } = require("../data/permission");
const User = require("../models/user.schema");
let profile = {
  firstName: "ADMIN",
  lastName: "name",
  role: "MANAGER",
  password: "Admin@12345",
  userName: "ADMIN",
};
let x = new User(profile);
x.save()
  .then((res) => {
    console.log(res);
  })
  .catch((e) => {});
authRoutes.post("/login", async (req, res, next) => {
  try {
    let body = req.body;
    let userName = body["userName"];
    let password = body["password"];
    if (!userName || !password) throw new Error("Required param missing");
    let data = await User.findOne({ userName, password });
    // console.log(data);
    if (!data) throw new Error("Auth failed");
    return res.jsonp({
      error: false,
      user: data,
      permission: data.role === "MANAGER" ? managerPermission : salesPermission,
    });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});
authRoutes.post("/register", async (req, res, next) => {
  try {
    let body = req.body;
    body["userName"] = "SALES_" + body["firstName"].toUpperCase();
    body["password"] = "Password@123";
    let x = new User(body);
    await x.save();
    return res.jsonp({
      error: false,
      user: x,
      permission: x?.role === "MANAGER" ? managerPermission : salesPermission,
    });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});
authRoutes.get("/", async (req, res, next) => {
  try {
    let records = await User.find({ role: { $ne: "MANAGER" } });
    return res.jsonp({ error: false, records });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});
authRoutes.put("/:id", async (req, res, next) => {
  try {
    let body = req.body;
    let id = req.params.id;
    let data = await User.findByIdAndUpdate(id, body, { new: true });
    return res.jsonp({ error: false, data });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});

authRoutes.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let data = await User.findByIdAndDelete(id);
    return res.jsonp({ error: false, data });
  } catch (e) {
    return res.status(400).jsonp({ error: true, message: e?.message });
  }
});

module.exports = authRoutes;
