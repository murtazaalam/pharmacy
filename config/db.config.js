const mongoose = require("mongoose");
let url = `mongodb+srv://shahrukh:farzan0786@cluster0.olplg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const dbConnection = (resolve) => {
  mongoose.connect(url, (err) => {
    if (err) return resolve(0);
    return resolve(null);
  });
};
module.exports = dbConnection;
