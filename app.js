const express = require("express");
const dbConnection = require("./config/db.config");
const router = require("./routes");
const app = express();
const cors = require("cors");
const PORT = 8080;

app.use(cors());

dbConnection((response) => {
  if (response) process.exit(1);
  console.log("Db connection success");
});
app.use(express.json());
app.use("/v1", router);
app.get("/", (req, res, next) => {
  return res.jsonp({ error: 0, message: OK });
});
app.listen(PORT, () => {
  console.log(`server is up at ${PORT}`);
});
