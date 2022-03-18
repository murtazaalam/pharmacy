const authRoutes = require("./auth.routes");
const medicineRoutes = require("./medicine.routes");
const orderRoutes = require("./order.routes");

const router = require("express").Router();
router.use("/auth", authRoutes);
router.use("/medicine", medicineRoutes);
router.use("/orders",orderRoutes)
module.exports = router;
